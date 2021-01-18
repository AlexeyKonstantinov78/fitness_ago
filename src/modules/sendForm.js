const sendForm = () => {
    const form = document.querySelectorAll('form'),
        errorMessage = 'Что то не так...',
        successMesage = 'Спсасибо! Мы скоро с вами свяжемся!',
        statusMessage = document.createElement('div');

    statusMessage.style.cssText = 'font-size: 2rem; color: #FFFFFF;';

    form.forEach((item) => {
        console.log(item);

        item.addEventListener('input', event => inputVerifi(event.target, item));

        item.addEventListener('submit', (event) => {
            event.preventDefault();

            item.appendChild(statusMessage);
            statusMessage.textContent = '';

            const formData = new FormData(item);
            let body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });

            //if (checkBox(event.target, item)) {

            fetch('./server.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
                .then((response) => {
                    if (response.status !== 200) throw new Error('status network not 200');
                    //item.removeChild(preloader);
                    statusMessage.textContent = successMesage;
                    removeTheThankYouText(item);
                })
                .catch((error) => {
                    //item.removeChild(preloader);
                    statusMessage.textContent = errorMessage;
                    removeTheThankYouText(item);
                    console.error(error);
                })
                .finally(() => {
                    inputItem(item);
                });
            //} else {
            //  statusMessage.textContent = errorMessage;
            //removeTheThankYouText(item);
            //}
        });
    });

    const inputVerifi = (item, form) => {
        console.log(item);


        // if (item.closest('.form-phone')) {
        //     item.value = item.value.substring(0, 12).replace(/[^\+0-9]/g, '') + item.value.substring(11,).replace(/./g, '');
        //     if (/^\+?[7|8]([-()]*\d){7,10}$/.test(item.value) && item.value.length >= 8 && item.value.length <= 12) {
        //         item.style.border = '';
        //     } else {
        //         item.style.border = 'solid red';
        //     }
        // }
        // if (item.closest('.form-name') || item.closest('#form2-name')) {
        //     item.value = item.value.replace(/[^А-Яа-яЁё ]/gi, '');
        // }

        // if (item.closest('.form-email')) {
        //     item.value = item.value.replace(/[^\w+@\w+\.\w]/gi, '');
        //     if (/^\w+@\w+\.\w{2,}$/g.test(item.value) && item.value.length > 3) {
        //         item.style.border = '';
        //     } else {
        //         item.style.border = 'solid red';
        //     }
        // }
        // if (item.closest('.mess')) {
        //     item.value = item.value.replace(/[^А-Яа-яЁё\d .,?!'"]/gi, '');
        // }
    }

    const checkBox = (item, form) => {

        console.log(item);
        console.log(form);
        // if (item.checked) {
        //     return true;
        // }
        return false;
    }

    const removeTheThankYouText = (item) => {
        setTimeout(() => {
            item.removeChild(statusMessage);
        }, 5000);
    }

    const inputItem = (item) => {
        const inputAll = item.querySelectorAll('input');
        inputAll.forEach((elem) => {
            elem.value = '';
        });
    }
};

export default sendForm;