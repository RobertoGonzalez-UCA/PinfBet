import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//FUNCION CREAR USUARIOS (usada en debugging, en producto final los usuarios son creados al registrarse)
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

//FUNCION MOSTRAR USUARIOS (muestra todos) (opcion filtrar por asignatura / año)
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

//PROBLEMA1: Obtener ID receptor (lo metemos desde la caja)
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

//PROBLEMA1
//PROBLEMA2: localizar la petición asociada a los 2 usuarios
export function aceptarSolicitud() {
  //ACEPTA TODAS LAS SOLICITUDES
  //Obtenemos la petiicón asociada al remitente (no hace falta el receptor, claro)
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
          .doc(doc.id)
          .update({ status: "ACCEPTED" });
        console.log(doc.id, " => ", doc.data());
      });
    });
}

//PROBLEMA1 + PROBLEMA2
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
          .doc(doc.id)
          .update({ status: "REFUSED" });
        console.log(doc.id, " => ", doc.data());
      });
    });
}

//PROBLEMA3: Obtener por parámetro el degreeId
//PROBLEMA4: Obtener los datos específicos del documento
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

//PROBLEMA3: Obtener por parámetro el degreeId
//PROBLEMA4: Obtener los datos específicos del documento
export function mostrarAsignaturasYear() {
  //FUNCIONA (depurar para hacer mas legible)

  var year = document.getElementById("year").value; //Obtenemos un string que posteriormente convertimos en int

  console.log("entré");
  var year2 = parseInt(year, 10); //No tocar el 10, es necesario

  firebase
    .firestore()
    .collection("subjects")
    .where("year", "==", year2)
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

//PROBLEMA5: Vamos a ver que carajo hacemos con esto
//Necesitamos UID del apostador, apostado, id de la asignatura, tipo de apuesta, cantidad de dinero
export function crearApuesta() {
  var uidApostante = firebase.auth().currentUser.uid;
  var uidApostado = document.getElementById("uidApostado").value;
  var apuestaNota = document.getElementById("apuestaNota").value;
  var notaApostada = document.getElementById("notaApostada").value;
  var idAsignatura = document.getElementById("idAsignatura").value;
  var cantidadDinero = document.getElementById("cantidadDinero").value;
  var cantidadDineroNota = document.getElementById("cantidadDineroNota").value;
  var idBetContext = 777;

  if (sonAmigos(uidApostante, uidApostado)) {
    firebase
      .firestore()
      .collection("betContexts")
      .add({
        uid: uidApostante,
        subjects: {
          acronym: "Asignatura",
          code: 666,
          degreeId: idAsignatura,
          name: "Asignatura nombre completo",
          year: 666
        }
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        idBetContext = docRef.id;
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

    firebase
      .firestore()
      .collection("bets")
      .add({
        amount: cantidadDinero,
        betContext: "/betContext/" + idBetContext,
        betContextId: idBetContext,
        type: "APRUEBA_SUSPENDE",
        uid: uidApostado,
        value: true
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

    if (apuestaNota == true) {
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

//Lo que planteo: Busco los documentos asocidados a los 2 usuarios
//Si hay alguno con solicitud
function sonAmigos(uid_a, uid_b) {
  var amigos = false;
  var solicitudes = firebase.firestore().collection("friendships");
  var query = solicitudes
    .where("uid_a", "==", uid_a)
    .where("uid_b", "==", uid_b);
  query
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

  return amigos;
}
