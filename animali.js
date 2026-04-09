var animale1 = {
    specie: "mucca",
    razza: "chianina",
    zampe: 4,
    dieta: {
        ciboPreferito: "erba fresca",
        quantita: "20kg"
    }
};

var animale2 = {
    specie: "cane", razza: "bassotto", zampe: 4
};
var animale3 = {
    specie: "gallina", razza: "andalusa", zampe: 2
};

function mostraInfo(animale) {
    let p = document.getElementById("info");
    let testo = "";

    if (animale === animale3) {
        testo = "Specie: " + animale["specie"] + ", Razza: " + animale["razza"];
    } else {
        testo = "Specie: " + animale.specie + ", Razza: " + animale.razza;
    }

   
    if (animale.dieta) {
        testo += "Mangia: " + animale.dieta.ciboPreferito;
    }

    p.innerHTML = testo;
}