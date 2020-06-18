const backdrop = document.querySelector('.backdrop')
const selectPlanButtons = document.querySelectorAll('.plan button')
const modal = document.querySelector('.modal')
const toggleButton = document.querySelector('.toggle-button')
const mobileNav = document.querySelector('.mobile-nav')

function closeModal() {
    // modal.style.display = 'none'
    // backdrop.style.display = 'none'
    if (modal) {
        modal.classList.remove('open')
    }
    backdrop.classList.remove('open')
}

for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block'
        modal.classList.add('open')
        backdrop.classList.add('open')
    })
}

const selectModalButtons = document.querySelectorAll('.modal__action--negative')
for (let i=0; i< selectModalButtons.length; i++) {
    selectModalButtons[i].addEventListener('click', closeModal)
}

backdrop.addEventListener('click', function() {
    // mobileNav.style.display = 'none'
    mobileNav.classList.remove('open')
    closeModal()

})


toggleButton.addEventListener('click', function() {
    // mobileNav.style.display = 'block'
    // backdrop.style.display = 'block'
    mobileNav.classList.add('open')
    backdrop.classList.add('open')
})