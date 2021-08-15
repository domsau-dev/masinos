"use strict";

class Masina {
    constructor(pavadinimas) {
        this.pavadinimas = pavadinimas;
        this.greitis = 0;
        this.kelias = 0;
    }
    
    gazas(kiek) {
        this.greitis += kiek;
    }

    stabdis(kiek) {
        this.greitis -= kiek;
        if (this.greitis < 0) {
            this.greitis = 0;
        }
    }

    vaziuojam() {
        this.kelias += this.greitis;
    }
}

class SportineMasina extends Masina {
    constructor(pavadinimas) {
        super(pavadinimas);
        this.spoileris = false;
    }

    gazas(kiek) {
        if (this.spoileris) {
            this.greitis += kiek;
        } else {
            this.greitis += 2 * kiek;
        }
    }

    stabdis(kiek) {
        if (this.spoileris) {
            this.greitis -= 2 * kiek;
        } else {
            this.greitis -= kiek;
        }

        if (this.greitis < 0) {
            this.greitis = 0;
        }
    }

    pakeiskSpoilerioPozicija() {
        if (Math.random() > 0.5) {
            this.spoileris = !this.spoileris; 
        }
    }
}

let masinos = [];
let komentuota = Array(9).fill(false);

for (let i = 0; i < 8; i++) {
    if (i < 6) {
        masinos.push(new Masina("Masina" + (i + 1).toString()));
    } else {
        masinos.push(new SportineMasina("Masina" + (i + 1).toString()));
    }
}

while(!masinos.some(masina => masina.kelias >= 1000)) {
    let min = -5;
    let max = 5;
    masinos.forEach(masina => {
        if (masina instanceof SportineMasina) {
            masina.pakeiskSpoilerioPozicija();
        }

        let greicioPokytis = Math.random() * (max - min) + min;
        if (greicioPokytis > 0) {
            masina.gazas(greicioPokytis);
        } else {
            masina.stabdis(Math.abs(greicioPokytis));
        }

        masina.vaziuojam();
    });
    masinos.sort((a, b) => b.kelias - a.kelias);

    let i = (Math.floor(masinos[0].kelias / 100)) - 1;
    if (i >= 0 && i <= 8 && komentuota[i] === false) {
        console.log(1 + i + "00 km: pirmauja " + masinos[0].pavadinimas);
        komentuota[i] = true;
    }
}

masinos.forEach((masina, i) => {
    console.log(i + 1 + ".", masina.pavadinimas, "nuvaziavo", masina.kelias.toFixed(0), "km");
});