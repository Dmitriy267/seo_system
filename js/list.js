const list = document.querySelector('#list');
const module = document.querySelector('#module');
const btnContent = document.querySelector('.btn__content-list_color');
list.addEventListener('click', openList);

function openList() {
    module.style.display = 'block';
}

btnContent.addEventListener('click', closeList);

function closeList() {
    module.style.display = 'none';
}

openList();
closeList();
