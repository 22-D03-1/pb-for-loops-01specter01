//1

let result = 0;
for (let x = 1; x <= 20; x++) {
    result += x;
}
console.log(result);

//2
for (let beer = 1; beer < 6; beer++) {
    if (beer === 1) {
        console.log("There is ", beer, " bottle of beer on the wall.");
    } else if (beer >= 2) {
        console.log("There are ", beer, " bottles of beer on the wall");
    }
}

//3
for (let count = 0; count < 21; count++) {
    if (count % 2 === 0) {
        console.log(count, " is even");
    } else {
        console.log(count, " is odd");
    }
}

//4

for (let value = 0; value <= 10; value++) {
    console.log(value * 9);
}

for (let one = 1; one <= 10; one++) {
    for (let second = 1; second <= 10; second++) {
        console.log(one * second);
    }
}

//5
for (let two = 1; two <= 100; two++) {
    if (two % 3 === 0 && two % 5 === 0) {
        console.log("FizzBuzz");
    } else if (two % 5 === 0) {
        console.log("Buzz");
    } else if (two % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(two);
    }
}

//6

for (let z = 100; z <= 1000; z += 100) {
    console.log(z);
}
