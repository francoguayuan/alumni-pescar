document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 1000,
        dist: -80,
        shift: 5,
        padding: 5,
        indicators: true

        
       
        

    });
});
