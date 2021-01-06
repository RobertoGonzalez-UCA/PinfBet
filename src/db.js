import firebase from "firebase/app";
import "firebase/firestore";

//FUNCION MOSTRAR USUARIOS (muestra todos) (opcion filtrar por asignatura / año?)
export function getUsers() {
  firebase
    .firestore()
    .collection("users")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, doc.data());
      });
    });
}

export function getDegrees() {
  firebase
    .firestore()
    .collection("degrees")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, doc.data());
      });
    });
}

//FUNCION SOLICITAR AMISTAD
export async function solicitarAmistad() {
  var uidEmisor = firebase.auth()
    .currentUser.uid;
  var uidReceptor = document.getElementById(
    "uidReceptor"
  ).value;

  if (uidReceptor === "") {
    console.log("Inserte un UID");
    return;
  }

  await firebase
    .firestore()
    .collection("friendships")
    .add({
      status: "PENDING",
      uid_a: uidEmisor,
      uid_b: uidReceptor
    });

  firebase
    .firestore()
    .collection("friendships")
    .where("uid_a", "==", uidEmisor)
    .where("uid_b", "==", uidReceptor)
    .where("status", "==", "ACCEPTED")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (
        doc
      ) {
        console.log(
          "Ya tienes amistad con este amigo"
        );
        yaHayAmistad(
          uidEmisor,
          uidReceptor
        );
      });
    });

  firebase
    .firestore()
    .collection("friendships")
    .where("uid_b", "==", uidEmisor)
    .where("uid_a", "==", uidReceptor)
    .where("status", "==", "ACCEPTED")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (
        doc
      ) {
        console.log(
          "Ya tienes amistad con este amigo"
        );
        yaHayAmistad(
          uidEmisor,
          uidReceptor
        );
      });
    });

  firebase
    .firestore()
    .collection("friendships")
    .where("uid_a", "==", uidEmisor)
    .where("uid_b", "==", uidReceptor)
    .where("status", "==", "DENIED")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (
        doc
      ) {
        console.log(
          "Esta persona denegó tu amistad"
        );
        yaHayAmistad(
          uidEmisor,
          uidReceptor
        );
      });
    });

  firebase
    .firestore()
    .collection("friendships")
    .where("uid_b", "==", uidEmisor)
    .where("uid_a", "==", uidReceptor)
    .where("status", "==", "DENIED")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (
        doc
      ) {
        console.log(
          "Esta persona denegó tu amistad"
        );
        yaHayAmistad(
          uidEmisor,
          uidReceptor
        );
      });
    });
}

function yaHayAmistad(
  uidEmisor,
  uidReceptor
) {
  firebase
    .firestore()
    .collection("friendships")
    .where("uid_b", "==", uidEmisor)
    .where("uid_a", "==", uidReceptor)
    .where("status", "==", "PENDING")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (
        doc
      ) {
        firebase
          .firestore()
          .collection("friendships")
          .doc(doc.id)
          .delete()
          .then(function () {
            console.log(
              "Pending friendship successfully deleted!"
            );
          })
          .catch(function (error) {
            console.error(
              "Error removing document: ",
              error
            );
          });
      });
    });

  firebase
    .firestore()
    .collection("friendships")
    .where("uid_a", "==", uidEmisor)
    .where("uid_b", "==", uidReceptor)
    .where("status", "==", "PENDING")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (
        doc
      ) {
        firebase
          .firestore()
          .collection("friendships")
          .doc(doc.id)
          .delete()
          .then(function () {
            console.log(
              "Pending friendship successfully deleted!"
            );
          })
          .catch(function (error) {
            console.error(
              "Error removing document: ",
              error
            );
          });
      });
    });
}

