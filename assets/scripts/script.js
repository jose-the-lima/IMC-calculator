const heightField = document.querySelector("#height");
const weightField = document.querySelector("#weight");
const calcImcButton = document.querySelector(".button-calc");
const imcArea = document.querySelector(".imc-area-response");
const imcAreaResponse = document.querySelector(".imc-response");
const imcClassifications = document.querySelectorAll(".classification");


// Calc IMC function and write Imc Value
function writeImc(value) {
    imcAreaResponse.innerHTML = Number.isNaN(value) ? "0.0":value;

    activeImcArea();
}

function calcImcValue(height, weight) {
    return weight / (height * height);
}

function calcImc() {
    const height = Number(heightField.value.replace(",", "."));
    const weight = Number(weightField.value.replace(",", "."));
    const imc = Number(calcImcValue(height, weight).toFixed(2));

    writeImc(imc);
    verifyImcClassification(imc);
}



// functions of rendering and verifications
function activeImcArea() {
    imcArea.classList.remove("invisible");
}

function verifyImcClassification(imc) {
    switch(true) {
        case imc >= 0 && imc < 18.5:
            disableFields("class-1");
            break;
        case imc >= 18.5 && imc <= 24.99:
            disableFields("class-2");
            break;
        case imc >= 25.0 && imc <= 29.99:
            disableFields("class-3");
            break;
        case imc >= 30.0 && imc <= 34.99:
            disableFields("class-4");
            break;
        case imc >= 35.0 && imc <= 39.99:
            disableFields("class-5");
            break;
        case imc >= 40.0:
            disableFields("class-6");
            break;
        default:
            disableFields(imc);
    }
}

function resetFields() {
    imcClassifications.forEach(imc => imc.classList.remove("disabled"))
}

function disableFields(freeField) {
    resetFields();

    if(freeField !== undefined && !Number.isNaN(freeField)) {
        imcClassifications.forEach(imc => {
            if(!imc.classList.contains(freeField)) {
                imc.classList.add("disabled");
            }
        });
    }
}


calcImcButton.addEventListener("click", calcImc);