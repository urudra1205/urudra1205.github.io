document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Navigation ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');

        // Hamburger Animation
        hamburger.classList.toggle('toggle');
    });

    // Close nav when a link is clicked
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                hamburger.classList.remove('toggle');
            }
        });
    });


    // --- Scroll Animations ---
    const scrollElements = document.querySelectorAll('.scroll-animate');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Initial check on page load
    handleScrollAnimation();
});
// Floating Bubbles Animation
function createBubbles() {
    const container = document.getElementById('bubbles-container');
    const bubbleCount = 15; // Number of bubbles
    
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // Random size
        const sizes = ['small', 'medium', 'large'];
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        bubble.classList.add(randomSize);
        
        // Random color
        const colors = ['color1', 'color2', 'color3'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        bubble.classList.add(randomColor);
        
        // Random duration
        const durations = ['duration1', 'duration2', 'duration3', 'duration4', 'duration5'];
        const randomDuration = durations[Math.floor(Math.random() * durations.length)];
        bubble.classList.add(randomDuration);
        
        // Random position
        const leftPosition = Math.random() * 100;
        bubble.style.left = `${leftPosition}%`;
        
        // Random animation delay
        const delay = Math.random() * 20;
        bubble.style.animationDelay = `${delay}s`;
        
        // Random horizontal movement
        const translateX = (Math.random() - 0.5) * 200;
        bubble.style.setProperty('--translate-x', `${translateX}px`);
        
        container.appendChild(bubble);
    }
}

// Update the floatUp animation to use the CSS variable
// Add this to your CSS after the existing floatUp animation:
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(100vh) translateX(0) scale(0.5);
            opacity: 0;
        }
        10% {
            opacity: 0.3;
        }
        90% {
            opacity: 0.2;
        }
        100% {
            transform: translateY(-100px) translateX(var(--translate-x, 100px)) scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize bubbles when page loads
document.addEventListener('DOMContentLoaded', createBubbles);

// Optional: Regenerate bubbles on window resize for better responsiveness
window.addEventListener('resize', function() {
    const container = document.getElementById('bubbles-container');
    container.innerHTML = '';
    createBubbles();
});