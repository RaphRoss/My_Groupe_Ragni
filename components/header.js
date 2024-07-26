const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<link rel="stylesheet" type="text/css" href="../css/header_styles.css">
<header>
    <div class="unique-header-container">
        <div class="unique-logo">
            <img src="../img/logo_Ragni.png" alt="Logo de Ragni">
        </div>
        <h1>My Groupe Ragni</h1>
        <nav>
            <ul>
                <li><a href="index.html">Accueil</a></li>
                <li><a href="projet.html">Projet</a></li>
                <li><a href="https://groupe-ragni.cockpit-itsm.com/ssp/home">Contact</a></li>
                <li><a href="about.html">À propos</a></li>
                <li><a href="connexion.html">Connexion</a></li>
            </ul>
        </nav>
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
  }
}

customElements.define('header-component', Header);