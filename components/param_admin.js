// Fonction pour afficher une interface spécifique et masquer les autres
function showForm(type) {
    const mainContent = document.getElementById('main-content');
    let formHtml = '';

    if (type === 'commerce') {
        formHtml = `
            <section id="commerce-interface" class="admin-interface">
                <h2>Interface Commerce</h2>
                <form id="commerce-form">
                    <div class="form-group">
                        <label for="price">Prix</label>
                        <input type="number" id="price" name="price" placeholder="Prix en euros">
                    </div>
                    <div class="form-group">
                        <label for="tariff-group">Groupe tarifaire</label>
                        <select id="tariff-group" name="tariff-group">
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </div>
                    <button type="submit" class="btn-admin">Enregistrer</button>
                </form>
                <button class="btn-admin" onclick="showForm('admin-dashboard')">Retour</button>
            </section>
        `;
    } else if (type === 'nomenclature') {
        formHtml = `
            <section id="nomenclature-interface" class="admin-interface">
                <h2>Interface Nomenclature</h2>
                <p>Gestion des nomenclatures à venir...</p>
                <button class="btn-admin" onclick="showForm('admin-dashboard')">Retour</button>
            </section>
        `;
    } else if (type === 'marketing') {
        formHtml = `
            <section id="marketing-interface" class="admin-interface">
                <h2>Interface Marketing Produit</h2>
                <form id="marketing-form">
                    <div class="form-group">
                        <label for="product-visual">Visuel du produit</label>
                        <input type="file" id="product-visual" name="product-visual">
                    </div>
                    <div class="form-group">
                        <label for="product-description">Description marketing</label>
                        <textarea id="product-description" name="product-description" placeholder="Description du produit"></textarea>
                    </div>
                    <button type="submit" class="btn-admin">Enregistrer</button>
                </form>
                <button class="btn-admin" onclick="showForm('admin-dashboard')">Retour</button>
            </section>
        `;
    } else if (type === 'test') {
        formHtml = `
            <section id="test-interface" class="admin-interface">
                <h2>Interface Test</h2>
                <form id="test-form">
                    <div class="form-group">
                        <label for="test-description">Description du test</label>
                        <textarea id="test-description" name="test-description" placeholder="Détails du test"></textarea>
                    </div>
                    <button type="submit" class="btn-admin">Lancer le test</button>
                </form>
                <button class="btn-admin" onclick="showForm('admin-dashboard')">Retour</button>
            </section>
        `;
    } else if (type === 'possibiliés') {
        formHtml = `
            <section id="commerce-interface" class="admin-interface">
                <h2>Interface Possibilités</h2>
                <form id="commerce-form">
                    <div class="form-group">
                        <label for="product-name">Nom du produit</label>
                        <input type="text" id="product-name" name="product-name" placeholder="Nom du produit">
                    </div>
                    <div class="form-group">
                        <label for="def">Définition des arborescences</label>
                        <input type="texte" id="def" name="def" placeholder="Arborescences">
                    </div>
                    <div class="form-group">
                        <label for="arborescences">Modification des arborescences</label>
                        <input type="text" id="arborescences" name="arborescences" placeholder="Arborescences">
                    </div>
                    <button type="submit" class="btn-admin">Validation</button>
                </form>
                <button class="btn-admin" onclick="showForm('admin-dashboard')">Retour</button>
            </section>
        `;
    } else if (type === 'admin-dashboard') {
        formHtml = `
            <section id="admin-dashboard" class="admin-interface">
                <h1>Administration</h1>
                <div class="admin-section">
                    <h2>Interface Possibilités</h2>
                    <p>Création de nouvelles possibilités techniques</p>
                    <button class="btn-admin" onclick="showForm('possibiliés')">Accéder à l'interface Possibilités</button>
                </div>
                <div class="admin-section">
                    <h2>Interface Commerce</h2>
                    <p>Gestion des prix et des tarifs dans l'interface Commerce.</p>
                    <button class="btn-admin" onclick="showForm('commerce')">Accéder à l'interface Commerce</button>
                </div>
                <div class="admin-section">
                    <h2>Interface Nomenclature</h2>
                    <p>Gestion des nomenclatures des produits.</p>
                    <button class="btn-admin" onclick="showForm('nomenclature')">Accéder à l'interface Nomenclature</button>
                </div>
                <div class="admin-section">
                    <h2>Interface Marketing Produit</h2>
                    <p>Gestion des visuels et des informations marketing des produits.</p>
                    <button class="btn-admin" onclick="showForm('marketing')">Accéder à l'interface Marketing Produit</button>
                </div>
                <div class="admin-section">
                    <h2>Interface Test</h2>
                    <p>Lancement des tests et vérification des configurations avant la mise en production.</p>
                    <button class="btn-admin" onclick="showForm('test')">Accéder à l'interface Test</button>
                </div>
            </section>
        `;
    }

    // Remplacer le contenu de main-content par la nouvelle interface
    mainContent.innerHTML = formHtml;
    window.scrollTo(0, 0);
}

// Au chargement initial, afficher le tableau de bord admin
document.addEventListener("DOMContentLoaded", function() {
    showForm('admin-dashboard');
});
