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
        name: "Apidog",
        src: "asset/tech/framework/apidog.svg",
      },
      {
        name: "Google Collab",
        src: "asset/tech/framework/google-collab.svg",
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
    // Office
    [
      {
        name: "Microsoft Office",
        src: "asset/tech/office/microsoft-office.svg",
      },
      {
        name: "Google Sheet",
        src: "asset/tech/office/google-sheets.svg",
      },
      {
        name: "Tableau",
        src: "asset/tech/office/tableau.svg",
      },
      {
        name: "Trello",
        src: "asset/tech/office/trello.svg",
      },
    ],
    // tool
    [
      {
        name: "Ubuntu",
        src: "asset/tech/tool/Ubuntu.svg",
      },
      {
        name: "DB Visualizer",
        src: "asset/tech/tool/dbvis.svg",
      },
      {
        name: "Caddy",
        src: "asset/tech/tool/caddy.svg",
      },
      {
        name: "Bash",
        src: "asset/tech/tool/bash.svg",
      },
    ],
    // Deploy
    [
      {
        name: "Docker",
        src: "asset/tech/deploy/Docker.svg",
      },
      {
        name: "Github Action",
        src: "asset/tech/deploy/github-action.svg",
      },
      {
        name: "Git",
        src: "asset/tech/deploy/Git.svg",
      },
      {
        name: "RabbitMQ",
        src: "asset/tech/deploy/rabbitmq.svg",
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
