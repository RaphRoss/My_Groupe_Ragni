function updateInfo() {
    const luminaire = document.getElementById("luminaire").value;
    const quantite = document.getElementById("quantite").value;
    const code = document.getElementById("code").value;
    const taille = document.querySelector('input[name="taille"]:checked')?.value || "Non spécifié";
    const version = document.querySelector('input[name="version"]:checked')?.value || "Non spécifié";
    const forme = document.getElementById("forme").value;
    const materiau = document.getElementById("materiau").value;
    const couleur = document.getElementById("couleur").value;
    const horsStandard = document.getElementById("hors-standard").value;
    const bordDeMer = document.getElementById("bord-de-mer").checked ? "Oui" : "Non";
    const led = document.querySelector('input[name="led"]:checked')?.value || "Non spécifié";
    const temperature = document.querySelector('input[name="temperature"]:checked')?.value || "Non spécifié";
    const distribution = document.querySelector('input[name="distribution"]:checked')?.value || "Non spécifié";
    const classeElectrique = document.querySelector('input[name="classe-electrique"]:checked')?.value || "Non spécifié";
    const typeDriver = document.querySelector('input[name="type-driver"]:checked')?.value || "Non spécifié";

    document.getElementById("info-area").innerHTML = `
        <p><strong>Luminaire:</strong> ${luminaire}</p>
        <p><strong>Quantité:</strong> ${quantite}</p>
        <p><strong>Code à charger:</strong> ${code}</p>
        <p><strong>Taille:</strong> ${taille}</p>
        <p><strong>Version:</strong> ${version}</p>
        <p><strong>Forme / Option Protection:</strong> ${forme}</p>
        <p><strong>Matériau:</strong> ${materiau}</p>
        <p><strong>Couleur:</strong> ${couleur}</p>
        <p><strong>Hors Standard:</strong> ${horsStandard}</p>
        <p><strong>Option Bord de Mer:</strong> ${bordDeMer}</p>
        <p><strong>Nombre de LED:</strong> ${led}</p>
        <p><strong>Température:</strong> ${temperature}</p>
        <p><strong>Distribution Photométrique:</strong> ${distribution}</p>
        <p><strong>Classe Électrique:</strong> ${classeElectrique}</p>
        <p><strong>Type de Driver:</strong> ${typeDriver}</p>
        <p><strong>Prix:</strong> 1000€</p>
        
        <!-- Ajout des boutons -->
        <div class="button-container">
            <button id="validate-btn" onclick="window.location.href='devis.html'"><i class="fas fa-check"></i> Valider</button>
            <button id="reset-btn"><i class="fas fa-sync-alt"></i> Réinitialiser</button>
            <button id="pdf-btn"><i class="fas fa-file-pdf"></i> PDF</button>
        </div>
    `;

    document.getElementById('validate-btn').addEventListener('click', function() {
        localStorage.setItem('fromConfigLum', 'true');
        window.location.href = 'devis.html';
    });
}