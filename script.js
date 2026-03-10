function createBinaryRain() {
    const bg = document.getElementById('binaryBg');
    if (!bg) return;
    
    bg.innerHTML = '';
    const binary = ['0', '1'];
    
    for (let i = 0; i < 80; i++) {
        const div = document.createElement('div');
        const left = Math.random() * 100;
        const duration = 15 + Math.random() * 25;
        const delay = Math.random() * 15;
        
        let content = '';
        const length = 20 + Math.floor(Math.random() * 40);
        for (let j = 0; j < length; j++) {
            content += binary[Math.floor(Math.random() * binary.length)];
        }
        
        div.textContent = content;
        div.style.left = left + '%';
        div.style.animationDuration = duration + 's';
        div.style.animationDelay = delay + 's';
        div.style.opacity = 0.03 + Math.random() * 0.08;
        div.style.fontSize = (14 + Math.floor(Math.random() * 10)) + 'px';
        
        bg.appendChild(div);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    createBinaryRain();
    setInterval(createBinaryRain, 30000);
});