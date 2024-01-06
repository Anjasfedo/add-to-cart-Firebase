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

  inputFieldEl.value = "";

  shoppingListEl.innerHTML += `<li>${inputValue}</li>`;

  console.log(`${inputValue} Added to Database`);
});
