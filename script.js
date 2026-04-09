// ===== CRÉER DES ÉTOILES DÉCORATIVES =====
function createStars() {
    const sections = document.querySelectorAll('section, header');
    const starSymbols = ['✦', '✧', '★', '☆', '✴'];
    
    sections.forEach(section => {
        if (section.querySelectorAll('.star-deco').length > 0) return;
        
        const starCount = Math.floor(Math.random() * 5) + 6;
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('span');
            star.className = 'star-deco';
            
            const randomStar = starSymbols[Math.floor(Math.random() * starSymbols.length)];
            star.textContent = randomStar;
            
            const top = Math.random() * 90 + 2;
            const left = Math.random() * 95 + 2;
            star.style.top = `${top}%`;
            star.style.left = `${left}%`;
            
            if (Math.random() > 0.7) {
                star.classList.add('star-lg');
            } else if (Math.random() < 0.3) {
                star.classList.add('star-sm');
            }
            
            star.style.animation = `float ${3 + Math.random() * 3}s ease-in-out infinite`;
            
            section.appendChild(star);
        }
    });
}

const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
    .star-deco {
        animation: float 4s ease-in-out infinite;
    }
`;
document.head.appendChild(style);

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === "#" || href === "") return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== NAVBAR SHRINK =====
window.addEventListener('scroll', function() {
    const nav = document.querySelector('#mainNav');
    if (nav) {
        if (window.scrollY > 100) {
            nav.classList.add('navbar-shrink');
        } else {
            nav.classList.remove('navbar-shrink');
        }
    }
});

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    
    document.querySelectorAll('section, header').forEach(page => {
        page.style.opacity = '0';
        setTimeout(() => {
            page.style.transition = 'opacity 0.6s ease-out';
            page.style.opacity = '1';
        }, 100);
    });
    
    console.log('✨ Portfolio Safa Houssein - Couleurs Bordeaux & Beige ✨');
});