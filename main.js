
const container = document.createElement("div");
container.id = "container";

const buttons = document.createElement("div");
buttons.classList.add("buttons");

const generateBtn = document.createElement("button");
generateBtn.id = "enterSquares";
const resetBtn = document.createElement("button");
resetBtn.id = "resetBtn";

document.body.appendChild(buttons);
buttons.appendChild(generateBtn);
buttons.appendChild(resetBtn);
document.body.appendChild(container);

generateBtn.textContent = "Click to enter grid size";
resetBtn.textContent = "Reset grid";

let input = 16;

generateGrid (input);

resetBtn.addEventListener("click", (e) => {
    generateGrid(input);

})

generateBtn.addEventListener("click", (e) => {

    while (true) {
        input = prompt("Enter Number of Squares per side (100 limit)", "");

        if (input === null) return;

        if (isNaN(input)) continue;

        input = Number(input);
        if (Number.isInteger(input) && (input <= 100 && input >= 0)) {
            break;
        }
    }
    generateGrid(input);
})

function generateGrid(input) {

    container.innerHTML = "";
    const squareSize = 960 / input;

    for (let i = 0; i < (input*input); i++) {
        const square = document.createElement("div");
        square.classList.add("box");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        container.appendChild(square);
    }
    
}

container.addEventListener("mouseover", (e) => {

    if (e.target.classList.contains("box")) {
        // e.target.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);

        e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
}); 

console.log(counter);
