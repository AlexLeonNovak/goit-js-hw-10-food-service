import './styles.css';
import menu from './menu.json';
import cardsTpl from './templates/cards.hbs';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const refs = {
    menuList: document.querySelector('.js-menu'),
    themeSwitch: document.getElementById('theme-switch-toggle')
};

refs.themeSwitch.addEventListener('change', onThemeSwitchChange);

refs.menuList.innerHTML = cardsTpl(menu);


function onThemeSwitchChange(e)
{
    const theme = e.target.checked ? Theme.DARK : Theme.LIGHT;
    localStorage.setItem('theme', theme);
    setThemeFromLS();
}



function setThemeFromLS()
{
    const theme = localStorage.getItem('theme');
    if (theme) {
        const isDarkTheme = theme === Theme.DARK
        document.body.classList.remove(isDarkTheme ? Theme.LIGHT : Theme.DARK);
        document.body.classList.add(theme);
        refs.themeSwitch.checked = isDarkTheme;
    }
}

setThemeFromLS();
