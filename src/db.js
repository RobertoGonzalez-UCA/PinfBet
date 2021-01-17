import firebase from "firebase/app";
import "firebase/firestore";

//FUNCION MOSTRAR USUARIOS (muestra todos) (opcion filtrar por asignatura / año?)
export function getUsers() {
  firebase
    .firestore()
    .collection("users")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {});
    });
}

export function getDegrees() {
  firebase
    .firestore()
    .collection("degrees")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {});
    });
}

export function sonAmigos(uidEmisor, uidReceptor) {
  var friend = firebase.firestore().collection("friendships");
  friend
    .where("uid_a", "==", uidEmisor)
    .where("uid_b", "==", uidReceptor)
    .where("status", "==", "ACCEPTED")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {});
    });

  friend
    .where("uid_b", "==", uidEmisor)
    .where("uid_a", "==", uidReceptor)
    .where("status", "==", "ACCEPTED")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {});
    });

  friend
    .where("uid_b", "==", uidEmisor)
    .where("uid_a", "==", uidReceptor)
    .where("status", "==", "DENIED")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {});
    });

  friend
    .where("uid_a", "==", uidEmisor)
    .where("uid_b", "==", uidReceptor)
    .where("status", "==", "DENIED")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {});
    });

  friend
    .where("uid_b", "==", uidEmisor)
    .where("uid_a", "==", uidReceptor)
    .where("status", "==", "PEDNING")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {});
    });

  friend
    .where("uid_a", "==", uidEmisor)
    .where("uid_b", "==", uidReceptor)
    .where("status", "==", "PENDING")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {});
    });
}

//FUNCION SOLICITAR AMISTAD
export async function solicitarAmistad(uidEmisor, uidReceptor) {
  var friend = firebase.firestore().collection("friendships");
  await friend
    .where("uid_a", "==", uidEmisor)
    .where("uid_b", "==", uidReceptor)
    .where("status", "==", "PENDING")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        friend
          .doc(doc.id)
          .delete()
          .then(function () {})
          .catch(function (error) {});
        alert("Se ha enviado una petición de amistad");
      });
    });

  await friend
    .where("uid_b", "==", uidEmisor)
    .where("uid_a", "==", uidReceptor)
    .where("status", "==", "PENDING")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        friend
          .doc(doc.id)
          .delete()
          .then(function () {})
          .catch(function (error) {});
      });
    });

  await firebase
    .firestore()
    .collection("users")
    .where("uid", "==", uidEmisor)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        friend.add({
          status: "PENDING",
          uid_a: uidEmisor,
          uid_b: uidReceptor,
          nickname: doc.data().nickname
        });
      });
    });

  friend
    .where("uid_a", "==", uidEmisor)
    .where("uid_b", "==", uidReceptor)
    .where("status", "==", "ACCEPTED")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        alert("Ya tienes amistad con este usuario");
        yaHayAmistad(uidEmisor, uidReceptor);
      });
    });

  friend
    .where("uid_b", "==", uidEmisor)
    .where("uid_a", "==", uidReceptor)
    .where("status", "==", "ACCEPTED")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        alert("Ya tienes amistad con este amigo");
        yaHayAmistad(uidEmisor, uidReceptor);
      });
    });

  friend
    .where("uid_a", "==", uidEmisor)
    .where("uid_b", "==", uidReceptor)
    .where("status", "==", "DENIED")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        alert("Esta persona denegó tu petición.");
        yaHayAmistad(uidEmisor, uidReceptor);
      });
    });

  friend
    .where("uid_b", "==", uidEmisor)
    .where("uid_a", "==", uidReceptor)
    .where("status", "==", "DENIED")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        yaHayAmistad(uidEmisor, uidReceptor);
      });
    });
}

