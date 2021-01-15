const photoGallery = () => {
    const slide = document.querySelectorAll('.gallery-slider>.slide'),
        gallerySlider = document.querySelector('.gallery-slider');

    let dot = document.querySelectorAll('.dot'),
        interval,
        currentSlide = 0;

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const playSlider = () => {
        prevSlide(slide, currentSlide, 'slide-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide >= slide.length) currentSlide = 0;
        nextSlide(slide, currentSlide, 'slide-active');
        nextSlide(dot, currentSlide, 'dot-active');
    };

    const init = (time = 2000) => {
        interval = setInterval(playSlider, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    gallerySlider.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;

        if (!target.matches('.slider-arrow, .dot')) {
            return;
        }

        prevSlide(slide, currentSlide, 'slide-active');
        prevSlide(dot, currentSlide, 'dot-active');

        if (target.matches('#arrow-right')) {
            currentSlide++;
        } else if (target.matches('#arrow-left')) {
            currentSlide--;
        } else if (target.matches('.dot')) {
            dot.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slide.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slide.length - 1;

        nextSlide(slide, currentSlide, 'slide-active');
        nextSlide(dot, currentSlide, 'dot-active');

    });

    gallerySlider.addEventListener('mouseover', (event) => {
        if (event.target.matches('.slider-arrow, .dot')) stopSlide();
    });

    gallerySlider.addEventListener('mouseout', (event) => {
        if (event.target.matches('.slider-arrow, .dot')) init();
    });

    init(2000);
}

export default photoGallery;