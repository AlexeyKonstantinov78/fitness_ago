const slider = () => {

    const mainSlider = document.querySelectorAll('.main-slider>.slide');

    const changeSlider = (index) => {

        mainSlider[index].style.display = 'none';

        if (index !== mainSlider.length - 1) {
            index++;
            mainSlider[index].style.display = '';
        } else {
            index = 0;
            mainSlider[index].style.display = '';
        }

        setTimeout(() => {
            changeSlider(index);
        }, 3000);
    }

    mainSlider.forEach((item, index) => {
        if (item.style.display === '') {
            setTimeout(() => {
                changeSlider(index)
            }, 3000);
            return;
        }
    });
}

export default slider;