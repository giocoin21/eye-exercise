document.addEventListener('mousemove', (event) => {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach((eye) => {
        const rect = eye.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        const angle = Math.atan2(event.clientY - y, event.clientX - x);
        eye.style.transform = `rotate(${angle}rad)`;
    });
});
