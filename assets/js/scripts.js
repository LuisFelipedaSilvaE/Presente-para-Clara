document.querySelector('h1#logo').addEventListener('click', () => {
  document.querySelector('aside.menu').classList.toggle('toggle-menu');
  document.querySelector('div#mobile-menu').classList.toggle('x-menu');
  document.querySelector('div#mobile-menu').classList.toggle('hamburguer-menu');

});

document.querySelector('ul#navigation').addEventListener('click', () => {
  document.querySelector('aside.menu').classList.toggle('toggle-menu');
  document.querySelector('div#mobile-menu').classList.toggle('x-menu');
  document.querySelector('div#mobile-menu').classList.toggle('hamburguer-menu');
});

document.querySelector('div.close-menu').addEventListener('click', () => {
  document.querySelector('aside.menu').classList.toggle('toggle-menu');
  document.querySelector('div#mobile-menu').classList.toggle('hamburguer-menu');
  document.querySelector('div#mobile-menu').classList.toggle('x-menu');
});