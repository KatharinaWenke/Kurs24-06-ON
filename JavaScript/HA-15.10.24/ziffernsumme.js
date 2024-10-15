function ziffernSumme(num) {
    let sum = 0;
    
    do {
        sum += num % 10;  // Letzte Ziffer hinzufügen
        num = Math.floor(num / 10);  // Letzte Ziffer entfernen
    } while (num > 0);  // Schleife läuft, bis die Zahl 0 ist

    return sum;
}

console.log(ziffernSumme(248)); 
