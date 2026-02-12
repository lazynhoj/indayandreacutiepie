function openEnvelope() {
  document.querySelector(".letter").style.display = "block";
  setTimeout(() => {
    window.location.href = "question.html";
  }, 2000);
}

// Moving "Di" button
const noBtn = document.getElementById("noBtn");
if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });
}
