import React from "react";
import Navbar from "../components/navbar";

import Table from "../components/table";
import Footer from "../components/footer";

export default function Rankings() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div className="mt-10 mb-auto">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 text-center mb-6">
          Tabla de Rankings
        </h1>
        <Table />
      </div>
      <Footer />
    </div>
  );
}
