const newsData = [
  {
    category: 'football',
    title: 'La Ligue des champions démarre avec fracas',
    description: 'Les meilleurs clubs européens se disputent le titre tant convoité.',
    image: 'https://via.placeholder.com/300x200?text=Football',
    link: '#'
  },
  {
    category: 'basketball',
    title: 'NBA : Les Lakers brillent en début de saison',
    description: 'Une performance exceptionnelle de LeBron James assure la victoire.',
    image: 'https://via.placeholder.com/300x200?text=Basketball',
    link: '#'
  },
  {
    category: 'tennis',
    title: 'Roland-Garros : Une finale mémorable',
    description: 'Le duel entre Nadal et Djokovic reste gravé dans les mémoires.',
    image: 'https://via.placeholder.com/300x200?text=Tennis',
    link: '#'
  },
  {
    category: 'football',
    title: 'Cristiano Ronaldo marque un triplé historique',
    description: 'Le joueur portugais continue de marquer l’histoire du football.',
    image: 'https://via.placeholder.com/300x200?text=Football',
    link: '#'
  }
];

// Fonction pour afficher les articles
function displayNews(filter = 'all') {
  const container = document.getElementById('news-container');
  container.innerHTML = ''; // Réinitialise le contenu

  const filteredNews = filter === 'all' ? newsData : newsData.filter(item => item.category === filter);

  filteredNews.forEach(news => {
    const newsCard = document.createElement('div');
    newsCard.className = 'news-card';

    newsCard.innerHTML = `
      <img src="${news.image}" alt="${news.category}">
      <h2>${news.title}</h2>
      <p>${news.description}</p>
      <a href="${news.link}">Lire la suite</a>
    `;

    container.appendChild(newsCard);
  });
}

// Fonction pour filtrer les actualités
function filterNews(category) {
  displayNews(category);
}

// Affiche toutes les actualités au démarrage
displayNews();
