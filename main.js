// Cambiar Tema
document.addEventListener('DOMContentLoaded', () => {
    cambiarTema();
});

function cambiarTema() {
    document.getElementById('theme-toggle').addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');

        const themeIcon = document.getElementById('theme-icon');
        themeIcon.textContent = document.body.classList.contains('dark-mode') ? '🌜' : '🌞';
    });
}

