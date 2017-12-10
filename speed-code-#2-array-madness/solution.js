function arrayMadness(a, b) {
    let squareA = 0;
    let cubeB = 0;
    let sgt;

    a.length > b.length ? sgt = a.length : sgt = b.length;

    for (let i = 0; i < sgt; i++) {
        a[i] !== undefined ? squareA += Math.pow(a[i], 2) : null;
        b[i] !== undefined ? cubeB += Math.pow(b[i], 3) : null;
    }
    return squareA > cubeB ? true : false;
}