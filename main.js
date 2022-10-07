const { boatInventory } = require('./fishingBoat.js')
let inventory = boatInventory()
const { mongerInventory } = require('./fishMonger.js')
let newArray = mongerInventory(inventory, 9, 5, 10)
// let restrauntMenu = fishMenu(newArray, 6, 2)



const { fishMenu } = require('./restraunt.js')
const menu = fishMenu(newArray, 6, 2)
console.log(menu)
console.log('hi')