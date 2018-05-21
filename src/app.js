import cz from "./js/czCapital";
import de from "./js/deCapital";
import "./css/app.css";

console.log("Started");

const czBtn = document.createElement('button');
czBtn.innerText = "CZ";
czBtn.addEventListener('click', () => {
    alert(cz());
});

const deBtn = document.createElement('button');
deBtn.innerText = "DE";
deBtn.addEventListener('click', () => {
    alert(de());
});

const secondDiv = document.getElementById('second_btn_div');
const firstDiv = document.getElementById('first_btn_div');

firstDiv.appendChild(czBtn);
secondDiv.appendChild(deBtn);