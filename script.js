//Typing Script
var typed = new Typed(".typing", {
    strings:["Web Developer", "Web Designer", "Youtuber", "Blogger", "Programmer"],
    typeSpeed:80,
    backSpeed:80,})
var typed = new Typed(".typing_2", {
    strings:["Youtuber", "Web Designer", "Blogger", "Programmer", "Web Developer"],
    typeSpeed:100,
    backSpeed:80,})
    
//Show hide Faq Answers
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus';
        }
        else{
            icon.className = 'fa-solid fa-plus';
        }

    })
})

//Show / Hide Nab Menu
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})
//Close Nav Menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav);
//Nav Color Change on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>100);
})