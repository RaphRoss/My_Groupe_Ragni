    // Fonction de recherche de mots-clés dans le tableau
    const searchInput = document.getElementById('search-input');
    const tableRows = document.querySelectorAll('#news-table tbody tr');

    searchInput.addEventListener('keyup', function () {
        const filter = searchInput.value.toLowerCase();

        tableRows.forEach(row => {
            const title = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
            const summary = row.querySelector('td:nth-child(3)').textContent.toLowerCase();

            if (title.includes(filter) || summary.includes(filter)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });

    // JavaScript pour gérer l'affichage du formulaire
    const newArticleButton = document.getElementById('new-article-button');
    const newsFormContainer = document.getElementById('news-form-container');
    const newsTableContainer = document.querySelector('.news-table-container');

    newArticleButton.addEventListener('click', () => {
      newsTableContainer.style.display = 'none'; // Cache le tableau
      newsFormContainer.style.display = 'block'; // Affiche le formulaire
    });

      // Gestion de la sélection du groupe de publication
  function handleGroupChange() {
    const publicationGroup = document.getElementById('publication-group');
    const entitesSubgroup = document.getElementById('entites-subgroup');
    
    if (publicationGroup.value === 'entites') {
      entitesSubgroup.style.display = 'block'; // Afficher le sous-groupe
    } else {
      entitesSubgroup.style.display = 'none'; // Cacher le sous-groupe
    }
  }

  // Gestion de l'image drag & drop et aperçu
  const dropArea = document.getElementById('drop-area');
  const newsImage = document.getElementById('news-image');
  const previewImage = document.getElementById('preview-image');

  dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.style.backgroundColor = '#f0fff0';
  });

  dropArea.addEventListener('dragleave', () => {
    dropArea.style.backgroundColor = '#fff';
  });

  dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImage(file);
  });

  newsImage.addEventListener('change', (e) => {
    const file = e.target.files[0];
    handleImage(file);
  });

  function handleImage(file) {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function (e) {
        previewImage.src = e.target.result;
        previewImage.style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  }

  function handleSubmit(event) {
    event.preventDefault(); // Empêche la soumission du formulaire par défaut
    // Vérifie que tous les champs sont remplis
    const title = document.getElementById('news-title').value;
    const content = document.getElementById('news-content').value;
    const link = document.getElementById('news-link').value;
    const date = document.getElementById('news-date').value;
    
    if (title && content && link && date) {
      alert('L\'actualité a été créée avec succès!');
      // Ici tu peux ajouter du code pour envoyer les données à un serveur si nécessaire
    } else {
      alert('Veuillez remplir tous les champs.');
    }
    return false; // Empêche le formulaire de se soumettre par défaut
  }