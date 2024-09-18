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

    restoreLines();

    // Enregistre l'état des lignes dans le stockage local
    function saveLines() {
        const inputs = Array.from(productsList.querySelectorAll('input[name="produit[]"]'));
        const lines = inputs.map(input => input.value);
        localStorage.setItem('productsList', JSON.stringify(lines));
    }

    // Fonction pour créer un champ de produit avec ou sans bouton config
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
            window.location.href = '#';  // URL spécifique pour Luminaire
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
        addLineWithText('Ensemble');
        addLineWithText('Luminaire');
        addLineWithText('Mat');
        addLineWithText('Console');
    });

    document.getElementById('composant-btn').addEventListener('click', function(event) {
        event.preventDefault();
        addLineWithText('Composant');
        redirectToPage('#');
    });

    document.getElementById('korner-btn').addEventListener('click', function(event) {
        event.preventDefault();
        addLineWithText('Korner');
        redirectToPage('#');
    });

    document.getElementById('salon-btn').addEventListener('click', function(event) {
        event.preventDefault();
        addLineWithText('Salon Nocturne');
        redirectToPage('#');
    });

    document.getElementById('config-seve-btn').addEventListener('click', function(event) {
        event.preventDefault();
        addLineWithText('Configurateur SEVe');
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
});
