// Stockage local pour simuler une base de données
const usersKey = "users"; // Clé pour stocker les utilisateurs

// Gestion de l'inscription
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem(usersKey)) || [];
    if (users.some((user) => user.username === username)) {
      alert("Nom d'utilisateur déjà pris !");
      return;
    }

    users.push({ username, password });
    localStorage.setItem(usersKey, JSON.stringify(users));
    alert("Compte créé avec succès !");
    window.location.href = "login.html";
  });
}

// Gestion de la connexion
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem(usersKey)) || [];
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      localStorage.setItem("loggedInUser", username);
      window.location.href = "dashboard.html";
    } else {
      alert("Nom d'utilisateur ou mot de passe incorrect !");
    }
  });
}

// Afficher l'utilisateur connecté sur le tableau de bord
if (window.location.pathname.includes("dashboard.html")) {
  const user = localStorage.getItem("loggedInUser");
  if (!user) {
    alert("Vous devez être connecté pour accéder à cette page !");
    window.location.href = "login.html";
  } else {
    document.getElementById("user").textContent = user;
  }

  // Gestion de la déconnexion
  document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
  });
}