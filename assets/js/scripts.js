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
    document.querySelector(".back-to-top").style.opacity = 1;
    console.log(window.outerHeight);
  } else {
    document.querySelector(".back-to-top").style.opacity = 0;
  }
});

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
