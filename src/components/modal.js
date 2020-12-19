import React from "react";
import Input from "../components/input";
import Label from "../components/label";
import Select from "../components/select";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="m-4 bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        style={{
          transition: "all .15s ease"
        }}
        onClick={() => setShowModal(true)}
      >
        Apostar
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Realiza una apuesta
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="relative flex justify-center">
                    <img
                      className="h-20"
                      src="https://i.imgur.com/q385Ahc.png"
                      alt="Avatar de usuario"
                    ></img>
                  </div>
                  <div className="pt-3 pb-7 relative flex justify-center">
                    <Label className="text-xl" text="Usuario" />
                  </div>
                  <div className="pb-10 relative flex justify-center">
                    <Label className="text-2xl block" text="Asignautra" />
                  </div>
                  <div className="mb-5 relative flex items-center">
                    <Label text="Aprueba/Supende" />
                    <Select className="mr-7">
                      <option value="AA">Aprueba</option>
                      <option value="BB">Suspende</option>
                    </Select>
                    <Label text="Cantidad" />
                    <Input type="number" variant="little" min="1" />
                  </div>
                  <div className="relative flex items-center justify-between">
                    <Label text="Nota" />
                    <div className="relative flex">
                      <div className="mr-9">
                        <Input
                          className="mr-7"
                          type="number"
                          variant="little"
                          min="0"
                          max="10"
                        />
                      </div>
                      <Label text="Cantidad" />
                      <Input type="number" variant="little" min="1" />
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{
                      transition: "all .15s ease"
                    }}
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{
                      transition: "all .15s ease"
                    }}
                    onClick={() => setShowModal(false)}
                  >
                    Apostar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
