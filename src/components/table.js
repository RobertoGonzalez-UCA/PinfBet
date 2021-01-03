import React from "react";
import firebase from "firebase";

export default function Table() {
  const [
    spells,
    setSpells
  ] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await firebase
        .firestore()
        .collection("users")
        .orderBy("coins", "desc")
        .get();

      setSpells(
        data.docs.map((doc) => ({
          ...doc.data()
        }))
      );
    };
    fetchData();
  }, []);

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
              {spells.map((spell) => (
                <>
                  <div
                    className="bg-green-200 flex"
                    key={spell.uid}
                  >
                    {spell.nickname}{" "}
                    {spell.coins}{" "}
                    {spell.coinsEarned}
                  </div>
                </>
              ))}
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
                    class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Ranking Actual
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Ranking acumulado
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Racha de aciertos
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Porcentaje de
                    aciertos
                  </th>
                </tr>
              </thead>
              <tbody class="bg-gray-500 divide-y divide-gray-200">
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
                          Usuario
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-white"></div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-white">
                      --
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-white">
                      --
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
