// Función para alternar entre modo claro y oscuro
function toggleTheme() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Cargar el tema guardado
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
    }
});

// Copiar email al portapapeles
document.querySelectorAll('.link').forEach(link => {
    if (link.textContent.includes('@')) {
        const emailText = link.textContent.trim();
        link.nextElementSibling.addEventListener('click', async (e) => {
            e.preventDefault();
            try {
                await navigator.clipboard.writeText(emailText);
                const originalTitle = link.nextElementSibling.title;
                link.nextElementSibling.title = '¡Copiado!';
                setTimeout(() => {
                    link.nextElementSibling.title = originalTitle;
                }, 2000);
            } catch (err) {
                console.error('Error al copiar:', err);
            }
        });
    }
});

// Animación suave al scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('download-cv').addEventListener('click', function() {
    const cvUrl = 'media/cv.pdf'; // Reemplaza con la URL real de tu CV
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Will_Enrique_CV.pdf'; // Nombre del archivo descargado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
