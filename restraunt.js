const { boatInventory } = require('./fishingBoat.js')
let inventory = boatInventory()
const { mongerInventory } = require('./fishMonger.js')
let newArray = mongerInventory(inventory, 9, 5, 10)



const fishMenu = (mongerFunction, askprice, amountBought) => {
    let string = ''
    for (let x of mongerFunction) {
        if (x.price <= askprice) {

            x.amount = x.amount / amountBought
            string += `<h1>Menu</h1>
            <article class="menu>
            <h2>${x.species}</h2>
            <section class="menu_item">${x.species} Soup</section>
            <section class="menu_item">${x.species} Sandwich</section>
            <section class="menu_item">Grilled ${x.species}</section>
            </article>`

        }

    }
    return string
}
module.exports = { fishMenu }