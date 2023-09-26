
/* -------------------------------------------------------------------------- */
/*                                Change navBar                               */
/* -------------------------------------------------------------------------- */


window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY>50)
})


/* -------------------------------------------------------------------------- */
/*                                show hide qna                               */
/* -------------------------------------------------------------------------- */


const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click',() => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === "fa-solid fa-plus"){
            icon.className = "fa-solid fa-minus";
        }
        else{
            icon.className = "fa-solid fa-plus";
        }
    });
});



const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

const mediaQuery = window.matchMedia('(max-width: 1024px)')

if(window.innerWidth<1024){

menuBtn.addEventListener('click' , () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block"
    menuBtn.style.display = "none"
})


const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none"
    menuBtn.style.display = "inline-block"
}

closeBtn.addEventListener('click',closeNav);

}

else{
    menuBtn.style.display = "none";
    closeBtn.style.display = "none";
}

mediaQuery.addListener