document.addEventListener("DOMContentLoaded", () => {
    const newsLinks = document.querySelectorAll('.ext-link');

    newsLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Empêche le lien de rediriger

            const newsItem = link.closest('.news-item');
            const expandedContent = newsItem.querySelector('.expanded-content');

            // Ferme toutes les autres actualités
            document.querySelectorAll('.expanded-content').forEach(content => {
                if (content !== expandedContent) {
                    content.style.display = 'none';
                }
            });

            // Bascule l'affichage du contenu étendu
            expandedContent.style.display = expandedContent.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Ferme l'actualité si on clique en dehors
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.news-item')) {
            document.querySelectorAll('.expanded-content').forEach(content => {
                content.style.display = 'none';
            });
        }
    });
});