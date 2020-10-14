document.getElementById("btnCalcular").addEventListener("click", () => {
    var fCoordX = document.getElementById("fCoordX");
    var fCoordY = document.getElementById("fCoordY");

    if (fCoordX.value != "" && !fCoordX.validity.badInput && fCoordY.value != "" && !fCoordY.validity.badInput) {
        fCoordX = parseFloat(fCoordX.value);
        fCoordY = parseFloat(fCoordY.value);

        if (fCoordX == 0.0 && fCoordY == 0.0) {
            alert("La coordenada esta en el origen de la plana.");
        }
        else if (fCoordX == 0.0 && fCoordY != 0.0) {
            alert("La coordenada esta sobre el Eje X");
        }
        else if (fCoordX != 0.0 && fCoordY == 0.0) {
            alert("La coordenada esta sobre el Eje Y");
        }
        else {
            var nCuadrante = 0;
            if (fCoordX > 0.0) {
                if (fCoordY > 0.0) {
                    nCuadrante = 1;
                }
                else {
                    nCuadrante = 4;
                }
            }
            else {
                if (fCoordY > 0.0) {
                    nCuadrante = 2;
                }
                else {
                    nCuadrante = 3;
                }
            }
            alert(`La coordenada esta en el cuadrante ${nCuadrante}.`);
        }
    }
    else {
        alert("Coordenadas invalidas");
    }
});