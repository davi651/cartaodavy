document.addEventListener('DOMContentLoaded', () => {
    const cartao = document.getElementById('cartao');
    const pagina = document.querySelector('.pagina');
    const playlist = document.getElementById('playlist');
    const abrirPlaylistBtn = document.getElementById('abrir-playlist');
    const fecharPlaylistBtn = document.getElementById('fechar-playlist');

    // Mostra a página de parabenização ao carregar
    pagina.classList.add('active');

    // Abre a playlist ao clicar no botão
    abrirPlaylistBtn.addEventListener('click', () => {
        pagina.classList.remove('active');
        playlist.classList.add('active');
    });

    // Fecha a playlist ao clicar no botão
    fecharPlaylistBtn.addEventListener('click', () => {
        playlist.classList.remove('active');
        pagina.classList.add('active');
    });
});

// Função para mostrar o texto da música
function mostrarTexto(musica) {
    const texto = document.getElementById(musica);
    texto.style.display = texto.style.display === 'none' ? 'block' : 'none';
}