// laden des fs-Moduls und die Promises version, um async/await zu benutzen
const fs = require('fs').promises;

// readline modul ermöglicht verarveitung von asynchronen Benutzereingaben
const readline = require('readline');

// Interface wird erstellt für die Benutzereingaben
// Input und output geben an, dass Eingaben von der Konsole stammen und Ausgaben ebenfalls im Terminal ausgegeben werden
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Asynchrone Funktion
async function asyncWriteToFile() {
    try {
        // Frage nach Dateiname unter verwendung eines Promise wird auf die Eingabe gewartet
        // rl.question nimmt die Eingabe entegegen und übergibt sie an die Funktion resolve
        const fileName = await new Promise((resolve) => {
            rl.question('Gib den Namen der Datei ein: ', (fileName) => {
              resolve(fileName);
            });
          });
        
        // Fragen nach Nachricht mit verwendung Promise und wird weitergegeben
        const message = await new Promise((resolve) => {
            rl.question('Gib die Nachricht ein, die in die Datei geschrieben werden soll: ', (message) => {
              resolve(message);
            });
          });
        
        // fs.appendFile hängt die Nachricht an
        // Durch await wird gewartet, bis die Operation abgeschlossen ist 
        await fs.appendFile(fileName, message + '\n', 'utf8');

        console.log('Nachricht erfolgreich hinzugefügt.');

    } catch (err) {
        console.error('Fehler beim Schreiben in die Datei:', err);
        // Benutzereingabe wird abgeschlossen
    } finally {
        rl.close();
      } 
    }

asyncWriteToFile();

  
