import appSettings from "./config.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const app = initializeApp(appSettings);
const database = getDatabase(app);

const shoppingListInDB = ref(database, "shoppingList");

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingListEl = document.getElementById("shopping-list");

addButtonEl.addEventListener("click", () => {
  let inputValue = inputFieldEl.value;

  // push(shoppingListInDB, inputValue);

  clearInput();

  appendItemToList(inputValue);

  console.log(`${inputValue} Added to Database`);
});

const clearInput = () => {
  inputFieldEl.value = "";
};

const appendItemToList = (inputValue) => {
  shoppingListEl.innerHTML += `<li>${inputValue}</li>`;
};

// Change object to an array

let users = {
  "00": "anjas@example.com",
  "01": "fedo@example.com",
  "02": "gantenk@example.com",
};

console.log(Object.values(users)); // Get values of each object property
console.log(Object.keys(users)); // Get keys of each object property
console.log(Object.entries(users)); // Get array with [key, values] of each object property
