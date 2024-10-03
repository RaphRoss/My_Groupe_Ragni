document.addEventListener('DOMContentLoaded', function() {
    const productsList = document.getElementById('products-list');

    // Restaure les lignes du formulaire depuis le stockage local
    function restoreLines() {
        const savedLines = JSON.parse(localStorage.getItem('productsList'));
        if (savedLines) {
            savedLines.forEach(line => {
                const newInput = createProductInput(line);
                productsList.appendChild(newInput);
            });
        }
    }

    // Enregistre l'état des lignes dans le stockage local
    function saveLines() {
        const inputs = Array.from(productsList.querySelectorAll('input[name="produit[]"]'));
        const lines = inputs.map(input => input.value);
        localStorage.setItem('productsList', JSON.stringify(lines));
    }

    restoreLines();

    // Enregistre l'état des lignes dans le stockage local
    function saveLines() {
        const inputs = Array.from(productsList.querySelectorAll('input[name="produit[]"]'));
        const lines = inputs.map(input => input.value);
        localStorage.setItem('productsList', JSON.stringify(lines));
    }

    function createProductInput(value) {
        const productWrapper = document.createElement('div');
        productWrapper.classList.add('product-wrapper');
    
        const newInput = document.createElement('input');
        newInput.setAttribute('type', 'text');
        newInput.setAttribute('name', 'produit[]');
        newInput.setAttribute('placeholder', value || 'Votre produit');
        newInput.value = value || '';
        productWrapper.appendChild(newInput);
    
        // Ajoute un bouton "config" pour les types spécifiques
        if (value === 'Luminaire') {
            const configButton = document.createElement('button');
            configButton.textContent = 'Config Lum';
            configButton.classList.add('config-button');
            configButton.setAttribute('type', 'button');
            configButton.addEventListener('click', function(event) {
                event.preventDefault();
                // Supprime le champ de produit associé
                productsList.removeChild(productWrapper);
                // Redirige vers la page de configuration
                saveLines();
                window.location.href = 'config_mat.html';  // URL spécifique pour Luminaire
            });
            productWrapper.appendChild(configButton);
        } else if (value === 'Mat') {
            const configButton = document.createElement('button');
            configButton.textContent = 'Config Mat';
            configButton.classList.add('config-button');
            configButton.setAttribute('type', 'button');
            configButton.addEventListener('click', function(event) {
                event.preventDefault();
                window.location.href = '#';  // URL spécifique pour Mat
            });
            productWrapper.appendChild(configButton);
        } else if (value === 'Console') {
            const configButton = document.createElement('button');
            configButton.textContent = 'Config Console';
            configButton.classList.add('config-button');
            configButton.setAttribute('type', 'button');
            configButton.addEventListener('click', function(event) {
                event.preventDefault();
                window.location.href = '#';  // URL spécifique pour Console
            });
            productWrapper.appendChild(configButton);
        }
    
        return productWrapper;
    }

    document.getElementById('add-line').addEventListener('click', function () {
        const newInput = createProductInput();
        productsList.appendChild(newInput);
        saveLines();
    });

    document.getElementById('remove-line').addEventListener('click', function () {
        if (productsList.children.length > 0) {
            productsList.removeChild(productsList.lastElementChild);
            saveLines();
        }
    });

    // Gestion des boutons dans la section "Choisissez votre ou vos produits"
    document.getElementById('ensemble-btn').addEventListener('click', function(event) {
        event.preventDefault();
        addLineWithText('Ensemble : Luminaire / Mat / Console');
        addLineWithText('Luminaire');
        addLineWithText('Mat');
        addLineWithText('Console');
        saveLines();
    });

    document.getElementById('composant-btn').addEventListener('click', function(event) {
        event.preventDefault();
        addLineWithText('Composant');
        saveLines();
        redirectToPage('#');
    });

    document.getElementById('korner-btn').addEventListener('click', function(event) {
        event.preventDefault();
        addLineWithText('Korner');
        saveLines();
        redirectToPage('#');
    });

    document.getElementById('salon-btn').addEventListener('click', function(event) {
        event.preventDefault();
        addLineWithText('Salon Nocturne');
        saveLines();
        redirectToPage('#');
    });

    document.getElementById('config-seve-btn').addEventListener('click', function(event) {
        event.preventDefault();
        addLineWithText('Configurateur SEVe');
        saveLines();
        redirectToPage('#');
    });

    function addLineWithText(text) {
        const newInput = createProductInput(text);
        productsList.appendChild(newInput);
        saveLines();
    }

    function redirectToPage(url) {
        saveLines(); // Sauvegarder avant la redirection
        window.location.href = url;
    }

    // --- Ajout du code pour gérer les boutons de création et validation de devis ---

    const createDevisBtn = document.querySelector('#devis-form .submit-buttons .btn[type="submit"]');
    const retourAffaireBtn = document.getElementById('return-button');
    const validateDevisBtn = document.querySelector('#post-devis-section .submit-buttons .btn');
    const devisForm = document.getElementById('devis-form');
    const postDevisSection = document.getElementById('post-devis-section');

    // Vérifie si des données sont stockées dans le localStorage et les restaure
    const savedFormData = JSON.parse(localStorage.getItem('devisFormData'));
    if (savedFormData) {
        document.getElementById('nom').value = savedFormData.nom;
        document.getElementById('prenom').value = savedFormData.prenom;
        document.getElementById('ville').value = savedFormData.ville;
        document.getElementById('date-livraison').value = savedFormData.dateLivraison;

        // Affiche la section post-création de devis si un devis a déjà été créé
        postDevisSection.style.display = 'block';
    }

    // Fonction pour sauvegarder les données du formulaire
    function saveFormData() {
        const formData = {
            nom: document.getElementById('nom').value,
            prenom: document.getElementById('prenom').value,
            ville: document.getElementById('ville').value,
            dateLivraison: document.getElementById('date-livraison').value
        };
        localStorage.setItem('devisFormData', JSON.stringify(formData));
    }

    // Créer un devis et sauvegarder les données du formulaire
    createDevisBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire

        // Simule la création du devis
        alert('Devis créé avec succès !');

        // Sauvegarde les données dans le localStorage
        saveFormData();

        // Affiche la section post-création de devis
        postDevisSection.style.display = 'block';
    });

    // Valider le devis et effacer les données (sur le bouton Valider votre devis)
    validateDevisBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche l'action par défaut

        // Simule la validation du devis
        alert('Devis validé et finalisé !');

        // Efface les informations du formulaire et des produits stockées dans le localStorage
        localStorage.removeItem('devisFormData');
        localStorage.removeItem('productsList');

        // Redirige vers une autre page (exemple : page de confirmation)
        window.location.href = 'gestion_devis.html'; // Remplacez par l'URL cible
    });

    // Retour à la création d'affaire sans effacement des données
    retourAffaireBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche l'action par défaut

        // Redirige vers une autre page (par exemple la page de création d'affaire)
        window.location.href = 'gestion_devis.html'; // Remplacez par l'URL cible
    });
});