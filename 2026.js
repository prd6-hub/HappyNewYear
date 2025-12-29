const msg = [
  "I love you veryyy much, Darlooo ❤️",
  "Every moment with you makes my world brighter ✨",
  "No matter what comes… I choose you, alwaysss ♾️",
  "Happy New Year, my lovee 🎆",
];

const cards = document.querySelectorAll(".card");
let opened = 0;
let finalShown = false;

function haptic(card) {
  card.classList.add("tap");
  setTimeout(() => card.classList.remove("tap"), 120);
}

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    if (card.classList.contains("flipped")) return;

    haptic(card);
    card.classList.add("flipped");

    const back = card.querySelector(".card-back");
    back.innerHTML = `<p>${msg[index]}</p>`;

    opened++;
    if (opened === cards.length && !finalShown) {
      finalShown = true;
      setTimeout(showFinalMessage, 1000);
    }
  });
});

function launchFirework() {
  const colors = [
    "#FFD700","#FF69B4","#00FFFF","#1E90FF","#32CD32",
    "#FF8C00","#9370DB","#EE82EE","#DC143C","#40E0D0"
  ];

  const fw = document.createElement("div");
  fw.className = "firework";
  const color = colors[Math.floor(Math.random() * colors.length)];

  fw.style.left = Math.random() * innerWidth + "px";
  fw.style.top = Math.random() * innerHeight + "px";
  fw.style.background = color;
  fw.style.boxShadow = `0 0 10px ${color},0 0 20px ${color}`;

  document.body.appendChild(fw);
  setTimeout(() => fw.remove(), 1500);
}

function showFinalMessage() {
  const final = document.createElement("div");
  final.className = "final-message";

  final.innerHTML = `
    <h1>❤️ 2026 ❤️</h1>
    <div class="final-text">
      <p>
        Another year, with You.<br><br>

        I want to stay every New Year with you….<br>
        I want to stay with you forever and ever and everrr...<br><br>

        I don't think these wishes are going to be true.
        Maybe forever is a word meant only for dreams,
        but I'm happy that I have you now.<br><br>

        Happy??? or Lucky???<br>
        I don't know what I am.<br><br>

        And if one day this story of ours is called a mistake,
        then let it be a mistake—
        it was the most beautiful mistake my heart ever chose.<br><br>

        No matter how far life takes us,
        some part of me will always remain
        in the moment you were mine.
      </p>
    </div>
  `;

  document.body.appendChild(final);

  let count = 0;
  const interval = setInterval(() => {
    launchFirework();
    count++;
    if (count > 14) clearInterval(interval);
  }, 350);
}

