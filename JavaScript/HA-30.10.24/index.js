import catFacts from 'cat-facts';
import inquirer from 'inquirer';

function showCatFact() {
    const fact = catFacts.random();
    console.log(fact);
}


async function askForNewCatFact(username) {
    const answer = await inquirer.prompt([
        {
        type: 'confirm',
        name: 'random',
        message: 'Möchtest du einen Cat-Fact sehen?',
        default: true
        },
    ]);

    if (answer.random) {
        showCatFact();
        console.log('Danke ' +username+ 'für das Nutzen des Programms!');
    } else {
        console.log('Danke ' +username+ 'für das Nutzen des Programms!');
        process.exit(0);
    }
}

async function askForUsername() {
    const antwort = await inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'Wie ist dein Name?',
            default: 'Benutzer',
        },
    ]);
    return antwort.username;
}


async function main() {
    console.log('Willkommen zu deinem Cat-Fact Tool!');
    const username = await askForUsername();
    console.log('Hallo, ' +username+'!');
    await askForNewCatFact(username);
}

main();
