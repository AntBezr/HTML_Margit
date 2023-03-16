const backButton = document.querySelector('#backToTop')
const header = document.querySelector('header')
const menu = document.querySelector('.menu')
const mobButton = document.querySelector('.mobile')
const nav = document.querySelector('nav ul')
const menuItems = document.querySelectorAll('ul li a')
const path = window.location.pathname;
const page = path.substring(path.lastIndexOf('/') + 1);


const scrollFunction = () => {
  if (page == "index.html") {
    if (
      document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backButton.style.display = 'block';
      menu.style.background = '#faebd7e6';
      menuItems.forEach(item => {
        item.style.color = "black"
      });
    } else {
      backButton.style.display = 'none';
      menu.style.background = 'transparent';
      menuItems.forEach(item => {
        item.style.color = "var(--primary-color)"
      });
    }
  }
}





window.onscroll = function () { scrollFunction() };

const getToTop = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}


const mobMenu = () => {
  for (const link of menuItems) {
    link.addEventListener('click', mobMenu)
  }

  if (nav.classList.contains('responsive')) {
    nav.classList.remove('responsive')
  } else {
    nav.classList.add('responsive')
  }
}



mobButton.addEventListener('click', mobMenu)
backButton.addEventListener('click', getToTop)