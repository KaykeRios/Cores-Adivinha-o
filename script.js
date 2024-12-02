const colors = [
    { nome: "azul", css: "blue" },
    { nome: "amarelo", css: "yellow" },
    { nome: "vermelho", css: "red" },
    { nome: "verde", css: "green" },
    { nome: "laranja", css: "orange" },
    { nome: "roxo", css: "purple" },
    { nome: "preto", css: "black" },
    { nome: "branco", css: "white" },
    { nome: "cinza", css: "gray" },
    { nome: "rosa", css: "pink" }
];

const selectedColors = colors.sort(() => 0.5 - Math.random()).slice(0, 9);
selectedColors.sort((a, b) => a.nome.localeCompare(b.nome)); 

const secretColor = selectedColors[Math.floor(Math.random() * selectedColors.length)];

const colorGrid = document.getElementById("colorGrid");
const messageDiv = document.getElementById("message");

function createColorButtons() {
    selectedColors.forEach(color => {
        const button = document.createElement("button");
        button.className = "color-button";
        button.style.backgroundColor = color.css;
        button.dataset.color = color.nome;
        button.title = color.nome; 
        button.addEventListener("click", checkColor);
        colorGrid.appendChild(button);
    });
}

function checkColor(event) {
    const chosenColor = event.target.dataset.color;
    if (chosenColor === secretColor.nome) {
        messageDiv.textContent = `Parabéns! Você acertou! A cor é ${secretColor.nome.toUpperCase()}.`;
    } else {
        const hint = chosenColor < secretColor.nome ? "acima" : "abaixo";
        messageDiv.textContent = `Errou! A cor secreta está ${hint} na ordem alfabética.`;
    }
}

createColorButtons();
