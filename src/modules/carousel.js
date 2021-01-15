const carousel = () => {
    const servicesSlider = document.querySelector('.services-slider'),
        caruselSlider = document.querySelector('.carusel-slider');

    let count = 0;
    //servicesSlider.style.transform = `translateX(${count}%)`;

    const next = (index = 0) => {
        if (count > 100) count = 0;
        if (count < 0) count = 100;
        count += index;
        console.log(count);

        servicesSlider.style.transform = `translateX(-${count}%)`;
    };


    //console.log(servicesSlider);

    // slide.forEach((item) => {
    //     console.log(item);

    // });
    caruselSlider.addEventListener('click', (event) => {

        if (event.target.closest('.slider-arrow.prev')) {
            console.log('лево');
            next(-20);
        }
        if (event.target.closest('.slider-arrow.next')) {
            console.log('право');
            next(20);
        }
    });
}

export default carousel;