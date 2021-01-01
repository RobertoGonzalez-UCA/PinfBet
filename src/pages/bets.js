import React from "react";
import Button from "../components/button";
import Navbar from "../components/navbar";
import Subject from "../components/subject";
import Chat from "../components/chat";
import Grade from "../components/grade";
import Betstable from "../components/betstable";
import Footer from "../components/footer";

export default function Bets() {
  const [courseShow, setCourseShow] = React.useState(false);
  const [userShow, setUserShow] = React.useState(false);
  const [subjectsShow, setSubjectsShow] = React.useState(false);
  const [gradeShow, setGradeShow] = React.useState(true);
  const courseRef = React.createRef();
  const subjectsRef = React.createRef();
  const gradeRef = React.createRef();
  const userRef = React.createRef();
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Chat />
      <div className="mb-auto">
        <div ref={gradeRef} className={gradeShow ? "block " : "hidden "}>
          <h1 className="mt-7 mb-4 block text-3xl font-bold leading-none flex justify-center">
            Selecciona sobre que grado quieres apostar.
          </h1>
          <div className="flex justify-center">
            <Grade
              variant="ordenador"
              gradeName="GII"
              gradeFullname="Grado en Ingeniería Informática"
              onClick={() => {
                setGradeShow(false);
                setCourseShow(true);
              }}
            />
          </div>
        </div>
        <div ref={courseRef} className={courseShow ? "block " : "hidden "}>
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
              Selecciona sobre que curso quieres apostar.
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
        <div ref={subjectsRef} className={subjectsShow ? "block " : "hidden "}>
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
              Selecciona sobre que asignatura quieres apostar.
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
        <div ref={userRef} className={userShow ? "block " : "hidden "}>
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
