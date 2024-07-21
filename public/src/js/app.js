document.addEventListener('DOMContentLoaded', () => {
    // Eliminar el valor de 'play_music' al cargar la página
    localStorage.removeItem('play_music');

    function setupPlayButton(playButtonId, audioId, waveId) {
        const playButton = document.getElementById(playButtonId);
        const audio = document.getElementById(audioId);
        const selector = document.querySelectorAll(`#${waveId} li`);
        let isPlaying = false;

        playButton.addEventListener('click', () => {
            if (isPlaying) {
                audio.pause();
                playButton.innerHTML = '<i class="fas fa-play"></i>';
                toggleClasses(selector, 'ondas__animation', 'music__tamaño');
                localStorage.removeItem('play_music');
            } else {
                if (localStorage.getItem('play_music')) {
                    return; // No reproducir si ya hay otro audio en reproducción
                }
                audio.play();
                playButton.innerHTML = '<i class="fas fa-pause"></i>';
                toggleClasses(selector, 'music__tamaño', 'ondas__animation');
                localStorage.setItem('play_music', audioId);
            }
            isPlaying = !isPlaying;
        });
    }

    function toggleClasses(elements, classToRemove, classToAdd) {
        elements.forEach(element => {
            element.classList.remove(classToRemove);
            element.classList.add(classToAdd);
        });
    }

    for (let i = 1; i <= 7; i++) {
        setupPlayButton(`playButton_${i}`, `music__audio-${i}`, `ondas_${i}`);
    }
});
