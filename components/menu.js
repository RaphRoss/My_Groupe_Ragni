function openMenu() {
    document.getElementById("side-menu").style.width = "50%"; // La moitié de la page
    document.getElementById("overlay").style.display = "block"; // Afficher l'overlay
}

function closeMenu() {
    document.getElementById("side-menu").style.width = "0"; // Fermer le menu
    document.getElementById("overlay").style.display = "none"; // Masquer l'overlay
}

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

function addNews() {
    const title = document.getElementById('news-title').value;
    const content = document.getElementById('news-content').value;
    const imageSrc = document.getElementById('preview-image').src;

    const newsContainer = document.querySelector('.news-content');
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');
    newsItem.innerHTML = `
        <img src="${imageSrc}" alt="${title}">
        <h3>${title}</h3>
        <p>${content}</p>
    `;

    newsContainer.appendChild(newsItem);

    // Save the news item to localStorage or your backend
    saveNews({ title, content, imageSrc });

    // Reset the form
    document.getElementById('news-title').value = '';
    document.getElementById('news-content').value = '';
    document.getElementById('preview-image').style.display = 'none';
    document.getElementById('preview-image').src = '';
}

function saveNews(newsItem) {
    let newsList = JSON.parse(localStorage.getItem('newsList')) || [];
    newsList.push(newsItem);
    localStorage.setItem('newsList', JSON.stringify(newsList));
}

function loadNews() {
    const newsList = JSON.parse(localStorage.getItem('newsList')) || [];
    const newsContainer = document.querySelector('.news-content');
    newsList.forEach(newsItem => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('news-item');
        newsDiv.innerHTML = `
            <img src="${newsItem.imageSrc}" alt="${newsItem.title}">
            <h3>${newsItem.title}</h3>
            <p>${newsItem.content}</p>
        `;
        newsContainer.appendChild(newsDiv);
    });
}

function addNews() {
    const title = document.getElementById('news-title').value;
    const content = document.getElementById('news-content').value;
    const imageSrc = document.getElementById('preview-image').src;

    const newsContainer = document.querySelector('.news-content');
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');
    newsItem.innerHTML = `
        <img src="${imageSrc}" alt="${title}">
        <div class="news-info">
            <h3>${title}</h3>
            <p>${content}</p>
            <span class="date">${new Date().toLocaleDateString()}</span>
        </div>
        <span class="delete-btn">&times;</span>
    `;

    // Ajouter la fonctionnalité de suppression
    newsItem.querySelector('.delete-btn').addEventListener('click', function() {
        newsItem.remove();
        saveNews();
    });

    newsContainer.appendChild(newsItem);
    saveNews();

    document.getElementById('news-title').value = '';
    document.getElementById('news-content').value = '';
    document.getElementById('preview-image').src = '';
}

function saveNews() {
    const newsList = Array.from(document.querySelectorAll('.news-item')).map(newsItem => ({
        title: newsItem.querySelector('h3').textContent,
        content: newsItem.querySelector('p').textContent,
        imageSrc: newsItem.querySelector('img').src
    }));
    localStorage.setItem('newsList', JSON.stringify(newsList));
}

function loadNews() {
    const newsList = JSON.parse(localStorage.getItem('newsList')) || [];
    const newsContainer = document.querySelector('.news-content');
    newsContainer.innerHTML = '';
    newsList.forEach(newsItem => {
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
        newsDiv.querySelector('.delete-btn').addEventListener('click', function() {
            newsDiv.remove();
            saveNews();
        });
        newsContainer.appendChild(newsDiv);
    });
}

// Load news on page load
window.onload = loadNews;
