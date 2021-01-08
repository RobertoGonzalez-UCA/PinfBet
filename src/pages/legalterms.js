import React from "react";

import Navbar from "../components/navbar";
import Chat from "../components/chat";
import Blocktextleft from "../components/blocktextleft";
import Blocktextright from "../components/blocktextright";

import firebase from "firebase/app";
import "firebase/auth";

export default function Legalterms() {
  var user = firebase.auth()
    .currentUser;

  return (
    <div>
      {user && (
        <div>
          <Navbar />
          <Chat />
          <h2 class="text-gray-900 text-2xl title-font font-medium mt-16 text-center">
            Términos legales
          </h2>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-6 mx-auto">
              <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div class="flex-grow mb-16 bg-gray-200 rounded p-4 sm:text-left text-center mt-5 sm:mt-0">
                  <p class="leading-relaxed text-base">
                    La presente Política
                    de Privacidad
                    establece los
                    términos en que se
                    usa y protege la
                    información que es
                    proporcionada por
                    sus usuarios al
                    momento de utilizar
                    el servicio PinfBet.
                    Estamos
                    comprometidos con la
                    seguridad de
                    nuestros usuarios.
                    Cuando le pedimos
                    llenar los campos de
                    información personal
                    con la que usted
                    pueda ser
                    identificado, lo
                    hacemos asegurando
                    que sólo se empleará
                    de acuerdo con los
                    términos de este
                    documento. <br />
                    <br />
                    Esta Política de
                    Privacidad puede
                    cambiar con el
                    tiempo o ser
                    actualizada por lo
                    que le recomendamos
                    y enfatizamos
                    revisar
                    continuamente esta
                    página para
                    asegurarse que está
                    de acuerdo con
                    dichos cambios.
                  </p>
                </div>
              </div>
              <Blocktextleft
                title="Información recogida"
                icon={
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="form"
                    width="4em"
                    height="4em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z"></path>
                    <path d="M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z"></path>
                  </svg>
                }
              >
                PinfBet recoge datos
                personales de sus
                usuarios tal y como,
                pero no limitado a:
                nombre, apellidos,
                correo electrónico,
                teléfono, expediente
                académico y todos sus
                datos relacionados.
              </Blocktextleft>
              <Blocktextright
                title="Uso de la información"
                icon={
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="edit"
                    width="4em"
                    height="4em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
                  </svg>
                }
              >
                Nuestro sitio web emplea
                la información con el
                fin de proporcionar el
                mejor servicio posible,
                particularmente para
                mantener un registro de
                usuarios, almacenar los
                datos de los usuarios y
                mostrarlos en el proceso
                de realizar una apuesta.
                Es posible que sean
                enviados correos
                electrónicos
                periódicamente a través
                de nuestro sitio a la
                dirección proporcionada
                para comunicarse con el
                usuario.
                <br />
                <br />
                De la información
                recogida, se hará
                pública a todos los
                usuarios de la
                plataforma la siguiente
                información: nombre,
                apellidos, foto de
                perfil, curso actual,
                universidad y
                estadísticas derivadas
                del rendimiento de las
                apuestas realizadas por
                el usuario u otros datos
                del usuario. Este tipo
                de información podrá ser
                consultada por cualquier
                otro usuario de PinfBet.
                <br />
                <br />
                Estamos comprometidos a
                cumplir con el
                compromiso de mantener
                su información segura.
                Usamos los sistemas más
                avanzados y los
                actualizamos
                constantemente para
                asegurarnos que no
                exista ningún acceso no
                autorizado. Cumplimos
                con las exigencias de la
                Unión Europea, y no
                venderemos sus datos
                personales a ninguna
                empresa externa.
              </Blocktextright>
              <Blocktextleft
                title="Cookies"
                icon={
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="cloud"
                    width="4em"
                    height="4em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3zm36.3 281a123.07 123.07 0 01-87.6 36.3H263.9c-33.1 0-64.2-12.9-87.6-36.3A123.3 123.3 0 01140 612c0-28 9.1-54.3 26.2-76.3a125.7 125.7 0 0166.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10c54.3 14.5 92.1 63.8 92.1 120 0 33.1-12.9 64.3-36.3 87.7z"></path>
                  </svg>
                }
              >
                Una cookie se refiere a
                un fichero que es
                enviado con la finalidad
                de solicitar permiso
                para almacenarse en su
                ordenador. Al
                registrarse en la
                plataforma acepta dicho
                fichero, es decir, la
                cookie es creada, y
                ocupa un espacio en
                memoria en su equipo.
                <br />
                <br />
                Debido a la normativa
                Europea vigente, usted
                es libre de no aceptar
                las cookies ofrecidas
                por nuestro servicio.
                Sin embargo, en dicha
                posición, no será
                posible usar PinfBet por
                parte del usuario. Al
                usar el servicio, usted
                acepta el uso de
                cookies. Esto le será
                recordado en el registro
                de PinfBet. <br />
                <br />
                El contenido de nuestras
                cookies consiste en las
                cookies usadas por los
                servicios de publicidad
                de Google Adsense, los
                cuales rastrean su
                actividad en su sesión y
                hacen comparaciones de
                los datos recolectados
                en su tiempo de
                funcionamiento para
                mostrarle una publicidad
                personalizada y
                ofrecerle productos más
                relevantes para usted.
              </Blocktextleft>
              <Blocktextright
                title="Enlaces a terceros"
                icon={
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="link"
                    width="4em"
                    height="4em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"></path>
                  </svg>
                }
              >
                Este sitio web pudiera
                contener enlaces a otros
                sitios que pudieran ser
                de su interés. Una vez
                que usted dé clic en
                estos enlaces y abandone
                nuestra página, ya no
                tenemos control sobre al
                sitio al que es
                redirigido y por lo
                tanto no somos
                responsables de los
                términos o privacidad ni
                de la protección de sus
                datos en esos otros
                sitios terceros. Dichos
                sitios están sujetos a
                sus propias políticas de
                privacidad por lo cual
                es recomendable que los
                consulte para confirmar
                que usted está de
                acuerdo con estas.
              </Blocktextright>
              <Blocktextleft
                title="Control de su información personal"
                icon={
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="user"
                    width="4em"
                    height="4em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
                  </svg>
                }
              >
                En cualquier momento
                usted puede restringir
                la recopilación o el uso
                de la información
                personal que es
                proporcionada a nuestro
                sitio web. Puede
                solicitar el borrado de
                su cuenta, el cual
                acabará con todos sus
                datos borrados.
                <br />
                <br />
                Esta compañía no
                venderá, cederá ni
                distribuirá la
                información personal que
                es recopilada sin su
                consentimiento, salvo
                que sea requerido por un
                juez con un orden
                judicial.
              </Blocktextleft>
              <Blocktextright
                title="Funcionamiento de apuestas"
                icon={
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="dollar-circle"
                    width="4em"
                    height="4em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"></path>
                  </svg>
                }
              >
                Como su propio nombre
                indica, PinfBet es una
                página de apuestas. El
                crédito disponible es
                calculado a raíz de las
                notas del usuario de la
                página, y dicho crédito
                puede usarse para
                apostar.
                <br />
                <br />
                Un usuario solo puede
                apostar, sobre alguno de
                sus amigos. Para ser
                amigo de otra persona,
                es necesario que uno de
                los dos envíe una
                solicitud al usuario
                (disponible desde el
                perfil del otro) y que
                el otro acepte dicha
                solicitud. A partir de
                ese momento, los dos
                usuarios pueden
                establecer apuestas
                entre ellos de forma
                recíproca.
                <br />
                <br />
                Cada apuesta pide cuatro
                valores: <br />
                <br />- Obligatorios:
                apuesta
                aprobado/suspenso
                (indicar si el apostado
                suspenderá o aprobará) y
                la cantidad de créditos
                a apostar a
                aprobado/suspenso.
                <br />
                - Opcional: apuesta nota
                predecida (indicar la
                nota que el usuario
                predice que el apostado
                obtendrá) y la cantidad
                de créditos a apostar
                para nota predecida.
                <br />
                <br />
                Es necesario rellenar al
                menos los dos primeros
                campos para realizar una
                apuesta, por supuesto
                teniendo un crédito
                mayor o igual al que se
                introduce. El campo nota
                predecida es opcional,
                pero es necesario haber
                realizado una apuesta
                aprobado/suspenso para
                realizar una apuesta de
                nota predecida. Las
                apuestas de
                aprobado/suspenso y nota
                predecida tienen
                cantidades de créditos
                apostados
                independientes.
                <br />
                <br />- En caso de que
                el primer usuario
                acierte en el aprobado o
                suspenso, se le proveerá
                de una bonificación del
                50% de los créditos
                apostados al
                aprobado/suspenso. Esto
                es, si se apostaron 30
                créditos, el usuario
                recibirá 45 créditos.{" "}
                <br />
                <br />- En caso de que,
                habiendo previamente
                realizado una apuesta
                aprobado/suspenso y una
                apuesta de nota
                predecida, la nota
                predecida coincida con
                la nota actual (con un
                margen de 1 décima), se
                le concederá al usuario
                una bonificación del
                200% de créditos
                apostados a nota
                predecida. Así, en caso
                de acertar si aprueba o
                suspende, y además la
                nota obtenida, el
                usuario, habiendo
                apostado en
                aprobado/suspenso,
                recibiría 45 créditos de
                los 30 iniciales, y
                además, recibiría 60
                créditos de los 20
                originalmente apostados
                en nota predecida. Así,
                habiendo apostado 50
                créditos en conjunto, el
                cliente recibirá 105
                créditos.
                <br />
                <br />- En caso de
                acertar en el
                aprobado/suspenso pero
                no en la nota predecida,
                el usuario perderá los
                créditos apostados en
                nota predecida, pero sin
                afectar a los ganados
                por aprobado/suspenso.
                Por ejemplo, si el
                usuario acierta en
                aprobado/suspenso
                habiendo apostado 50
                créditos en ese campo, y
                apuesta 80 créditos en
                nota predecida, pero
                falla en tal apuesta,
                perdería los 80 créditos
                apostados, y aún
                habiendo ganado 75
                créditos de
                aprobado/suspenso, el
                balance total sería una
                pérdida de 5 créditos.
                Por supuesto, no hay
                restricciones en
                cantidad a la hora de
                apostar en los dos
                campos, más allá de que
                la suma de las dos sea
                igual o inferior al
                saldo total del usuario.
                <br />
                <br />- En caso de no
                acertar en el aprobado o
                suspenso, el apostante
                perderá la totalidad de
                los créditos apostados.
                <br />
                <br /> - No es posible
                acertar en notas
                predecida y fallar en
                aprobado/suspenso (más
                información a
                continuación).
                <br />
                <br />
                El valor de la nota
                depende de si el usuario
                elige “aprobado” o
                “suspenso”. Así, si el
                usuario elige aprobado,
                sólo podrá elegir notas
                del 5 al 10, y si elige
                suspenso, del 0 al 4.9.
                Como excepción a la
                regla de la décima, ésta
                no se aplica en el
                límite de 4.9 a 5. Es
                decir, si el usuario
                apuesta que una persona
                aprobará con un 5, pero
                suspende con un 4.9, aún
                estando cerca una nota
                de la otra en 1 décima,
                se dará la apuesta por
                perdida, pues no
                coincide el campo
                inicial, que es
                “aprobado” o “suspenso”,
                y viceversa. Así, no es
                posible acertar en nota
                predecida y fallar en
                aprobado/suspenso.
              </Blocktextright>
              <Blocktextleft
                title="Aspectos sociales."
                icon={
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="team"
                    width="4em"
                    height="4em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"></path>
                  </svg>
                }
              >
                Es posible buscar a un
                usuario de PinfBet por
                su nombre o apellidos.
                La información como el
                nombre, apellido, curso
                actual y universidad es
                pública todos los
                usuarios.
                <br />
                <br />
                Sin embargo, solo podrá
                hacerse uso del chat
                individual para aquellas
                personas que sean amigas
                en la plataforma. Para
                ser amigo de otra
                persona, es necesario
                que uno de los dos envíe
                una solicitud al usuario
                (disponible desde el
                perfil del otro) y que
                el otro acepte dicha
                solicitud. A partir de
                ese momento, los dos
                usuarios pueden hacer
                uso del chat entre
                ellos.
                <br />
                <br />
                Para el uso del chat
                grupal, no es requisito
                que los participantes
                sean todos amigos entre
                ellos. Cualquier usuario
                puede crear un grupo y
                añadir exclusivamente a
                miembros que sean amigos
                del susodicho.
              </Blocktextleft>
              <Blocktextright
                title="Requisitos de uso de PinfBet."
                icon={
                  <svg
                    viewBox="0 0 1024 1024"
                    focusable="false"
                    data-icon="bars"
                    width="4em"
                    height="4em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"></path>
                  </svg>
                }
              >
                Requerimos el uso de un
                teléfono móvil y una
                cuenta de correo
                universitario para
                realizar el registro de
                una cuenta, los cuales
                deben estar operativos y
                ser propiedad del
                usuario.
                <br />
                <br />
                Este servicio es de uso
                exclusivo de alumnos de
                la Universidad de Cádiz,
                y al aceptar estos
                términos y condiciones
                acepta que en el momento
                que se demuestre lo
                contrario de su persona,
                su cuenta quedará sujeta
                a ser borrada e
                inusable.
                <br />
                <br />
                Los datos personales
                introducidos deben ser
                los reales del usuario,
                y al aceptar estos
                términos y condiciones
                acepta que en el momento
                que se demuestre lo
                contrario de su persona,
                su cuenta quedará sujeta
                a ser borrada e
                inusable.
                <br />
                <br />
                Por último, no se
                tolerará el uso de la
                web con intención
                maliciosa o suplantación
                de identidad de ningún
                tipo, así que cualquier
                uso que quede fuera de
                lo expuesto en este
                documento deja la cuenta
                sujeta a volverse
                inusable.
                <br />
                <br />
                Se reserva el derecho de
                cambiar los términos de
                la presente Política de
                Privacidad en cualquier
                momento.
              </Blocktextright>
            </div>
          </section>
        </div>
      )}
      {!user && (
        <div>
          <h2 class="text-gray-900 text-2xl title-font font-medium mt-16 text-center">
            Términos legales
          </h2>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-6 mx-auto">
              <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div class="flex-grow mb-16 bg-gray-200 rounded p-4 sm:text-left text-center mt-5 sm:mt-0">
                  <p class="leading-relaxed text-base">
                    La presente Política
                    de Privacidad
                    establece los
                    términos en que se
                    usa y protege la
                    información que es
                    proporcionada por
                    sus usuarios al
                    momento de utilizar
                    el servicio PinfBet.
                    Estamos
                    comprometidos con la
                    seguridad de
                    nuestros usuarios.
                    Cuando le pedimos
                    llenar los campos de
                    información personal
                    con la que usted
                    pueda ser
                    identificado, lo
                    hacemos asegurando
                    que sólo se empleará
                    de acuerdo con los
                    términos de este
                    documento. <br />
                    <br />
                    Esta Política de
                    Privacidad puede
                    cambiar con el
                    tiempo o ser
                    actualizada por lo
                    que le recomendamos
                    y enfatizamos
                    revisar
                    continuamente esta
                    página para
                    asegurarse que está
                    de acuerdo con
                    dichos cambios.
                  </p>
                </div>
              </div>
              <Blocktextleft
                title="Información recogida"
                icon={
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="form"
                    width="4em"
                    height="4em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z"></path>
                    <path d="M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z"></path>
                  </svg>
                }
              >
                PinfBet recoge datos
                personales de sus
                usuarios tal y como,
                pero no limitado a:
                nombre, apellidos,
                correo electrónico,
                teléfono, expediente
                académico y todos sus
                datos relacionados.
              </Blocktextleft>
              <Blocktextright
                title="Uso de la información"
                icon={
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="edit"
                    width="4em"
                    height="4em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
                  </svg>
                }
              >
                Nuestro sitio web emplea
                la información con el
                fin de proporcionar el
                mejor servicio posible,
                particularmente para
                mantener un registro de
                usuarios, almacenar los
                datos de los usuarios y
                mostrarlos en el proceso
                de realizar una apuesta.
                Es posible que sean
                enviados correos
                electrónicos
                periódicamente a través
                de nuestro sitio a la
                dirección proporcionada
                para comunicarse con el
                usuario.
                <br />
                <br />
                De la información
                recogida, se hará
                pública a todos los
                usuarios de la
                plataforma la siguiente
                información: nombre,
                apellidos, foto de
                perfil, curso actual,
                universidad y
                estadísticas derivadas
                del rendimiento de las
                apuestas realizadas por
                el usuario u otros datos
                del usuario. Este tipo
                de información podrá ser
                consultada por cualquier
                otro usuario de PinfBet.
                <br />
                <br />
                Estamos comprometidos a
                cumplir con el
                compromiso de mantener
                su información segura.
                Usamos los sistemas más
                avanzados y los
                actualizamos
                constantemente para
                asegurarnos que no
                exista ningún acceso no
                autorizado. Cumplimos
                con las exigencias de la
                Unión Europea, y no
                venderemos sus datos
                personales a ninguna
                empresa externa.
              </Blocktextright>
              <Blocktextleft
                title="Cookies"
                icon={
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="cloud"
                    width="4em"
                    height="4em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3zm36.3 281a123.07 123.07 0 01-87.6 36.3H263.9c-33.1 0-64.2-12.9-87.6-36.3A123.3 123.3 0 01140 612c0-28 9.1-54.3 26.2-76.3a125.7 125.7 0 0166.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10c54.3 14.5 92.1 63.8 92.1 120 0 33.1-12.9 64.3-36.3 87.7z"></path>
                  </svg>
                }
              >
                Una cookie se refiere a
                un fichero que es
                enviado con la finalidad
                de solicitar permiso
                para almacenarse en su
                ordenador. Al
                registrarse en la
                plataforma acepta dicho
                fichero, es decir, la
                cookie es creada, y
                ocupa un espacio en
                memoria en su equipo.
                <br />
                <br />
                Debido a la normativa
                Europea vigente, usted
                es libre de no aceptar
                las cookies ofrecidas
                por nuestro servicio.
                Sin embargo, en dicha
                posición, no será
                posible usar PinfBet por
                parte del usuario. Al
                usar el servicio, usted
                acepta el uso de
                cookies. Esto le será
                recordado en el registro
                de PinfBet. <br />
                <br />
                El contenido de nuestras
                cookies consiste en las
                cookies usadas por los
                servicios de publicidad
                de Google Adsense, los
                cuales rastrean su
                actividad en su sesión y
                hacen comparaciones de
                los datos recolectados
                en su tiempo de
                funcionamiento para
                mostrarle una publicidad
                personalizada y
                ofrecerle productos más
                relevantes para usted.
              </Blocktextleft>
              <Blocktextright
                title="Enlaces a terceros"
                icon={
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="link"
                    width="4em"
                    height="4em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"></path>
                  </svg>
                }
              >
                Este sitio web pudiera
                contener enlaces a otros
                sitios que pudieran ser
                de su interés. Una vez
                que usted dé clic en
                estos enlaces y abandone
                nuestra página, ya no
                tenemos control sobre al
                sitio al que es
                redirigido y por lo
                tanto no somos
                responsables de los
                términos o privacidad ni
                de la protección de sus
                datos en esos otros
                sitios terceros. Dichos
                sitios están sujetos a
                sus propias políticas de
                privacidad por lo cual
                es recomendable que los
                consulte para confirmar
                que usted está de
                acuerdo con estas.
              </Blocktextright>
              <Blocktextleft
                title="Control de su información personal"
                icon={
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="user"
                    width="4em"
                    height="4em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
                  </svg>
                }
              >
                En cualquier momento
                usted puede restringir
                la recopilación o el uso
                de la información
                personal que es
                proporcionada a nuestro
                sitio web. Puede
                solicitar el borrado de
                su cuenta, el cual
                acabará con todos sus
                datos borrados.
                <br />
                <br />
                Esta compañía no
                venderá, cederá ni
                distribuirá la
                información personal que
                es recopilada sin su
                consentimiento, salvo
                que sea requerido por un
                juez con un orden
                judicial.
              </Blocktextleft>
              <Blocktextright
                title="Funcionamiento de apuestas"
                icon={
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="dollar-circle"
                    width="4em"
                    height="4em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"></path>
                  </svg>
                }
              >
                Como su propio nombre
                indica, PinfBet es una
                página de apuestas. El
                crédito disponible es
                calculado a raíz de las
                notas del usuario de la
                página, y dicho crédito
                puede usarse para
                apostar.
                <br />
                <br />
                Un usuario solo puede
                apostar, sobre alguno de
                sus amigos. Para ser
                amigo de otra persona,
                es necesario que uno de
                los dos envíe una
                solicitud al usuario
                (disponible desde el
                perfil del otro) y que
                el otro acepte dicha
                solicitud. A partir de
                ese momento, los dos
                usuarios pueden
                establecer apuestas
                entre ellos de forma
                recíproca.
                <br />
                <br />
                Cada apuesta pide cuatro
                valores: <br />
                <br />- Obligatorios:
                apuesta
                aprobado/suspenso
                (indicar si el apostado
                suspenderá o aprobará) y
                la cantidad de créditos
                a apostar a
                aprobado/suspenso.
                <br />
                - Opcional: apuesta nota
                predecida (indicar la
                nota que el usuario
                predice que el apostado
                obtendrá) y la cantidad
                de créditos a apostar
                para nota predecida.
                <br />
                <br />
                Es necesario rellenar al
                menos los dos primeros
                campos para realizar una
                apuesta, por supuesto
                teniendo un crédito
                mayor o igual al que se
                introduce. El campo nota
                predecida es opcional,
                pero es necesario haber
                realizado una apuesta
                aprobado/suspenso para
                realizar una apuesta de
                nota predecida. Las
                apuestas de
                aprobado/suspenso y nota
                predecida tienen
                cantidades de créditos
                apostados
                independientes.
                <br />
                <br />- En caso de que
                el primer usuario
                acierte en el aprobado o
                suspenso, se le proveerá
                de una bonificación del
                50% de los créditos
                apostados al
                aprobado/suspenso. Esto
                es, si se apostaron 30
                créditos, el usuario
                recibirá 45 créditos.{" "}
                <br />
                <br />- En caso de que,
                habiendo previamente
                realizado una apuesta
                aprobado/suspenso y una
                apuesta de nota
                predecida, la nota
                predecida coincida con
                la nota actual (con un
                margen de 1 décima), se
                le concederá al usuario
                una bonificación del
                200% de créditos
                apostados a nota
                predecida. Así, en caso
                de acertar si aprueba o
                suspende, y además la
                nota obtenida, el
                usuario, habiendo
                apostado en
                aprobado/suspenso,
                recibiría 45 créditos de
                los 30 iniciales, y
                además, recibiría 60
                créditos de los 20
                originalmente apostados
                en nota predecida. Así,
                habiendo apostado 50
                créditos en conjunto, el
                cliente recibirá 105
                créditos.
                <br />
                <br />- En caso de
                acertar en el
                aprobado/suspenso pero
                no en la nota predecida,
                el usuario perderá los
                créditos apostados en
                nota predecida, pero sin
                afectar a los ganados
                por aprobado/suspenso.
                Por ejemplo, si el
                usuario acierta en
                aprobado/suspenso
                habiendo apostado 50
                créditos en ese campo, y
                apuesta 80 créditos en
                nota predecida, pero
                falla en tal apuesta,
                perdería los 80 créditos
                apostados, y aún
                habiendo ganado 75
                créditos de
                aprobado/suspenso, el
                balance total sería una
                pérdida de 5 créditos.
                Por supuesto, no hay
                restricciones en
                cantidad a la hora de
                apostar en los dos
                campos, más allá de que
                la suma de las dos sea
                igual o inferior al
                saldo total del usuario.
                <br />
                <br />- En caso de no
                acertar en el aprobado o
                suspenso, el apostante
                perderá la totalidad de
                los créditos apostados.
                <br />
                <br /> - No es posible
                acertar en notas
                predecida y fallar en
                aprobado/suspenso (más
                información a
                continuación).
                <br />
                <br />
                El valor de la nota
                depende de si el usuario
                elige “aprobado” o
                “suspenso”. Así, si el
                usuario elige aprobado,
                sólo podrá elegir notas
                del 5 al 10, y si elige
                suspenso, del 0 al 4.9.
                Como excepción a la
                regla de la décima, ésta
                no se aplica en el
                límite de 4.9 a 5. Es
                decir, si el usuario
                apuesta que una persona
                aprobará con un 5, pero
                suspende con un 4.9, aún
                estando cerca una nota
                de la otra en 1 décima,
                se dará la apuesta por
                perdida, pues no
                coincide el campo
                inicial, que es
                “aprobado” o “suspenso”,
                y viceversa. Así, no es
                posible acertar en nota
                predecida y fallar en
                aprobado/suspenso.
              </Blocktextright>
              <Blocktextleft
                title="Aspectos sociales."
                icon={
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="team"
                    width="4em"
                    height="4em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"></path>
                  </svg>
                }
              >
                Es posible buscar a un
                usuario de PinfBet por
                su nombre o apellidos.
                La información como el
                nombre, apellido, curso
                actual y universidad es
                pública todos los
                usuarios.
                <br />
                <br />
                Sin embargo, solo podrá
                hacerse uso del chat
                individual para aquellas
                personas que sean amigas
                en la plataforma. Para
                ser amigo de otra
                persona, es necesario
                que uno de los dos envíe
                una solicitud al usuario
                (disponible desde el
                perfil del otro) y que
                el otro acepte dicha
                solicitud. A partir de
                ese momento, los dos
                usuarios pueden hacer
                uso del chat entre
                ellos.
                <br />
                <br />
                Para el uso del chat
                grupal, no es requisito
                que los participantes
                sean todos amigos entre
                ellos. Cualquier usuario
                puede crear un grupo y
                añadir exclusivamente a
                miembros que sean amigos
                del susodicho.
              </Blocktextleft>
              <Blocktextright
                title="Requisitos de uso de PinfBet."
                icon={
                  <svg
                    viewBox="0 0 1024 1024"
                    focusable="false"
                    data-icon="bars"
                    width="4em"
                    height="4em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"></path>
                  </svg>
                }
              >
                Requerimos el uso de un
                teléfono móvil y una
                cuenta de correo
                universitario para
                realizar el registro de
                una cuenta, los cuales
                deben estar operativos y
                ser propiedad del
                usuario.
                <br />
                <br />
                Este servicio es de uso
                exclusivo de alumnos de
                la Universidad de Cádiz,
                y al aceptar estos
                términos y condiciones
                acepta que en el momento
                que se demuestre lo
                contrario de su persona,
                su cuenta quedará sujeta
                a ser borrada e
                inusable.
                <br />
                <br />
                Los datos personales
                introducidos deben ser
                los reales del usuario,
                y al aceptar estos
                términos y condiciones
                acepta que en el momento
                que se demuestre lo
                contrario de su persona,
                su cuenta quedará sujeta
                a ser borrada e
                inusable.
                <br />
                <br />
                Por último, no se
                tolerará el uso de la
                web con intención
                maliciosa o suplantación
                de identidad de ningún
                tipo, así que cualquier
                uso que quede fuera de
                lo expuesto en este
                documento deja la cuenta
                sujeta a volverse
                inusable.
                <br />
                <br />
                Se reserva el derecho de
                cambiar los términos de
                la presente Política de
                Privacidad en cualquier
                momento.
              </Blocktextright>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