function yaHayAmistad(uidEmisor, uidReceptor) {
  var friend = firebase.firestore().collection("friendships");

  friend
    .where("uid_b", "==", uidEmisor)
    .where("uid_a", "==", uidReceptor)
    .where("status", "==", "PENDING")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        firebase
          .firestore()
          .collection("friendships")
          .doc(doc.id)
          .delete()
          .then(function () {})
          .catch(function (error) {});
      });
    });

  friend
    .where("uid_a", "==", uidEmisor)
    .where("uid_b", "==", uidReceptor)
    .where("status", "==", "PENDING")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        friend
          .doc(doc.id)
          .delete()
          .then(function () {})
          .catch(function (error) {});
      });
    });
}

//FUNCION MOSTRAR AMISTADES
export function mostrarAmistad() {
  var uidReceptor = firebase.auth().currentUser.uid;
  var friend = firebase.firestore().collection("friendships");

  friend
    .where("uid_b", "==", uidReceptor)
    .where("status", "==", "ACCEPTED")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {});
    });

  friend
    .where("uid_a", "==", uidReceptor)
    .where("status", "==", "ACCEPTED")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {});
    });
}

//FUNCION ACEPTAR SOLICITUD (MEDIANTE ID DE LA SOLICITUD)
export function aceptarSolicitud(uidReceptor, uidSolicitante) {
  var friend = firebase.firestore().collection("friendships");
  friend
    .where("uid_a", "==", uidSolicitante)
    .where("status", "==", "PENDING")
    .where("uid_b", "==", uidReceptor)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach((doc) => {
        firebase.firestore().collection("friendships").doc(doc.id).update({
          status: "ACCEPTED"
        });
      });
    });
}

//FUNCION BORRAR SOLICITUD (MEDIANTE ID DE LA SOLICITUD)
export function cancelarAmistad(uidReceptor, uidSolicitante) {
  var friend = firebase.firestore().collection("friendships");
  friend
    .where("uid_a", "==", uidSolicitante)
    .where("status", "==", "ACCEPTED")
    .where("uid_b", "==", uidReceptor)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach((doc) => {
        firebase.firestore().collection("friendships").doc(doc.id).delete();
      });
      alert("Se ha eleminado la amistad");
    });

  friend
    .where("uid_b", "==", uidSolicitante)
    .where("status", "==", "ACCEPTED")
    .where("uid_a", "==", uidReceptor)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach((doc) => {
        firebase.firestore().collection("friendships").doc(doc.id).delete();
      });
    });
}

//FUNCION RECHAZAR SOLICITUD (MEDIANTE ID DE LA SOLICITUD)
export function rechazarSolicitud(uidReceptor, uidSolicitante) {
  var friend = firebase.firestore().collection("friendships");

  friend
    .where("uid_a", "==", uidSolicitante)
    .where("status", "==", "PENDING")
    .where("uid_b", "==", uidReceptor)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach((doc) => {
        firebase.firestore().collection("friendships").doc(doc.id).update({
          status: "DENIED"
        });
      });
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
      querySnapshot.forEach(function (doc) {});
    })
    .catch(function (error) {});
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
  var uidApostante = firebase.auth().currentUser.uid;

  cantidadDinero = parseInt(cantidadDinero, 10);
  cantidadDineroNota = parseInt(cantidadDineroNota, 10);

  if (isNaN(cantidadDineroNota)) {
    cantidadDineroNota = 0;
  }

  if (cantidadDinero <= 0) {
    return;
  }

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
  var solicitudes = firebase.firestore().collection("friendships");

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
        if (doc.data().status === "ACCEPTED") {
          encontrarDegree(
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
          alert("No se realizó la apuesta debido a que no sois amigos.");
        }
      });
    })
    .catch(function (error) {});

  reverseQuery
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().status === "ACCEPTED") {
          encontrarDegree(
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
          alert("No se realizó la apuesta debido a que no sois amigos.");
        }
      });
    })
    .catch(function (error) {});
}

