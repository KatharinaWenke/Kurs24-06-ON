function geradeZahlen() {
    let sum = 0;
    let i = 2;

    do {
        sum += i;
        i += 2;
    } while (i <= 100)

    return sum;
}

console.log(geradeZahlen());

