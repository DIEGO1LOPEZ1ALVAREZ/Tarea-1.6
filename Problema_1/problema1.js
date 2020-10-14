document.getElementById("btnCalcular").addEventListener("click", () => {
    if (!document.getElementById("fRadio").validity.badInput && document.getElementById("fRadio").value != "") {
        alert(`VOLUMEN ${((4 / 3) * (3.14159 * Math.pow(parseFloat(document.getElementById("fRadio").value), 3))).toFixed(3)}`);
    }
    else {
        alert("Valor incorrecto");
    }
});