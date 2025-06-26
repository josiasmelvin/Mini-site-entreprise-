document.addEventListener("DOMContentLoaded", () => {
  console.log("Page chargée !");

  // Exemple : afficher une alerte au clic sur le bouton d'envoi du formulaire
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Merci pour votre message !");
      form.reset();
    });
  }

  // Exemple : effet au scroll
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
      const position = section.getBoundingClientRect().top;
      if (position < window.innerHeight - 100) {
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
        section.style.transition = "all 0.6s ease";
      }
    });
  });

  // Style initial pour les sections
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(50px)";
  });
});
