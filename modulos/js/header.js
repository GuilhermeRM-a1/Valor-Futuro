// Menu Hambúrguer - Toggle Mobile Menu
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', function (event) {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});




document.addEventListener('DOMContentLoaded', function () {
    const whatsappBtn = document.getElementById('whatsappBtn');

    // Adiciona a classe pulse para animação
    whatsappBtn.classList.add('pulse');

    // Remove a animação de pulso após 10 segundos
    setTimeout(function () {
        whatsappBtn.classList.remove('pulse');
    }, 10000);

    // Opcional: Mostra o botão apenas após rolar a página
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            whatsappBtn.style.display = 'flex';
        } else {
            whatsappBtn.style.display = 'none';
        }
    });

    // Registrar cliques no botão
    whatsappBtn.addEventListener('click', function () {
        console.log('Botão WhatsApp clicado!');
       
    });
});
