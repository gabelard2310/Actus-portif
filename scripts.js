document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.addEventListener("click", () => {
            alert(`Vous avez cliqué sur ${section.querySelector("h2").textContent}`);
        });
    });
});const articles = [
    {
        title: "Le PSG remporte un match spectaculaire",
        date: "2024-12-08",
        author: "Jean Dupont",
        image: "images/psg-match.jpg",
        content: "Le Paris Saint-Germain a remporté une victoire impressionnante face à Lyon hier soir, avec un score final de 4-1.",
        link: "#plus-dinfos"
    },
    {
        title: "NBA : Les Lakers en grande forme",
        date: "2024-12-07",
        author: "Marie Durant",
        image: "images/lakers.jpg",
        content: "Les Lakers dominent actuellement la saison grâce à des performances incroyables de leurs stars.",
        link: "#nba-lakers"
    }
];

const articlesContainer = document.querySelector("#articles-container");

articles.forEach(article => {
    const articleElement = `
    <article class="article-sport">
        <h2>${article.title}</h2>
        <p>Publié le <time datetime="${article.date}">${article.date}</time> par <strong>${article.author}</strong></p>
        <img src="${article.image}" alt="${article.title}" />
        <p>${article.content}</p>
        <a href="${article.link}">Lire plus...</a>
    </article>
    `;
    articlesContainer.innerHTML += articleElement;
});document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    // Met à jour le lien actif en fonction de la section visible
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });

        menuLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});const categories = {
            "ligue-1": [
                { title: "Le PSG remporte un match crucial", link: "article-psg.html" },
                { title: "Marseille en bonne forme", link: "article-marseille.html" }
        const ligue1Section = document.querySelector("#ligue-1");
        categories["ligue-1"].forEach(article => {
            const articleElement = `
                <article>
                    <h4>${}</h4>
                    <a href="${article.link}">Lire l'article complet</a>
                </article>
            `;
            ligue1Section.innerHTML += articleElement;
        });
    ],
    "champions-league": [
        { title: "Le PSG s'impose contre le Real Madrid", link: "article-psg-real.html" },
        { title: "Les outsiders de cette saison", link: "article-outsiders.html" }
    ],
    "transferts": [
        { title: "Kylian Mbappé pourrait quitter Paris", link: "article-mbappe-transfert.html" },
        { title: "Un nouveau défenseur pour Lyon", link: "article-lyon-defenseur.html" }
    ]
};

const ligue1Section = document.querySelector("#ligue-1");
categories["ligue-1"].forEach(article => {
    const articleElement = `
        <article>
            <h4>${article.title}</h4>
            <a href="${article.link}">Lire l'article complet</a>
        </article>
    `;
    ligue1Section.innerHTML += articleElement;
});