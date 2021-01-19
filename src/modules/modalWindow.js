const modalWindow = () => {
    const headerMain = document.querySelector('.header-main'),
        fixedGift = document.querySelector('.fixed-gift');


    const openFormModal = (id) => {
        const idForm = document.querySelector(id);


        idForm.style.display = 'inline';

        idForm.addEventListener('click', (event) => {
            if (event.target.closest('.close-form') || event.target.closest('.overlay') || event.target.closest('.close-btn')) idForm.style.display = '';

            // if (event.target.closest('.btn.btn-send') && idForm.querySelector('.personal-data>input').checked && idForm.querySelector('.form-name').value != '' && idForm.querySelector('.form-phone').value != '') {
            //     setTimeout(() => {
            //         idForm.style.display = '';
            //     }, 1000);
            // }
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

    try {
        fixedGift.addEventListener('click', () => {
            openFormModal('#gift');
            fixedGift.style.display = 'none';
        });
    } catch (e) {
        console.error('нет подарка');
    }
}

export default modalWindow;