const items = document.querySelectorAll('.accordion_item');

const showBody = (e) => {
  let target = e.currentTarget;
  target.firstElementChild.classList.toggle('accordion_header_active');
  target.lastElementChild.classList.toggle('body_show');
}

items.forEach ((item) => item.addEventListener('click', showBody));