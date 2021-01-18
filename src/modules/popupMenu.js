const popupMenu = () => {
    const header = document.querySelector('header'),
        popupMenu = document.querySelector('.popup-menu.hidden-large');

    header.addEventListener('click', (event) => {
        const target = event.target;

        if (target.closest('.menu-button.hidden-large>img')) popupMenu.style.display = 'flex';
        if (target.closest('.close-menu-btn>img')) popupMenu.style.display = '';
        if (target.closest('.popup-menu.hidden-large>ul>li')) popupMenu.style.display = '';

    });

};

export default popupMenu;