import express from 'express';
import cors from 'cors';
import fs from 'fs';

const server = express();
const PORT = 4000;

// Middleware
server.use(cors());


  server.get("/todos", (req, res) => {
    console.log("Ich bekomme ein Get")
    
    // Liest die 'todos.json'-Datei asynchron
  fs.readFile('todos.json', 'utf8', (err, data) => {  // Liest die Datei 'todos.json' als UTF-8-Text
    if (err) {  // Prüft, ob ein Fehler beim Lesen der Datei aufgetreten ist
      console.error("Fehler beim Lesen der Datei:", err);  // Gibt den Fehler in der Konsole aus
      res.status(500).json({ error: "Fehler beim Laden der Todos" });  // Sendet eine Fehlermeldung mit Statuscode 500 zurück
    } else {
      res.json(JSON.parse(data));  // Wandelt den Inhalt der Datei von JSON-Text in ein Objekt um und sendet ihn als Antwort zurück
    }
  });
});




//server.get("/", (req, res) => {
//    console.log("Ich bekomme ein Get")
//    res.send("Hello from Node")
//});

//server.get("/todos", (req, res) => {
//    console.log("Ich bekomme ein Get")
//    res.send("Deine Todos")
//});

console.log("Server Online");
server.listen(PORT);