
function toggleMenu() {
  const menu = document.querySelector('.nav-categories');
  const icons = document.querySelector('.social-icons');
  
  menu.classList.toggle('ativo');
  icons.classList.toggle('ativo');
}


document.querySelectorAll('.nav-categories a').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.querySelector('.nav-categories');
    const icons = document.querySelector('.social-icons');
    
    menu.classList.remove('ativo');
    icons.classList.remove('ativo');
  });
});


window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  
  if (window.scrollY > 20) {
    navbar.style.backgroundColor = 'rgba(11, 11, 11, 0.85)';
    navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
  } else {
    navbar.style.backgroundColor = 'rgba(11, 11, 11, 0.4)';
    navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
  }
});


const observerOptions = {
  root: null,
  threshold: 0.15 
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      
      
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);


document.addEventListener('DOMContentLoaded', () => {
  
 
  const elementsToReveal = document.querySelectorAll('.hero-text, .hero-foto, .site-section h2, .site-section p, .tech-pillar, .actions');
  
  elementsToReveal.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    revealObserver.observe(el);
  });


  const nameElement = document.querySelector('h1');
  if (nameElement) {
    const nameText = nameElement.innerHTML;
    nameElement.innerHTML = ''; 
    nameElement.style.borderRight = '2px solid rgba(255, 255, 255, 0.75)'; 
    nameElement.style.width = 'fit-content';
    

    const style = document.createElement('style');
    style.innerHTML = `@keyframes blink { 50% { border-color: transparent; } }`;
    document.head.appendChild(style);
    nameElement.style.animation = 'blink 0.75s step-end infinite';

    let index = 0;
    function typeEffect() {
      if (index < nameText.length) {
        nameElement.innerHTML += nameText.charAt(index);
        index++;
        setTimeout(typeEffect, 60); 
      } else {
        
        setTimeout(() => {
          nameElement.style.borderRight = 'none';
          nameElement.style.animation = 'none';
        }, 2000);
      }
    }
    
    
    setTimeout(typeEffect, 400);
  }
});
