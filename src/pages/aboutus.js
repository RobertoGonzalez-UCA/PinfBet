import React from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function AboutUs() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Nuestro Equipo
            </h1>
            <div class="bg-gray-200 rounded p-3 mt-4 mx-80">
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base italic">
                «Recuerda que de la
                conducta de cada uno
                depende el destino de
                todos»
              </p>
              <p class="mt-1 italic font-bold">
                Alejandro Magno
              </p>
            </div>
          </div>
          <div class="flex flex-wrap -m-2">
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center p-4 rounded-lg">
                <div class="flex-grow"></div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://i.imgur.com/q385Ahc.png"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Roberto González
                    Álvarez
                  </h2>
                  <p class="text-gray-500">
                    CTO, DevOps
                  </p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center p-4 rounded-lg">
                <div class="flex-grow"></div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://i.imgur.com/q385Ahc.png"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Juan Carlos Camacho
                    Carribero
                  </h2>
                  <p class="text-gray-500">
                    Diseñador,
                    Desarrollador IU
                  </p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://i.imgur.com/q385Ahc.png"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Alfonso Ponce
                    Navarro
                  </h2>
                  <p class="text-gray-500">
                    Documentador,
                    Analista
                  </p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://i.imgur.com/q385Ahc.png"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Ezequiel Jiménez
                    García
                  </h2>
                  <p class="text-gray-500">
                    Programador de
                    backend
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
