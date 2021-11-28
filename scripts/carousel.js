// taking card Data and returning it as an object

const getCardObj = (imgUrl,link, stars, rating, price, shipPrice, more) => {
    const relativePath = './assets/images/'
    return {
        imgUrl: relativePath + imgUrl,
        link,
        stars,
        rating,
        price,
        shipPrice,
        more
    }
}

// filling up an array with all card objects and returning it
const getListObjects = () => {
    let cards = [
        getCardObj('713hZfp5iPS._AC_UL160_SR160,160_.jpg','Luvay Boom Cymbal Stand, Single Braced Lightweight (4.5lb)' ,4.5, 1049, '1 offer from $119.98','',''),
        getCardObj('A1b8sys1+VL._AC_UL160_SR160,160_.jpg','Meinl Cymbals 14” Crash Cymbal – HCS Traditional Finish Brass for Drum Set Use, Made In Germany, 2-YEAR WARRANTY (HCS14C)',
        4.5,608,'3 offers from $42.99','',''),
        getCardObj('71LuQrZuXES._AC_UL160_SR160,160_.jpg', 'Zildjian Planet Z HiHat Cymbal Pair (ZP13PR)',4.5,124,'$79.95','Usually ships within 1 to 2...', ''),
        getCardObj('51VlZ9AioKL._AC_SR160,160_.jpg','Sabian B8X 16" Rock Crash Cymbal (41609X)',4.5,43,'$98.99','Only 16 left in stock (more...', ''),
        getCardObj('51hUTS9mmVL._AC_SX220_SY220_.jpg','Zildjian 8" FX Stack Pair w/Mount', 4.5,47,'$109.95','',''),
        getCardObj('61pN9JOm0yL._AC_UL160_SR160,160_.jpg', 'Cymbal Stand,Boom/Straight Combo,Heavy Duty Double Braced Legs with Large Rubber Feet,Adjust Height (30-58 in) with 2 pair dr...', 4,93,'$59.99','Get it as soon as Wednesday, Dec 22','$23.52 shipping'),
        getCardObj('61OfuBnWjeS._AC_UL160_SR160,160_.jpg','Zildjian Cymbal Boom Arm With Clamp', 5,69,'$41.95','Get it as soon as Wednesday, Dec 22','FREE Shipping on orders over $49 shipped by Amazon'),
        getCardObj('91DmMh3vGbL._AC_UL160_SR160,160_.jpg', 'Sabian 20" SBr Ride Cymbal (SBR2012)',4.5,235,'$91.99','$35.05 shipping','Only 3 left in stock - order...'),
        getCardObj('713hZfp5iPS._AC_UL160_SR160,160_.jpg','Zildjian 17" S Thin Crash Cymbal',4.5,145,'$84.99','$14.95 shipping','in stock soon'),
        getCardObj('71WoBw4y4HL._AC_UL160_SR160,160_.jpg','Gibraltar SC-CMBAC Medium Cymbal Boom Attachment Clamp',5,859,'3 offers from $74.22','',''),
        getCardObj('A1GWGaDcqQL._AC_UL160_SR160,160_.jpg','Meinl 16” Trash Crash Cymbal with Holes – HCS Traditional Finish Brass for Drum Set, Made In Germany, 2-YEAR WARRANTY (HCS16TRC)',4.5,246,'8 offers from $73.99','',''),
        getCardObj('91Mm8ZZdTkL._AC_UL160_SR160,160_.jpg','Meinl Cymbals 8” Splash Cymbal – HCS Traditional Finish Brass for Drum Set, Made in Germany, 2-Year Warranty, (HCS8S)',4.5,314,'4 offers from $25.99','','')
    ]
    return cards
}

// turning a card object to a list Element and returning it

const createCardElement = cardObj => {
    let liElement = document.createElement('li')
    liElement.classList.add('card-item')
    let imgElement = document.createElement('img')
    imgElement.src = cardObj.imgUrl
    liElement.append(imgElement)
    let linkElement = document.createElement('a')
    linkElement.setAttribute('href','#')
    linkElement.textContent = cardObj.link
    liElement.append(linkElement)
    let starsElement = document.createElement('div')
    switch (cardObj.stars){
        case 4 : 
        starsElement.classList.add('stars4')
        break;
        case 4.5: 
        starsElement.classList.add('stars4half')
        break;
        default:
        starsElement.classList.add('stars5')
    }
    liElement.append(starsElement)
    let ratingElement = document.createElement('span')
    ratingElement.classList.add('related-rating')
    ratingElement.textContent = cardObj.rating
    liElement.append(ratingElement)
    let priceElement = document.createElement('p')
    priceElement.classList.add('related-price')
    priceElement.textContent = cardObj.price
    liElement.append(priceElement)
    let priceShipElement = document.createElement('p')
    priceShipElement.classList.add('related-price-ship')
    priceShipElement.textContent = cardObj.shipPrice
    liElement.append(priceShipElement)
    let moreElement = document.createElement('p')
    moreElement.classList.add('related-more')
    moreElement.classList.add = cardObj.more
    liElement.append(moreElement)
    return liElement
}

// taking a list Element and appending it to the ul ELement

const appendListElements = liElement => {
    let ulElement = document.querySelector('.carousel-list')
    ulElement.append(liElement)
}



// appending 6 list items to the ul Element every page turn

const appendPage = () => {
    let cardObjects = getListObjects()
    console.log(cardObjects)
    let cardElements = cardObjects.map(cardObj => createCardElement(cardObj))
    console.log(cardElements)
    let ulElement = document.querySelector('.carousel-list')
    ulElement.innerHTML = ''
    console.log(ulElement)
    for (let i = 0; i < elsInPage; i++){
        appendListElements(cardElements[(+currentPage.textContent-1) * 6 + i])
    }
}

const elsInPage = 6
let numberOfPages = Math.ceil(getListObjects().length / elsInPage)


document.querySelector('.pages-total').textContent = numberOfPages

let currentPage = document.querySelector('.curr-page')
// appending first page
appendPage()

// making the carousel arrows functional. first lets assign them to a variable
let rightArrow = document.querySelector('.right-carousel-arrow')
let leftArrow = document.querySelector('.left-carousel-arrow')

// then lets add a click event to each arrow
rightArrow.addEventListener('click', () => {
    currentPage.textContent = (+currentPage.textContent === numberOfPages) ? 1 : +currentPage.textContent+1
    appendPage()
})

leftArrow.addEventListener('click', () => {
    console.log('left')
    currentPage.textContent = (+currentPage.textContent === 1) ? numberOfPages : +currentPage.textContent-1  
    appendPage()
})
