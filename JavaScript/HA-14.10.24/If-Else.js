function getAlter() {
    return Math.floor(Math.random() * 100);
}

function bestimmteKategorie() {
    alter = getAlter();
    console.log("Dein Alter:" + alter);

    if (alter <= 12) {
        console.log("Du bist ein Kind!");
    } else if (alter >= 13 && alter <= 17) {
        console.log("Du bist ein Jugendlicher!");
    } else if (alter >= 18 && alter <=64) {
        console.log("Du bist ein Erwachsener!");
    } else {
        console.log("Du bist ein Senior!");
    }
}

bestimmteKategorie();

