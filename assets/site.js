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
document.addEventListener('focusin', event => {
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
  if (!videoSlot) return;
  const frame = document.createElement('iframe');
  frame.src = 'https://www.youtube-nocookie.com/embed/cIO_klDjaLY?rel=0&playsinline=1&start=' + start;
  frame.title = 'Casa Capta: conversa com Jenise Carvalho e Danielle Sarti';
  frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  frame.allowFullscreen = true;
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  videoSlot.replaceChildren(frame);
  frame.focus({preventScroll:true});
}

// Sem JavaScript, a seleção completa continua disponível no HTML.
const catalog = document.querySelector('#article-catalog');
if (catalog) {
  const cards = [...catalog.querySelectorAll('[data-topic]')];
  const tools = document.querySelector('.catalog-tools');
  const filters = [...tools.querySelectorAll('[data-topic-filter]')];
  const count = tools.querySelector('.catalog-count');
  function selectTopic(topic) {
    let visible = 0;
    cards.forEach(card => {
      card.hidden = topic !== 'todos' && card.dataset.topic !== topic;
      if (!card.hidden) visible++;
    });
    filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.topicFilter === topic)));
    count.textContent = visible === 1 ? '1 artigo' : visible + ' artigos';
  }
  filters.forEach(button => button.addEventListener('click', () => selectTopic(button.dataset.topicFilter)));
  function revealLinkedArticle() {
    const id = window.location.hash.slice(1);
    const target = id && document.getElementById(id);
    if (target && catalog.contains(target) && target.hidden) {
      selectTopic('todos');
      target.scrollIntoView({block:'start', behavior:'auto'});
    }
  }
  window.addEventListener('hashchange', revealLinkedArticle);
  tools.hidden = false;
  revealLinkedArticle();
}
document.querySelectorAll('[data-video-start]').forEach(button => {
  button.addEventListener('click', () => {
    const isMoment = !videoSlot.contains(button);
    loadEpisode(Number(button.dataset.videoStart));
    if (isMoment) videoSlot.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block:'center'});
  });
});
// Endereços compartilhados antes da divisão em páginas continuam úteis.
if (document.body.classList.contains('page-home')) {
  const previousDestinations = {
    '#trajetoria': 'sobre/#trajetoria',
    '#atuacao': 'sobre/#atuacao',
    '#leituras': 'publicacoes/#artigos',
    '#artigo-governanca': 'publicacoes/#artigo-governanca',
    '#artigo-sociedade': 'publicacoes/#artigo-sociedade',
    '#artigo-carreira': 'publicacoes/#artigo-carreira'
  };
  const destination = previousDestinations[window.location.hash];
  if (destination) window.location.replace(new URL(destination, window.location.href));
}
