const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<link rel="stylesheet" type="text/css" href="css/footer_styles.css">
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
                        <li><a href="https://www.ragni.com/"><img src="img/06_2023Logo_Ragni_large_texte-blanc_RVB.png" alt="Ragni"></a></li>
                        <li><a href="https://www.hess.eu/fr/"><img src="img/06_2024Logo_Hess_large_texte-blanc_RVB.png" alt="Hess"></a></li>
                        <li><a href="https://www.novea-energies.com/"><img src="img/06_2023Logo_Novea_large_texte-blanc_RVB.png" alt="Novea énergies"></a></li>
                        <li><a href="https://sev-e.com/"><img src="img/06_2023Logo_SEVe_large_texte-blanc_RVB.png" alt="Seve"></li>
                        <li><a href="https://www.vulkan.eu/en/"><img src="img/06_2024Logo_Vulkan_large_texte-blanc_RVB.png" alt="Vulkan"></a></li>
                    </ul>
                </div>
                <div class="unique-footer-application">
                    <h3>Nos Applications</h3>
                    <ul class="unique-applications-liste">
                        <li><a href="b2b.html">B2B</a></li>
                        <li><a href="config.html">Configurateurs groupe</a></li>
                        <li><a href="#">Export de Données Produits</a></li>
                        <li><a href="https://www.mynovea.com/">My_Novea</a></li>
                        <li><a href="ROI.html">ROI groupe</a></li>
                        <li><a href="SAV.html">Gestion SAV</a></li>
                    </ul>
                </div>
                <div class="unique-footer-contact">
                    <h3>Contact</h3>
                    <ul class="unique-contact-liste">
                        <li><a href="https://groupe-ragni.cockpit-itsm.com/ssp/home">Contactez-nous</a></li>
                        <li><p>Via nos tickets cockpit vous pouvez nous contacter ou faire n'importe quelle demande, elle sera prise en charge le plus rapidement possible.</p></li>
                        <li><p>Changer le mode de vue :</p></li>
                        <li><a href="#">Salarié</a></li>
                        <li><a href="#">Agent</a></li>
                        <li><a href="#">Admin</a></li>
                    </ul>
                </div>
            </div>
            <div class="gradient-image"></div>
            <div class="unique-footer-bottom">
                © 2024 RAGNI. Tous droits réservés. | Version 1.3.0 12/09/2024
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