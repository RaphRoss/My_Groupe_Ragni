const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<link rel="stylesheet" type="text/css" href="../css/footer_styles.css">
<body>
    <div class="unique-content">
        <div class="unique-main">
            <!-- Votre contenu principal ici -->
        </div>
        <footer>
            <div class="unique-footer-container">
                <div class="unique-footer-social">
                    <h3>Le Groupe Ragni</h3>
                    <ul class="unique-social-liste">
                        <li><a href="https://www.ragni.com/"><img src="../img/Mini_logo_Ragni.png" alt="Ragni"><p>Ragni</p></a></li>
                        <li><a href="https://www.hess.eu/fr/"><img src="../img/Mini_logo_Hess.png" alt="Hess"><p>Hess</p></a></li>
                        <li><a href="https://www.novea-energies.com/"><img src="../img/Mini_logo_Novea.png" alt="Novea"><p>Novea</p></a></li>
                        <li><a href="https://sev-e.com/"><img src="../img/Mini_logo_Seve.png" alt="Seve"><p>Seve</p></a></li>
                        <li><a href="https://www.vulkan.eu/en/"><img src="../img/Mini_logo_Vulkan.png" alt="Vulkan"><p>Vulkan</p></a></li>
                    </ul>
                </div>
                <div class="unique-footer-application">
                    <h3>Nos Applications</h3>
                    <ul class="unique-applications-liste">
                        <li><a href="b2b.html">B2B</a></li>
                        <li><a href="config.html">Configurateurs groupe</a></li>
                        <li><a href="#">Export de Données Produits</a></li>
                        <li><a href="#">Suivi de production</a></li>
                        <li><a href="#">My_Novea</a></li>
                        <li><a href="#">ROI groupe</a></li>
                        <li><a href="#">Gestion SAV</a></li>
                    </ul>
                </div>
                <div class="unique-footer-contact">
                    <h3>Contact</h3>
                    <ul class="unique-contact-liste">
                        <li><a href="https://groupe-ragni.cockpit-itsm.com/ssp/home">Contactez-nous</a></li>
                        <li><p>Via nos ticket cockpit vous pouvez contacté ou faire n'importe quel demande, elle sera prit en charge le plus rapidement possible.</p></li>
                    </ul>
                </div>
            </div>
            <div class="unique-footer-bottom">
                © 2024 RAGNI. Tous droits réservés.
            </div>
        </footer>
    </div>
</body>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);