document.addEventListener("DOMContentLoaded", function () {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons and contents
      tabBtns.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => {
        content.classList.remove("active");
        // Reset animation for cards when switching tabs
        const cards = content.querySelectorAll(".card");
        cards.forEach((card) => {
          card.style.opacity = "0";
          card.style.transform = window.innerWidth > 768
            ? "translateY(20px)"
            : "translateX(-20px)";
        });
      });

      // Add active class to clicked button
      btn.classList.add("active");

      // Show correspondi'ng content
      const tabId = btn.getAttribute("data-tab");
      const activeContent = document.getElementById(tabId);
      activeContent.classList.add("active");

      // Trigger animation for cards in active tab
      const cards = activeContent.querySelectorAll(".card");
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.style.animation = window.innerWidth > 768
            ? "cardEntrance 0.6s ease-out forwards"
            : "cardEntranceMobile 0.6s ease-out forwards";
          card.style.animationDelay = `${index * 0.1}s`;
        }, 10);
      });
    });
  });

  // Initialize animation for first tab
  const initialCards = document.querySelector("#projects")
    .querySelectorAll(".card");
  initialCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.style.animation = "cardEntrance 0.6s ease-out forwards";
  });
});
