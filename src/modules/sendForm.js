const sendForm = () => {
    const form = document.querySelectorAll('form'),
        proccMessage = 'Идет отправка...',
        consentToTheProcessing = 'Вы должны дать согласие перед отправкой',
        statusMessage = document.createElement('div');

    statusMessage.style.cssText = 'font-size: 2rem; color: #aa8800;background-color: #ffd11a;text-align: center;';


    form.forEach((item) => {

        item.addEventListener('input', event => inputVerifi(event.target, item));

        if (!item.closest('#footer_form')) {
            item.querySelector('.btn').addEventListener('click', () => {
                if (!item.querySelector('.personal-data>input').checked) {
                    item.appendChild(statusMessage);
                    statusMessage.textContent = consentToTheProcessing;
                    removeTheThankYouText(item);
                }
            });
        }

        item.addEventListener('submit', (event) => {
            event.preventDefault();

            item.appendChild(statusMessage);
            statusMessage.textContent = proccMessage;

            const formData = new FormData(item);
            let body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });

            if (sendVerify(body, item)) {
                fetch('./server.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                })
                    .then((response) => {
                        if (response.status !== 200) throw new Error('status network not 200');
                        statusMessage.textContent = '';
                        popupTranks(true);
                        removeTheThankYouText(item);

                    })
                    .catch((error) => {
                        popupTranks(false);
                        removeTheThankYouText(item);
                        console.error(error);
                    })
                    .finally(() => {
                        inputItem(item);
                    });

            } else {
                statusMessage.textContent = 'Что то не так...';
                removeTheThankYouText(item);
            }

        });
    });

    const sendVerify = (body, item) => {

        try {
            if (body.name.length <= 3 && body.name !== undefined) return false;
        } catch (e) {
            console.log('параметра name В ЭТОЙ ФОРМЕ нет');
        }

        if (item.closest('#footer_form')) {
            if (!clubInputFooter(item)) return false;
        }

        if (body.phone.length <= 7 || !(/^\+?[7|8]([-()]*\d){7,10}$/.test(body.phone))) return false;

        return true;
    }

    const clubInputFooter = (item) => {
        let bool = false;
        item.querySelectorAll('.club>input').forEach((item) => {
            //console.log(item.checked);
            if (item.checked === true) {
                console.log('true');
                bool = true;
                return;
            }
        });

        return bool;
    }

    // контекстное окно 
    const popupTranks = (boolen) => {
        const popupTranks = document.querySelector('#thanks'),
            formWrapper = document.querySelector('#thanks>.form-wrapper'),
            formContent = document.createElement('div'),
            popupCall = document.querySelector('#callback_form'),
            popupFree = document.querySelector('#free_visit_form');

        formContent.classList.add('form-content');

        if (boolen) {
            formContent.innerHTML = `<h4>Спасибо!</h4>
            <p>Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.</p>
            <button class="btn close-btn">OK</button>`;
        } else {
            formContent.innerHTML = `<h4>Извините!</h4>
            <p>Что то пошло не так...</p>
            <button class="btn close-btn">OK</button>`;
        }

        formWrapper.appendChild(formContent);

        popupTranks.style.display = 'inline';

        popupTranks.addEventListener('click', (event) => {
            const target = event.target;

            const formConten = document.querySelector('#thanks>.form-wrapper>.form-content');

            if (target.closest('.close-form') || target.closest('.btn.close-btn') || target.closest('.overlay')) {
                popupTranks.style.display = '';
            }

            if (formConten !== null) formConten.remove();

            if (popupCall.style.display === 'inline') popupCall.style.display = '';
            if (popupFree.style.display === 'inline') popupFree.style.display = '';
        });

    }

    const inputVerifi = (item, form) => {

        if (item.closest('.form-phone')) {
            item.value = item.value.substring(0, 12).replace(/[^\+0-9]/g, '') + item.value.substring(11,).replace(/./g, '');
            if (/^\+?[7|8]([-()]*\d){7,10}$/.test(item.value) && item.value.length >= 8 && item.value.length <= 12) {
                item.style.border = '';
            } else {
                item.style.border = 'solid red';
            }
        }
        if (item.closest('.form-name') || item.closest('#form2-name')) {
            item.value = item.value.replace(/[^А-Яа-яЁё ]/gi, '');
        }

    }

    // очистка 
    const removeTheThankYouText = (item) => {
        setTimeout(() => {
            item.removeChild(statusMessage);
        }, 5000);
    }

    // очитска
    const inputItem = (item) => {
        const inputAll = item.querySelectorAll('input');
        inputAll.forEach((elem) => {
            elem.value = '';
        });
    }
};

export default sendForm;