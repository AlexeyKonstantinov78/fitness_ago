const scrollWindow = () => {
    const totop = document.getElementById('totop');
    totop.style.display = 'none';
    window.addEventListener('scroll', () => {
        if (pageYOffset < 740) {
            totop.style.display = 'none';
        } else {
            totop.style.display = '';
        }
    });
}

export default scrollWindow;