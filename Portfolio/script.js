const backButton = document.querySelector('#backToTop')
const header = document.querySelector('header')
const menu = document.querySelector('.menu')
const logoName = document.querySelector('.menu h5')
const mobButton = document.querySelector('.mobile')
const nav = document.querySelector('nav ul')
const menuItems = document.querySelectorAll('ul li a')

const path = window.location.pathname;
const page = path.substring(path.lastIndexOf('/') + 1);

const scrollFunction = () => {

  if (page == "index.html" || '/') {

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {

      backButton.style.display = 'block';
      mobButton.style.color = "var(--blackText)"
      menu.style.background = '#faebd7e6';
      logoName.style.color = "var(--blackText)"
      menuItems.forEach(item => {
        item.style.color = "var(--blackText)"
      });
    } else {
      backButton.style.display = 'none';
      menu.style.background = 'transparent';
      logoName.style.color = "var(--primary-color)"
      mobButton.style.color = "var(--primary-color)"
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