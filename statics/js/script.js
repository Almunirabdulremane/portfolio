/* Abertura e fechamento do menu lateral mobile */

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-card-list")
    ? menuMobile.classList.replace("bi-card-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-card-list");
    body.classList.toggle("menu-nav-active")
});

/* Fechar o menu ao clicar num item de lista e mudar o icone para list-card*/

const navItem = document.querySelectorAll('.nav-item')
console.log(navItem)
navItem.forEach(item => {
    item.addEventListener("click", () => {
        if(body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-card-list");
        }
    })
})

/* Animar todos elementos da tela que possuirem atributo data-anime */

const item = document.querySelectorAll("[data-anime]");

const animaScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;
    item.forEach(Element =>{
        if(windowTop > Element.offsetTop){
            Element.classList.add('animate');
        }else{
            Element.classList.remove('animate')
        }
    });
};

animaScroll();

window.addEventListener("scroll", () => {
    animaScroll();
})