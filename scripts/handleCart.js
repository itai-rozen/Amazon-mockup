
// assigning the button to a variable
let addBtn = document.querySelector('.add-item-btn')
addBtn.addEventListener('click', () => {
    // making it functional! each time you press the button the cart counter increments
    let cartCounter = document.querySelector('.cart-shopping-count')
    cartCounter.textContent++
})

// assigning the button to a variable

let buyBtn = document.querySelector('.buy-now-btn')
buyBtn.addEventListener('click', () => {
    // making it functional! each time you press the button the cart resets to 0
    let cartCounter = document.querySelector('.cart-shopping-count')
    cartCounter.textContent = 0
})