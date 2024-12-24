import menu from './assets/menu.jpg';

const menuPage = () => {
  const contentContainer = document.getElementById('content');

  contentContainer.innerHTML = '';

  const img = document.createElement('img');
  img.src = menu;
  img.setAttribute('alt', 'Menu');
  img.className = 'menu-img';
  contentContainer.appendChild(img);
};

export { menuPage };
