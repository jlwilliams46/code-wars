function capitalize(s) {
    let even = s.split('');
    let odd = s.split('');
    var i = 0;
    var j = 0;

    while (i < even.length) {
        if (i % 2 === 0) {
            even[i] = even[i].toUpperCase();
        }
        i++;
    }

    while (j < odd.length) {
        if (j % 2 !== 0) {
            odd[j] = odd[j].toUpperCase();
        }
        j++;
    }

    evenCapped = even.join(''), oddCapped = odd.join('');

    return [evenCapped, oddCapped];
};