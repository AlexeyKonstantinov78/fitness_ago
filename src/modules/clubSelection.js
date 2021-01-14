const clubSelection = () => {
    const clubSelectUl = document.querySelector('.clubs-list>ul');

    const openClubSelect = () => {
        if (!clubSelectUl.style.cssText) {
            clubSelectUl.style.display = 'inline';
        } else {
            clubSelectUl.style.display = '';
        }
    };

    document.body.addEventListener('click', (event) => {
        if (event.target.closest('.club-select')) {
            openClubSelect();
        } else {
            clubSelectUl.style.display = '';
        }
    });

}

export default clubSelection;