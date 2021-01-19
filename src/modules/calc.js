import urlList from "./urlList";


const calc = () => {

    try {
        const cardOrderId = document.querySelector('#card_order'),
            club = document.querySelectorAll('#card_order>.club>input'),
            time = document.querySelectorAll('#card_order>.time>input'),
            inputPromo = document.querySelector('#card_order>.price>.input-text>input'),
            priceTotal = document.querySelector('#card_order>.price>#price-total');

        let prais = {};

        const rezCalc = () => {

            club.forEach((item) => {
                if (item.checked) {
                    time.forEach((i) => {
                        if (i.checked) {
                            prais = urlList(item.value, i.value);
                            return;
                        }
                    });
                }
            });

            prais.then((item) => {

                priceTotal.textContent = item;

                if (inputPromo.value.trim() === 'ТЕЛО2019') {
                    priceTotal.textContent = Math.floor(item * 0.70);
                }

                // if (inputPromo.value.trim() === '') {
                //     priceTotal.textContent = item;
                // } else {
                //     if (inputPromo.value.trim() === 'ТЕЛО2019') {
                //         priceTotal.textContent = Math.floor(item * 0.70);
                //     } else {
                //         priceTotal.textContent = item;
                //     }
                // }


            });

        };

        cardOrderId.addEventListener('input', (event) => {
            const target = event.target;

            if (target.closest('.club')) rezCalc();
            if (target.closest('.time')) rezCalc();
            if (target.closest('.price-message.input-text')) rezCalc();
        });

        rezCalc();
    }
    catch (e) {
        console.error('не работает на этой странице');
    }

}

export default calc;