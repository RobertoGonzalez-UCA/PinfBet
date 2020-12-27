import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//FUNCION CREAR USUARIOS (usada en debugging, en producto final los usuarios son creados al registrarse)
//<Button onClick={createUser}>Crear Usuario (debugging, no usar)</Button>
export function createUser() {
  firebase
    .firestore()
    .collection("users")
    .add({
      coins: 400,
      uid: "1",
      stats: {
        coinsEarned: 400,
        hitRate: 0,
        hitStreak: 0
      }
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}

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
  var emisor = firebase.auth().currentUser;
  var uidEmisor = emisor.uid;
  var uidReceptor = document.getElementById("uidReceptor").value;

  firebase.firestore().collection("friendships").add({
    status: "PENDING",
    uid_a: uidEmisor,
    uid_b: uidReceptor
  });
}

//FUNCION MOSTRAR SOLICITUDES DE AMISTAD
export function mostrarSolicitud() {
  var uidReceptor = receptor.uid;

  firebase
    .firestore()
    .collection("friendships")
    .where("uid_b", "==", uidReceptor)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.id, " => ", doc.data());
      });
    });
}

//FUNCION ACEPTAR SOLICITUD (MEDIANTE ID DE LA SOLICITUD)
export function aceptarSolicitud() {
  var receptor = firebase.auth().currentUser;
  var uidReceptor = receptor.uid;
  var docId = document.getElementById("docId").value;

  firebase
    .firestore()
    .collection("friendships")
    .where("uid_b", "==", uidReceptor)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        firebase
          .firestore()
          .collection("friendships")
          .doc(docId)
          .update({ status: "ACCEPTED" });
        console.log(doc.id, " => ", doc.data());
      });
    });
}

//FUNCION RACHAZAR SOLICITUD (MEDIANTE ID DE LA SOLICITUD)
export function rechazarSolicitud() {
  var receptor = firebase.auth().currentUser;
  var uidReceptor = receptor.uid;
  firebase
    .firestore()
    .collection("friendships")
    .where("uid_b", "==", uidReceptor) //Buscar documentacion update data
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        firebase
          .firestore()
          .collection("friendships")
          .doc(docId)
          .update({ status: "REFUSED" });
        console.log(doc.id, " => ", doc.data());
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
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
}

//FUNCION MOSTRAR ASIGNATURAS POR AÑO
export function mostrarAsignaturasYear() {
  var string = document.getElementById("year").value; //Obtenemos un string que posteriormente convertimos en int
  var year = parseInt(string, 10); //No tocar el 10, es necesario para base decimal

  firebase
    .firestore()
    .collection("subjects")
    .where("year", "==", year)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.id, " => ", doc.data());
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
}

//FUNCION CREAR APUESTA (EN CONSTRUCCION)
export function crearApuesta() {
  var uidApostante = firebase.auth().currentUser.uid;
  var uidApostado = document.getElementById("uidApostado").value;
  var apuestaNota = document.getElementById("apuestaNota").checked;
  var notaApostada = document.getElementById("notaApostada").value;
  var idAsignatura = document.getElementById("idAsignatura").value;
  var cantidadDinero = document.getElementById("cantidadDinero").value;
  var cantidadDineroNota = document.getElementById("cantidadDineroNota").value;
  var idBetContext;
  var subject = firebase.firestore().collection("subjects");

  if (sonAmigos(uidApostante, uidApostado)) {
    console.log(apuestaNota);

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
        console.log("Document written with ID: ", docRef.id);

        firebase
          .firestore()
          .collection("bets")
          .add({
            amount: cantidadDinero,
            betContext: "/betContext/" + docRef.id,
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

        if (apuestaNota.checked == true) {
          console.log("Attak on Titan mola");
          firebase
            .firestore()
            .collection("bets")
            .add({
              amount: cantidadDineroNota,
              betContext: "/betContext/" + idBetContext,
              betContextId: idBetContext,
              type: "NOTA",
              uid: uidApostado,
              value: notaApostada
            })
            .then(function (docRef) {
              console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
              console.error("Error adding document: ", error);
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

//Funcion REGISTRAR USUARIO (necesita revision donde esperamos 1 segundo y medio) "FUNCIONA"
var errorMessage;
export function registrarUsuario() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var cadena = "The email address is already in use by another account.";

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ...
    }); //

  setTimeout(function () {
    firebase //Esperamos un momento a que se actualice firebase antes de autenticar
      .auth()
      .signInWithEmailAndPassword(email, password);

    var user = firebase.auth().currentUser;

    if (errorMessage != cadena) {
      firebase
        .firestore()
        .collection("users")
        .add({
          coins: 7777,
          uid: user.uid.toString(),
          stats: {
            coinsEarned: 9400,
            hitRate: 0,
            hitStreak: 0
          }
        })
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    } else {
      console.log("El usuario está repetido");
    }
  }, 1500); //Esperamos 1'5 segundos, buen equilibrio. Buena solucion por ahora, deberia buscar funcion que comprobara que se ha creado la cuenta nueva.
}

// FUNCION INICIAR SESION "FUNCIONA"
export function iniciarSesion() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      // [Voz de hacker] "Estoy dentro"
      // Redirigir a pagina???
    });

  var user = firebase.auth().currentUser; //Deberiamos hacer esto una variable global para tenerlo disponible siempre??
  console.log("El user es");
  console.log(user);
}

export function cerrarSesion() {
  firebase
    .auth()
    .signOut()
    .then(function () {
      console.log("Saliste correctamente.");
    })
    .catch(function (error) {
      console.log("Error al salir.");
    });
}

function sonAmigos(uid_a, uid_b) {
  var amigos = false;
  var solicitudes = firebase.firestore().collection("friendships");
  var query = solicitudes
    .where("uid_a", "==", uid_b)
    .where("uid_b", "==", uid_a);

  query
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.data());
        // doc.data() is never undefined for query doc snapshots
        //var x = firebase.firestore().collection("friendships").doc(doc.id);
        //console.log(x.status);
        /** if (doc.data().status == "ACCEPTED") {
          console.log("amigos es true");
          amigos = true;
        } else {
          amigos = false;
          console.log("amigos es false");
        }**/
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
  console.log(amigos);
  return amigos;
}