//Siguiente paso de crear apuesta
function encontrarDegree(
  uidApostante,
  idAsignatura,
  cantidadDinero,
  uidApostado,
  betNotaCheck,
  valorBet,
  cantidadDineroNota,
  notaApostada
) {
  var dineroApuesta = cantidadDinero + cantidadDineroNota;

  firebase
    .firestore()
    .collection("users")
    .where("uid", "==", uidApostante)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().coins >= dineroApuesta) {
          firebase
            .firestore()
            .collection("users")
            .doc(doc.id)
            .update({
              coins: firebase.firestore.FieldValue.increment(-dineroApuesta)
            });

          firebase
            .firestore()
            .collection("subjects")
            .where("code", "==", idAsignatura) //Buscar documentacion update data
            .get()
            .then(function (querySnapshot) {
              querySnapshot.forEach(function (docRef) {
                escribirApuesta(
                  uidApostante,
                  idAsignatura,
                  cantidadDinero,
                  uidApostado,
                  betNotaCheck,
                  valorBet,
                  cantidadDineroNota,
                  notaApostada,
                  docRef.data().degreeId
                );
              });
            });
        } else {
          alert("Error. No se dispone del suficiente dinero");
        }
      });
    })
    .catch(function (error) {});
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
  notaApostada,
  degreeId
) {
  if (valorBet === "true") {
    valorBet = true;
  }
  if (valorBet === "false") {
    valorBet = false;
  }

  firebase
    .firestore()
    .collection("betContexts")
    .add({
      uid: uidApostante,
      subjects: {
        code: idAsignatura,
        degreeId: degreeId
      }
    })
    .then(function (docRef) {
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
        .then(function (docRef) {})
        .catch(function (error) {});

      alert("Apuesta realizada correctamente");

      if (betNotaCheck === true) {
        escribirApuestaNota(
          uidApostado,
          cantidadDineroNota,
          notaApostada,
          docRef.id
        );
      }
    })
    .catch(function (error) {});
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
    .then(function (docRef) {})
    .catch(function (error) {});
}

//Un usuario cursa una asignatura
export function cursarAsignatura(degreeId, subjectId) {
  //var degreeId = document.getElementById("degreeId").value;
  //var subjectId = document.getElementById("subjectId").value;

  var user = firebase.auth().currentUser;

  firebase
    .firestore()
    .collection("users")
    .where("uid", "==", user.uid) //Buscar documentacion update data
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        completarCursar(degreeId, subjectId, user.uid, doc.data().nickname);
      });
    });
}

//Siguiente paso de cursar asignatura
function completarCursar(degreeId, subjectId, user, nickname) {
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
    .then(function (docRef) {})
    .catch(function (error) {});
}

export async function actualizarNota() {
  //Obtenemos la asignatura, la nota y el usuario actual. Solo necesitamos eso.
  var subjectId = document.getElementById("subjectId").value;
  var nota = document.getElementById("nota").value;
  var user = firebase.auth().currentUser;

  if (nota < 0 || nota > 10) {
    //La nota es válida
    return;
  }

  //createTransactions(subjectId, nota, user);

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
      });
    });

  //Esta parte se encarga de encontrar los bets donde aparcece la persona original
  await firebase
    .firestore()
    .collection("bets")
    .where("uid", "==", user.uid) //Buscar documentacion update data
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        var bet = doc;

        fetchBetcontext(
          //Llamamos a funcion de buscar betContext relacionados
          doc,
          nota,
          subjectId
        );
        deleteBetcontext(
          //Llamamos a funcion de borrar los betContext
          bet,
          nota,
          subjectId
        ); //Vamos a buscar los betContext relacionados con este bet
      });
    })
    .catch(function (error) {});

  if (nota < 5) {
    firebase //Borrar notas despues de actualizar si han aprobado
      .firestore()
      .collection("userSubjects")
      .where("uid", "==", user.uid) //Buscar documentacion update data
      .where("subjectId", "==", subjectId)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          firebase.firestore().collection("userSubjects").doc(doc.id).delete();
        });
      });
  }
}

