const carousel = () => {
    const servicesSlider = document.querySelector('.services-slider'),
        caruselSlider = document.querySelector('.carusel-slider');

    let count = 0;

    const next = (index) => {
        if (count === 100) count = 0;
        count += index;
        servicesSlider.style.transform = `translateX(-${count}%)`;
    };

    const prev = (index) => {

        if (count === 0) count = 100;
        count += index;
        servicesSlider.style.transform = `translateX(-${count}%)`;
    };

    caruselSlider.addEventListener('click', (event) => {

        if (event.target.closest('.slider-arrow.prev')) prev(-20);

        if (event.target.closest('.slider-arrow.next')) next(20);

    });
}

export default carousel;