export function prueba() {
  // var comando = sonAmigosPrueba(comando);
  //var notaApostada = document.getElementById("apuestaNota").checked;

  firebase
    .firestore()
    .collection("users")
    .where("uid", "==", "cWr273EKn4TRFWlZmrBKhQIGPWQ2")
    .get()
    .then(function (docRef) {
      var probando = false;
      console.log("2" + probando);
    });

  console.log("3" + probando);
}

export function sonAmigosPrueba(comando) {
  var uid_a = firebase.auth().currentUser.uid.toString();
  var uid_b = "cWr273EKn4TRFWlZmrBKhQIGPWQ2";
  var amigos;

  amigos = firebase
    .firestore()
    .collection(
      "friendships"
    ) /*
    .where("uid_a", "==", uid_a)
    .where("uid_b", "==", uid_b)
    .where("status", "==", "ACCEPTED")*/;

  console.log("LOL" + amigos);

  /*if( comando == true){
      return true;
    } else {
      return false
    }*/
}

export function cursarAsignatura() {
  var degreeId = document.getElementById("degreeId").value;
  var subjectId = document.getElementById("subjectId").value;
  var user = firebase.auth().currentUser;

  firebase
    .firestore()
    .collection("userSubjects")
    .add({
      degreeId: degreeId,
      grade: -1,
      subjectId: subjectId,
      uid: user.uid
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}

export function actualizarNota() {
  var subjectId = document.getElementById("subjectId").value;
  var nota = document.getElementById("nota").value;
  var user = firebase.auth().currentUser;

  firebase //Esta parte se encarga de actualizar la nota
    .firestore()
    .collection("userSubjects")
    .where("uid", "==", user.uid) //Buscar documentacion update data
    .where("subjectId", "==", subjectId)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        firebase
          .firestore()
          .collection("userSubjects")
          .doc(doc.id)
          .update({ grade: nota }); //cambiar a nota introducida por el ususario
        //console.log(doc.id, " => ", doc.data());
      });
    });
  //Esta parte se encarga de encontrar los bets donde aparcece la persona original, y llama a al funcion de buscar betContext relacionados

  firebase
    .firestore()
    .collection("bets")
    .where("uid", "==", user.uid) //Buscar documentacion update data
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.id, " => ", doc.data());
        fetchBetcontext(doc, nota); //Vamos a buscar los betContext relacionados con este bet
        //  console.log(doc.id, " => ", doc.data());
      });
    })
    .catch(function (error) {
      console.log("Error getting document:", error);
    });

  //console.log(documento.size);

  //Llamar a funcion actualizar apuestas
}

function fetchBetcontext(bet, nota) {
  console.log(nota);

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
      console.log("Error getting document:", error);
    });

  // LIMPIAR console.log(document.get('betContextId'));
  console.log(document.get("betContextId")); //FUNCIONA
}

function actualizarBets(bet, nota, betContext) {
  var uid = betContext.get("uid");
  var aumento;
  aumento = bet.get("amount"); //sacamos el dinero que ha apostado

  if (bet.get("type") == "APRUEBA_SUSPENDE" && nota > 5) {
    aumento = aumento * 1.5;
  }
  if (bet.get("type") == "NOTA" && (nota = bet.get("value"))) {
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
      querySnapshot.forEach(function (doc) {
        firebase
          .firestore()
          .collection("users")
          .doc(doc.id)
          .update({
            coins: firebase.firestore.FieldValue.increment(aumento)
          });
        console.log("Pos vale");
        // console.log(doc.id, " => ", doc.data());
      });
    });
}

export function createSubject() {
  var acronym = document.getElementById("acronym").value;
  var code = document.getElementById("code").value;
  var degreeId = document.getElementById("degreeId").value;
  var name = document.getElementById("name").value;
  var year = document.getElementById("year").value;

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
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}
