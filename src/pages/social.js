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
      <div className="flex flex-none justify-center mt-10">
      <SearchBar />
      </div>
      </div>
      <Footer />
      </div>
    </>
  );
}
