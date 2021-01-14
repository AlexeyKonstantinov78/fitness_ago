const modalWindow = () => {
    const headerMain = document.querySelector('.header-main'),
        fixedGift = document.querySelector('.fixed-gift');


    const openFormModal = (id) => {
        const idForm = document.querySelector(id);

        idForm.style.display = 'inline';

        idForm.addEventListener('click', (event) => {
            if (event.target.closest('.close-form')) idForm.style.display = '';
            if (event.target.closest('.overlay')) idForm.style.display = '';
            if (event.target.closest('.close-btn')) idForm.style.display = '';
        });
    }

    headerMain.addEventListener('click', (event) => {
        const target = event.target;

        if (target.closest('.open-popup')) {
            openFormModal(target.dataset.popup);
        }
        if (target.closest('.callback-btn')) {
            openFormModal(target.dataset.popup);
        }
    });

    fixedGift.addEventListener('click', () => {
        openFormModal('#gift');
        fixedGift.style.display = 'none';
    });

}

export default modalWindow;