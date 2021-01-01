import React from "react";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import Navbar from "../components/navbar";
import Button from "../components/button";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>Home</h1>
      <Button
        onClick={() =>
          firebase.auth().signOut()
        }
      >
        Sign out
      </Button>
    </>
  );
}
