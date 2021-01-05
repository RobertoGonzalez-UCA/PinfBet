import React, { useState } from "react";

import Input from "./input";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export default function SearchBar({
  ...rest
}) {
  const [
    spells,
    setSpells
  ] = React.useState([]);

  const [input, setInput] = useState(
    ""
  );

  const fetchData = async () => {
    const data = await firebase
      .firestore()
      .collection("users")
      .where("nickname", "==", input)
      .onSnapshot(function (
        querySnapshot
      ) {
        var users = [];
        querySnapshot.forEach(function (
          doc
        ) {
          users.push(doc.data().uid);
        });
        console.log(
          "Current users: ",
          users.join(", ")
        );
      });

    /* setSpells(
        data.docs.map((doc) => ({
          ...doc.data()
        }))
      ); */
  };
  fetchData();

  return (
    <>
      <form onSubmit={fetchData}>
        <Input
          type="text"
          id="search"
          name="searchBar"
          placeholder="Busca a una perona..."
          onChange={(ev) =>
            setInput(ev.target.value)
          }
          {...rest}
        />
      </form>
    </>
  );
}
