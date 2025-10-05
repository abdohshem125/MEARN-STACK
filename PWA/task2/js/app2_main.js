let app2Prompt;
const app2Btn = document.getElementById("app2_installBtn");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  app2Prompt = e;
  app2Btn.style.display = "inline-block";
});

app2Btn.addEventListener("click", () => {
  if (app2Prompt) {
    app2Prompt.prompt();
    app2Prompt.userChoice.then((choice) => {
      if (choice.outcome === "accepted") {
        app2Btn.style.display = "none";
      }
      app2Prompt = null;
    });
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw_app2.js");
  });
}
