const menuIconRightEl = document.querySelector('.menu-icon-right');
const closeMenuIconRightEl = document.querySelector('.close-menu-right');
const navListEl = document.querySelector('.nav-list');

const openRightMenu = () => {
    navListEl.classList.add('nav-list-open');
}

const closeRightMenu = () => {
    navListEl.classList.remove('nav-list-open');
}

menuIconRightEl.addEventListener('click', openRightMenu);
closeMenuIconRightEl.addEventListener('click', closeRightMenu);

// The Left menu script

const menuIconLeftEl = document.querySelector('.menu-icon-left');
const closeMenuIconLeftEl = document.querySelector('.close-menu-left');
console.log(closeMenuIconLeftEl);
const leftMenuContainerEl = document.querySelector('.left-menu-container');

menuIconLeftEl.addEventListener('click', () => {
    leftMenuContainerEl.classList.add('left-menu-container-open');
})


closeMenuIconLeftEl.addEventListener('click', () => {
    leftMenuContainerEl.classList.remove('left-menu-container-open')
})


// popup form script

const signInFormEl = document.querySelector('.signin-form-container');
const closeSignInFormEl = document.querySelector('.close');
const logInBtnEl = document.getElementById('login');

logInBtnEl.addEventListener('click', () => {
    signInFormEl.style="display: block;"
});

closeSignInFormEl.addEventListener('click', () => {
    signInFormEl.style="display: none;"
});
