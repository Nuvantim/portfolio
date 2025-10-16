// Preloader
window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    preloader.classList.add("opacity-0");
    setTimeout(function () {
      preloader.style.display = "none";
    }, 1000);
  }
});

// iTyped
if (document.querySelector(".iTyped")) {
  window.ityped.init(document.querySelector(".iTyped"), {
    strings: [
      "Hi there! 👋",
      "Welcome to my portfolio website. 🎉",
      "Everything you need to know about me is right here 🌟.",
    ],
    loop: true,
  });
}

// Portfolio Item Filter
const filterContainer = document.querySelector(".portfolio-filter");
if (filterContainer) {
  const filterBtns = filterContainer.children;
  const totalFilterBtn = filterBtns.length;
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  const totalPortfolioItem = portfolioItems.length;

  for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener("click", function () {
      const activeBtn = filterContainer.querySelector(".active");
      if (activeBtn) {
        activeBtn.classList.remove("active");
      }
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");
      for (let k = 0; k < totalPortfolioItem; k++) {
        if (
          filterValue === "all" ||
          filterValue === portfolioItems[k].getAttribute("data-category")
        ) {
          portfolioItems[k].classList.remove("hide");
          portfolioItems[k].classList.add("show");
        } else {
          portfolioItems[k].classList.remove("show");
          portfolioItems[k].classList.add("hide");
        }
      }
    });
  }
}

// Portfolio Lightbox
const lightbox = document.querySelector(".lightbox");
if (lightbox) {
  const lightboxImg = lightbox.querySelector(".lightbox-img");
  const lightboxText = lightbox.querySelector(".caption-text");
  const lightboxClose = lightbox.querySelector(".lightbox-close");
  const lightboxCounter = lightbox.querySelector(".caption-counter");
  let itemIndex = 0;

  const portfolioItems = document.querySelectorAll(".portfolio-item");
  const totalPortfolioItem = portfolioItems.length;

  for (let i = 0; i < totalPortfolioItem; i++) {
    portfolioItems[i].addEventListener("click", function () {
      itemIndex = i;
      changeItem();
      toggleLightbox();
    });
  }

  function toggleLightbox() {
    lightbox.classList.toggle("open");
    document.body.style.overflow = lightbox.classList.contains("open")
      ? "hidden"
      : "";
  }

  function changeItem() {
    const imgElement = portfolioItems[itemIndex].querySelector(
      ".portfolio-img img",
    );
    if (imgElement && lightboxImg) {
      lightboxImg.src = imgElement.getAttribute("src");
    }
    if (lightboxText) {
      const heading = portfolioItems[itemIndex].querySelector("h4");
      lightboxText.innerHTML = heading ? heading.innerHTML : "";
    }
    if (lightboxCounter) {
      lightboxCounter.innerHTML = `${itemIndex + 1} of ${totalPortfolioItem}`;
    }
  }

  // Navigation functions
  function prevItem() {
    itemIndex = (itemIndex - 1 + totalPortfolioItem) % totalPortfolioItem;
    changeItem();
  }

  function nextItem() {
    itemIndex = (itemIndex + 1) % totalPortfolioItem;
    changeItem();
  }

  // Close lightbox
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightboxClose || event.target === lightbox) {
      toggleLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (lightbox.classList.contains("open")) {
      if (e.key === "Escape") {
        toggleLightbox();
      } else if (e.key === "ArrowLeft") {
        prevItem();
      } else if (e.key === "ArrowRight") {
        nextItem();
      }
    }
  });
}

// Aside Navbar
const nav = document.querySelector(".nav");
if (nav) {
  const navList = nav.querySelectorAll("li");
  const totalNavList = navList.length;
  const allSection = document.querySelectorAll(".section");
  const totalSection = allSection.length;

  for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    if (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        removeBackSectionClass();

        for (let j = 0; j < totalNavList; j++) {
          const navLink = navList[j].querySelector("a");
          if (navLink && navLink.classList.contains("active")) {
            addBackSectionClass(j);
          }
          if (navLink) {
            navLink.classList.remove("active");
          }
        }

        this.classList.add("active");
        showSection(this);

        if (window.innerWidth < 1200) {
          asideSectionTogglerBtn();
        }
      });
    }
  }

  function addBackSectionClass(num) {
    if (num >= 0 && num < totalSection) {
      allSection[num].classList.add("back-section");
    }
  }

  function removeBackSectionClass() {
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("back-section");
    }
  }

  function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
      const navLink = navList[i].querySelector("a");
      if (navLink) {
        navLink.classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navLink.getAttribute("href").split("#")[1]) {
          navLink.classList.add("active");
        }
      }
    }
  }

  function showSection(element) {
    const target = element.getAttribute("href").split("#")[1];
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("active");
      if (allSection[i].id === target) {
        allSection[i].classList.add("active");
      }
    }
  }

  const navTogglerBtn = document.querySelector(".nav-toggler");
  const aside = document.querySelector(".aside");

  if (navTogglerBtn && aside) {
    navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);
  }

  function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.toggle("open");
    }
  }
}
