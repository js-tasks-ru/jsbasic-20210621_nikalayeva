function toggleText() {
  let button = document.querySelector(".toggle-text-button");
  let text = document.querySelector("#text");
  button.onclick = () => {
    if (text.hidden) {
      text.removeAttribute("hidden");
    } else {
      text.setAttribute("hidden", "true");
    }
  };
}
