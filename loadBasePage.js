document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".wrapper");

    if (!wrapper) {
        console.error("A div.wrapper não foi encontrada no HTML.");
        return;
    }

    // Criando o <head>
    const headContent = `
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
        <link href='https://fonts.googleapis.com/css?family=League Spartan' rel='stylesheet'>
        <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
        <title>Fala Verdade</title>
        <link rel="icon" type="image/x-icon" href="./img/icon.ico">
    `;
    document.head.innerHTML = headContent;

    // Criando o <header>
    const headerContent = `
        <div class="headerContainer">
            <a href="/">
                <img src="./img/logo.jpeg" alt="logo"/>
            </a>
            <span id="slogan">Fala Verdade</span>
        </div>
        <input type="search" id="site-search" name="q" placeholder="Search..." />
        <a href="/nossaEquipe.html"><span>Quem somos</span></a>
        <span id="scrollToFooter">Contatos</span>
        <img src="./img/img.jpg"/>
    `;
    const header = document.createElement("header");
    header.innerHTML = headerContent;
    document.body.prepend(header);

    // Criando o <footer>
    const footerContent = `
        <ul>
            <li>Nossos contatos:</li>
            <li>
                <a href="mailto:fala.verdade.contato@gmail.com" target="_blank">
                    <i class="bi bi-envelope"></i>
                    <span>Email</span>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/fala_.verdade" target="_blank">
                    <i class="bi bi-instagram"></i>
                    <span>Instagram</span>
                </a>
            </li>
            <li>
                <a href="https://www.tiktok.com/@fala_.verdade" target="_blank">
                    <i class="bi bi-tiktok"></i>
                    <span>Tiktok</span>
                </a>
            </li>
        </ul>
    `;
    const footer = document.createElement("footer");
    footer.innerHTML = footerContent;
    document.body.appendChild(footer);

    setTimeout(() => {
        document.getElementById("throbber").style.display = "none";
        wrapper.style.visibility = "visible";
    }, 750);

    document.getElementById('scrollToFooter').addEventListener('click', function() {
        const footer = document.querySelector('footer');
        footer.scrollIntoView({ behavior: 'smooth' });
    });
});
