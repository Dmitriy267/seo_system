// const accordionItems = document.querySelectorAll('.accordion-item');
// accordionItems.forEach((item) => {
//     const header = item.querySelector('.accordion-header');
//     const content = item.querySelector('.accordion-content');
//     header.addEventListener('click', () => {
//         header.style.display =
//             header.style.display === 'block' ? 'none' : 'block';
//     });
// });

const accordionContent = document.querySelectorAll('.accordion-item');

accordionContent.forEach((item, index) => {
    let header = item.querySelector('.header__accordion-content');
    header.addEventListener('click', () => {
        item.classList.toggle('is-open');
        let description = item.querySelector('.descript__accardion-content');
        if (item.classList.contains('is-open')) {
            description.style.height = `${description.scrollHeight}px`;
        } else {
            description.style.height = '0px';
        }

        removeOpenedContent(index);
    });
});

function removeOpenedContent(index) {
    accordionContent.forEach((item2, index2) => {
        if (index != index2) {
            item2.classList.remove('is-open');
            let descrip = item2.querySelector('.descript__accardion-content');
            descrip.style.height = '0px';
        }
    });
}
