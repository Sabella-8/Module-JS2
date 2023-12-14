function dedupe(arr) {
    result = []
    if (arr.length == 0) {
        return result;
    }
    if (new Set(arr).size == arr.length) {
        return arr;
    } else {
        return [...new Set(arr)];
    }
}
module.exports = dedupe;
console.log(dedupe([3,4,5,5]));