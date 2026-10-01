// added code from my vs

function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1
}


let d6 = rollDice(6)

if (d6 < 1 || d6 > 6) {
    throw new Error("D6 test failed")
}

let d10 = rollDice(10)

if (d10 < 1 || d10 > 10) {
    throw new Error("D10 test failed")
}

let d6Again = rollDice(6)

if (d6Again < 1 || d6Again > 6) {
    throw new Error("D6 second test failed")
}

console.log("All tests passed.")

console.log("D6 roll: " + rollDice(6))
console.log("D10 roll: " + rollDice(10))
