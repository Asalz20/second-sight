//Mobile DOM values
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('nav__list');
const giftHunt = document.getElementById('gift-hunt');
const hunt = document.getElementById('hunt');
const giftExpress = document.getElementById('giftExpress');
const express = document.getElementById('express');
const labN = document.getElementById('labN');
const labs = document.getElementById('labs');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('show')
})

giftHunt.addEventListener('click', () => {
     hunt.classList.toggle('show')
})

giftExpress.addEventListener('click', () => {
    express.classList.toggle('show')
})

labN.addEventListener('click', () => {
    labs.classList.toggle('show')
})

//Desktop DOM values
const deskHunt = document.getElementById('desktop-hunt');
const deskExpress = document.getElementById('desktop-express');
const deskLabs = document.getElementById('desktop-labs');

giftHunt.addEventListener('click', () => {
    //If any other section has show, toggle it off then toggle this section on
        // else just toggle this section on
    if (deskExpress.classList.contains('show')) {
        deskExpress.classList.toggle('show');
        deskHunt.classList.toggle('show');
    } else if (deskLabs.classList.contains('show')) {
        deskLabs.classList.toggle('show');
        deskHunt.classList.toggle('show');
    } else {
        deskHunt.classList.toggle('show');
    }
})

giftExpress.addEventListener('click', () => {
    if (deskHunt.classList.contains('show')) {
        deskHunt.classList.toggle('show');
        deskExpress.classList.toggle('show')
    } else if (deskLabs.classList.contains('show')) {
        deskLabs.classList.toggle('show');
        deskExpress.classList.toggle('show')
    } else {
        deskExpress.classList.toggle('show')
    }
    
})

labN.addEventListener('click', () => {
    if (deskHunt.classList.contains('show')) {
        deskHunt.classList.toggle('show');
        deskLabs.classList.toggle('show')
    } else if (deskExpress.classList.contains('show')) {
        deskExpress.classList.toggle('show');
        deskLabs.classList.toggle('show')
    } else {
        deskLabs.classList.toggle('show')
    }
})