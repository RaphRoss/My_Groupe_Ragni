document.getElementById('devis-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Récupérer les données du formulaire
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const city = document.getElementById('city').value;
    const dateLivraison = document.getElementById('date_livraison').value;
    const infos = Array.from(document.getElementsByName('info[]')).map(input => input.value);

    // Créer un objet devis
    const devis = {
        name,
        surname,
        city,
        dateLivraison,
        infos
    };

    // Récupérer les devis existants depuis le stockage local
    let devisList = JSON.parse(localStorage.getItem('devisList')) || [];

    // Ajouter le nouveau devis à la liste
    devisList.push(devis);

    // Enregistrer la liste mise à jour dans le stockage local
    localStorage.setItem('devisList', JSON.stringify(devisList));

    // Rediriger vers la page affaire.html
    alert('Devis créé avec succès !');
    window.location.href = 'affaire.html';
});

function addInfoLine() {
    // Créer un nouvel élément de ligne
    const newLine = document.createElement('div');
    newLine.classList.add('info-line');

    // Ajouter un bouton qui redirige vers une page HTML
    const redirectBtn = document.createElement('button');
    redirectBtn.type = 'button';
    redirectBtn.textContent = 'Configurateurs';
    redirectBtn.classList.add('redirect-btn');
    redirectBtn.onclick = function() {
        window.location.href = 'config.html';  // Remplacez 'votre_page.html' par l'URL de votre page
    };
    
    // Ajouter un bouton pour supprimer la ligne
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.textContent = '−';
    removeBtn.classList.add('remove-line-btn');
    removeBtn.onclick = function() {
        newLine.remove();
    };

    // Ajouter les éléments au conteneur
    newLine.appendChild(redirectBtn);
    newLine.appendChild(removeBtn);

    // Ajouter la nouvelle ligne au conteneur
    document.getElementById('info-container').appendChild(newLine);
}