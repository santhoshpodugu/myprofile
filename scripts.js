

const hamburgerMenu = document.querySelector('.hamburger-menu1');
const bodyMain = document.body;

hamburgerMenu.addEventListener('click', () => {
    menuDisplay();
});

let isMenuDisplaying = false;

function menuDisplay() {
    const menu = document.querySelector('.sidebar');

    if (!isMenuDisplaying && (menu.style.display = 'none')) {
        menu.style.display = 'block';
        isMenuDisplaying = true;
        hamburgerMenu.innerHTML = `<img class ='hamburger-menu' src = './icons/close.svg'>`;
    }
    else if (isMenuDisplaying && (menu.style.display = 'block')) {
        menu.style.display = 'none';
        isMenuDisplaying = false;
        hamburgerMenu.innerHTML = `<img class ='hamburger-menu' src = './icons/menu.svg'>`;

    }
}

const menuList = document.querySelectorAll('.ham-links');

    menuList.forEach((link) => {
        link.addEventListener('click', () => {
                menuDisplay();
        })
    });



var typed = new Typed("#element", {
    strings: ["<b>UPSC</b> Aspirant", "Tech Enthusiast", "Web Developer."],
    typeSpeed: 50,
  });
