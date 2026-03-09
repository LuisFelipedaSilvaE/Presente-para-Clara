const dialogContainer = document.querySelector(".dialog-container");
const dialog = document.querySelector(".dialog");
const mobileMenu = document.querySelector("#mobile-menu");
const yuubeeForm = document.querySelector("#ask-yuubee-form");
const selection = document.querySelector(".selection");
const menuAnimation = document.querySelector(".animation-complementation");
const mainMenu = document.querySelector("aside.menu");
const spinner = document.createElement("span");
const askAgainButton = document.querySelector(".ask-again");
const askButton = document.querySelector("#ask-yuubee");
const carouselUpArrow = document.querySelector(".carousel-arrow-up");
const carouselDownArrow = document.querySelector(".carousel-arrow-down");
const skills = document.querySelectorAll(".skill");
const skillDescription = [
  {
    name: `Feline Friendship`,
    skillType: `Passive`,
    description: `Periodically, Yuumi’s Basic Attacks and Abilities will Shield
              Yuumi. If Yuumi is Attached to an ally or attaches within a few
              seconds they are Shielded for the same amount. While Attached to
              an ally, Yuumi grants them Friendship stacks when they kill enemy
              champions or minions. The ally with the highest Friendship stack
              becomes Yuumi’s Best Friend, which empowers her abilities towards
              them.`,
  },
  {
    name: `Prowling Projectile`,
    skillType: `1`,
    description: `Yuumi fires a missile, dealing Magic Damage to the first target
              hit. It deals bonus damage and Slows if it takes at least 1 second
              to get to its target. While Attached, the missile can be
              controlled with your cursor. Best Friend Bonus: Applies Slow on
              hit, and when hitting an enemy champion, Yuumi’s Attached ally
              gains bonus Magic Damage toward them.`,
  },
  {
    name: `You and Me!`,
    skillType: `2`,
    description: `Passive: While Yuumi is Attached to her Best Friend, She gains
              bonus Healing and Shielding, and her Best Friend also receives
              additional Healing effects. Active: Yuumi dashes to a target ally,
              becoming untargetable from everything except turrets.`,
  },
  {
    name: `Zoomies`,
    skillType: `3`,
    description: `Yuumi grants herself a Shield and gains Attack Speed. She also
              gains Move Speed while the Shield is active. If Yuumi is Attached,
              Zoomies affect her ally.`,
  },
  {
    name: `Final Chapter`,
    skillType: `Ultimate`,
    description: `Yuumi launches five waves in the target direction. While Attached
              Yuumi can steer the direction of the waves. Detaching stops this
              bonus effect. Allied champions hit by the waves are Healed, with
              increased Healing for the Best Friend. Excess Healing converts
              into a Shield. Enemies struck by the waves take Magic Damage and
              are Slowed. The Slow stacks and refreshes on each hit.`,
  },
];
const carouselItemStyles = skills[0].computedStyleMap();
let isCarouselRow = false;
const carouselStyles = document
  .querySelector(".skills-container")
  .computedStyleMap();
let carouselItemSize;
let carouselSpacing;
let translateValue = 0;
calcCarouselTranslateValue();

spinner.className = "spinner";
const dots = [..."..."].map((dot, index) => {
  let dotSpan = document.createElement("span");
  dotSpan.innerText = dot;
  dotSpan.style.display = "inline-block";
  dotSpan.style.animation = `1.5s loading ease-in-out ${index - index * 0.85}s infinite normal`;
  return dotSpan;
});

window.addEventListener("scroll", () => {
  const posicaoAtual = Math.ceil(window.innerHeight + window.scrollY);
  if (posicaoAtual > document.documentElement.scrollHeight - 95) {
    document.querySelector(".back-to-top").style.display = "flex";
  } else {
    document.querySelector(".back-to-top").style.display = "none";
  }
});

