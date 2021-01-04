import React from "react";
import firebase from "firebase";

export default function Table() {
  const [
    sortType,
    setSortType
  ] = React.useState([]);
  const [
    spells,
    setSpells
  ] = React.useState([]);
  const [
    data,
    setData
  ] = React.useState([]);
  /*
  const spells = [
    {
      id: 1,
      nickname: "Nightwish",
      coins: 9,
      coinsEarned: 200,
      hits: 6,
      hitStreak: 1996
    },
    {
      id: 2,
      nickname: "Metallica",
      coins: 10,
      coinsEarned: 200,
      hits: 4,
      hitStreak: 1981
    },
    {
      id: 3,
      nickname: "Nirvana",
      coins: 3,
      coinsEarned: 200,
      hits: 3,
      hitStreak: 1987
    }
  ];
*/
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await firebase
        .firestore()
        .collection("users")
        //.orderBy("coins", "desc")
        .get();

      setSpells(
        data.docs.map((doc) => ({
          ...doc.data()
        }))
      );
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    const sortArray = (type) => {
      const types = {
        coins: "coins",
        hits: "hits",
        hitStreak: "hitStreak",
        coinsEarned: "coinsEarned"
      };
      const sortProperty = types[type];
      const sorted = [...spells].sort(
        (a, b) =>
          b[sortProperty] -
          a[sortProperty]
      );
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  /*return (
    <ul>
      {spells.map((spell) => (
        <li
          className="bg-red-100"
          key={spell.uid}
        >
          {spell.uid} {spell.coins}
        </li>
      ))}
    </ul>
  );*/

  return (
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200 bg-gray-700">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Usuario
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider cursor-pointer hover:bg-gray-800"
                    onClick={() => {
                      setSortType(
                        "coins"
                      );
                    }}
                  >
                    PinfCoins Actuales
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider cursor-pointer hover:bg-gray-800"
                    onClick={() => {
                      setSortType(
                        "coinsEarned"
                      );
                    }}
                  >
                    PinfCoins Ganados
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider cursor-pointer hover:bg-gray-800"
                    onClick={() => {
                      setSortType(
                        "hitStreak"
                      );
                    }}
                  >
                    Racha de aciertos
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider cursor-pointer hover:bg-gray-800"
                    onClick={() => {
                      setSortType(
                        "hits"
                      );
                    }}
                  >
                    Porcentaje de
                    aciertos
                  </th>
                </tr>
              </thead>
              {data.map((spell) => (
                <>
                  <tbody
                    class="bg-gray-500 divide-y divide-gray-200"
                    key={spell.uid}
                  >
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 h-10 w-10">
                            <img
                              class="h-10 w-10 rounded-full"
                              src="https://i.imgur.com/q385Ahc.png"
                              alt=""
                            ></img>
                          </div>
                          <div class="ml-4">
                            <div class="text-sm font-medium text-white">
                              {
                                spell.nickname
                              }
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-white">
                          {spell.coins}{" "}
                          PFC
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-white">
                          {
                            spell.coinsEarned
                          }{" "}
                          PFC
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-white">
                          {
                            spell.hitStreak
                          }
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-white">
                          {(
                            (spell.hits /
                              spell.fails) *
                            100
                          ).toFixed(
                            2
                          )}{" "}
                          %
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
