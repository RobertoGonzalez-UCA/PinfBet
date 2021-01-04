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
  const [
    degrees,
    setDegrees
  ] = React.useState([]);
  const [
    degreeSelected,
    setDegreeSelected
  ] = React.useState(null);
  const [
    subjects,
    setSubjects
  ] = React.useState([]);
  const [
    subjectsOrder,
    setSubjectsOrder
  ] = React.useState([]);

  const courseRef = React.createRef();
  const subjectsRef = React.createRef();
  const gradeRef = React.createRef();
  const userRef = React.createRef();

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await firebase
        .firestore()
        .collection("degrees")
        .get();

      setDegrees(
        data.docs.map((doc) => ({
          ...doc.data()
        }))
      );
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await firebase
        .firestore()
        .collection("subjects")
        .get();

      setSubjects(
        data.docs.map((doc) => ({
          ...doc.data()
        }))
      );
    };
    fetchData();
  }, []);

  function orderSubjects(degree, year) {
    setSubjectsOrder(
      subjects
        .filter(
          (subject) =>
            subject.degreeId === degree
        )
        .filter(
          (subject) =>
            subject.year === year
        )
    );
  }

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
            {degrees.map((degree) => (
              <>
                <Grade
                  icon={degree.acronym}
                  gradeName={
                    degree.acronym
                  }
                  gradeFullname={
                    degree.name
                  }
                  onClick={() => {
                    setGradeShow(false);
                    setCourseShow(true);
                    setDegreeSelected(
                      degree.code
                    );
                  }}
                />
              </>
            ))}
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
            <h1 className="mt-10 sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
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
                orderSubjects(
                  degreeSelected,
                  1
                );
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
                orderSubjects(
                  degreeSelected,
                  2
                );
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
                orderSubjects(
                  degreeSelected,
                  3
                );
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
                orderSubjects(
                  degreeSelected,
                  4
                );
              }}
            >
              Asignaturas de cuarto
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
            <h1 className="mt-10 sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Selecciona sobre que
              asignatura quieres
              apostar.
            </h1>
          </div>
          <div className="flex flex-wrap justify-center">
            {subjectsOrder.map(
              (subject) => (
                <Subject
                  variant="green"
                  subjectName={
                    subject.acronym
                  }
                  subjectFullname={
                    subject.name
                  }
                  onClick={() => {
                    setUserShow(true);
                    setSubjectsShow(
                      false
                    );
                  }}
                />
              )
            )}
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
