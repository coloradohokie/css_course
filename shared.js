const backdrop = document.querySelector('.backdrop')
const selectPlanButtons = document.querySelectorAll('.plan button')
const modal = document.querySelector('.modal')
const toggleButton = document.querySelector('.toggle-button')
const mobileNav = document.querySelector('.mobile-nav')
const ctaButton = document.querySelector(".main-nav__item--cta")

function closeModal() {
    if (modal) {
        modal.classList.remove('open')
    }
    setTimeout(function() {
        backdrop.classList.remove('open')
    }, 200)
    backdrop.style.display = 'none'

}

for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.classList.add('open')
        backdrop.style.display = 'block'
        setTimeout(function() {
            backdrop.classList.add('open')
        }, 10)                
    })
}

const selectModalButtons = document.querySelectorAll('.modal__action--negative')
for (let i=0; i< selectModalButtons.length; i++) {
    selectModalButtons[i].addEventListener('click', closeModal)
}

backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open')
    closeModal()

})


toggleButton.addEventListener('click', function() {
    mobileNav.classList.add('open')
    backdrop.style.display = 'block'
    setTimeout(function() {
        backdrop.classList.add('open')
    }, 10)
})

ctaButton.addEventListener('animationstart', function() {
    // console.log('Animation started', event)
})

ctaButton.addEventListener('animationend', function() {
    // console.log('Animation ended', event)
})

ctaButton.addEventListener('animationiteration', function() {
    // console.log('Animation iteration', event)
})