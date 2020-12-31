import React from "react";
import Modal from "../components/modal";

export default function betstable() {
  return (
    <div class="">
      <div class="flex flex-col">
        <div class="flex justify-center">
          <div class="py-2 align-middle inline-block sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="w-full divide-y divide-gray-200 bg-gray-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Usuario
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
                            alt="Usuario"
                          ></img>
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-white">
                            Usuario
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-16 py-4 whitespace-nowrap"></td>
                    <td class="px-4 py-2 whitespace-nowrap">
                      <Modal />
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img
                            class="h-10 w-10 rounded-full"
                            src="https://i.imgur.com/q385Ahc.png"
                            alt="Usuario"
                          ></img>
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-white">
                            Usuario
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-16 py-4 whitespace-nowrap"></td>
                    <td class="px-4 py-2 whitespace-nowrap">
                      <Modal />
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img
                            class="h-10 w-10 rounded-full"
                            src="https://i.imgur.com/q385Ahc.png"
                            alt="Usuario"
                          ></img>
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-white">
                            Usuario
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-16 py-4 whitespace-nowrap"></td>
                    <td class="px-4 py-2 whitespace-nowrap">
                      <Modal />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