//FUNCION MOSTRAR AMISTADES
export function mostrarAmistad() {
  var uidReceptor = firebase.auth()
    .currentUser.uid;

  firebase
    .firestore()
    .collection("friendships")
    .where("uid_b", "==", uidReceptor)
    .where("status", "==", "ACCEPTED")
    .get()
    .then((querySnapshot) => {
      console.log(querySnapshot.docs);
      querySnapshot.forEach((doc) => {
        console.log(
          doc.id,
          " => ",
          doc.data()
        );
        console.log(
          "Tienes amistad con" +
            doc.data().uid_a
        );
      });
    });

  firebase
    .firestore()
    .collection("friendships")
    .where("uid_a", "==", uidReceptor)
    .where("status", "==", "ACCEPTED")
    .get()
    .then((querySnapshot) => {
      console.log(querySnapshot.docs);
      querySnapshot.forEach((doc) => {
        console.log(
          doc.id,
          " => ",
          doc.data()
        );
        console.log(
          "Tienes amistad con" +
            doc.data().uid_b
        );
      });
    });
}

//FUNCION MOSTRAR SOLICITUDES DE AMISTAD
export function mostrarSolicitud() {
  var uidReceptor = firebase.auth()
    .currentUser.uid;

  firebase
    .firestore()
    .collection("friendships")
    .where("uid_b", "==", uidReceptor)
    .where("status", "==", "PENDING")
    .get()
    .then((querySnapshot) => {
      console.log(querySnapshot.docs);
      querySnapshot.forEach((doc) => {
        console.log(
          doc.id,
          " => ",
          doc.data()
        );
        console.log(
          "El solicitante es " +
            doc.data().uid_a
        );
      });
    });
}

//FUNCION ACEPTAR SOLICITUD (MEDIANTE ID DE LA SOLICITUD)
export function aceptarSolicitud() {
  var uidReceptor = firebase.auth()
    .currentUser.uid;
  var uidSolicitante = document.getElementById(
    "solicitanteId"
  ).value;

  firebase
    .firestore()
    .collection("friendships")
    .where(
      "uid_a",
      "==",
      uidSolicitante
    )
    .where("status", "==", "PENDING")
    .where("uid_b", "==", uidReceptor)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach((doc) => {
        firebase
          .firestore()
          .collection("friendships")
          .doc(doc.id)
          .update({
            status: "ACCEPTED"
          });
        console.log(
          doc.id,
          " => ",
          doc.data()
        );
      });
    });
}

//FUNCION RECHAZAR SOLICITUD (MEDIANTE ID DE LA SOLICITUD)
export function rechazarSolicitud() {
  var uidReceptor = firebase.auth()
    .currentUser.uid;
  var uidSolicitante = document.getElementById(
    "solicitanteId"
  ).value;

  firebase
    .firestore()
    .collection("friendships")
    .where(
      "uid_a",
      "==",
      uidSolicitante
    )
    .where("status", "==", "PENDING")
    .where("uid_b", "==", uidReceptor)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach((doc) => {
        firebase
          .firestore()
          .collection("friendships")
          .doc(doc.id)
          .update({
            status: "REFUSED"
          });
        console.log(
          doc.id,
          " => ",
          doc.data()
        );
      });
    });
}

//FUNCION MOSTRAR ASIGNATURAS (TODAS) (NO USADA ACTUALMENTE)
export function mostrarAsignaturas() {
  firebase
    .firestore()
    .collection("subjects")
    .doc()
    .where("degreeId", "==")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (
        doc
      ) {
        console.log(
          doc.id,
          " => ",
          doc.data()
        );
      });
    })
    .catch(function (error) {
      console.log(
        "Error getting documents: ",
        error
      );
    });
}

//FUNCION MOSTRAR ASIGNATURAS POR AÑO
export function mostrarAsignaturasYear() {
  var string = document.getElementById(
    "year"
  ).value; //Obtenemos un string que posteriormente convertimos en int
  var year = parseInt(string, 10); //No tocar el 10, es necesario para base decimal

  firebase
    .firestore()
    .collection("subjects")
    .where("year", "==", year)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (
        doc
      ) {
        console.log(
          doc.id,
          " => ",
          doc.data()
        );
      });
    })
    .catch(function (error) {
      console.log(
        "Error getting documents: ",
        error
      );
    });
}

