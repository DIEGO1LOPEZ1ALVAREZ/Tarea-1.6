document.getElementById("btnCalcular").addEventListener("click", () => {
    if (!document.getElementById("nRadio").validity.badInput) {
        alert(`VOLUMEN ${((4 / 3) * (3.14159 * Math.pow(parseFloat(document.getElementById("nRadio").value), 3))).toFixed(3)}`);
    }
    else {
        alert("Valor incorrecto");
    }
});