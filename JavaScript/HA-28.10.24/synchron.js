// fs greift auf das Dateisystem zu, welches uns Funktionen zum Lesen, Schreiben,
// Anhängen und Verwalten von Dateien bietet
const fs = require('fs');

// readlineSync-Modul wird geladen, um Eingaben synchrin zu verarbieten (Code wartet, bis Eingabe gemacht wurde)

const readlineSync = require('readline-sync');

function syncWriteToFile() {
    // Benutzer wird nach Dateinamen gefragt und unter fileName gespichert
    const fileName = readlineSync.question('Gib den Namen der Datei ein: ');

    //Benutzer wird nach Nachricht gefragt und unter message gespeichert
    const message = readlineSync.question('Gib die Nachricht ein, die in der Datei gespeichert werden soll: ');

    try {
        // Nachricht wird an die Datei angehängt
        // Wenn die Datei nicht existiert, wird sie erstellt
        // Datei soll im utf-8 Zeichensatz geschrieben
        fs.appendFileSync(fileName, message, 'utf8');

        console.log('Nachricht erfolgreich hinzugefügt.');
    
        // Wenn ein Fehler im try-Block auftritt, wird diese Nachricht mit der Fehlermeldung ausgegeben
    } catch (err) {
        console.error('Fehler beim Schreiben in die Datei: ', err);
    }
}

syncWriteToFile();