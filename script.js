// #region get current year
const yearSpan = document.getElementById("copy-year");
yearSpan.textContent = new Date().getFullYear();
// #endregion get current year


// #region themeSwitcher 
const themeSwitcher = document.getElementById('theme-switcher');
const currentTheme = localStorage.getItem('theme');

function darkMode() {
  themeSwitcher.children[0].textContent = 'Dark Mode';
  themeSwitcher.children[1].classList.replace('fa-sun', 'fa-moon');
  localStorage.setItem('theme', 'dark');
}

function lightMode() {
  themeSwitcher.children[0].textContent = 'Light Mode';
  themeSwitcher.children[1].classList.replace('fa-moon', 'fa-sun');
  localStorage.setItem('theme', 'light');

}

function switchTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (!currentTheme || currentTheme === "light") {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    lightMode();
  }
}

themeSwitcher.addEventListener('click', switchTheme);

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === "dark") {
    darkMode();
  } else {
    lightMode();
  }
}

// #endregion themeSwitcher 


// #region navigation
const nav = document.getElementById('navigation');
const menuIcon = document.getElementById('menu-icon');

function toggleMenu() {
  menuIcon.classList.toggle("active");
  nav.classList.toggle("active");
} 

function hideMenu() {
    menuIcon.classList.remove("active");
    nav.classList.remove("active");
}
// #endregion navigation
