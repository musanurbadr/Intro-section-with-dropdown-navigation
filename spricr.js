const navlinks = document.querySelectorAll(".nav-links li");
const menubtn = document.querySelector(".mobile-menu-btn");
const mobile = document.querySelector(".mobile-menu");
const overflow = document.querySelector(".overflow");
const mobilelinks = document.querySelectorAll(".mobile-links li");
// const menu = document.querySelector(".sub-menu ");

menubtn.addEventListener("click", () => {
    const icon = document.querySelector(".mobile-menu-btn img");
    menubtn.classList.toggle("active-btn");
    mobile.classList.toggle("active-menu");
    overflow.classList.toggle("active-menu");

    if (menubtn.classList.contains("active-btn")) {
        icon.src = "/images/icon-close-menu.svg";
    } else {
        icon.src = "./images/icon-menu.svg";
    }
});

navlinks.forEach((link)=> {
    const subMenu = link.querySelector(".sub-menu");
    link.addEventListener("click",() => {
        link.classList.toggle("active");
        subMenu.classList.toggle("active-menu");
    })
})

mobilelinks.forEach((link)=> {
    const subMenu = link.querySelector(".mobile-sub");
    link.addEventListener("click",() => {
        link.classList.toggle("active");
        subMenu.classList.toggle("active-menu");
    })
})
