//task 1
const calculateDistance = (x1, x2) =>{
    let z = x1 - x2;
    if (z < 0){
        z *= -1;
    };
    return z;
}

//task 2
const calculateSegmentProduct = (A, B, C) =>{
    let AC = C - A;
    let BC = B - C;
    if (AC < 0){
        AC *= -1;
    }
    if (BC < 0){
        BC *= -1;
    }
    return AC * BC;
}

//task 3
const calculateKilobytes = (a) => Math.floor(a / 1024);

//task 4 
const calculateSegments = (a, b) => Math.floor(a / b);

//task 5
const calculateDigitSum = (num) =>{
    let i = Math.floor(num / 10);
    let w = num % 10;
    const r = i + w;
    return r;
}

//task 6

//task7

//task 8 
const getFullHours = (n) => Math.floor(n / 3600);

//task 9
const getDayOfWeek = (day) => {
    const weeks = Math.floor(365 / 7);
    const week = Math.floor(day % weeks);
    return week;
}

//task 10
const countSquares = (a, b, c) =>{
    a *= b;
    c *= c;
    a = Math.floor(a / c);
    return a;
}

export {
    calculateDigitSum, calculateDistance, calculateKilobytes, calculateSegmentProduct, calculateSegments, countSquares
}