// Loading Animation
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
        document.body.classList.add('loaded');
    }, 3000);
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
if (hamburger && sidebar) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        sidebar.classList.toggle('active');
    });
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            sidebar.classList.remove('active');
        }
    });
}

// Typing Effect
const typingText = document.getElementById('typing-text');
if (typingText) {
    const text = "Shubham Mahato";
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    }
    typeWriter();
}

// Particle Background with Mouse Interaction
const canvas = document.getElementById('particle-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles = [];
    for (let i = 0; i < 150; i++) {  // More particles for density
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 3,
            vy: (Math.random() - 0.5) * 3,
            size: Math.random() * 4 + 1,
            color: Math.random() > 0.5 ? '#00d4ff' : '#ff6b6b',
        });
    }
    let mouse = { x: undefined, y: undefined };
    canvas.addEventListener('mousemove', (e) => {
        mouse.x = e.x
