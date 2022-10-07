const { boatInventory } = require('./fishingBoat.js')
let inventory = boatInventory()
const mongerInventory = (fish, quantity, askprice, amountBought) => {
    let newArray = []
    for (let x of fish) {
        if (x.amount > quantity && x.price < askprice) {
            newArray.push(x)
            x.amount = amountBought
        }
    }
    return newArray
}

let newArray = mongerInventory(inventory, 9, 5, 10)
// console.log(newArray)

module.exports = { mongerInventory }