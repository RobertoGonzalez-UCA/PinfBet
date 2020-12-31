import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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

//FUNCION SOLICITAR AMISTAD
export function solicitarAmistad() {
  var emisor = firebase.auth()
    .currentUser;
  var uidEmisor = emisor.uid;
  var uidReceptor = document.getElementById(
    "uidReceptor"
  ).value;

  firebase
    .firestore()
    .collection("friendships")
    .add({
      status: "PENDING",
      uid_a: uidEmisor,
      uid_b: uidReceptor
    });
}

//FUNCION MOSTRAR SOLICITUDES DE AMISTAD
export function mostrarSolicitud() {
  var uidReceptor = document.getElementById(
    "uidReceptor"
  ).value;

  firebase
    .firestore()
    .collection("friendships")
    .where("uid_b", "==", uidReceptor)
    .get()
    .then((querySnapshot) => {
      console.log(querySnapshot.docs);
      querySnapshot.forEach((doc) => {
        console.log(
          doc.id,
          " => ",
          doc.data()
        );
      });
    });
}

//FUNCION ACEPTAR SOLICITUD (MEDIANTE ID DE LA SOLICITUD)
export function aceptarSolicitud() {
  var receptor = firebase.auth()
    .currentUser;
  var uidReceptor = receptor.uid;
  var docId = document.getElementById(
    "docId"
  ).value;

  firebase
    .firestore()
    .collection("friendships")
    .where("uid_b", "==", uidReceptor)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (
        doc
      ) {
        firebase
          .firestore()
          .collection("friendships")
          .doc(docId)
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

//FUNCION RACHAZAR SOLICITUD (MEDIANTE ID DE LA SOLICITUD)
export function rechazarSolicitud() {
  var receptor = firebase.auth()
    .currentUser;
  var uidReceptor = receptor.uid;
  firebase
    .firestore()
    .collection("friendships")
    .where("uid_b", "==", uidReceptor)
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (
        doc
      ) {
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

//FUNCION CREAR APUESTA (EN CONSTRUCCION)
export function crearApuesta() {
  var uidApostante = firebase.auth()
    .currentUser.uid;
  var uidApostado = document.getElementById(
    "uidApostado"
  ).value;
  var apuestaNota = document.getElementById(
    "apuestaNota"
  ).checked;
  var notaApostada = document.getElementById(
    "notaApostada"
  ).value;
  var idAsignatura = document.getElementById(
    "idAsignatura"
  ).value;
  var cantidadDinero = document.getElementById(
    "cantidadDinero"
  ).value;
  var cantidadDineroNota = document.getElementById(
    "cantidadDineroNota"
  ).value;
  var idBetContext;
  var subject = firebase
    .firestore()
    .collection("subjects");

  if (
    sonAmigos(uidApostante, uidApostado)
  ) {
    firebase
      .firestore()
      .collection("betContexts")
      .add({
        uid: uidApostante,
        subjects: {
          acronym: "",
          code: idAsignatura,
          degreeId: "02104342", //Provisionalmente, pues por ahora solo tenemos asignaturas de GII
          name: "",
          year: 0
        }
      })
      .then(function (docRef) {
        console.log(
          "Document written with ID: ",
          docRef.id
        );

        firebase
          .firestore()
          .collection("bets")
          .add({
            amount: cantidadDinero,
            betContext:
              "/betContext/" +
              docRef.id,
            betContextId: docRef.id,
            type: "APRUEBA_SUSPENDE",
            uid: uidApostado,
            value: true
          })
          .then(function (docRef) {
            //   console.log("Document written with ID: ", docRef.id);
          })
          .catch(function (error) {
            //  console.error("Error adding document: ", error);
          });

        if (
          apuestaNota.checked === true
        ) {
          firebase
            .firestore()
            .collection("bets")
            .add({
              amount: cantidadDineroNota,
              betContext:
                "/betContext/" +
                idBetContext,
              betContextId: idBetContext,
              type: "NOTA",
              uid: uidApostado,
              value: notaApostada
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
      })
      .catch(function (error) {
        // console.error("Error adding document: ", error);
      });

    // console.log(idBetContext + " Hello");
  } else {
    console.log("No son amigos");
  }
}

export function registrarUsuario(
  nick,
  email,
  password
) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(
      email,
      password
    )
    .then((user) => {
      firebase
        .firestore()
        .collection("users")
        .add({
          nickname: nick,
          coins: 0,
          uid: firebase.auth()
            .currentUser.uid,
          stats: {
            coinsEarned: 0,
            hitRate: 0,
            hitStreak: 0
          }
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
    })
    .catch((error) => {
      if (errorCode != null) {
        console.log(error.message);
      }
    });
}

export function userLogged() {
  firebase
    .auth()
    .onAuthStateChanged(function (
      user
    ) {
      if (user) {
        return true;
      } else {
        return false;
      }
    });
}

// FUNCION INICIAR SESION "FUNCIONA"
export function iniciarSesion(
  email,
  password
) {
  firebase
    .auth()
    .signInWithEmailAndPassword(
      email,
      password
    )
    .then((user) => {
      console.log("Logged.");
    })
    .catch((error) => {
      console.log(error.message);
    });
}

export function cerrarSesion() {
  firebase
    .auth()
    .signOut()
    .then(function () {
      console.log(
        "Saliste correctamente."
      );
    })
    .catch(function (error) {
      console.log("Error al salir.");
    });
}

function sonAmigos(uid_a, uid_b) {
  var amigos = false;
  var solicitudes = firebase
    .firestore()
    .collection("friendships");
  var query = solicitudes
    .where("uid_a", "==", uid_a)
    .where("uid_b", "==", uid_b);

  amigos = query
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (
          doc.data().status ==
          "ACCEPTED"
        ) {
          console.log("amigos es true");
          return true;
        } else {
          console.log(
            "amigos es false"
          );
          return false;
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
    .collection("userSubjects")
    .add({
      degreeId: degreeId,
      grade: -1, //Nota por defecto cuando se crea
      subjectId: subjectId,
      uid: user.uid
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

export function actualizarNota() {
  var subjectId = document.getElementById(
    "subjectId"
  ).value;
  var nota = document.getElementById(
    "nota"
  ).value;
  var user = firebase.auth()
    .currentUser;

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

  firebase
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
      });
    })
    .catch(function (error) {
      console.log(
        "Error getting document:",
        error
      );
    });

  //Llamar a funcion actualizar apuestas
}

function fetchBetcontext(bet, nota) {
  firebase
    .firestore()
    .collection("betContexts")
    .doc(document.get("betContextId")) //FUNCIONA
    .get()
    .then(function (doc) {
      //  console.log(doc.id, " => ", doc.data());
      actualizarBets(bet, nota, doc); //Una vez encontrados los betCOntexts, llamamos a otra funcion para actualizar todo
    })
    .catch(function (error) {
      console.log(
        "Error getting document:",
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
  aumento = bet.get("amount"); //sacamos el dinero que ha apostado

  if (
    bet.get("type") ==
      "APRUEBA_SUSPENDE" &&
    nota > 5
  ) {
    aumento = aumento * 1.5;
  }
  if (
    bet.get("type") == "NOTA" &&
    (nota = bet.get("value"))
  ) {
    aumento = aumento * 3;
  } else {
    aumento = 0;
  }

  firebase
    .firestore()
    .collection("users")
    .where("uid", "==", uid)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (
        doc
      ) {
        firebase
          .firestore()
          .collection("users")
          .doc(doc.id)
          .update({
            coins: firebase.firestore.FieldValue.increment(
              aumento
            )
          });
        console.log("Pos vale");
        // console.log(doc.id, " => ", doc.data());
      });
    });
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

export function leerArchivo() {
  var PdfReader = require("pdfreader")
    .PdfReader;
  new PdfReader().parseFileItems(
    "sample.pdf",
    function (err, item) {
      if (item && item.text)
        console.log(item.text);
    }
  );
}