//INICIO DE UNA APUESTA
export function iniciarCrearApuesta(
  cantidadDinero,
  cantidadDineroNota,
  uidApostado,
  valorBet,
  betNotaCheck,
  notaApostada,
  idAsignatura
) {
  var uidApostante = firebase.auth()
    .currentUser.uid;

  cantidadDinero = parseInt(
    cantidadDinero,
    10
  );
  cantidadDineroNota = parseInt(
    cantidadDineroNota,
    10
  );

  if (isNaN(cantidadDineroNota)) {
    cantidadDineroNota = 0;
  }

  var dineroApuesta =
    cantidadDinero + cantidadDineroNota;

  firebase
    .firestore()
    .collection("users")
    .where("uid", "==", uidApostante)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (
          doc.data().coins >
          dineroApuesta
        ) {
          firebase
            .firestore()
            .collection("users")
            .doc(doc.id)
            .update({
              coins: firebase.firestore.FieldValue.increment(
                -dineroApuesta
              )
            });

          crearApuestaSonAmigos(
            uidApostante,
            idAsignatura,
            cantidadDinero,
            uidApostado,
            betNotaCheck,
            valorBet,
            cantidadDineroNota,
            notaApostada
          );
        } else {
          alert(
            "Error. No se dispone del suficiente dinero"
          );
        }
      });
    })
    .catch(function (error) {
      console.log(
        "Error getting /users/ documents: ",
        error
      );
    });
}

//Siguiente paso de crear apuesta
export function crearApuestaSonAmigos(
  uidApostante,
  idAsignatura,
  cantidadDinero,
  uidApostado,
  betNotaCheck,
  valorBet,
  cantidadDineroNota,
  notaApostada
) {
  var solicitudes = firebase
    .firestore()
    .collection("friendships");

  var query = solicitudes
    .where("uid_a", "==", uidApostante)
    .where("uid_b", "==", uidApostado);

  var reverseQuery = solicitudes
    .where("uid_a", "==", uidApostado)
    .where("uid_b", "==", uidApostante);

  query
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (
          doc.data().status ===
          "ACCEPTED"
        ) {
          escribirApuesta(
            uidApostante,
            idAsignatura,
            cantidadDinero,
            uidApostado,
            betNotaCheck,
            valorBet,
            cantidadDineroNota,
            notaApostada
          );
        } else {
          alert("No sois amigos.");
        }
      });
    })
    .catch(function (error) {
      console.log(
        "Error getting documents: ",
        error
      );
    });

  reverseQuery
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (
          doc.data().status ===
          "ACCEPTED"
        ) {
          console.log("amigos es true");
          escribirApuesta(
            uidApostante,
            idAsignatura,
            cantidadDinero,
            uidApostado,
            betNotaCheck,
            valorBet,
            cantidadDineroNota,
            notaApostada
          );
        } else {
          alert("No sois amigos.");
        }
      });
    })
    .catch(function (error) {
      console.log(
        "Error getting documents: ",
        error
      );
    });
}

//Siguiente paso de crear apuesta
function escribirApuesta(
  uidApostante,
  idAsignatura,
  cantidadDinero,
  uidApostado,
  betNotaCheck,
  valorBet,
  cantidadDineroNota,
  notaApostada
) {
  firebase
    .firestore()
    .collection("betContexts")
    .add({
      uid: uidApostante,
      subjects: {
        code: idAsignatura,
        degreeId: "02104342" //Provisionalmente
      }
    })
    .then(function (docRef) {
      console.log(
        "BetContext written with ID: ",
        docRef.id
      );

      firebase
        .firestore()
        .collection("bets")
        .add({
          amount: cantidadDinero,
          betContextId: docRef.id,
          type: "APRUEBA_SUSPENDE",
          uid: uidApostado,
          value: valorBet
        })
        .then(function (docRef) {
          console.log(
            "Bet Normal written with ID: ",
            docRef.id
          );
        })
        .catch(function (error) {
          console.error(
            "Error adding document: ",
            error
          );
        });

      if (betNotaCheck === true) {
        escribirApuestaNota(
          uidApostado,
          cantidadDineroNota,
          notaApostada,
          docRef.id
        );
      }
    })
    .catch(function (error) {
      // console.error("Error adding document: ", error);
    });

  // console.log(idBetContext + " Hello");
}

