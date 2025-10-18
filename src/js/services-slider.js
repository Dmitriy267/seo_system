class ServicesSlider {
    constructor(selector) {
        this.slider = document.querySelector(selector);
        if (!this.slider) return;

        this.slidesContainer = this.slider.querySelector('.services__slides');
        this.slides = this.slider.querySelectorAll('.services__card');
        this.dotsContainer = this.slider.querySelector('.services__dots');
        this.currentIndex = 0;

        this.isMobile = window.innerWidth <= 390;

        this.init();

        // Слушаем изменение размера окна
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    init() {
        if (!this.isMobile) {
            this.disableSlider();
            return;
        }

        // Инициализация слайдера только на mobile
        this.initSlider();
    }

    initSlider() {
        if (this.slides.length > 1) {
            this.createDots();
            this.addDotListeners();
            this.updateSlidePosition();
        } else {
            this.dotsContainer.style.display = 'none';
        }
    }

    disableSlider() {
        // Преобразуем в grid для tablet/desktop
        // this.slidesContainer.style.display = 'grid';
        // this.slidesContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
        // this.slidesContainer.style.gap = '24px';
        // this.slidesContainer.style.transform = 'none';

        // Сбрасываем стили карточек
        //   this.slides.forEach((card) => {
        //       card.style.minWidth = 'auto';
        //       card.style.marginRight = '0';
        //       card.style.flexShrink = '1';
        //   });

        // Скрываем точки
        this.dotsContainer.style.display = 'none';
    }

    createDots() {
        this.dotsContainer.innerHTML = '';
        this.slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('services__dot');
            if (index === 0) dot.classList.add('active');
            dot.dataset.index = index;
            this.dotsContainer.appendChild(dot);
        });
    }

    addDotListeners() {
        const dots = this.dotsContainer.querySelectorAll('.services__dot');
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
        const cardWidth = 314;
        const gap = 20;
        const offset = this.currentIndex * (cardWidth + gap);
        this.slidesContainer.style.transform = `translateX(-${offset}px)`;
    }

    updateDots() {
        const dots = this.dotsContainer.querySelectorAll('.services__dot');
        dots.forEach((dot) => {
            dot.classList.toggle(
                'active',
                parseInt(dot.dataset.index) === this.currentIndex
            );
        });
    }

    handleResize() {
        const wasMobile = this.isMobile;
        this.isMobile = window.innerWidth <= 390;

        // Если изменился режим (mobile/desktop)
        if (wasMobile !== this.isMobile) {
            if (this.isMobile) {
                // Переключились на mobile - включаем слайдер
                this.slidesContainer.style.display = 'flex';
                this.slidesContainer.style.gridTemplateColumns = 'none';
                this.slidesContainer.style.gap = '0';
                this.dotsContainer.style.display = 'flex';
                this.initSlider();
            } else {
                // Переключились на tablet/desktop - выключаем слайдер
                this.disableSlider();
            }
        }
    }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    new ServicesSlider('#servicesSlider');
});
