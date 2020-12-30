import React from "react";
import Button from "../components/button";
import Navbar from "../components/navbar";
import Subject from "../components/subject";
import Chat from "../components/chat";
import Grade from "../components/grade";

export default function Bets() {
  const [
    courseShow,
    setCourseShow
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
  const openCourse = () => {
    setCourseShow(true);
  };
  const closeCourse = () => {
    setCourseShow(false);
  };
  const openSubjects = () => {
    setSubjectsShow(true);
  };
  const closeSubjects = () => {
    setSubjectsShow(false);
  };
  const openGrade = () => {
    setGradeShow(true);
  };
  const closeGrade = () => {
    setGradeShow(false);
  };
  return (
    <div>
      <Navbar />
      <Chat />
      <div
        ref={gradeRef}
        className={
          gradeShow
            ? "block "
            : "hidden "
        }
      >
        <h1 className="mt-7 mb-4 block text-3xl font-bold leading-none flex justify-center">
          Selecciona sobre que grado
          quieres apostar.
        </h1>
        <div className="flex justify-center">
          <Grade
            variant="ordenador"
            gradeName="GII"
            gradeFullname="Grado en Ingeniería Informática"
            onClick={() => {
              closeGrade();
              openCourse();
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
              openGrade();
              closeCourse();
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
              closeCourse();
              openSubjects();
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
              closeCourse();
              openSubjects();
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
              closeCourse();
              openSubjects();
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
              closeCourse();
              openSubjects();
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
              openCourse();
              closeSubjects();
            }}
            className="transition duration-500 rounded-2xl hover:bg-gray-200 focus:outline-none absolute top-7 left-20"
          />
          <h1 className="mt-7 mb-4 block text-3xl font-bold leading-none flex justify-center">
            Selecciona sobre que
            asignatura quieres apostar.
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
          />
          <Subject variant="red" />
          <Subject variant="blue" />
          <Subject variant="green" />
          <Subject variant="purple" />
        </div>
        <h2 className="mb-4 block text-2xl font-bold leading-none flex justify-center">
          Segundo semestre
        </h2>
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
      </div>
    </div>
  );
}
