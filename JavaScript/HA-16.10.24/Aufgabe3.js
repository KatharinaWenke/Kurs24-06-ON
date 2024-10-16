// Array mit zufälligen Zahlen
zahlen = Array.from({ length: 20 }, () => Math.floor(Math.random() * 101));
console.log("Zufällige Zahlen: " + zahlen);

// Filtern der geraden Zahlen
geradeZahlen = zahlen.filter(function(zahl) {
    return zahl % 2 === 0;
  });
  
  console.log("Gefilterte gerade Zahlen: " + geradeZahlen);
  
// Summe der gefilterten Zahlen
summeGeradeZahlen = geradeZahlen.reduce(function(summe, zahl) {
    return summe + zahl;
  }, 0); // Der Startwert für die Summe ist 0
  
  console.log("Summe der geraden Zahlen:", summeGeradeZahlen);
  