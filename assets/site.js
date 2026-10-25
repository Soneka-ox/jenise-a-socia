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


// O player do YouTube só é solicitado após uma ação do visitante.
const videoSlot = document.querySelector('#video-player');
const videoCover = videoSlot && videoSlot.querySelector('.video-launch');
function loadEpisode(start) {
  if (!videoSlot) return;
  const frame = document.createElement('iframe');
  frame.src = 'https://www.youtube-nocookie.com/embed/cIO_klDjaLY?autoplay=0&rel=0&playsinline=1&start=' + start;
  frame.title = 'Casa Capta: conversa com Jenise Carvalho e Danielle Sarti';
  frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  frame.allowFullscreen = true;
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  videoSlot.replaceChildren(frame);
  frame.focus({preventScroll:true});
}

// Sem JavaScript, os três canais continuam visíveis e os atalhos são links comuns.
const networkSection = document.querySelector('#conversas');
if (networkSection) {
  const tabs = [...networkSection.querySelectorAll('[data-network]')];
  const panels = [...networkSection.querySelectorAll('[data-network-panel]')];
  const tablist = networkSection.querySelector('.networks-nav');
  function selectNetwork(name) {
    if (name !== 'video' && videoSlot.querySelector('iframe')) videoSlot.replaceChildren(videoCover);
    tabs.forEach(tab => {
      const selected = tab.dataset.network === name;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    panels.forEach(panel => { panel.hidden = panel.dataset.networkPanel !== name; });
  }
  function linkedPanel() {
    const id = window.location.hash.slice(1);
    const target = id && document.getElementById(id);
    return target && target.closest('.network-panel');
  }
  tablist.setAttribute('role', 'tablist');
  tablist.setAttribute('aria-orientation', 'horizontal');
  tabs.forEach((tab, index) => {
    const panel = panels.find(item => item.dataset.networkPanel === tab.dataset.network);
    tab.id = 'rede-' + tab.dataset.network;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', panel.id);
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tab.id);
    panel.tabIndex = 0;
    tab.addEventListener('click', event => {
      event.preventDefault();
      selectNetwork(tab.dataset.network);
      window.history.replaceState(null, '', tab.getAttribute('href'));
    });
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        tabs.forEach((item, i) => { item.tabIndex = i === next ? 0 : -1; });
        tabs[next].focus();
      } else if (event.key === ' ') {
        event.preventDefault();
        selectNetwork(tab.dataset.network);
        window.history.replaceState(null, '', tab.getAttribute('href'));
      }
    });
  });
  const initialPanel = linkedPanel();
  selectNetwork(initialPanel ? initialPanel.dataset.networkPanel : 'video');
  networkSection.classList.add('networks-enhanced');
  function revealNetworkLink() {
    const panel = linkedPanel();
    if (!panel) return;
    selectNetwork(panel.dataset.networkPanel);
    document.getElementById(window.location.hash.slice(1)).scrollIntoView({block:'start', behavior:'instant'});
  }
  window.addEventListener('hashchange', revealNetworkLink);
  if (initialPanel) revealNetworkLink();
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
