class ServicesGrid {
    constructor() {
        this.grid = document.querySelector('.services-grid__content');
        this.items = document.querySelectorAll('.service-item[data-item]');
        this.activeItem = null;

        this.init();
    }

    init() {
        // Добавляем обработчики клика
        this.items.forEach((item) => {
            if (item.dataset.item !== '1') {
                // Item1 не кликабельный
                item.addEventListener('click', () => this.toggleItem(item));
            }
        });
    }

    toggleItem(clickedItem) {
        const itemId = clickedItem.dataset.item;

        // Если кликнули на уже активный элемент - закрываем его
        if (this.activeItem === itemId) {
            this.closeItem(clickedItem);
            this.activeItem = null;
            return;
        }

        // Закрываем предыдущий активный элемент
        if (this.activeItem) {
            const previousItem = document.querySelector(
                `[data-item="${this.activeItem}"]`
            );
            this.closeItem(previousItem);
        }

        // Открываем новый элемент
        this.openItem(clickedItem);
        this.activeItem = itemId;
    }

    openItem(item) {
        item.classList.remove('service-item--closed');
        item.classList.add('service-item--open');
    }

    closeItem(item) {
        item.classList.remove('service-item--open');
        item.classList.add('service-item--closed');
    }

    // Метод для программного открытия элемента
    openItemById(itemId) {
        const item = document.querySelector(`[data-item="${itemId}"]`);
        if (item && itemId !== '1') {
            this.toggleItem(item);
        }
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    new ServicesGrid();
});
