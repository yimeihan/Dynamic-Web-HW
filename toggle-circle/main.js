function changeBg() {
  const changeColor = document.querySelector(".change-color");
  changeColor.style.height = "100%";
  changeColor.style.width = "100%";
  if (changeColor.style.backgroundColor === "yellow") {
    changeColor.style.backgroundColor = "green";
  } else {
    changeColor.style.backgroundColor = "yellow";
  }
}





function clearBg() {
  window.location.reload();
}

const btnChange = document.querySelector(".btn-change");

btnChange.addEventListener("click", changeBg);

const btnClear = document.querySelector(".btn-clear");

btnClear.addEventListener("click", clearBg);