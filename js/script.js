  var button = document.querySelector(".site-button");
  var popup = document.querySelector(".popup-feedback");

  var close = popup.querySelector(".popup-close");

  var form = document.querySelector(".authorization-form2");
  var login = popup.querySelector("[name=feedback-name]");
  var email = popup.querySelector("[name=email]");

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

    if (storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!login.value || !email.value) {
      evt.preventDefault();
      console.log("Нужно ввести имя и почту");
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
