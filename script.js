const book = document.getElementById("book");

students.forEach((student, index) => {
  const page = document.createElement("div");
  page.classList.add("page");

  page.innerHTML = `
    <div class="photo">
      <img src="${student.photo}">
    </div>
    <div class="name">${student.name}</div>
    <div class="funfact">${student.funfact}</div>
  `;

  book.appendChild(page);
});


/* FLIPBOOK INIT */
const pageFlip = new St.PageFlip(book, {
  width: 400,
  height: 500,
  showCover: true
});

pageFlip.loadFromHTML(document.querySelectorAll(".page"));


/* ANIMASI INTRO */
const intro = document.getElementById("intro");

intro.addEventListener("click", () => {
  intro.classList.add("hide");
});


/* AUDIO */
const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

let isPlaying = false;

btn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    btn.innerText = "🎵";
  } else {
    music.play();
    btn.innerText = "⏸";
  }
  isPlaying = !isPlaying;
});


/* CURSOR LUCU */
document.addEventListener("mousemove", (e) => {
  const star = document.createElement("div");
  star.className = "sparkle";
  star.style.left = e.pageX + "px";
  star.style.top = e.pageY + "px";

  document.body.appendChild(star);

  setTimeout(() => star.remove(), 500);
});