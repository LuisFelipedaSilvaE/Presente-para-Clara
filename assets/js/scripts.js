document.querySelector("div#mobile-menu").addEventListener("click", () => {
  if (document.querySelector(".dialog-container") !== null) {
    document.querySelector(".dialog-container").style.display = "none";
  }
});

document.querySelector("h1#logo").addEventListener("click", () => {
  document.querySelector("aside.menu").classList.toggle("toggle-menu");
  document.querySelector("div#mobile-menu").classList.toggle("x-menu");
  document.querySelector("div#mobile-menu").classList.toggle("hamburguer-menu");
  if (document.querySelector(".dialog-container") !== null) {
    document.querySelector(".dialog-container").style.display = "none";
  }
});

document.querySelector("ul#navigation").addEventListener("click", () => {
  document.querySelector("aside.menu").classList.toggle("toggle-menu");
  document.querySelector("div#mobile-menu").classList.toggle("x-menu");
  document.querySelector("div#mobile-menu").classList.toggle("hamburguer-menu");
  if (document.querySelector(".dialog-container") !== null) {
    document.querySelector(".dialog-container").style.display = "none";
  }
});

document.querySelector("div.close-menu").addEventListener("click", () => {
  document.querySelector("aside.menu").classList.toggle("toggle-menu");
  document.querySelector("div#mobile-menu").classList.toggle("hamburguer-menu");
  document.querySelector("div#mobile-menu").classList.toggle("x-menu");
});

document.querySelector("#close-dialog").addEventListener("click", () => {
  document.querySelector(".dialog-container").style.opacity = 0;
  setTimeout(() => {
    document.querySelector(".dialog-container").style.display = "none";
  }, 300);
  document.querySelector(".dialog").style.scale = 0;
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

    document.querySelector(".dialog-container").style.color =
      dialogColors[index];
    document.querySelector(".dialog-container").style.display = "flex";
    document.querySelector(".dialog-container").style.opacity = 100;
    document.querySelector(".dialog-container").style.scale = 1;

    document.querySelector(".dialog").style.display = "flex";
    document.querySelector(".dialog").style.opacity = 100;
    document.querySelector(".dialog").style.scale = 1;

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
