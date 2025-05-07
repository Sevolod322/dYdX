
// console.log(menuBody)
const menuIcon = document.querySelector('.menu__icon');
// console.log(menuIcon)



menuIcon.addEventListener(
    'click',
    (event) => {
        const menuBody = document.querySelector('.menu__body');
        menuBody.classList.toggle('_active');
        document.body.classList.toggle('_lock')
        menuIcon.classList.toggle('_active')
    }
)




