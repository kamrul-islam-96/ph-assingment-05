// hearcount functionality work
const heartIcons = document.getElementsByClassName("heart-icon");

for (const heartIcon of heartIcons) {
  heartIcon.addEventListener("click", function () {
    let heartCount = parseInt(document.getElementById("heart-count").innerText);
    heartCount++;

    document.getElementById("heart-count").innerText = heartCount;
  });
}
