const main = document.getElementById("main");
let humanChoice = 16;
main.style.display = "flex";
main.style.flexWrap = "wrap";
main.style.justifyContent = "center";
// main.style.width = "960px";
newGrid();

function square(clas) {
    clas.style = `width: calc(100% / ${humanChoice+1} ); height: 50px; background-color: lightgray; border: 1px solid #ccc;`;
}

function clickme() {
    humanChoice = +prompt("Укажите кол-во квадратов(не больше 100)");
    (humanChoice >= 100) ? clickme() : humanChoice = humanChoice;
    newGrid();
}

function newGrid() {
    for (let index = 0; index < humanChoice * humanChoice; index++) {
        const divs = document.querySelectorAll(".square");
        divs.forEach(b => b.remove());
    }
    for (let index = 0; index < humanChoice * humanChoice; index++) {
        const div = document.createElement("div");
        div.classList.add("square");
        main.appendChild(div);
        document.querySelectorAll(".square").forEach(b => square(b));
        document.querySelectorAll(".square").forEach(b => b.addEventListener("mouseenter", () => {b.style.backgroundColor = "black"}));
        document.querySelectorAll(".square").forEach(b => b.addEventListener("mouseleave", () => {b.style.backgroundColor = "lightgray"}));
    }
}