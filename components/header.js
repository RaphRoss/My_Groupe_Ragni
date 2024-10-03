const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<link rel="stylesheet" type="text/css" href="css/header_styles.css">
<header>
    <div class="unique-header-container">
        <h1>My <a href="index.html"><img src="img/04Groupe_Ragni_large_texte_blanc_RVB.png" alt="Logo de Ragni" class="header-logo-image"></a></h1>
        <div class="menu-toggle" id="mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
        <nav>
            <ul>
                <li><a href="index.html">Accueil</a></li>
                <li><a href="projet.html">Projet</a></li>
                <li><a href="https://groupe-ragni.cockpit-itsm.com/ssp/home">Contact</a></li>
                <li><a href="about.html">À propos</a></li>
                <li><a href="connexion.html">Connexion</a></li>
            </ul>
        </nav>
        <div class="language-flags">
            <a href="#" class="active">FR</a>
            <a href="#">EN</a>
            <a href="#">ES</a>
            <a href="#">DE</a>
        </div>
    </div>
</header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(headerTemplate.content);

    // Script pour le menu hamburger
    const menuToggle = shadowRoot.getElementById('mobile-menu');
    const nav = shadowRoot.querySelector('nav');
    
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
}

customElements.define('header-component', Header);
