function find_average(array) {
    return array.reduce((acc, curr) => curr + acc) / array.length
}