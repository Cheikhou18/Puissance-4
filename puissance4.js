import Jeux from "./puissance4_class.js";

let jeux = new Jeux(7, 6);
jeux.create();

const rows = document.querySelectorAll("tr");

for (let tr of rows) {
  tr.addEventListener("click", () => {
    jeux.changeColor(tr);
  });
}
