// Fonctionnalités du menu
function openMenu() {
    document.getElementById("side-menu").style.width = "50%"; // La moitié de la page
    document.getElementById("overlay").style.display = "block"; // Afficher l'overlay
}

function closeMenu() {
    document.getElementById("side-menu").style.width = "0"; // Fermer le menu
    document.getElementById("overlay").style.display = "none"; // Masquer l'overlay
}

// Gestion du drag-and-drop pour l'upload d'image
document.getElementById('drop-area').addEventListener('dragover', (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.classList.add('dragging');
});

document.getElementById('drop-area').addEventListener('dragleave', (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.classList.remove('dragging');
});

document.getElementById('drop-area').addEventListener('drop', (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.classList.remove('dragging');

    const files = event.dataTransfer.files;
    if (files.length > 0) {
        handleImageUpload(files[0]);
    }
});

document.getElementById('news-image').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        handleImageUpload(file);
    }
});

function handleImageUpload(file) {
    const reader = new FileReader();
    reader.onload = function(event) {
        document.getElementById('preview-image').src = event.target.result;
        document.getElementById('preview-image').style.display = 'block';
    };
    reader.readAsDataURL(file);
}

// Gestion des actualités
document.addEventListener("DOMContentLoaded", function() {
    loadNews();

    document.getElementById("newsForm").addEventListener("submit", function(e) {
        e.preventDefault();

        const title = document.getElementById("news-title").value;
        const content = document.getElementById("news-content").value;
        const imageSrc = document.getElementById("preview-image").src;

        addNewsToDOM({ title, content, imageSrc });
        saveNews({ title, content, imageSrc });

        // Réinitialiser le formulaire
        document.getElementById('news-title').value = '';
        document.getElementById('news-content').value = '';
        document.getElementById('preview-image').src = '';
        document.getElementById('preview-image').style.display = 'none';
    });
});

function saveNews(newsItem) {
    let newsList = JSON.parse(localStorage.getItem('newsList')) || [];
    newsList.push(newsItem);
    localStorage.setItem('newsList', JSON.stringify(newsList));
}

function loadNews() {
    const newsList = JSON.parse(localStorage.getItem('newsList')) || [];
    const newsContainer = document.querySelector('.news-content');
    newsContainer.innerHTML = '';
    newsList.forEach(newsItem => {
        addNewsToDOM(newsItem);
    });
}

function addNewsToDOM(newsItem) {
    const newsContainer = document.querySelector('.news-content');
    const newsDiv = document.createElement('div');
    newsDiv.classList.add('news-item');
    newsDiv.innerHTML = `
        <img src="${newsItem.imageSrc}" alt="${newsItem.title}">
        <div class="news-info">
            <h3>${newsItem.title}</h3>
            <p>${newsItem.content}</p>
            <span class="date">${new Date().toLocaleDateString()}</span>
        </div>
        <span class="delete-btn">&times;</span>
    `;
    
    // Ajouter la fonctionnalité de suppression
    newsDiv.querySelector('.delete-btn').addEventListener('click', function() {
        newsDiv.remove();
        deleteNews(newsItem.title);
    });

    newsContainer.appendChild(newsDiv);
}

function deleteNews(title) {
    let newsList = JSON.parse(localStorage.getItem('newsList')) || [];
    newsList = newsList.filter(news => news.title !== title);
    localStorage.setItem('newsList', JSON.stringify(newsList));
}