async function fetchBetcontext(bet, nota, subjectId) {
  await firebase
    .firestore()
    .collection("betContexts")
    .doc(bet.get("betContextId"))
    .get()
    .then(function (doc) {
      if (
        doc.data().subjects.code === subjectId //Nos aseguramos de que el betContext se corresponda con la asignatura
      ) {
        firebase
          .firestore()
          .collection("transactions")
          .add({
            uid_apostado: bet.data().uid,
            nota: nota,
            subjectId: subjectId,
            type: bet.data().type,
            value: false
          })
          .then(function (docRef) {
            firebase.firestore().collection("transactions").doc(docRef.id);
            añadirName(docRef, subjectId);

            actualizarCoins(bet, nota, doc, docRef); //Una vez encontrados los betCOntexts, llamamos a otra funcion para actualizar todo
          })
          .catch(function (error) {});
      }
    })
    .catch(function (error) {});
}

async function deleteBetcontext(bet, nota, subjectId) {
  //Misma funcion que arriba pero se encarga de borrar los ebtContezts despues de la actualizacion de nota

  await firebase
    .firestore()
    .collection("betContexts")
    .doc(bet.get("betContextId"))
    .get()
    .then(function (doc) {
      if (doc.data().subjects.code === subjectId) {
        firebase
          .firestore()
          .collection("betContexts")
          .doc(bet.get("betContextId"))
          .delete()
          .then(function () {})
          .catch(function (error) {});
      }
    })
    .catch(function (error) {});
}

function añadirName(transaction, subjectId) {
  firebase
    .firestore()
    .collection("subjects")
    .where("code", "==", subjectId)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        firebase
          .firestore()
          .collection("transactions")
          .doc(transaction.id)
          .update({
            subject: doc.data().name
          });
      });
    })
    .catch(function (error) {});
}

async function actualizarCoins(bet, nota, betContext, transaction) {
  //Actualizamos el dinero del usuario y borramos los bets
  var uid = betContext.get("uid");
  var uid_b = bet.get("uid");
  var aumento;
  aumento = 0; //sacamos el dinero que ha apostado

  if (nota >= 5 && bet.get("value") === true) {
    aumento = bet.get("amount") * 1.5;
  }

  if (nota < 5 && bet.get("value") === false) {
    aumento = bet.get("amount") * 1.5;
  }

  if (bet.get("type") === "NOTA" && nota === bet.get("value")) {
    aumento = bet.get("amount") * 3;
  }

  await firebase
    .firestore()
    .collection("transactions")
    .doc(transaction.id)
    .update({
      coins: firebase.firestore.FieldValue.increment(aumento),
      uid_apostante: uid,
      value: true
    })
    .then(function (docRef) {})
    .catch(function (error) {});

  await firebase
    .firestore()
    .collection("users")
    .where("uid", "==", uid_b)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        firebase
          .firestore()
          .collection("transactions")
          .doc(transaction.id)
          .update({
            nickname: doc.data().nickname
          });
      });
    });

  await firebase
    .firestore()
    .collection("users")
    .where("uid", "==", uid)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        if (aumento > 0) {
          firebase
            .firestore()
            .collection("users")
            .doc(doc.id)
            .update({
              coins: firebase.firestore.FieldValue.increment(aumento),
              coinsEarned: firebase.firestore.FieldValue.increment(aumento),
              hits: firebase.firestore.FieldValue.increment(1),
              hitStreak: firebase.firestore.FieldValue.increment(1),
              transaction: transaction.id
            });
        } else {
          firebase
            .firestore()
            .collection("users")
            .doc(doc.id)
            .update({
              fails: firebase.firestore.FieldValue.increment(1),
              hitStreak: 0
            });
        }
      });
    });

  firebase
    .firestore()
    .collection("bets")
    .doc(bet.id)
    .delete()
    .then(function () {})
    .catch(function (error) {});

  /* await firebase
    .firestore()
    .collection("transactions")
    .where(
      "uid_apostado",
      "==",
      uid_apostado
    )
    .where("uid_apostante", "==", uid)
    .where("coins", "==", aumento)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (
        doc
      ) {
        firebase
          .firestore()
          .collection("transactions")
          .doc(doc.id)
          .delete()
          .then(function () {
            console.log(
              "Transaction successfully deleted!"
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
*/
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
    .then(function (docRef) {})
    .catch(function (error) {});
}

