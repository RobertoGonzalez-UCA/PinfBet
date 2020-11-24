import firebase from "firebase/app";
import "firebase/firestore";

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

//PROBLEMA1: Obtener ID emisor e ID receptor
export function solicitarAmistad() {
  emisor = new String();
  receptor = new String();
  firebase.firestore.collection("friendships").add({
    status: "PENDING",
    uid_a: this.uid_a,
    uid_b: this.uid_b
  });
}
//PROBLEMA1
//PROBLEMA2: localizar la petición asociada a los 2 usuarios
export function aceptarSolicitud() {
  firebase.firestore.collection("friendships").doc().where().update({
    status: "ACCEPTED"
  });
}
//PROBLEMA1 + PROBLEMA2
export function rechazarSolicitud() {
  firebase.firestore.collection("friendships").doc().where().update({
    status: "REFUSED"
  });
}

//PROBLEMA3: Obtener por parámetro el degreeId
//PROBLEMA4: Obtener los datos específicos del documento
export function mostrarAsignaturas() {
  firebase.firestore
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
      acronym: 'zekeWasHere',
      uid:666,
      subjects:{
        code: 69,
        degreeId: 6969,
        name: 'Prueba de si lo he conseguio',
        year: 9
      }
    })
      .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
}
