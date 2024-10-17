let benutzerVerwaltung = new Map();

benutzerVerwaltung.set(`Benutzer1`, {email: `benutzer1@gmx.net`, rolle: `Admin`});
benutzerVerwaltung.set(`Benutzer2`, {email: `benutzer2@gmx.net`, rolle: `User`});
benutzerVerwaltung.set(`Benutzer3`, {email: `benutzer3@gmx.net`, rolle: `Gast`});

function zeigeBenutzer() {
    benutzerVerwaltung.forEach((details, benutzername) => {
        console.log(`${benutzername}: ${details.email}, ${details.rolle}`);
    });
}

zeigeBenutzer();