function capitalize(s, arr) {
    let a = s.split('')
    arr.map((val, i) => {
        return a.splice(val, 1, s.charAt(val).toUpperCase())
    })

    return a.reduce((acc, val) => acc + val)
};