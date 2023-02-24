const backButton = document.querySelector('#backToTop')
const header = document.querySelector('header')
const mobButton = document.querySelector('.mobile')
const nav = document.querySelector('nav ul')
const menuItems = document.querySelectorAll('nav ul li a')


window.onscroll = function () { scrollFunction() };

const scrollFunction = () => {
  if (
    document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backButton.style.display = 'block';
    header.classList.add('bg')
  } else {
    backButton.style.display = 'none';
    header.classList.remove('bg')
  }
}

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