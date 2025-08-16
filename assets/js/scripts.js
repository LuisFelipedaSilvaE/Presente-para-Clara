document.querySelector('h1#logo').addEventListener('click', () => {
  document.querySelector('input#close-menu').checked = false;
});

document.querySelector('ul#navigation').addEventListener('click', () => {
  document.querySelector('input#close-menu').checked = false;
});