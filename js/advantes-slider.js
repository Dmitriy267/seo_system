class SliderCards {
    constructor(selector) {
        this.slider = document.querySelector(selector);
        this.slides = this.slider.querySelectorAll('.slider-slide-card');
        this.dotsContainer = this.slider.querySelector('.slider-dots-cards');
        this.currentIndex = 0;

        this.init();
    }

    init() {
        this.createDots();

        this.updateSlidePosition();

        this.addDotListeners();
    }

    createDots() {
        this.slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot-card');
            if (index === 0) dot.classList.add('active');
            dot.dataset.index = index;
            this.dotsContainer.appendChild(dot);
        });
    }

    addDotListeners() {
        const dots = this.dotsContainer.querySelectorAll('.slider-dot-card');
        dots.forEach((dot) => {
            dot.addEventListener('click', () => {
                this.goToSlide(parseInt(dot.dataset.index));
            });
        });
    }

    goToSlide(index) {
        if (index < 0) index = this.slides.length - 1;
        if (index >= this.slides.length) index = 0;

        this.currentIndex = index;
        this.updateSlidePosition();
        this.updateDots();
    }

    updateSlidePosition() {
        const offset = this.currentIndex * 100;
        this.slider.querySelector(
            '.slider-slides-cards'
        ).style.transform = `translateX(-${offset}%)`;
    }

    updateDots() {
        const dots = this.dotsContainer.querySelectorAll('.slider-dot-card');
        dots.forEach((dot) => {
            dot.classList.toggle(
                'active',
                parseInt(dot.dataset.index) === this.currentIndex
            );
        });
    }
}

const sliderCards = new SliderCards('#SliderRevertCard');
