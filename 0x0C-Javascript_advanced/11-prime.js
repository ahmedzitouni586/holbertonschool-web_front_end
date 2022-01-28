function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        let x = true;
        for (let j = 2; j <= i; j++) {
            if (i % j == 0) {
                x = false;
            }
            
        }
        if (x) {
            count += 1;
        }
    }
    return count + 1;
}
let tt = 0
setTimeout(() => console.log(`Execution time of calculating prime numbers 100 times was ${tt} milliseconds.`), tt);

let t1 = performance.now();
for (let y = 0; y <= 100; y++) {
    countPrimeNumbers();
}

let t2 = performance.now();
tt = t2 - t1;

