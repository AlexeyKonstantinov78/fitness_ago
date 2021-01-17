const urlList = (url, i) => {

    const div = document.createElement('div');

    let rezult = () => {
        return fetch(`./${url}.html`)
            .then((response) => {
                if (response.status !== 200) throw new Error('sts]atus network not 200');
                return response.text();
            })
            .then(rezult => {
                div.innerHTML = rezult;
                return cards(div.querySelector('#card_order>.cards-types'));

            })
            .catch((error) => console.error(error));
    }

    const cards = (card) => {
        const input = card.querySelectorAll('input'),
            label = card.querySelectorAll('label');
        let a;

        input.forEach((item, index) => {
            if (item.value.trim().substring(item.value.trim().length - 1, item.value.trim().length) !== 'd' && item.value.trim().substring(0, item.value.trim().length - 1) === i) {
                a = +label[index].querySelector('.cost').firstChild.textContent;
            }
        });

        return a;
    }

    return rezult();
}

export default urlList;