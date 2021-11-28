// array of big image sources
const bigImgSources = [
    './assets/images/71keflo4LrS._AC_SX679_.jpg',
    './assets/images/41OGJ+mv5PL._AC_.jpg',
    './assets/images/413KJehPI6L._AC_.jpg',
    './assets/images/81sTOPkQxeL._AC_SX679_.jpg',
    './assets/images/41xe5as+AJL._AC_.jpg'
]


// assigning small images to an array, also asigning the big image container to a different variable
const smallImgItems = document.querySelectorAll('.small-img-item')
let bigImgEl = document.querySelector('.big-img-container')
// creating an event listener to display big image when hovering on small image
smallImgItems.forEach((itemEl,i) => {
    itemEl.addEventListener('mouseover', () => {
        bigImgEl.innerHTML = `<img class="big-img-render" src="${bigImgSources[i]}" alt="big image">`
    })
})