import './style.css';
import joulupöytä from './assets/restaurant.jpg';

const contentContainer = document.getElementById('content');

const h1 = document.createElement('h1');
h1.textContent = 'Jouluruoka.com';
contentContainer.appendChild(h1);

const img = document.createElement('img');
img.src = joulupöytä;
img.setAttribute('alt', 'Joulupöytä');
img.className = 'restaurant-img';
contentContainer.appendChild(img);

const p = document.createElement('p');
p.textContent = 'Kinkkua, laatikoita ja hetelmiä';
contentContainer.appendChild(p);
