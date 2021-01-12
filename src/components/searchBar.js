import React from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { Link } from "react-router-dom";

import Input from "./input";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export default function SearchBar({ ...rest }) {
  var user = firebase.auth().currentUser;
  const [users, setUsers] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await firebase
        .firestore()
        .collection("users")
        .where("uid", "!=", user.uid)
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

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <form autoComplete="off" className="w-1/2">
          <Input
            type="text"
            id="search"
            name="searchBar"
            placeholder="Buscar..."
            className="w-4/5 mx-auto focus:border-green-500 focus:ring-2 focus:ring-green-200"
            value={searchTerm}
            onChange={handleChange}
            onClick={handleClick}
            {...rest}
          />
          {open ? (
            <div className="mt-10 p-3 bg-gray-50 rounded-md border-color-gray border-2">
              {searchTerm && (
                <ul>
                  {users
                    .filter((person) =>
                      person.nickname
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    )
                    .map((filteredPerson) => (
                      <>
                        <div class="flex justify-center mx-auto w-1/2 p-2">
                          <div class="h-full w-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img
                              alt="team"
                              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                              src="https://i.imgur.com/q385Ahc.png"
                            />
                            <div class="flex flex-grow justify-between items-center">
                              <h2 class="text-gray-900 title-font font-medium">
                                {filteredPerson.nickname}
                              </h2>
                              <Link to={`/${filteredPerson.nickname}`}>
                                <p className="text-green-500 inline-flex items-center mr-5 hover:underline">
                                  Ver perfil
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                </ul>
              )}
            </div>
          ) : null}
        </form>
      </ClickAwayListener>
    </>
  );
}
