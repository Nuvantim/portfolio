document.addEventListener("DOMContentLoaded", function () {
  const techShowcase = document.getElementById("techShowcase");

  // Tech stack data (4 groups of 4 technologies each)
  const techGroups = [
    // Script
    [
      {
        name: "HTML",
        src: "asset/tech/script/HTML5.svg",
      },
      {
        name: "CSS3",
        src: "asset/tech/script/CSS3.svg",
      },
      {
        name: "JavaScript",
        src: "asset/tech/script/JavaScript.svg",
      },
      {
        name: "Sass",
        src: "asset/tech/script/Sass.svg",
      },
    ],
    // UI
    [
      {
        name: "Bootstrap",
        src: "asset/tech/ui/Bootstrap.svg",
      },
      {
        name: "Livwire",
        src: "asset/tech/ui/Livewire.svg",
      },
      {
        name: "Odoo",
        src: "asset/tech/ui/odoo.svg",
      },
      {
        name: "Svelte",
        src: "asset/tech/ui/Svelte.svg",
      },
    ],
    // Language
    [
      {
        name: "php",
        src: "asset/tech/language/php.svg",
      },
      {
        name: "go",
        src: "asset/tech/language/golang.svg",
      },
      {
        name: "python",
        src: "asset/tech/language/python.svg",
      },
      {
        name: "deno",
        src: "asset/tech/language/deno.svg",
      },
    ],
    // Framework
    [
      {
        name: "Laravel",
        src: "asset/tech/framework/laravel.svg",
      },
      {
        name: "Fiber",
        src: "asset/tech/framework/fiber.svg",
      },
      {
        name: "Keras",
        src: "asset/tech/framework/keras.svg",
      },
      {
        name: "gRPC",
        src: "asset/tech/framework/rpc.svg",
      },
    ],
    // database
    [
      {
        name: "MySQL",
        src: "asset/tech/database/mysql.svg",
      },
      {
        name: "PostgreSQL",
        src: "asset/tech/database/postgres.svg",
      },
      {
        name: "MongoDB",
        src: "asset/tech/database/mongodb.svg",
      },
      {
        name: "Redis",
        src: "asset/tech/database/redis.svg",
      },
    ],
    // os
    [
      {
        name: "Ubuntu",
        src: "asset/tech/os/Ubuntu.svg",
      },
      {
        name: "CentOS",
        src: "asset/tech/os/CentOS.svg",
      },
      {
        name: "Gcp",
        src: "asset/tech/os/Gcp.svg",
      },
      {
        name: "Raspbery",
        src: "asset/tech/os/Raspbery.svg",
      },
    ],
    // Tool
    [
      {
        name: "Docker",
        src: "asset/tech/tool/Docker.svg",
      },
      {
        name: "Kubernetes",
        src: "asset/tech/tool/Kubernetes.svg",
      },
      {
        name: "Git",
        src: "asset/tech/tool/Git.svg",
      },
      {
        name: "Cloudflare",
        src: "asset/tech/tool/Cloudflare.svg",
      },
    ],
  ];

  // Create 4 tech items
  for (let i = 0; i < 4; i++) {
    const item = document.createElement("div");
    item.className = "tech-item";
    techShowcase.appendChild(item);
  }

  const techItems = document.querySelectorAll(".tech-item");

  let currentGroupIndex = 0;
  updateTechDisplay();

  // Rotate tech groups every 3 seconds
  setInterval(() => {
    currentGroupIndex = (currentGroupIndex + 1) % techGroups.length;
    updateTechDisplay();
  }, 3000);

  function updateTechDisplay() {
    const currentGroup = techGroups[currentGroupIndex];

    // First set all icons to inactive
    techItems.forEach((item) => {
      const icons = item.querySelectorAll(".tech-icon");
      icons.forEach((icon) => {
        icon.classList.remove("active");
        icon.classList.add("inactive");
      });
    });

    // Then add new icons with delay
    techItems.forEach((item, index) => {
      // Remove old icons after transition
      setTimeout(() => {
        const oldIcons = item.querySelectorAll(".tech-icon");
        oldIcons.forEach((icon) => icon.remove());

        // Create new icon
        const icon = document.createElement("img");
        icon.className = "tech-icon inactive";
        icon.src = currentGroup[index].src;
        icon.alt = currentGroup[index].name;
        item.appendChild(icon);

        // Activate with delay for staggered animation
        setTimeout(() => {
          icon.classList.remove("inactive");
          icon.classList.add("active");
        }, index * 100);
      }, 600);
    });
  }

  // Preload all images
  techGroups.forEach((group) => {
    group.forEach((tech) => {
      new Image().src = tech.src;
    });
  });
});
