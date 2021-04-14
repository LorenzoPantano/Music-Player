const luglio = document.getElementById("luglio");

const playIcon = document.getElementById("play");
const puaseIcon = document.getElementById("pause");

document.body.addEventListener("click", () => {
  if (playIcon.classList.contains("active")) {
    // In pause -> Play
    playIcon.classList.remove("active");
    playIcon.classList.add("inactive");

    puaseIcon.classList.remove("inactive");
    puaseIcon.classList.add("active");

    luglio.play();
  } else {
    // In play -> Pause
    playIcon.classList.remove("inactive");
    playIcon.classList.add("active");

    puaseIcon.classList.remove("active");
    puaseIcon.classList.add("inactive");
    luglio.pause();
  }

  console.log(playIcon.classList);
  console.log(puaseIcon.classList);
});
