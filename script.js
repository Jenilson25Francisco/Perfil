function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light2.png")
    img.setAttribute("alt", "fotografia de jenilson francisco tirando uma selfie e tem uma camisa preta")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "fotografia de Jenilson Francisco tirando uma selfie"
    )
  }
}
