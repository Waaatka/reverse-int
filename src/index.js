module.exports = function reverse (n) {
    const newString = Math.abs(n).toString()
    const reversSymbol = newString.split('').reverse().join('')
    return Number(reversSymbol)
}
