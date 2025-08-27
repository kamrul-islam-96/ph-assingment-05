// hearcount functionality work
const heartIcons = document.getElementsByClassName("heart-icon");
let heartCount = parseInt(document.getElementById("heart-count").innerText);

for (const heartIcon of heartIcons) {
  heartIcon.addEventListener("click", function () {
    heartCount++;
    document.getElementById("heart-count").innerText = heartCount;
  });
}

// copy functionality work
const copyButtons = document.getElementsByClassName("copy-btn");
const numbers = document.getElementsByClassName("number");
let copyCount = parseInt(document.getElementById("copy-count").innerText);

for (let i = 0; i < copyButtons.length; i++) {
  const buttons = copyButtons[i];
  const number = numbers[i].innerText;

  buttons.addEventListener("click", function () {
    navigator.clipboard
      .writeText(number)
      .then(() => {
        alert(`Number copied ${number}`);
      })
      .catch((err) => {
        alert("Failed to copy text: ", err);
      });

    copyCount++;
    document.getElementById("copy-count").innerText = copyCount;
  });
}

// call functionalality work
let coinCount = parseInt(document.getElementById("coin-count").innerText);
const hotlineNumber = document.getElementsByClassName("number");
const callingBtn = document.getElementsByClassName("calling-btn");
const title = document.getElementsByClassName("service-title");

for (let i = 0; i < callingBtn.length; i++) {
  const btn = callingBtn[i];
  const serviceName = title[i].innerText;
  const numbers = hotlineNumber[i].innerText;

  btn.addEventListener("click", function () {
    
    if(coinCount < 20) {
      alert('You have not enough coin to calling')
      return
    }
    
    alert(`${serviceName} ${numbers}`);

    coinCount -= 20;
    document.getElementById("coin-count").innerText = coinCount;
  });
}
