array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array);

// 11 Hinzufügen
array.push(11);
console.log(array);

// Erstes Elemententfernen
array.shift();
console.log(array);

// Zahl 5 nach Entfernen des ersten Elements
console.log(array[3]);

// Ueberpruefen, ob die Zahl 7 enthalten ist
if (array.includes(7)) {
  console.log("Die Zahl 7 ist im Array enthalten.");
} else {
  console.log("Die Zahl 7 ist nicht im Array enthalten.");
}

