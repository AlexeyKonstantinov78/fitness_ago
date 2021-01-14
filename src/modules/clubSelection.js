const clubSelection = () => {
    const clubSelectUl = document.querySelector('.clubs-list>ul'),
        headerMain = document.querySelector('.header-main');

    const openClubSelect = () => {
        if (!clubSelectUl.style.cssText) {
            clubSelectUl.style.display = 'inline';
        } else {
            clubSelectUl.style.display = '';
        }
    };

    headerMain.addEventListener('click', (event) => {
        if (event.target.closest('.club-select')) {
            openClubSelect();
        } else {
            clubSelectUl.style.display = '';
        }
    });

}

export default clubSelection;