var subjectId = "";
export function leerMatricula() {
  var file = document.getElementById("matricula").files;
  var reader = new FileReader();
  if (file[0] != undefined) {
    reader.readAsText(file[0]);

    reader.onload = function (e) {
      var result = reader.result;
      var lineas = result.split("\n");
      for (var linea of lineas) {
        subjectId = "";
        if (linea[0] == "2") {
          for (var i in linea) {
            if (i >= 0 && i < 8) {
              subjectId += linea[i];
            }
          }

          firebase
            .firestore()
            .collection("subjects")
            .where("code", "==", subjectId)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                cursarAsignatura(doc.data().degreeId, doc.data().code);
              });
            });
        }
      }
    };
  } else {
    alert("No se ha introducido la matrícula.");
  }
}

export function leerExpediente() {
  var file = document.getElementById("expediente").files;
  var reader = new FileReader();
  var totalCreditos = 0,
    media = "",
    parcial = "",
    correcto = 0;
  var usuario = firebase.auth().currentUser;
  if (file[0] != undefined) {
    reader.readAsText(file[0]);

    reader.onload = function (e) {
      var result = reader.result;
      var lineas = result.split("\n");
      for (var linea of lineas) {
        if (linea.search("FORMACIÓN BÁSICA") != -1) {
          parcial +=
            linea[linea.length - 6] +
            linea[linea.length - 5] +
            linea[linea.length - 4] +
            linea[linea.length - 3] +
            linea[linea.length - 2];
          totalCreditos += parseInt(parcial);
        }

        if (linea.search("OBLIGATORIA") != -1) {
          parcial = "";
          parcial +=
            linea[linea.length - 6] +
            linea[linea.length - 5] +
            linea[linea.length - 4] +
            linea[linea.length - 3] +
            linea[linea.length - 2];
          totalCreditos += parseInt(parcial);
        }

        if (linea.search("OPTATIVA") != -1) {
          parcial = "";
          parcial +=
            linea[linea.length - 6] +
            linea[linea.length - 5] +
            linea[linea.length - 4] +
            linea[linea.length - 3] +
            linea[linea.length - 2];
          totalCreditos += parseInt(parcial);
        }

        if (linea.search("TRABAJO FIN DE GRADO") != -1) {
          parcial = "";
          parcial +=
            linea[linea.length - 6] +
            linea[linea.length - 5] +
            linea[linea.length - 4] +
            linea[linea.length - 3] +
            linea[linea.length - 2];
          totalCreditos += parseInt(parcial);
        }
      }

      for (var linea of lineas) {
        if (linea.search("NOTA MEDIA PONDERADA") != -1) {
          correcto++;

          if (correcto == 2) {
            for (var i in linea) {
              if (i >= 26 && i < 30) {
                media += linea[i];
              }
            }
          }
        }
      }

      //Añadir transactions

      firebase
        .firestore()
        .collection("transactions")
        .add({
          uid_apostado: firebase.auth().currentUser.uid,
          type: "Propia",
          value: true,
          coins: calcularPinfCoins(parseFloat(media), totalCreditos)
        })
        .then(async function (docRef) {
          await firebase
            .firestore()
            .collection("users")
            .where("uid", "==", usuario.uid)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                firebase
                  .firestore()
                  .collection("users")
                  .doc(doc.id)
                  .update({
                    coins: calcularPinfCoins(parseFloat(media), totalCreditos),
                    transaction: docRef.id
                  });
              });
            });

          firebase
            .firestore()
            .collection("transactions")
            .doc(docRef.id)
            .delete();
        });

      alert("Datos actualizados ✓");
    };
  } else {
    alert("No se ha introducido el expediente.");
  }
}

function calcularPinfCoins(media, creditos) {
  return media * creditos;
}

export function devolverInfoSubject() {
  var subjectId = document.getElementById("idAsignatura").value;

  firebase
    .firestore()
    .collection("subjects")
    .where("code", "==", subjectId)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {});
    });
}

//Funcion usada en prubas, no en producto final
export function debugCambioId() {
  firebase
    .firestore()
    .collection("subjects")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        firebase.firestore().collection("subjects").doc(doc.id).update({
          degreeId: "1725"
        });
      });
    });
}

