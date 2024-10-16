array = ["Selm", "Bork", "Datteln", "Oldenburg", "Lüdinghausen"];

// Gibt jede Stadt in Großbuchstaben aus
for (let i = 0; i < array.length; i++){
    console.log(array[i].toUpperCase());
}

// Anzahl der Buchstaben
buchstabenAnzahl = [];

for (let i = 0; i < array.length; i++) {
    buchstabenAnzahl.push(array[i].length);
  }
console.log(buchstabenAnzahl);