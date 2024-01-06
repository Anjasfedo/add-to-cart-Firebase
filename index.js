import appSettings from "./config.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const app = initializeApp(appSettings);
const database = getDatabase(app);

const moviesInDB = ref(database, "movies")

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");

addButtonEl.addEventListener("click", () => {
  let inputValue = inputFieldEl.value;

  push(moviesInDB, inputValue)

  console.log(`${inputValue} Added to Database`);
});
