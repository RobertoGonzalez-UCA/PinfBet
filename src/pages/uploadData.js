import React from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Input from "../components/input";
import Label from "../components/label";

export default function UploadData() {
  return (
    <>
      <Navbar />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto flex flex-wrap">
          <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">
              1
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="download"
                  width="3em"
                  height="3em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
                </svg>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Descarga tu expediente
                </h2>
                <p class="leading-relaxed">
                  Deberás de ingresar a{" "}
                  <a
                    href="https://portalservicios.uca.es/ServiciosApp/faces/inicioServicios"
                    className="text-green-500 inline-flex items-center hover:underline"
                    target="_blank"
                  >
                    Portal de servicios
                    UCA
                  </a>{" "}
                  e identificarte.
                </p>
                <p class="mt-2 leading-relaxed italic">
                  Datos académicos >
                  Expedientes >
                  Selecciona el grado
                  cursando > Obtener
                  informe > Descargar
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="container"
                  width="3em"
                  height="3em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V687h97.9c11.6 32.8 32 62.3 59.1 84.7 34.5 28.5 78.2 44.3 123 44.3s88.5-15.7 123-44.3c27.1-22.4 47.5-51.9 59.1-84.7H792v-63H643.6l-5.2 24.7C626.4 708.5 573.2 752 512 752s-114.4-43.5-126.5-103.3l-5.2-24.7H232V136h560v752zM320 341h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 160h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"></path>
                </svg>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Descarga tu matrícula
                </h2>
                <p class="leading-relaxed">
                  Deberás de ingresar a{" "}
                  <a
                    href="https://portalservicios.uca.es/ServiciosApp/faces/inicioServicios"
                    className="text-green-500 inline-flex items-center hover:underline"
                    target="_blank"
                  >
                    Portal de servicios
                    UCA
                  </a>{" "}
                  e identificarte.
                </p>
                <p class="mt-2 leading-relaxed italic">
                  Matrícula > Resumen de
                  matrícula > Selecciona
                  el grado cursando >
                  Selecciona el curso
                  académico actual >
                  Recibo de matrícula >
                  Descargar
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="file-sync"
                  width="3em"
                  height="3em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M296 256c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm192 200v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8zm-48 396H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm104.1-115.6c1.8-34.5 16.2-66.8 40.8-91.4 26.2-26.2 62-41 99.1-41 37.4 0 72.6 14.6 99.1 41 3.2 3.2 6.3 6.6 9.2 10.1L769.2 673a8 8 0 003 14.1l93.3 22.5c5 1.2 9.8-2.6 9.9-7.7l.6-95.4a8 8 0 00-12.9-6.4l-20.3 15.8C805.4 569.6 748.1 540 684 540c-109.9 0-199.6 86.9-204 195.7-.2 4.5 3.5 8.3 8 8.3h48.1c4.3 0 7.8-3.3 8-7.6zM880 744h-48.1c-4.3 0-7.8 3.3-8 7.6-1.8 34.5-16.2 66.8-40.8 91.4-26.2 26.2-62 41-99.1 41-37.4 0-72.6-14.6-99.1-41-3.2-3.2-6.3-6.6-9.2-10.1l23.1-17.9a8 8 0 00-3-14.1l-93.3-22.5c-5-1.2-9.8 2.6-9.9 7.7l-.6 95.4a8 8 0 0012.9 6.4l20.3-15.8C562.6 918.4 619.9 948 684 948c109.9 0 199.6-86.9 204-195.7.2-4.5-3.5-8.3-8-8.3z"></path>
                </svg>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Convierte los archivos
                  a texto
                </h2>
                <p class="leading-relaxed">
                  Para poder validar tus
                  archivos necesitamos
                  que nos los des en
                  texto. Ingresa a{" "}
                  <a
                    href="https://www.zamzar.com/es/convert/pdf-to-txt/"
                    className="text-green-500 inline-flex items-center hover:underline"
                    target="_blank"
                  >
                    Zamzar
                  </a>{" "}
                  para convertirlos.
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">
              4
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="upload"
                  width="3em"
                  height="3em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
                </svg>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Sube tus archivos
                </h2>
                <form>
                  <div className="flex">
                    <div>
                      <Label className="font-medium text-base">
                        Expediente
                      </Label>
                      <Input
                        className="bg-gray-100 rounded-lg mr-4"
                        id="expediente"
                        type="file"
                      ></Input>
                    </div>
                    <div>
                      <Label className="font-medium text-base">
                        Matrícula
                      </Label>
                      <Input
                        className="bg-gray-100 rounded-lg"
                        id="matricula"
                        type="file"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
