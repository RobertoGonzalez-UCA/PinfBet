import React from "react";
import Navbar from "../components/navbar";
import Chat from "../components/chat";
import Table from "../components/table";

export default function Rankings() {
  return (
    <div>
      <Navbar />
      <Chat />
      <div>
        <Table />
      </div>
    </div>
  );
}
