import './styles.css';
import Menu from './js/task.js';

Menu();

const body = document.querySelector('body');
let themeSwitchControle = document.querySelector('#theme-switch-control');
const currentTheme = localStorage.getItem('theme');
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme'
};

const setCurrentTheme = function() {
    if (currentTheme) {
        body.classList.add(currentTheme);
    }
    if (body.classList.contains(Theme.DARK)) {
        themeSwitchControle.checked = true;
    }
};
const switchTheme = function() {
    if (themeSwitchControle.checked) {
        body.classList.add(Theme.DARK);
        body.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);
    } else {
        body.classList.add(Theme.LIGHT);
        body.classList.remove(Theme.DARK);
        localStorage.setItem('theme', Theme.LIGHT);
    }
};

setCurrentTheme();

themeSwitchControle.addEventListener('change', switchTheme);
