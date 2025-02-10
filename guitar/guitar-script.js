function playString(e) {
    const string = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;

    string.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const strings = document.querySelectorAll('.string');
strings.forEach(string => {
    string.addEventListener('transitionend', removeTransition);
    string.addEventListener('mouseover', function() {
        const keyCode = this.getAttribute('data-key');
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
        if (!audio) return;
        
        this.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
    });
});

window.addEventListener('keydown', playString);

strings.forEach(string => {
    string.addEventListener('mouseenter', function() {
        this.style.opacity = '0.8';
    });
    
    string.addEventListener('mouseleave', function() {
        this.style.opacity = '1';
    });
}); 