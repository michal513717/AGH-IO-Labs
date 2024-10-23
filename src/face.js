document.addEventListener('mousemove', (event) => {
    const eyes = document.querySelectorAll('.pupil');
    const face = document.querySelector('.face');
    
    const rect = face.getBoundingClientRect(); // Pobranie pozycji twarzy na ekranie

    eyes.forEach(eye => {
        const eyeRect = eye.parentElement.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        const deltaX = event.clientX - eyeCenterX;
        const deltaY = event.clientY - eyeCenterY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        const maxMovement = 15; // Maksymalna odległość, na jaką źrenice mogą się przesuwać
        const moveX = (deltaX / distance) * Math.min(distance, maxMovement);
        const moveY = (deltaY / distance) * Math.min(distance, maxMovement);

        eye.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});
