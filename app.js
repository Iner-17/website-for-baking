const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelectorAll('.nav-links li');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${ index / 7 + 0.7 }s`
            }
        });
        burger.classList.toggle('toggle')
    })
}

navSlide()

function alertMsg() {
    return alert('You can call or text me, Thank you!');
}