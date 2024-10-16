array = [[1, 2, 3], 
         [4, 5, 6], 
         [7, 8, 9]];

// Berechnen der Diagonalsumme
function diagonal() {
    sum = array[0][0] + array[1][1] + array[2][2];
    console.log("Die Diagonalsumme beträgt: " + sum);
}
diagonal();

// Ecken auf Null
function eckenNull(array) {
    array[0][0] = 0;
    array[0][2] = 0;
    array[2][0] = 0;
    array[2][2] = 0;
    return array;
}
console.log(eckenNull(array));

