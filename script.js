let scor = 0;
let indexCurent = 0;
let raspunsDat = false;

const butonStart = document.getElementById("start");
const zonaScor = document.getElementById("scor");
const zonaIntrebare = document.getElementById("intrebare");
const zonaRaspunsuri = document.getElementById("raspunsuri");
const zonaMesaj = document.getElementById("mesaj");

const intrebari = [
  {
    text: "Care dintre următoarele variante este cea mai potrivită pentru o gustare echilibrată?",
    variante: ["Fruct + iaurt", "Burger", "Cartofi prăjiți"],
    corect: 0
  },
  {
    text: "Câte ore de somn sunt recomandate, în general, pentru un adolescent?",
    variante: ["5 ore", "8 ore", "11 ore"],
    corect: 1
  },
  {
    text: "Ce gustare este mai potrivită înainte de activitate fizică?",
    variante: ["Fruct + iaurt", "Chipsuri", "Bomboane"],
    corect: 0
  },
  {
    text: "Care dintre următoarele variante este cea mai potrivită pentru hidratarea zilnică?",
    variante: ["1 L", "5 L", "Aproximativ 2 L"],
    corect: 2
  }
];

butonStart.addEventListener("click", function () {
  scor = 0;
  indexCurent = 0;
  zonaScor.textContent = "⭐ Scor: 0";
  butonStart.style.display = "none";

  afiseazaIntrebare();
});

function afiseazaIntrebare() {
  const intrebare = intrebari[indexCurent];

  raspunsDat = false;
  zonaRaspunsuri.innerHTML = "";
  zonaMesaj.textContent = "";

  zonaIntrebare.textContent =
    "Întrebarea " +
    (indexCurent + 1) +
    " din " +
    intrebari.length +
    ": " +
    intrebare.text;

  for (let i = 0; i < intrebare.variante.length; i++) {
    const buton = document.createElement("button");

    buton.textContent = intrebare.variante[i];

    buton.addEventListener("click", function () {
      verifica(i);
    });

    zonaRaspunsuri.appendChild(buton);
  }
}

function verifica(alegere) {
  if (raspunsDat) return;

  raspunsDat = true;

  const intrebare = intrebari[indexCurent];

  if (alegere === intrebare.corect) {
    scor = scor + 10;
    zonaMesaj.textContent = "Corect! +10 puncte";
  } else {
    zonaMesaj.textContent =
      "Nu chiar. Răspunsul corect era: " +
      intrebare.variante[intrebare.corect];
  }

  zonaScor.textContent = "⭐ Scor: " + scor;

  for (const buton of zonaRaspunsuri.children) {
    buton.disabled = true;
  }

  setTimeout(function () {
    indexCurent = indexCurent + 1;

    if (indexCurent < intrebari.length) {
      afiseazaIntrebare();
    } else {
      afiseazaFinal();
    }
  }, 1500);
}

function afiseazaFinal() {
  zonaRaspunsuri.innerHTML = "";
  zonaIntrebare.textContent =
    "Quiz terminat! Scor final: " + scor + " din 40";

  zonaMesaj.textContent = "Felicitări! Ai terminat quizul.";

  butonStart.textContent = "Joacă din nou";
  butonStart.style.display = "inline-block";
}