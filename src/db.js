import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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

//PROBLEMA1: Obtener ID receptor
export function solicitarAmistad() {
  var emisor = firebase.auth().currentUser;
  var receptor;
  firebase.firestore().collection("friendships").add({
    status: "PENDING",
    uid_a: "313",
    uid_b: "123"
  });
}
//PROBLEMA1
//PROBLEMA2: localizar la petición asociada a los 2 usuarios
export function aceptarSolicitud() {
  //Obtenemos la petiicón asociada al remitente (no hace falta el receptor, claro)
  var peticion = firebase
    .firestore()
    .collection("friendships")
    .whereEqualTo("uid_a", "313");

  peticion.set({ status: "ACCEPTED" });
}
//PROBLEMA1 + PROBLEMA2
export function rechazarSolicitud() {
  firebase.firestore().collection("friendships").doc().where().update({
    status: "REFUSED"
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

//PROBLEMA5:
export function crearApuesta() {
  firebase
    .firestore()
    .collection("betContexts")
    .add({
      acronym: "July",
      uid: 666,
      subjects: {
        code: 69,
        degreeId: 6969,
        name: "Prueba de que julia esta aqui",
        year: 9
      }
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}

export function registrarUsuario() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ...
    });
}
