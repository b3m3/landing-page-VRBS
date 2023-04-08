const subscribe = () => {
  const btn = document.querySelector('.contact__btn');

  // SUBMIT

  const handleSubmit = event => {
    const btnText = document.querySelector('.contact__btn span');
    const input = document.querySelector('.contact__input');
    const icon = document.querySelector('.contact__btn img');

    event.preventDefault();

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.value.match(validRegex)) {
      icon.style.animation = "air 1s linear";
      input.value = "";
      btnText.textContent = "👍"

      setTimeout(() => {
        icon.style.animation = ""
        btnText.textContent = "Subscribe"
      }, 1000);
    } else {
      input.style.animation = "shake .6s linear infinite";

      setTimeout(() => input.style.animation = "", 500);
    }
  };

  btn.addEventListener("click", handleSubmit);
};

export default subscribe;