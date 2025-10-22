class CountdownTimer {
    constructor() {
        this.daysElement = document.getElementById('days');
        this.hoursElement = document.getElementById('hours');
        this.minutesElement = document.getElementById('minutes');
        this.secondsElement = document.getElementById('seconds');

        // Устанавливаем дату окончания акции (конец текущего месяца)
        this.endDate = this.getEndOfMonth();

        this.init();
    }

    getEndOfMonth() {
        const now = new Date();
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        endOfMonth.setHours(23, 59, 59, 999); // Устанавливаем конец дня
        return endOfMonth;
    }

    init() {
        this.updateTimer();
        // Обновляем таймер каждую секунду
        this.interval = setInterval(() => {
            this.updateTimer();
        }, 1000);
    }

    updateTimer() {
        const now = new Date().getTime();
        const distance = this.endDate - now;

        if (distance < 0) {
            // Время вышло
            clearInterval(this.interval);
            this.daysElement.textContent = '00';
            this.hoursElement.textContent = '00';
            this.minutesElement.textContent = '00';
            this.secondsElement.textContent = '00';
            return;
        }

        // Вычисляем дни, часы, минуты, секунды
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Обновляем элементы
        this.daysElement.textContent = this.formatTime(days);
        this.hoursElement.textContent = this.formatTime(hours);
        this.minutesElement.textContent = this.formatTime(minutes);
        this.secondsElement.textContent = this.formatTime(seconds);
    }

    formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
}

// Инициализация таймера при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new CountdownTimer();
});
