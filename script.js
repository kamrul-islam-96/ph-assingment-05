// hearcount functionality work
const heartIcons = document.getElementsByClassName("heart-icon");

for (const heartIcon of heartIcons) {
  heartIcon.addEventListener("click", function () {
    let heartCount = parseInt(document.getElementById("heart-count").innerText);
    heartCount++;

    document.getElementById("heart-count").innerText = heartCount;
  });
}


// copy functionality work
const copyButtons = document.getElementsByClassName("copy-btn");
const numbers = document.getElementsByClassName("number");

for (i = 0; i < copyButtons.length; i++) {
  const buttons = copyButtons[i];
  const number = numbers[i].innerText;

  buttons.addEventListener("click", function () {
     navigator.clipboard.writeText(number)
     .then(()=> {
      alert(`Number copied ${number}`);
     })
     .catch((err)=> {
      alert("Failed to copy text: ", err);
     })
  });
}
