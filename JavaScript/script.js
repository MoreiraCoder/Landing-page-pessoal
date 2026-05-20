// 1. FUNÇÃO DO MENU MOBILE (Mantida e melhorada)
function toggleMenu() {
  const menu = document.querySelector('.nav-categories');
  const icons = document.querySelector('.social-icons');
  
  menu.classList.toggle('ativo');
  icons.classList.toggle('ativo');
}

// Fechar o menu mobile automaticamente ao clicar em qualquer link dele
document.querySelectorAll('.nav-categories a').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.querySelector('.nav-categories');
    const icons = document.querySelector('.social-icons');
    
    // Remove a classe ativo se ela estiver presente
    menu.classList.remove('ativo');
    icons.classList.remove('ativo');
  });
});


// 2. DINÂMICA DA NAVBAR AO ROLAR (Muda o fundo)
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  
  // Se rolar mais de 20 pixels, adiciona uma classe para mudar o estilo
  if (window.scrollY > 20) {
    navbar.style.backgroundColor = 'rgba(11, 11, 11, 0.85)';
    navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
  } else {
    // Volta ao estado inicial transparente quando estiver no topo
    navbar.style.backgroundColor = 'rgba(11, 11, 11, 0.4)';
    navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
  }
});


// 3. EFEITO DE REVELAÇÃO SUAVE (Scroll Reveal nativo)
// Configura o observador para detectar quando as seções aparecem na tela
const observerOptions = {
  root: null,
  threshold: 0.15 // Dispara o efeito quando 15% da seção estiver visível
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      // Opcional: remove o observador após revelar para performance
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Aplica o efeito inicial de esconder e observa os elementos ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  // Elementos que vão surgir (Textos do hero, foto e títulos das seções)
  const elementsToReveal = document.querySelectorAll('.hero-text, .hero-foto, .site-section h2, .site-section p');
  
  elementsToReveal.forEach(el => {
    // Define o estado escondido por CSS inline temporário
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    // Começa a observar o elemento
    revealObserver.observe(el);
  });
});