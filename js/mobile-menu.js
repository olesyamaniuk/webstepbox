document.addEventListener("DOMContentLoaded", () => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const navListRef = document.querySelector(".class-navigation-list");
  const headerRef = document.querySelector(".class-header");
  const navigationRef = document.querySelector(".class-navigation");

  menuBtnRef.addEventListener("click", () => {
    menuBtnRef.classList.toggle("is-open");
    navListRef.classList.toggle("is-open");
    headerRef.classList.toggle("is-open");
    navigationRef.classList.toggle("is-open");
  });

  document.querySelectorAll(".class-navigation-link").forEach((n) =>
    n.addEventListener("click", () => {
      navListRef.classList.remove("is-open");
      menuBtnRef.classList.remove("is-open");
      headerRef.classList.remove("is-open");
      navigationRef.classList.remove("is-open");
    })
  );
});

function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const buttonImg = element.querySelector(".class-toggle-button img");

  answer.classList.toggle("open");

  if (answer.classList.contains("open")) {
    buttonImg.src = "/img/Minus.png";
    buttonImg.classList.add("rotated");
  } else {
    buttonImg.src = "/img/Add.png";
    buttonImg.classList.remove("rotated");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("cookie-popup");
  const acceptButton = document.getElementById("accept-cookies");
  const declineButton = document.getElementById("decline-cookies");

  if (!localStorage.getItem("cookiesAccepted")) {
    popup.style.display = "block";
  }

  acceptButton.onclick = function () {
    localStorage.setItem("cookiesAccepted", "true");
    popup.style.display = "none";
  };

  declineButton.onclick = function () {
    localStorage.setItem("cookiesAccepted", "false");
    popup.style.display = "none";
  };
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const popup = document.getElementById("success-popup");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch("form.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network error");
        return response.text();
      })
      .then(() => {
        form.reset();
        popup.classList.remove("hidden");
        popup.classList.add("show");

        setTimeout(() => {
          popup.classList.remove("show");
          popup.classList.add("hidden");
        }, 3000);
      })
      .catch((error) => {
        console.error("Form error:", error);
      });
  });
});
