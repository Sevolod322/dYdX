const menuBody = document.querySelector('.menu__body');
// console.log(menuBody)
const menuIcon = document.querySelector('.menu__icon');
// console.log(menuIcon)



menuIcon.addEventListener(
    'click',
    (event) => {
        menuBody.classList.toggle('_active');
        document.body.classList.toggle('_lock')
        menuIcon.classList.toggle('_active')

        if (menuIcon.classList.contains('_active')) {
            
        }
    }
)




