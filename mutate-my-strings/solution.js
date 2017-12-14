function mutateMyStrings(stringOne, stringTwo) {
    let x = stringOne.split('');
    let y = stringTwo.split('');
    let r = stringOne.concat('\n');
    let i = 0;

    do {
        if(x[i] !== y[i]) {
           x[i] = y[i];
           r = r.concat(`${x.join('')}\n`);
        }
        i++;
    }
    while (i < x.length);

    return r;
}