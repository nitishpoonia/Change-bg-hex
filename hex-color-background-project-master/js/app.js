// jshint esversion: 6
onload();
function onload() {
  const button = document.getElementById("btn");
  const body = document.body;
  const hexValue = document.getElementById("hex-value");
  button.addEventListener("click", addColor);

  function addColor() {
      const hexColor = Math.floor(Math.random() * 16777215).toString(16);
      body.style.backgroundColor = "#" + hexColor;
      hexValue.innerHTML = "#" + hexColor;
  }
}
