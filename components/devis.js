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
    window.location.href = 'affaire.html';
});

function addInfoLine() {
    // Créer un nouvel élément de ligne
    const newLine = document.createElement('div');
    newLine.classList.add('info-line');

    // Ajouter un champ de saisie
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'info[]';
    input.placeholder = 'Entrez une information';
    
    // Ajouter un bouton pour supprimer la ligne
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.textContent = '−';
    removeBtn.classList.add('remove-line-btn');
    removeBtn.onclick = function() {
        newLine.remove();
    };

    // Ajouter les éléments au conteneur
    newLine.appendChild(input);
    newLine.appendChild(removeBtn);

    // Ajouter la nouvelle ligne au conteneur
    document.getElementById('info-container').appendChild(newLine);
}
