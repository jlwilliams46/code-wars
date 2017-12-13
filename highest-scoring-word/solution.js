function high(x) {

    const all = x.split(' ');
    let hs = 0,
        hsw = '',
        i = 0,
        l = all.length;

    if (!x) return '';

    for (i; i < l; i++) {
        const score = all[i]
            .split('')
            .map((e) => {
                return (e.toLowerCase().match(/[a-z]/i)) ? e.toLowerCase().charCodeAt(0) - 96 : 0
            })
            .reduce((a, b) => a + b, 0);

        if (score > hs) {
            hs = score;
            hsw = all[i];
        }
    }

    return hsw;
}