
// when make navigator the register fire 
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then((reg) => {
        console.log("Service Worker registered successfully");
      })
      .catch((err) => {
        console.error("Service Worker registration failed", err);
      });
  });
}