window.addEventListener("resize", () => {
  disableCarouselUpArrow();
  if (carouselDownArrow.disabled) {
    enableCarouselDownArrow();
  }

  translateValue = 0;
  skills.forEach((skill) => {
    skill.style.transform = "translateY(0)";
    skill.style.transform = "translateX(0)";
  });

  calcCarouselTranslateValue();
});

mobileMenu.addEventListener("click", () => {
  togglingMenuStyles();
  clearDialogStyles();
});

document.querySelector("h1#logo").addEventListener("click", () => {
  togglingMenuStyles();
  clearDialogStyles();
});

document.querySelector("ul#navigation").addEventListener("click", () => {
  togglingMenuStyles();
  clearDialogStyles();
});

document.querySelector("#close-dialog").addEventListener("click", () => {
  clearDialogStyles();
});

document.querySelectorAll(".skin-cell").forEach((img, index) => {
  img.addEventListener("click", () => {
    let dialogColors = [
      "rgb(51, 0, 85)",
      "rgb(15, 195, 195)",
      "rgb(255, 65, 95)",
      "rgb(255, 175, 100)",
      "rgb(220, 195, 220)",
      "rgb(135, 120, 255)",
      "rgb(255, 160, 205)",
    ];
    let dialogSpan = [img.dataset.rarity, img.dataset.limited];
    let src = img.getAttribute("src");
    let alt = img.getAttribute("alt");

    dialogContainer.style.color = dialogColors[index];
    dialogContainer.style.display = "flex";

    setTimeout(() => {
      dialogContainer.style.opacity = 100;
    }, 0);

    setTimeout(() => {
      dialog.style.opacity = 100;
    }, 0);

    setTimeout(() => {
      dialog.style.scale = 1;
    }, 0);

    document.querySelector(".dialog-heading h3").innerHTML = img.dataset.title;

    document
      .querySelectorAll(".dialog-content > h4 > span")
      .forEach((span, i) => {
        span.textContent = dialogSpan[i];
      });

    document.querySelector("#dialog-img").setAttribute("src", src);
    document.querySelector("#dialog-img").setAttribute("alt", alt);
  });
});

yuubeeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formButtonText = document.querySelector("#ask-yuubee-btn-content");
  formButtonText.innerText = "Loading";
  dots.forEach((dot) => {
    formButtonText.appendChild(dot);
  });
  askButton.insertBefore(spinner, formButtonText);
  const formData = new FormData(yuubeeForm);
  const options = [...formData.values()];
  const randomChoice = options[Math.floor(Math.random() * options.length)];
  const selectionTime = Math.floor(Math.random() * 1500) + 1000;

  askButton.disabled = true;
  askButton.style.opacity = 0.8;
  askButton.style.cursor = "wait";

  setTimeout(() => {
    askButton.disabled = false;
    askButton.style.opacity = 1;
    askButton.style.cursor = "pointer";
    formButtonText.textContent = "Ask";
    askButton.removeChild(spinner);
    yuubeeForm.style.display = "none";
    document.querySelectorAll(".opt").forEach((opt, i) => {
      opt.innerText = options[i];
    });
    document.querySelector("#chosen-option-content").innerText = randomChoice;
    selection.style.display = "flex";
  }, selectionTime);
});

askAgainButton.addEventListener("click", () => {
  const chosenOptionContainer = document.querySelector(".chosen");
  const chosenOption = document.querySelector("#chosen-option-content");

  askAgainButton.disabled = true;
  askAgainButton.style.opacity = 0.8;
  const selectionTime = Math.floor(Math.random() * 1500) + 1000;
  chosenOptionContainer.insertBefore(spinner, chosenOption);
  chosenOption.textContent = "Choosing";
  dots.forEach((dot) => {
    document.querySelector("#chosen-option-content").appendChild(dot);
  });

  chosenOption.style.display = "inline-block";
  askAgainButton.style.cursor = "wait";
  let newRandomChoice = [];
  document.querySelectorAll(".opt").forEach((opt) => {
    newRandomChoice.push(opt.innerText);
  });

  setTimeout(() => {
    askAgainButton.style.cursor = "pointer";
    askAgainButton.style.opacity = 1;
    askAgainButton.disabled = false;
    chosenOptionContainer.removeChild(spinner);
    chosenOption.textContent =
      newRandomChoice[Math.floor(Math.random() * newRandomChoice.length)];
  }, selectionTime);
});

