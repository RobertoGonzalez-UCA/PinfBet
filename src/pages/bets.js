import React from "react";

import Button from "../components/button";
import Navbar from "../components/navbar";
import Subject from "../components/subject";
import Chat from "../components/chat";
import Grade from "../components/grade";
import Betstable from "../components/betstable";
import Footer from "../components/footer";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export default function Bets() {
  const [
    courseShow,
    setCourseShow
  ] = React.useState(false);
  const [
    userShow,
    setUserShow
  ] = React.useState(false);
  const [
    subjectsShow,
    setSubjectsShow
  ] = React.useState(false);
  const [
    gradeShow,
    setGradeShow
  ] = React.useState(true);

  const courseRef = React.createRef();
  const subjectsRef = React.createRef();
  const gradeRef = React.createRef();
  const userRef = React.createRef();

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Chat />
      <div className="mb-auto">
        <div
          ref={gradeRef}
          className={
            gradeShow
              ? "block "
              : "hidden "
          }
        >
          <div className="mt-10 text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Selecciona sobre que grado
              quieres apostar.
            </h1>
          </div>
          <div className="flex justify-center">
            <Grade
              icon={
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="laptop"
                  width="2em"
                  height="2em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M956.9 845.1L896.4 632V168c0-17.7-14.3-32-32-32h-704c-17.7 0-32 14.3-32 32v464L67.9 845.1C60.4 866 75.8 888 98 888h828.8c22.2 0 37.6-22 30.1-42.9zM200.4 208h624v395h-624V208zm228.3 608l8.1-37h150.3l8.1 37H428.7zm224 0l-19.1-86.7c-.8-3.7-4.1-6.3-7.8-6.3H398.2c-3.8 0-7 2.6-7.8 6.3L371.3 816H151l42.3-149h638.2l42.3 149H652.7z"></path>
                </svg>
              }
              gradeName="GII"
              gradeFullname="Ingeniería Informática"
              onClick={() => {
                setGradeShow(false);
                setCourseShow(true);
              }}
            />
          </div>
        </div>
        <div
          ref={courseRef}
          className={
            courseShow
              ? "block "
              : "hidden "
          }
        >
          <div className="relative flex justify-center items-center">
            <input
              type="image"
              src="https://cdn.iconscout.com/icon/free/png-512/back-arrow-1767531-1502435.png"
              alt="Atras"
              width="30"
              height="30"
              onClick={() => {
                setGradeShow(true);
                setCourseShow(false);
              }}
              className="transition duration-500 rounded-2xl hover:bg-gray-200 focus:outline-none absolute top-7 left-20"
            />
            <h1 className="mt-7 mb-4 block text-3xl font-bold leading-none flex justify-center">
              Selecciona sobre que curso
              quieres apostar.
            </h1>
          </div>
          <div className="flex justify-center">
            <Button
              className="py-5 px-6 m-3 text-xl"
              style={{
                minWidth: "18rem"
              }}
              onClick={() => {
                setCourseShow(false);
                setSubjectsShow(true);
              }}
            >
              {" "}
              Asignaturas de primero{" "}
            </Button>
          </div>
          <div className="flex justify-center">
            <Button
              className="py-5 px-6 m-3 text-xl"
              style={{
                minWidth: "18rem"
              }}
              onClick={() => {
                setCourseShow(false);
                setSubjectsShow(true);
              }}
            >
              {" "}
              Asignaturas de segundo{" "}
            </Button>
          </div>
          <div className="flex justify-center">
            <Button
              className="py-5 px-6 m-3 text-xl"
              style={{
                minWidth: "18rem"
              }}
              onClick={() => {
                setCourseShow(false);
                setSubjectsShow(true);
              }}
            >
              {" "}
              Asignaturas de tercero{" "}
            </Button>
          </div>
          <div className="flex justify-center">
            <Button
              className="py-5 px-6 m-3 text-xl"
              style={{
                minWidth: "18rem"
              }}
              onClick={() => {
                setCourseShow(false);
                setSubjectsShow(true);
              }}
            >
              {" "}
              Asignaturas de cuarto{" "}
            </Button>
          </div>
        </div>
        <div
          ref={subjectsRef}
          className={
            subjectsShow
              ? "block "
              : "hidden "
          }
        >
          <div className="relative flex justify-center items-center">
            <input
              type="image"
              src="https://cdn.iconscout.com/icon/free/png-512/back-arrow-1767531-1502435.png"
              alt="Atras"
              width="30"
              height="30"
              onClick={() => {
                setCourseShow(true);
                setSubjectsShow(false);
              }}
              className="transition duration-500 rounded-2xl hover:bg-gray-200 focus:outline-none absolute top-7 left-20"
            />
            <h1 className="mt-7 mb-4 block text-3xl font-bold leading-none flex justify-center">
              Selecciona sobre que
              asignatura quieres
              apostar.
            </h1>
          </div>
          <h2 className="mb-4 block text-2xl font-bold leading-none flex justify-center">
            Primer semestre
          </h2>
          <div className="flex justify-center">
            <Subject
              variant="yellow"
              subjectName="MD"
              subjectFullname=""
              onClick={() => {
                setUserShow(true);
                setSubjectsShow(false);
              }}
            />
            <Subject
              variant="red"
              onClick={() => {
                setUserShow(true);
                setSubjectsShow(false);
              }}
            />
            <Subject
              variant="blue"
              onClick={() => {
                setUserShow(true);
                setSubjectsShow(false);
              }}
            />
            <Subject
              variant="green"
              onClick={() => {
                setUserShow(true);
                setSubjectsShow(false);
              }}
            />
            <Subject
              variant="purple"
              onClick={() => {
                setUserShow(true);
                setSubjectsShow(false);
              }}
            />
          </div>
          <h2 className="mb-4 block text-2xl font-bold leading-none flex justify-center">
            Segundo semestre
          </h2>
          <div className="flex justify-center">
            <Subject
              variant="yellow"
              subjectName="PCTR"
              subjectFullname=""
              onClick={() => {
                setUserShow(true);
                setSubjectsShow(false);
              }}
            />
            <Subject
              variant="red"
              onClick={() => {
                setUserShow(true);
                setSubjectsShow(false);
              }}
            />
            <Subject
              variant="blue"
              onClick={() => {
                setUserShow(true);
                setSubjectsShow(false);
              }}
            />
            <Subject
              variant="green"
              onClick={() => {
                setUserShow(true);
                setSubjectsShow(false);
              }}
            />
            <Subject
              variant="purple"
              onClick={() => {
                setUserShow(true);
                setSubjectsShow(false);
              }}
            />
          </div>
        </div>
        <div
          ref={userRef}
          className={
            userShow
              ? "block "
              : "hidden "
          }
        >
          <div className="relative flex justify-center items-center">
            <input
              type="image"
              src="https://cdn.iconscout.com/icon/free/png-512/back-arrow-1767531-1502435.png"
              alt="Atras"
              width="30"
              height="30"
              onClick={() => {
                setSubjectsShow(true);
                setUserShow(false);
              }}
              className="transition duration-500 rounded-2xl hover:bg-gray-200 focus:outline-none absolute top-7 left-20"
            />
            <h1 className="mt-7 mb-4 block text-3xl font-bold leading-none flex justify-center">
              Nombre de la asignatura
            </h1>
          </div>
          <Betstable />
        </div>
      </div>
      <Footer />
    </div>
  );
}
