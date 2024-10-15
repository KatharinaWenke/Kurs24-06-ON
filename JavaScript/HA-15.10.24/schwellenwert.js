function forSchwellenwert(array, schwellenwert) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > schwellenwert) {
            count++;
        }
    }

    return count;
}

const array = [10, 23, 35, 47, 52, 66, 71, 88, 90];
const schwellenwert = 50;
console.log(forSchwellenwert(array, schwellenwert));




function whileSchwellenwert(array, schwellenwert) {
    let count = 0;

    let i = 0;
    while (i < array.length) {
        if (array[i] > schwellenwert) {
            count++;
        }
        i++;
    }
    return count;
}
console.log(whileSchwellenwert(array, schwellenwert));




function dowhileSchwellenwert (array, schwellenwert) {
    let count = 0;
    let i = 0;

    do {
        if (array[i] > schwellenwert) {
            count++;
        }
        i++;
    } while (i < array.length);

    return count;
}
console.log(dowhileSchwellenwert(array, schwellenwert));