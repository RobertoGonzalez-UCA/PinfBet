import React from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SearchBar from "../components/searchBar";

export default function Social() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="mb-auto">
          <Navbar />
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 text-center mt-10">
            Busca un perfil
          </h1>
          <div className="flex justify-center mt-8">
            <SearchBar />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
