var array = Array.from({ length: 5 }, () => Math.floor(Math.random() * 15));
for (i = 0; i <= array.length; i++) {
    if (array[i] == 10) {
        console.log( [i])
    }
}

console.log(array);