function getWetter() {
    const wetterlagen = ["Sonnig", "Regnerisch", "Schnee", "Windig"];
    const zufallsIndex = Math.floor(Math.random() * wetterlagen.length);
    const zufaelligesWetter = wetterlagen[zufallsIndex];
    return zufaelligesWetter;
}
 function interpretiereWetter() {
    wetter = getWetter();
    console.log("Das Wetter ist:" + wetter);

    switch (true) {
        case (wetter == "Sonnig"):
            console.log("Gehe spazieren!");
            break;
        case (wetter == "Regnerisch"):
            console.log("Bleibe zuhause und lese ein Buch!");
            break;
        case (wetter == "Schnee"):
            console.log("Baue einen Schneemann!");
            break;
        case (wetter == "Windig"):
            console.log("Fliege einen Drachen!");
            break;
    }


 }

 interpretiereWetter();