//Siguiente paso de crear apuesta si tambien hace apuesta de nota
function escribirApuestaNota(
  uidApostado,
  cantidadDineroNota,
  notaApostada,
  docRef
) {
  firebase
    .firestore()
    .collection("bets")
    .add({
      amount: cantidadDineroNota,
      betContextId: docRef,
      type: "NOTA",
      uid: uidApostado,
      value: notaApostada
    })
    .then(function (docRef) {
      console.log(
        "Bet Nota written with ID: ",
        docRef.id
      );
    })
    .catch(function (error) {
      console.error(
        "Error adding document: ",
        error
      );
    });
}

//Un usuario cursa una asignatura 
export function cursarAsignatura() {
  var degreeId = document.getElementById(
    "degreeId"
  ).value;
  var subjectId = document.getElementById(
    "subjectId"
  ).value;

  var user = firebase.auth()
    .currentUser;

  firebase
    .firestore()
    .collection("users")
    .where("uid", "==", user.uid) //Buscar documentacion update data
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (
        doc
      ) {
        console.log("Entré");
        completarCursar(
          degreeId,
          subjectId,
          user.uid,
          doc.data().nickname
        );
      });
    });
}

//Siguiente paso de cursar asignatura
function completarCursar(
  degreeId,
  subjectId,
  user,
  nickname
) {
  console.log("Soy " + nickname);

  firebase
    .firestore()
    .collection("userSubjects")
    .add({
      degreeId: degreeId,
      grade: -1, //Nota por defecto cuando se crea
      subjectId: subjectId,
      uid: user,
      nickname: nickname
    })
    .then(function (docRef) {
      console.log(
        "Document written with ID: ",
        docRef.id
      );
    })
    .catch(function (error) {
      console.error(
        "Error adding document: ",
        error
      );
    });
}

export async function actualizarNota() {
  var subjectId = document.getElementById(
    "subjectId"
  ).value;
  var nota = document.getElementById(
    "nota"
  ).value;
  var user = firebase.auth()
    .currentUser;

  if ((nota < 0) || (nota > 10)) { return }

  firebase //Esta parte se encarga de actualizar la nota
    .firestore()
    .collection("userSubjects")
    .where("uid", "==", user.uid) //Buscar documentacion update data
    .where("subjectId", "==", subjectId)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (
        doc
      ) {
        firebase
          .firestore()
          .collection("userSubjects")
          .doc(doc.id)
          .update({ grade: nota }); //cambiar a nota introducida por el ususario
      });
    });

  //Esta parte se encarga de encontrar los bets donde aparcece la persona original, y llama a al funcion de buscar betContext relacionados
  await firebase
    .firestore()
    .collection("bets")
    .where("uid", "==", user.uid) //Buscar documentacion update data
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (
        doc
      ) {
        console.log(
          doc.id,
          " => ",
          doc.data()
        );
        fetchBetcontext(doc, nota); //Vamos a buscar los betContext relacionados con este bet

        firebase
          .firestore()
          .collection("bets")
          .doc(doc.id) //Buscar documentacion update data
          .delete()
          .then(function () {
            console.log(
              "Bet successfully deleted!"
            );
          })
          .catch(function (error) {
            console.error(
              "Error removing document: ",
              error
            );
          });
      });
    })
    .catch(function (error) {
      console.log(
        "Error getting document:",
        error
      );
    });

  firebase //Esto se puede optimizar
    .firestore()
    .collection("bets")
    .where("uid", "==", user.uid) //Buscar documentacion update data
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (
        doc
      ) {
        console.log(
          doc.id,
          " => ",
          doc.data()
        );
        firebase
          .firestore()
          .collection("bets")
          .doc(doc.id) //Buscar documentacion update data
          .delete()
          .then(function () {
            console.log(
              "Bet successfully deleted!"
            );
          })
          .catch(function (error) {
            console.error(
              "Error removing document: ",
              error
            );
          });
      });
    })
    .catch(function (error) {
      console.log(
        "Error getting document:",
        error
      );
    });
}

