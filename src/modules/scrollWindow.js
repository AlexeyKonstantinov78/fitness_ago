const scrollWindow = () => {
    const totop = document.getElementById('totop'),
        topMenu = document.querySelector('.top-menu');

    totop.style.display = 'none';
    window.addEventListener('scroll', () => {
        console.log(outerWidth);
        console.log(window);

        if (pageYOffset > 181 && innerWidth < 768) {
            topMenu.style.position = 'fixed';
        } else {
            topMenu.style.position = '';
        }

        if (pageYOffset < 740) {
            totop.style.display = 'none';
        } else {
            totop.style.display = '';
        }
    });
}

export default scrollWindow;