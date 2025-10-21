const dialogContainer = document.querySelector(".dialog-container");
const dialog = document.querySelector(".dialog");
const mobileMenu = document.querySelector("#mobile-menu");

function clearDialogStyles() {
  dialogContainer.style.display = "none";
  dialog.style.opacity = 0;
  dialog.style.scale = 0;
}

mobileMenu.addEventListener("click", () => {
  document.querySelector("aside.menu").classList.toggle("toggle-menu");
  mobileMenu.classList.toggle("x-menu");

  clearDialogStyles();
});

document.querySelector("h1#logo").addEventListener("click", () => {
  document.querySelector("aside.menu").classList.toggle("toggle-menu");
  mobileMenu.classList.toggle("x-menu");

  clearDialogStyles();
});

document.querySelector("ul#navigation").addEventListener("click", () => {
  document.querySelector("aside.menu").classList.toggle("toggle-menu");
  mobileMenu.classList.toggle("x-menu");

  clearDialogStyles();
});

document.querySelector("#close-dialog").addEventListener("click", () => {
  dialogContainer.style.opacity = 0;
  setTimeout(() => {
    dialogContainer.style.display = "none";
  }, 300);
  dialog.style.opacity = 0;
  dialog.style.scale = 0;
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
