
  var button = document.querySelector(".site-button");
  var feedback = document.querySelector(".popup-feedback");

  var popup = document.querySelector(".popup-overlay");
  var close = popup.querySelector(".popup-close");

  var form = document.querySelector(".authorization-form");
  var login = popup.querySelector("[name=login]");
  var password = popup.querySelector("[name=password]");

  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.add("modal-show");
    popup.classList.add("modal-show");

    if (storage) {
      login.value = storage;
      password.focus();
    } else {
      login.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.remove("modal-show");
    popup.classList.remove("modal-show");
  });

  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!login.value || !password.value) {
      evt.preventDefault();
      console.log("Нужно ввести логин и пароль");
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
    });
