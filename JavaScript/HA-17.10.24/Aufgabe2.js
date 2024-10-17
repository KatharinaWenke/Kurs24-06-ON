 let besuchteSeiten = new Set();

 besuchteSeiten.add(`Seite1`);
 besuchteSeiten.add(`Seite2`);
 besuchteSeiten.add(`Seite3`);
 besuchteSeiten.add(`Seite4`);
 besuchteSeiten.add(`Seite5`);
 besuchteSeiten.add(`Seite1`);

 console.log(besuchteSeiten.size);

function zeigeSeiten() {
    besuchteSeiten.forEach((seite) => {
        console.log(`Besuchte Seite: ${seite}`);
    });
}

zeigeSeiten();