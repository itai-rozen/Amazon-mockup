// assigning checkboxes to variables, also images

let checkBoxes = document.querySelectorAll('.freq-checkbox')
let freqImages = document.querySelectorAll('.freq-img')
// creating array of prices (same indices as images & checkboxes)
let prices = [69.95,43.58,79.95]
// also fetching the pluses in between
let lastPlus = document.querySelector('.last-plus')
let firstPlus = document.querySelector('.first-plus')
let freqTotalPrice = document.querySelector('.freq-total-price')
checkBoxes.forEach((check,i) => {
    check.addEventListener('click', () => {
        // unchecked a checkbox? hide image
        if (!check.checked){
            freqImages[i].classList.add('hide')
            // also subtract price from total
            freqTotalPrice.textContent = (+freqTotalPrice.textContent -  prices[i]).toFixed(2)
        } 
        // checeked it once again? come back image!
        else {
            freqImages[i].classList.remove('hide')
            // also you'll need to pay more
            freqTotalPrice.textContent = (+freqTotalPrice.textContent +  prices[i]).toFixed(2)
        }
        // this i wrote so the plus signs would make sense..
        if (freqImages[2].classList.contains('hide')) lastPlus.classList.add('hide')
        else lastPlus.classList.remove('hide') 

        firstPlus.classList.remove('hide')

        if (freqImages[2].classList.contains('hide') && freqImages[1].classList.contains('hide')) firstPlus.classList.add('hide')
    })

})
