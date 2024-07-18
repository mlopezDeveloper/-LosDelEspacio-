document.addEventListener('DOMContentLoaded', () => {
    // Eliminar el valor de 'play_music' al cargar la página
    localStorage.removeItem('play_music');

    function setupPlayButton(playButtonId, audioId, waveId) {
        const playButton = document.getElementById(playButtonId);
        const audio = document.getElementById(audioId);
        const selector = document.querySelectorAll('#' + waveId + ' li');
        let isPlaying = false;

        playButton.addEventListener('click', () => {
            let playMusic = localStorage.getItem('play_music');

            if (isPlaying) {
                audio.pause();
                playButton.innerHTML = '<i class="fas fa-play"></i>';
                selector.forEach(li => li.classList.remove('ondas__animation'));
                selector.forEach(li => li.classList.add('music__tamaño'));
                localStorage.removeItem('play_music');
            } else {
                if (playMusic) {
                    return; // No reproducir si ya hay otro audio en reproducción
                }
                audio.play();
                playButton.innerHTML = '<i class="fas fa-pause"></i>';
                selector.forEach(li => li.classList.remove('music__tamaño'));
                selector.forEach(li => li.classList.add('ondas__animation'));
                localStorage.setItem('play_music', audioId);
            }
            isPlaying = !isPlaying;
        });
    }
    for (let i = 1; i <= 7; i++) {
        setupPlayButton(`playButton_${i}`, `music__audio-${i}`, `ondas_${i}`);
    }
});