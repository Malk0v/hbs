import menuTpl from '../templates/menu.hbs';
import menuItems from '../js/menu.json';

//==== dark theme ====//

const refs = {
    schemaTheme: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body')
};
refs.schemaTheme.addEventListener('click', changeTheme);

function changeTheme() {
    refs.body.classList.toggle('dark-theme');
};

//==== hbs =====//

const menuRef = document.querySelector(".js-menu");

console.log(menuRef);

const markup = menuTpl(menuItems);
menuRef.insertAdjacentHTML("beforeend", markup);