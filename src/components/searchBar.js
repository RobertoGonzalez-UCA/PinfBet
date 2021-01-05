import React, { useState } from "react";

import Input from "./input";
import firebase from "firebase/app";
/* import ClickAwayListener from "@material-ui/core/ClickAwayListener"; */
import "firebase/firestore";
import "firebase/auth";

export default function SearchBar({
  ...rest
}) {
  const [
    users,
    setUsers
  ] = React.useState([]);
  const [
    searchTerm,
    setSearchTerm
  ] = React.useState("");
  const [
    searchResults,
    setSearchResults
  ] = React.useState([]);
  const [
    showSearch,
    setShowSearch
  ] = React.useState(false);
  const [input, setInput] = useState(
    ""
  );

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await firebase
        .firestore()
        .collection("users")
        .get();

      setUsers(
        data.docs.map((doc) => ({
          ...doc.data()
        }))
      );
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  /*    React.useEffect(() => {
    const results = users.filter(person => person.filter({nickname : searchTerm})
    );
    setSearchResults(results);
  }, [searchTerm]);  */

  /* {people.filter(person => person.age < 60).map(filteredPerson => (
        <li>
          {filteredPerson.name}
        </li>
      ))}
    </div>
  );
} */

  /* {users.filter(person => person.nickname.includes(searchTerm)).map(filteredPerson => (
        <li>
          {filteredPerson.name}
        </li>
      ))}
    </div>
  );
} */

  return (
    <>
      <form autoComplete="off">
        <Input
          type="text"
          id="search"
          name="searchBar"
          placeholder="Busca a una persona..."
          value={searchTerm}
          onChange={handleChange}
          onClick={() => {
            setShowSearch(true) }}
          {...rest}
        />
        {/* <ClickAwayListener> */}
        {showSearch ? (
        <ul className="">
          {users
            .filter((person) =>
              person.nickname.includes(
                searchTerm
              )
            )
            .map((filteredPerson) => (
              <div>
                {
                  filteredPerson.nickname
                }
              </div>
            ))}
        </ul>
        ) : null }
        {/* </ClickAwayListener> */}
      </form>
    </>
  );
}

/*   const fetchData = async () => {
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
 
     setSpells(
        data.docs.map((doc) => ({
          ...doc.data()
        }))
      ); 
   }; 
  fetchData();*/
