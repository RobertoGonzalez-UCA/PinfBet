import React from "react";
import Navbar from "../components/navbar";
import Chat from "../components/chat";
import Button from "../components/button";
import Subject from "../components/subject";
import Footer from "../components/footer";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export default function Profile() {
  var user = firebase.auth()
    .currentUser;

  const [
    spells,
    setSpells
  ] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await firebase
        .firestore()
        .collection("users")
        .where("uid", "==", user.uid)
        .get();

      setSpells(
        data.docs.map((doc) => ({
          ...doc.data()
        }))
      );
    };
    fetchData();
  }, []);

  return (
    <>
      {spells.map((spell) => (
        <div key={spell.uid}>
          <Navbar />
          <Chat />
          <div className="relative">
            <div className="ml-10 my-6 absolute left-0">
              <img
                src="https://i.imgur.com/q385Ahc.png"
                width="140"
                alt="Foto de perfil"
                className="mt-5 mb-3 mx-auto"
              />
              <h1 className="text-xl font-bold title-font text-gray-900 mb-1 text-center">
                {spell.nickname}
              </h1>
              <div
                className="ml-4 mr-4"
                style={{
                  maxWidth: "225px",
                  maxHeight: "100px"
                }}
              >
                <div className="text-gray-500 text-md justify-center text-center mb-4">
                  Cuéntanos algo sobre
                  ti...
                </div>
              </div>
            </div>
          </div>
          <div className="absolute mt-4 left-60 flex">
            <Button>Agregar</Button>
            <Button
              className=""
              variant="tertiary"
            >
              Eliminar
            </Button>
          </div>
          <div className="mt-14 transform scale-90">
            <h2 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-5">
              Asignaturas
            </h2>
            <div className="flex justify-center">
              <Subject
                variant="yellow"
                subjectName="MD"
                subjectFullname=""
              />
              <Subject variant="red" />
              <Subject variant="blue" />
              <Subject variant="green" />
              <Subject variant="purple" />
            </div>
            <div className="flex justify-center">
              <Subject
                variant="yellow"
                subjectName="PCTR"
                subjectFullname=""
              />
              <Subject variant="red" />
              <Subject variant="blue" />
              <Subject variant="green" />
              <Subject variant="purple" />
            </div>
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-10 mx-auto">
                <div class="flex flex-col text-center w-full mb-6">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                    Estadísticas
                  </h1>
                </div>
                <div class="flex flex-wrap m-4 text-center">
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="percentage"
                        fill="currentColor"
                        aria-hidden="true"
                        class="text-green-500 w-12 h-12 mb-3 inline-block"
                      >
                        <path d="M855.7 210.8l-42.4-42.4a8.03 8.03 0 00-11.3 0L168.3 801.9a8.03 8.03 0 000 11.3l42.4 42.4c3.1 3.1 8.2 3.1 11.3 0L855.6 222c3.2-3 3.2-8.1.1-11.2zM304 448c79.4 0 144-64.6 144-144s-64.6-144-144-144-144 64.6-144 144 64.6 144 144 144zm0-216c39.7 0 72 32.3 72 72s-32.3 72-72 72-72-32.3-72-72 32.3-72 72-72zm416 344c-79.4 0-144 64.6-144 144s64.6 144 144 144 144-64.6 144-144-64.6-144-144-144zm0 216c-39.7 0-72-32.3-72-72s32.3-72 72-72 72 32.3 72 72-32.3 72-72 72z"></path>
                      </svg>
                      <h2 class="title-font font-medium text-3xl text-gray-900">
                        {(
                          (spell.hits /
                            spell.fails) *
                          100
                        ).toFixed(2)}
                        %
                      </h2>
                      <p class="leading-relaxed">
                        Ratio de
                        victoria
                      </p>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="rise"
                        fill="currentColor"
                        aria-hidden="true"
                        class="text-green-500 w-12 h-12 mb-3 inline-block"
                      >
                        <path d="M917 211.1l-199.2 24c-6.6.8-9.4 8.9-4.7 13.6l59.3 59.3-226 226-101.8-101.7c-6.3-6.3-16.4-6.2-22.6 0L100.3 754.1a8.03 8.03 0 000 11.3l45 45.2c3.1 3.1 8.2 3.1 11.3 0L433.3 534 535 635.7c6.3 6.2 16.4 6.2 22.6 0L829 364.5l59.3 59.3a8.01 8.01 0 0013.6-4.7l24-199.2c.7-5.1-3.7-9.5-8.9-8.8z"></path>
                      </svg>
                      <h2 class="title-font font-medium text-3xl text-gray-900">
                        {
                          spell.coinsEarned
                        }
                      </h2>
                      <p class="leading-relaxed">
                        PinfCoins
                        Ganados
                      </p>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="field-time"
                        fill="currentColor"
                        aria-hidden="true"
                        class="text-green-500 w-12 h-12 mb-3 inline-block"
                      >
                        <defs>
                          <style></style>
                        </defs>
                        <path d="M945 412H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h256c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM811 548H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h122c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM477.3 322.5H434c-6.2 0-11.2 5-11.2 11.2v248c0 3.6 1.7 6.9 4.6 9l148.9 108.6c5 3.6 12 2.6 15.6-2.4l25.7-35.1v-.1c3.6-5 2.5-12-2.5-15.6l-126.7-91.6V333.7c.1-6.2-5-11.2-11.1-11.2z"></path>
                        <path d="M804.8 673.9H747c-5.6 0-10.9 2.9-13.9 7.7a321 321 0 01-44.5 55.7 317.17 317.17 0 01-101.3 68.3c-39.3 16.6-81 25-124 25-43.1 0-84.8-8.4-124-25-37.9-16-72-39-101.3-68.3s-52.3-63.4-68.3-101.3c-16.6-39.2-25-80.9-25-124 0-43.1 8.4-84.7 25-124 16-37.9 39-72 68.3-101.3 29.3-29.3 63.4-52.3 101.3-68.3 39.2-16.6 81-25 124-25 43.1 0 84.8 8.4 124 25 37.9 16 72 39 101.3 68.3a321 321 0 0144.5 55.7c3 4.8 8.3 7.7 13.9 7.7h57.8c6.9 0 11.3-7.2 8.2-13.3-65.2-129.7-197.4-214-345-215.7-216.1-2.7-395.6 174.2-396 390.1C71.6 727.5 246.9 903 463.2 903c149.5 0 283.9-84.6 349.8-215.8a9.18 9.18 0 00-8.2-13.3z"></path>
                      </svg>
                      <h2 class="title-font font-medium text-3xl text-gray-900">
                        74
                      </h2>
                      <p class="leading-relaxed">
                        Días en la
                        plataforma
                      </p>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="fire"
                        fill="currentColor"
                        aria-hidden="true"
                        class="text-green-500 w-12 h-12 mb-3 inline-block"
                      >
                        <path d="M834.1 469.2A347.49 347.49 0 00751.2 354l-29.1-26.7a8.09 8.09 0 00-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 01-47.5 46.1 352.6 352.6 0 00-100.3 121.5A347.75 347.75 0 00160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0075.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 00760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0027.7-136c0-48.8-10-96.2-29.9-140.9zM713 808.5c-53.7 53.2-125 82.4-201 82.4s-147.3-29.2-201-82.4c-53.5-53.1-83-123.5-83-198.4 0-43.5 9.8-85.2 29.1-124 18.8-37.9 46.8-71.8 80.8-97.9a349.6 349.6 0 0058.6-56.8c25-30.5 44.6-64.5 58.2-101a240 240 0 0012.1-46.5c24.1 22.2 44.3 49 61.2 80.4 33.4 62.6 48.8 118.3 45.8 165.7a74.01 74.01 0 0024.4 59.8 73.36 73.36 0 0053.4 18.8c19.7-1 37.8-9.7 51-24.4 13.3-14.9 24.8-30.1 34.4-45.6 14 17.9 25.7 37.4 35 58.4 15.9 35.8 24 73.9 24 113.1 0 74.9-29.5 145.4-83 198.4z"></path>
                      </svg>
                      <h2 class="title-font font-medium text-3xl text-gray-900">
                        {
                          spell.hitStreak
                        }
                      </h2>
                      <p class="leading-relaxed">
                        Racha de
                        aciertos actual
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <Footer />
        </div>
      ))}
    </>
  );
}
