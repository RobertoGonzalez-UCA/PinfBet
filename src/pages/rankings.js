import React from "react";
import Navbar from "../components/navbar";
import Chat from "../components/chat";
import Table from "../components/table";
import Footer from "../components/footer";

export default function Rankings() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Chat />
        <div className="mt-12 mb-auto">
          <Table />
        </div>
        <Footer />
      </div>
    </>
  );
}
