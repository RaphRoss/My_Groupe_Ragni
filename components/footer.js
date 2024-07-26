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
                    <h3>Réseaux sociaux</h3>
                    <ul class="unique-social-liste">
                        <li><a href="https://www.facebook.com/Ragni.SAS/"><img src="../img/facebook.png" alt="Facebook"><p>Facebook</p></a></li>
                        <li><a href="https://www.instagram.com/ragni_sas/"><img src="../img/instagram.png" alt="Instagram"><p>Instagram</p></a></li>
                        <li><a href="https://x.com/RAGNI_SAS"><img src="../img/twitter.png" alt="Twitter"><p>Twitter</p></a></li>
                        <li><a href="https://www.linkedin.com/company/10460980/"><img src="../img/linkedin.png" alt="Linkedin"><p>Linkedin</p></a></li>
                        <li><a href="https://www.youtube.com/channel/UCg3LCUI39GyNBcrdS9QV9LA"><img src="../img/youtube.png" alt="Youtube"><p>Youtube</p></a></li>
                    </ul>
                </div>
                <div class="unique-footer-application">
                    <h3>Nos Applications</h3>
                    <ul class="unique-applications-liste">
                        <li><a href="b2b.html">B2B</a></li>
                        <li><a href="config.html">Configurateur</a></li>
                        <li><a href="my_ragni.html">My_Ragni</a></li>
                        <li><a href="#">My_Novea</a></li>
                        <li><a href="#">ROI</a></li>
                        <li><a href="#">Export de Donnée Produit</a></li>
                        <li><a href="#">SSE</a></li>
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