export async function comprobarNickname() {
  //Esto no funciona, no deberia ser usado
  await firebase
    .firestore()
    .collection("users")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var existe = 0;
        if (doc.data().nickname === "Enimetrox") {
          existe = existe + 1;
        }
      });
    });
}

export async function pruebas() {
  var uidEmisor = firebase.auth().currentUser.uid;
  var uidReceptor = document.getElementById("uidReceptor").value;

  var friend = firebase.firestore().collection("friendships");

  var gotcha = await friend
    .where("uid_a", "==", uidEmisor)
    .where("uid_b", "==", uidReceptor)
    .where("status", "==", "ACCEPTED")
    .get();

  gotcha.on("value", (snapshot) => {});
  /*
  //RONALDINHO SOCCER
  console.log("EH");
  firebase.firestore().collection("bets").add({
    amount: 5,
    betContextId: "twSrQBtGuBGiNeryKIYM",
    type: "APRUEBA_SUSPENDE",
    uid: "CzzhhlAokLW4mMTWz2DmDnxpi1U2",
    value: true
  });

  firebase.firestore().collection("bets").add({
    amount: 10,
    betContextId: "twSrQBtGuBGiNeryKIYM",
    type: "NOTA",
    uid: "CzzhhlAokLW4mMTWz2DmDnxpi1U2",
    value: 8
  });

  firebase
    .firestore()
    .collection("betContexts")
    .doc("twSrQBtGuBGiNeryKIYM")
    .set({
      uid: "1HAabYbLxQZH12E1SOVJQC9QWIz1",
      subjects: {
        code: "21714008",
        degreeId: "1725"
      }
    });*/
}

export function findTransactions() {
  var yo = firebase.auth().currentUser.uid;

  firebase
    .firestore()
    .collection("transactions")
    .where("uid_apostante", "==", yo)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {});
    });
}

export function deleteTransactions(transaction) {
  firebase
    .firestore()
    .collection("transactions")
    .where("uid_apostante", "==", transaction.uid_apostante)
    .where("uid_apostado", "==", transaction.uid_apostado)
    .where("coins", "==", transaction.coins)
    .where("subjectId", "==", transaction.subjectId)
    .where("type", "==", transaction.type)
    .where("nota", "==", transaction.nota)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        firebase.firestore().collection("transactions").doc(doc.id).delete();
      });
    });
}

export function deleteAllTransactions() {
  var yo = firebase.auth().currentUser.uid;

  firebase
    .firestore()
    .collection("transactions")
    .where("uid_apostante", "==", yo)
    .delete();
}

export function crearChat() {
  //Creacion de un chat entre dos personas
  var yo = firebase.auth().currentUser.uid;
  var colega = document.getElementById("colega").value;

  firebase
    .firestore()
    .collection("chats")
    .add({
      isGroup: false,
      name: null
    })
    .then(function (docRef) {
      firebase
        .firestore()
        .collection("chats")
        .doc(docRef.id)
        .collection("members")
        .add({
          uid: yo,
          isAdmin: false
        });

      firebase
        .firestore()
        .collection("chats")
        .doc(docRef.id)
        .collection("members")
        .add({
          uid: colega,
          isAdmin: false
        });

      firebase //Mensaje de inicio, puede ser ignorado
        .firestore()
        .collection("chats")
        .doc(docRef.id)
        .collection("messages")
        .add({
          sender: yo,
          text: "Primer mensaje",
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
    });
}

export function chatear() {
  var yo = firebase.auth().currentUser.uid;
  var colega = document.getElementById("colega").value;
  var mensaje = document.getElementById("mensaje").value;

  var solicitudes = firebase.firestore().collection("friendships");

  var query = solicitudes.where("uid_a", "==", yo).where("uid_b", "==", colega);

  var reverseQuery = solicitudes
    .where("uid_a", "==", colega)
    .where("uid_b", "==", yo);

  query
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().status === "ACCEPTED") {
          noEsGrupo(colega, mensaje);
        } else {
          alert("No sois amigos.");
        }
      });
    })
    .catch(function (error) {});

  reverseQuery
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().status === "ACCEPTED") {
          noEsGrupo(colega, mensaje);
        } else {
          alert("No sois amigos.");
        }
      });
    })
    .catch(function (error) {});
}

