const msg = [
  "I love you veryyy much, Darlooo ❤️",
  "Every moment with you makes my world brighter ✨",
  "No matter what comes… I choose you, alwaysss ♾️",
  "Happy New Year, my lovee 🎆",
];

const cards = document.querySelectorAll(".card");
let opened = 0;
let finalShown = false;

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    card.innerText = msg[index];
    card.style.background = "#d83d3d";
    card.style.transform = "scale(1.1)";
    card.style.pointerEvents = "none";

    opened++;

    if (opened === cards.length && !finalShown) {
      finalShown = true;
      setTimeout(showFinalMessage, 800);
    }
  });
});

function launchFirework() {
  const colors = [
    "#FFD700", // gold
    "#FF69B4", // hot pink
    "#FF1493", // deep pink
    "#00FFFF", // cyan
    "#1E90FF", // dodger blue
    "#7FFFD4", // aquamarine
    "#ADFF2F", // green yellow
    "#32CD32", // lime green
    "#00FA9A", // medium spring green
    "#ff9900ff", // orange red
    "#FF8C00", // dark orange
    "#FFA500", // orange
    "#9370DB", // medium purple
    "#8A2BE2", // blue violet
    "#EE82EE", // violet
    "#ff0000ff", // tomato
    "#DC143C", // crimson
    "#00BFFF", // deep sky blue
    "#F08080", // light coral
    "#40E0D0", // turquoise
  ];

  const fw = document.createElement("div");
  fw.className = "firework";

  const color = colors[Math.floor(Math.random() * colors.length)];

  fw.style.left = Math.random() * window.innerWidth + "px";
  fw.style.top = Math.random() * window.innerHeight + "px";
  fw.style.background = color;
  fw.style.boxShadow = `
    0 0 10px ${color},
    0 0 20px ${color},
    0 0 30px ${color}
  `;

  document.body.appendChild(fw);

  setTimeout(() => {
    fw.remove();
  }, 1500);
}

function showFinalMessage() {
  const final = document.createElement("div");
  final.className = "final-message";
  final.innerHTML = `
    <h1>❤️ 2026 ❤️</h1>
    <p>Another year, with You.<br>
    I want to stay every New Year with you….
    I want to stay with you forever and ever and everrr...
    I don't think this wishes are going to be true, Maybe forever is a word meant only for dreams,but I'm happy that I have you now. 
    Happy??? or Lucky???
    I don't know what I am, And if one day this story of ours is called a mistake,
then let it be mistake—
it was the most beautiful mistake
my heart ever chose.No matter how far life takes us,
some part of me will always remain
in the moment you were mine.
    </p>
  `;
  document.body.appendChild(final);

  launchFirework();
  launchFirework();
  launchFirework();

  setInterval(launchFirework, 600);
}
