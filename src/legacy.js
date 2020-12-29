//FUNCION CREAR USUARIOS (usada en debugging, en producto final los usuarios son creados al registrarse)
//<Button onClick={createUser}>Crear Usuario (debugging, no usar)</Button>
/* export function createUser() {
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
} */

export function sonAmigosPrueba(
  comando
) {
  var uid_a = firebase
    .auth()
    .currentUser.uid.toString();
  var uid_b =
    "cWr273EKn4TRFWlZmrBKhQIGPWQ2";
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

/* var cadena =
    "The email address is already in use by another account.";

 await firebase
    .auth()
    .createUserWithEmailAndPassword(
      email,
      password
    )
    .then((user) => {
      console.log(
        "Usuario creado con éxito" // ¿Por qué no aparece cuando se crea con éxito?
      );
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var user = firebase.auth()
        .currentUser;

      if (errorMessage !== cadena) {
        firebase
          .firestore()
          .collection("users")
          .add({
            coins: 0,
            uid: user.uid.toString(),
            stats: {
              coinsEarned: 0,
              hitRate: 0,
              hitStreak: 0
            }
          })
          .catch(function (error) {
            console.error(
              "Error adding document: ",
              error
            );
          });
      } else {
        console.log(
          "Este usuario ya existe."
        );
      }
    });

  await firebase
    .auth()
    .signInWithEmailAndPassword(
      email,
      password
    ); */
