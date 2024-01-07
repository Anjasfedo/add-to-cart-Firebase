import appSettings from "./config.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingListEl = document.getElementById("shopping-list");

onValue(shoppingListInDB, (snapshot) => {
  let shoppingArray = Object.entries(snapshot.val());

  clearList();

  for (let i in shoppingArray) {
    const currentItem = shoppingArray[i];

    const [currentItemID, currentItemValue] = currentItem;

    appendItemToList(currentItemValue);
  }
});

addButtonEl.addEventListener("click", () => {
  let inputValue = inputFieldEl.value;

  push(shoppingListInDB, inputValue);

  clearInput();

  console.log(`${inputValue} Added to Database`);
});

const clearList = () => {
  shoppingListEl.innerHTML = "";
};

const clearInput = () => {
  inputFieldEl.value = "";
};

const appendItemToList = (inputValue) => {
  shoppingListEl.innerHTML += `<li>${inputValue}</li>`;
};
