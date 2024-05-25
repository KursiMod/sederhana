document.addEventListener('DOMContentLoaded', function() {
    const sunIcon = document.getElementById('dark-mode-toggle');

    // Function untuk toggle dark mode
    function toggleDarkMode() {
        const body = document.body;
        const containers = document.querySelectorAll('.container');

        body.classList.toggle('dark-mode');

        containers.forEach(container => {
            container.classList.toggle('dark-mode');
        });

        document.querySelectorAll('.item, nav a, header').forEach(element => {
            element.classList.toggle('dark-mode');
        });

        const isDarkMode = body.classList.contains('dark-mode');
        sunIcon.src = isDarkMode ? 'sun.png' : 'moon.png';
        sunIcon.alt = isDarkMode ? 'Light Mode' : 'Dark Mode';

        localStorage.setItem('darkMode', isDarkMode);
    }

    // Toggle dark mode saat klik pada sun icon
    sunIcon.addEventListener('click', function() {
        toggleDarkMode();
    });

    // Aktifkan dark mode berdasarkan nilai dari localStorage saat halaman dimuat
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        toggleDarkMode(); // Panggil fungsi untuk mengaktifkan dark mode
    }
});
