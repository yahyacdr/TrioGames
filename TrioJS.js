let carousel = document.querySelector('main section > div:last-child > div:nth-child(2)')
let slides = Array.from(carousel.children)
let navButton = document.querySelector('header nav div:last-child > div')
let bars = Array.from(navButton.children)
let ol = document.querySelector('body > ol')
let olButton = document.querySelector('body > ol img')
let li = document.querySelector('body > ol > li > ol')
let outerLi = document.querySelectorAll('body > ol > li')
let body = document.querySelector('body')
let element = document.querySelector('main > div:nth-child(2)')
let scrollP,eleP
window.onscroll = function(){
    scrollP = document.documentElement.scrollTop
    eleP = element.getBoundingClientRect()
    if (window.matchMedia("(min-width: 1024px)").matches) {
        if (Math.floor(eleP.top) <= 0 && Math.floor(eleP.bottom) >= 0) {
            element.style.opacity = '1'
        } else {
            element.style.opacity = '0'
        }
    }
}
const slideWidth = slides[1].getBoundingClientRect().width
slides.forEach((slide, i) => slide.style.left = slideWidth * i + 'px')

let i = 0;
let slider
carousel.addEventListener('mouseenter', function(){
    clearInterval(slider)
})
carousel.addEventListener('mouseleave', function(){
    slider = setInterval(sliderF, 4000)
})
window.addEventListener('load', function(){
    slider = setInterval(sliderF, 4000)
})
function sliderF(){

    if (i%2 === 0){

        slides[1].style.zIndex = '1'
        slides[0].style.zIndex = '0'
        setTimeout(function(){
            slides[1].style.left = `0px`
        }, 250)
        setTimeout(function(){
            slides[0].style.left = `${slideWidth}px`
        },1250)
        
    } else {
        
        slides[0].style.zIndex = '1'
        slides[1].style.zIndex = '0'
        setTimeout(function(){
            slides[0].style.left = `0px`
        }, 250)
        setTimeout(function(){
            slides[1].style.left = `${slideWidth}px`
        },1250)
        
    }
    i++

}

let j = 0
navButton.onclick = function() {
    if (j%2 == 0) {
        bars[0].classList.add('xTop')
        bars[0].style.width = '80%'
        bars[0].style.top = '45%'
        bars[0].style.left = '50%'
        bars[2].classList.add('xBottom')
        bars[2].style.width = '80%'
        bars[2].style.top =  '60%'
        bars[2].style.left = '50%'
        bars[1].style.display = 'none'
        navButton.classList.add('background')
        ol.classList.add('curtain')
        body.style.overflow = 'hidden'
    } else {
        bars[0].classList.remove('xTop')
        bars[0].style.width = '70%'
        bars[0].style.top = '20%'
        bars[0].style.right = '3%'
        bars[0].style.left = 'unset'
        bars[2].classList.remove('xBottom')
        bars[2].style.width = '55%'
        bars[2].style.top =  '80%'
        bars[2].style.right = '3%'
        bars[2].style.left = 'unset'
        bars[1].style.display = 'block'
        navButton.classList.remove('background')
        body.style.overflow = 'visible'
        ol.classList.remove('curtain')
    }
    j++
}
let p = 0
let matchScreen
if (window.matchMedia("(min-width: 1024px)").matches) {
    matchScreen = true
} else {
    matchScreen = false
}
olButton.onclick = function() {
    if (p%2==0){
        li.style.display = 'block'
        olButton.style.transform = 'translateY(-50%) rotate(180deg)'
 
        outerLi.forEach(function(outerLi) {
            if (matchScreen) {
                outerLi.style.top = '10%' 
            } else {
                outerLi.style.top = '-4.4%'
            }
        } )
    } else {
        li.style.display = 'none'
        olButton.style.transform = 'translateY(0) rotate(0deg)'
        outerLi.forEach(function(outerLi) {
            if (matchScreen) {
                outerLi.style.top = '0%'
                console.log('matches')
            } else {
                outerLi.style.top = '-15%'
            }
        })
    }
    p++
}