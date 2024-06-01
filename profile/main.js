let switchBtn = document.querySelector(".switch-btn");
let whiteBall = document.querySelector(".white-ball");
switchBtn.addEventListener("click", () => {
    if (whiteBall.classList.contains("dark")) {
      whiteBall.classList.remove("dark");
      whiteBall.classList.add("light");
      document.body.classList.add("light-mode");
    } else {
      whiteBall.classList.add("dark");
      whiteBall.classList.remove("light");
      document.body.classList.remove("light-mode");
    }
})