async function fetchBetcontext(
  bet,
  nota
) {
  await firebase
    .firestore()
    .collection("betContexts")
    .doc(bet.get("betContextId"))
    .get()
    .then(function (doc) {
      actualizarBets(bet, nota, doc); //Una vez encontrados los betCOntexts, llamamos a otra funcion para actualizar todo
    })
    .catch(function (error) {
      console.log(
        "Error getting document:",
        error
      );
    });

  firebase
    .firestore()
    .collection("betContexts")
    .doc(bet.get("betContextId"))
    .delete()
    .then(function () {
      console.log(
        "BetContext successfully deleted!"
      );
    })
    .catch(function (error) {
      console.error(
        "Error removing document: ",
        error
      );
    });
}

function actualizarBets(
  bet,
  nota,
  betContext
) {
  var uid = betContext.get("uid");
  var aumento;
  aumento = 0; //sacamos el dinero que ha apostado

  if (
    nota > 5 &&
    bet.get("value") === true
  ) {
    aumento = bet.get("amount") * 1.5;
  }

  if (
    nota < 5 &&
    bet.get("value") === false
  ) {
    aumento = bet.get("amount") * 1.5;
  }

  if (
    bet.get("type") === "NOTA" &&
    nota === bet.get("value")
  ) {
    aumento = bet.get("amount") * 3;
  }

  console.log(
    "El aumento es" + aumento
  );

  firebase
    .firestore()
    .collection("users")
    .where("uid", "==", uid)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (
        doc
      ) {
        if (aumento > 0) {
          firebase
            .firestore()
            .collection("users")
            .doc(doc.id)
            .update({
              coins: firebase.firestore.FieldValue.increment(
                aumento
              ),
              coinsEarned: firebase.firestore.FieldValue.increment(
                aumento
              ),
              hits: firebase.firestore.FieldValue.increment(
                1
              ),
              hitStreak: firebase.firestore.FieldValue.increment(
                1
              )
            });
        } else {
          firebase
            .firestore()
            .collection("users")
            .doc(doc.id)
            .update({
              fails: firebase.firestore.FieldValue.increment(
                1
              ),
              hitStreak: 0
            });
        }
        console.log(
          "Fin de actualizar bets"
        );
        // console.log(doc.id, " => ", doc.data());
      });
    });

  console.log("Fin de actualizar Nota");
}

export function createSubject() {
  var acronym = document.getElementById(
    "acronym"
  ).value;
  var code = document.getElementById(
    "code"
  ).value;
  var degreeId = document.getElementById(
    "degreeId"
  ).value;
  var name = document.getElementById(
    "name"
  ).value;
  var year = document.getElementById(
    "year"
  ).value;

  firebase
    .firestore()
    .collection("subjects")
    .add({
      acronym: acronym,
      code: code,
      degreeId: degreeId.toString(),
      name: name,
      year: year
    })
    .then(function (docRef) {
      console.log(
        "Document written with ID: ",
        docRef.id
      );
    })
    .catch(function (error) {
      console.error(
        "Error adding document: ",
        error
      );
    });
}

//No borrar de momento
/** export function leerArchivo1() {
  
 

  document
    .getElementById("expediente")
    .addEventListener("change",(event) => {
       

        var file = document.getElementById("expediente").files;
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
          var contents =
            fileReader.result.split('\n');
          //console.log(contents);
          
        };

        console.log(fileReader.readAsText(file[0]));//Aqui esta la chicha
        
    }, false);
}**/


export function leerArchivo() {
  var file = document.getElementById("expediente").files;
  var reader = new FileReader;
  var l = "";
  reader.readAsText(file[0]);

  reader.onload = function(e) {
    var result = reader.result;
    var lineas = result.split('\n');
    for(var linea of lineas) {
      if(linea[0] == "2")
      {
        for(var i in linea)
        {
          if(i > 19)
          {
            if(i != " ")
              l += linea[i];
              
            
          }
        }
        console.log(l);
      }
      
    }
  }
 
}

export function devolverInfoSubject() {
  var subjectId = document.getElementById(
    "idAsignatura"
  ).value;

  firebase
    .firestore()
    .collection("subjects")
    .where("code", "==", subjectId)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    });
}

export function infoUser(userId) {
  firebase
    .firestore()
    .collection("users")
    .where("uid", "==", userId)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    });
}
