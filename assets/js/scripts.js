document.querySelector('div#mobile-menu').addEventListener('click', () => {
  if(document.querySelector('.card-container') !== null) {
    document.querySelector('.card-container').style.display = 'none';
  }  
});

document.querySelector('h1#logo').addEventListener('click', () => {
  document.querySelector('aside.menu').classList.toggle('toggle-menu');
  document.querySelector('div#mobile-menu').classList.toggle('x-menu');
  document.querySelector('div#mobile-menu').classList.toggle('hamburguer-menu');
  if(document.querySelector('.card-container') !== null) {
    document.querySelector('.card-container').style.display = 'none';
  }
});

document.querySelector('ul#navigation').addEventListener('click', () => {
  document.querySelector('aside.menu').classList.toggle('toggle-menu');
  document.querySelector('div#mobile-menu').classList.toggle('x-menu');
  document.querySelector('div#mobile-menu').classList.toggle('hamburguer-menu');
  if(document.querySelector('.card-container') !== null) {
    document.querySelector('.card-container').style.display = 'none';
  }
});

document.querySelector('div.close-menu').addEventListener('click', () => {
  document.querySelector('aside.menu').classList.toggle('toggle-menu');
  document.querySelector('div#mobile-menu').classList.toggle('hamburguer-menu');
  document.querySelector('div#mobile-menu').classList.toggle('x-menu');
});

document.querySelector('#close-card').addEventListener('click', () => {
  document.querySelector('.card-container').style.opacity = 0;
  setTimeout(() => {
    document.querySelector('.card-container').style.display = 'none';
  }, 300);
  document.querySelector('.card').style.scale = 0;
});

document.querySelectorAll('.skin-cell').forEach((img, index) => {  
  img.addEventListener('click', () => {
  let cardColors = ['rgb(51, 0, 85)', 'rgb(15, 195, 195)', 'rgb(255, 65, 95)', 'rgb(255, 175, 100)', 'rgb(220, 195, 220)', 'rgb(135, 120, 255)', 'rgb(255, 160, 205)']
  let cardSpan = [img.dataset.rarity, img.dataset.limited]
  let src = img.getAttribute('src');
  let alt = img.getAttribute('alt');

  document.querySelector('.card-container').style.color = cardColors[index];
  document.querySelector('.card-container').style.display = 'flex';
  document.querySelector('.card-container').style.opacity = 100;
  document.querySelector('.card-container').style.scale = 1;

  document.querySelector('.card').style.display = 'flex';
  document.querySelector('.card').style.opacity = 100;
  document.querySelector('.card').style.scale = 1;

  document.querySelector('.card-heading h3').innerHTML = img.dataset.title;
  
  document.querySelectorAll('.card-content > h4 > span').forEach((span, i) => {
    span.textContent = cardSpan[i];
  });;
  
    document.querySelector('#card-img').setAttribute('src', src);
    document.querySelector('#card-img').setAttribute('alt', alt);
  });
});
