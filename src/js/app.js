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

    setupPlayButton('playButton_1', 'music__audio-1', 'ondas_1');
    setupPlayButton('playButton_2', 'music__audio-2', 'ondas_2');
    setupPlayButton('playButton_3', 'music__audio-3', 'ondas_3');
    setupPlayButton('playButton_4', 'music__audio-4', 'ondas_4');
    setupPlayButton('playButton_5', 'music__audio-5', 'ondas_5');
    setupPlayButton('playButton_6', 'music__audio-6', 'ondas_6');
    setupPlayButton('playButton_7', 'music__audio-7', 'ondas_7');
});