function noEsGrupo(colega, mensaje) {
  firebase
    .firestore()
    .collection("chats")
    .where("isGroup", "==", false)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        buscarAmigo(doc, colega, mensaje);
      });
    });
}
function buscarAmigo(chat, colega, mensaje) {
  var yo = firebase.auth().currentUser.uid;

  firebase
    .firestore()
    .collection("chats")
    .doc(chat.id)
    .collection("members")
    .where("uid", "==", yo)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        añadirMensaje(chat, colega, mensaje);
      });
    });
}

function añadirMensaje(chat, colega, mensaje) {
  var yo = firebase.auth().currentUser.uid;

  firebase
    .firestore()
    .collection("chats")
    .doc(chat.id)
    .collection("members")
    .where("uid", "==", colega)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        firebase
          .firestore()
          .collection("chats")
          .doc(chat.id)
          .collection("messages")
          .add({
            sender: yo,
            text: mensaje,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
          });
      });
    });
}

export function crearChatGrupo() {
  //Creacion de un chat entre dos personas
  var yo = firebase.auth().currentUser.uid;
  var nombre = document.getElementById("mensaje").value;

  firebase
    .firestore()
    .collection("chats")
    .add({
      isGroup: true,
      name: nombre
    })
    .then(function (docRef) {
      firebase
        .firestore()
        .collection("chats")
        .doc(docRef.id)
        .collection("members")
        .add({
          uid: yo,
          isAdmin: true
        });
    });
}

export function devolverChatsGrupo() {
  firebase
    .firestore()
    .collection("chats")
    .where("isGroup", "==", true)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        miGrupo(doc);
      });
    });
}

function miGrupo(chat) {
  var yo = firebase.auth().currentUser.uid;

  firebase
    .firestore()
    .collection("chats")
    .doc(chat.id)
    .collection("members")
    .where("uid", "==", yo)
    //.where("isAdmin", "==", true)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {});
    });
}

export function chatearGrupo() {
  var yo = firebase.auth().currentUser.uid;
  var grupo = document.getElementById("grupo").value;
  var mensaje = document.getElementById("mensaje").value;

  firebase
    .firestore()
    .collection("chats")
    .doc(grupo)
    .collection("members")
    .where("uid", "==", yo)
    //.where("isAdmin", "==", true)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        firebase
          .firestore()
          .collection("chats")
          .doc(grupo)
          .collection("messages")
          .add({
            sender: yo,
            text: mensaje,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
          });
      });
    });
}

export function añadirUsuario() {
  var yo = firebase.auth().currentUser.uid;
  var colega = document.getElementById("colega").value;
  var grupo = document.getElementById("grupo").value;

  var solicitudes = firebase.firestore().collection("friendships");

  var query = solicitudes.where("uid_a", "==", yo).where("uid_b", "==", colega);

  var reverseQuery = solicitudes
    .where("uid_a", "==", colega)
    .where("uid_b", "==", yo);

  query
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().status === "ACCEPTED") {
          confirmarUsuario(colega, grupo);
        } else {
          alert("No sois amigos.");
        }
      });
    })
    .catch(function (error) {});

  reverseQuery
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().status === "ACCEPTED") {
          confirmarUsuario(colega, grupo);
        } else {
          alert("No sois amigos.");
        }
      });
    })
    .catch(function (error) {});
}

export function confirmarUsuario(colega, grupo) {
  var yo = firebase.auth().currentUser.uid;

  firebase
    .firestore()
    .collection("chats")
    .doc(grupo)
    .collection("members")
    .where("uid", "==", yo)
    .where("isAdmin", "==", true)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        firebase
          .firestore()
          .collection("chats")
          .doc(grupo)
          .collection("members")
          .add({
            isAdmin: false,
            uid: colega
          });
      });
    });
}
