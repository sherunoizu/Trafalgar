let position = 0; // Начальная позиция
const slidesToShow = 1; // Сколько элементов показывать
const slidesToScroll = 1; // Сколько элементов скроллить
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;
const menuItems = document.querySelectorAll('.header__link');


menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        menuItems.forEach((items) => {
            items.classList.remove('active');
        });
        item.classList.add('active');
    });
});


items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnPrev.addEventListener('click', () =>  {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    
    setPosition();
});

btnNext.addEventListener('click', () =>  {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    
    setPosition();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`
    
    checkBtns();
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    
};

checkBtns();