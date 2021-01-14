const clubSelection = () => {
    const clubSelect = document.querySelector('.club-select'),
        clubSelectUl = document.querySelector('.clubs-list>ul');

    clubSelect.addEventListener('click', () => {
        if (!clubSelectUl.style.cssText) {
            clubSelectUl.style.display = 'inline';
        } else {
            clubSelectUl.style.display = '';
        }
    });
}

export default clubSelection;