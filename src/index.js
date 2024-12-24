import './style.css';
import { homePage } from './home';
import { menuPage } from './menu';
import { aboutPage } from './about';

homePage();

const kotiTab = document.getElementById('koti');
const menuTab = document.getElementById('menu');
const meistäTab = document.getElementById('meistä');

kotiTab.addEventListener('click', homePage);
menuTab.addEventListener('click', menuPage);
meistäTab.addEventListener('click', aboutPage);
