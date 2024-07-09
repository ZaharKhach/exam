const hamburger = document.querySelector('.hamburger');
const list = document.querySelector('.menu__items_block');
console.log(list)

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    list.classList.toggle("active");
})