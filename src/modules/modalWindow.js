const modalWindow = () => {
    const headerMain = document.querySelector('.header-main');

    const openFormModal = (id) => {
        const idForm = document.querySelector(id);

        idForm.style.display = 'inline';

        idForm.addEventListener('click', (event) => {
            if (event.target.closest('.close-form')) idForm.style.display = '';
            if (event.target.closest('.overlay')) idForm.style.display = '';
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

}

export default modalWindow;