document.querySelector(".new-question").addEventListener("click", () => {
  selection.style.display = "none";
  yuubeeForm.reset();
  yuubeeForm.style.display = "flex";
});

carouselDownArrow.addEventListener("click", () => {
  resetCarouselArrowsOpacity();
  translateValue -= carouselItemSize + carouselSpacing;
  if (translateValue < -(carouselItemSize + carouselSpacing)) {
    disableCarouselDownArrow();
  }

  skills.forEach((skill) => {
    skill.style.transform = `translate${isCarouselRow ? "X" : "Y"}(${translateValue}rem)`;
  });
});

carouselUpArrow.addEventListener("click", () => {
  resetCarouselArrowsOpacity();
  translateValue += carouselItemSize + carouselSpacing;
  if (translateValue > -(carouselItemSize + carouselSpacing)) {
    disableCarouselUpArrow();
  }

  skills.forEach((skill) => {
    skill.style.transform = `translate${isCarouselRow ? "X" : "Y"}(${translateValue}rem)`;
  });
});

skills.forEach((skill, index) => {
  skill.addEventListener("click", (event) => {
    document.querySelector("#skill-name").textContent =
      skillDescription[index].name;
    document.querySelector("#skill-type").textContent =
      skillDescription[index].skillType;
    document.querySelector("#skill-description").textContent =
      skillDescription[index].description;
    skills.forEach((item) => {
      event.currentTarget === item
        ? item.classList.add("selected-skill")
        : item.classList.remove("selected-skill");
    });
  });
});

function calcCarouselTranslateValue() {
  if (window.innerWidth <= 560) {
    isCarouselRow = true;
    for (const [prop, val] of carouselItemStyles) {
      if (prop === "min-width") {
        carouselItemSize = val[0].value / 10;
        break;
      }
    }

    for (const [prop, val] of carouselStyles) {
      if (prop === "row-gap") {
        carouselSpacing = val[0].value / 10;
        break;
      }
    }

    return;
  }

  isCarouselRow = false;
  for (const [prop, val] of carouselItemStyles) {
    if (prop === "min-height") {
      carouselItemSize = val[0].value / 10;
      break;
    }
  }

  for (const [prop, val] of carouselStyles) {
    if (prop === "row-gap") {
      carouselSpacing = val[0].value / 10;
      break;
    }
  }
}

function resetCarouselArrowsOpacity() {
  enableCarouselDownArrow();
  enableCarouselUpArrow();
}

function disableCarouselUpArrow() {
  carouselUpArrow.style.opacity = "0.5";
  carouselUpArrow.disabled = true;
}

function disableCarouselDownArrow() {
  carouselDownArrow.style.opacity = "0.5";
  carouselDownArrow.disabled = true;
}

function enableCarouselUpArrow() {
  carouselUpArrow.style.opacity = "1";
  carouselUpArrow.disabled = false;
}

function enableCarouselDownArrow() {
  carouselDownArrow.style.opacity = "1";
  carouselDownArrow.disabled = false;
}

function clearDialogStyles() {
  dialogContainer.style.opacity = 0;
  setTimeout(() => {
    dialogContainer.style.display = "none";
  }, 300);
  dialog.style.opacity = 0;
  dialog.style.scale = 0;
}

function togglingMenuStyles() {
  mainMenu.classList.toggle("toggle-menu");
  menuAnimation.classList.toggle("toggle-animation-complementation");
  mobileMenu.classList.toggle("x-menu");
}
