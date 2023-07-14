const heightField = document.querySelector("#height");
const weightField = document.querySelector("#weight");
const calcImcButton = document.querySelector(".button-calc");
const imcArea = document.querySelector(".imc-area-response");
const imcAreaResponse = document.querySelector(".imc-response");

function activeImcArea() {
    imcArea.classList.remove("invisible");
}

function writeImc(value) {
    imcAreaResponse.innerHTML = value.toFixed(2);
}

function calcImcValue(height, weight) {
    return weight / (height * height);
}

function calcImc() {
    const height = Number(heightField.value.replace(",", "."));
    const weight = Number(weightField.value.replace(",", "."));

    const imc = calcImcValue(height, weight);

    writeImc(imc);
    activeImcArea();
}





calcImcButton.addEventListener("click", calcImc);

