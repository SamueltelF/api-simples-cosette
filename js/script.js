 function addBot() {
            alert('Funcionalidade "Add Bot" será implementada em breve!\n\nEm desenvolvimento para integração com banco de dados.');
        }

        // Função para toggle do menu hamburger
        function toggleMenu() {
            const hamburger = document.querySelector('.hamburger');
            const mobileMenu = document.getElementById('mobileMenu');
            
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        }

        // Função para fechar menu
        function closeMenu() {
            const hamburger = document.querySelector('.hamburger');
            const mobileMenu = document.getElementById('mobileMenu');
            
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        }

        // Animação dos números das estatísticas
        // Inicializar animações quando a página carregar
        window.addEventListener('load', () => {
            animateNumbers();
            
            // Adicionar efeito de hover nos cards
            const cards = document.querySelectorAll('.feature-card, .os-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-5px) scale(1.02)';
                });
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0) scale(1)';
                });
            });
        });

        // Smooth scroll para navegação
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Adicionar efeito parallax sutil no scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.main-section::before');
            if (parallax) {
                const speed = scrolled * 0.5;
                parallax.style.transform = `translateY(${speed}px)`;
            }
        });