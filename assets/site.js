'use strict';
const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('click', event => {
  if (!navigation.contains(event.target) && !menu.contains(event.target)) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});
window.matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);


// Conteúdos externos só são solicitados após uma ação do visitante.
const videoSlot = document.querySelector('#video-player');
function loadEpisode(start) {
  const frame = document.createElement('iframe');
  frame.src = 'https://www.youtube-nocookie.com/embed/cIO_klDjaLY?rel=0&playsinline=1&start=' + start;
  frame.title = 'Casa Capta: conversa com Jenise Carvalho e Danielle Sarti';
  frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  frame.allowFullscreen = true;
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  videoSlot.replaceChildren(frame);
  frame.focus({preventScroll:true});
}
document.querySelectorAll('[data-video-start]').forEach(button => {
  button.addEventListener('click', () => {
    const isMoment = !videoSlot.contains(button);
    loadEpisode(Number(button.dataset.videoStart));
    if (isMoment) videoSlot.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block:'center'});
  });
});
document.querySelector('#load-instagram').addEventListener('click', () => {
  const frame = document.createElement('iframe');
  frame.src = 'https://www.instagram.com/jenisecarvalho/embed/';
  frame.title = 'Perfil de Jenise Carvalho no Instagram';
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  document.querySelector('#instagram-profile').replaceChildren(frame);
  frame.focus({preventScroll:true});
});
