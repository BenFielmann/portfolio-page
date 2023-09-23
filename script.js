// Alle Abschnitte außer der ersten ausblenden
var sections = document.querySelectorAll("section");
sections.forEach(function (section, index) {
  if (index > 0) {
    section.style.opacity = "0";
  }
});

// Funktion zum Speichern des ausgewählten Abschnitts in der SessionStorage
function saveSelectedSection(selectedIndex) {
  sessionStorage.setItem("selectedSection", selectedIndex);
}

// Funktion zum Laden des ausgewählten Abschnitts aus der SessionStorage
function loadSelectedSection() {
  var selectedIndex = sessionStorage.getItem("selectedSection");
  if (selectedIndex !== null) {
    // Alle Abschnitte ausblenden
    sections.forEach(function (sec) {
      sec.style.opacity = "0";
      sec.style.zIndex = "0"; // Setze den z-index für alle Abschnitte auf 0
    });
    // Zielabschnitt anzeigen
    sections[selectedIndex].style.opacity = "1";
    sections[selectedIndex].style.zIndex = "1"; // Setze den z-index für den ausgewählten Abschnitt auf 1
  }
}

// Event-Listener für die Abschnitts-Buttons hinzufügen
for (var i = 2; i <= 6; i++) {
  var button = document.getElementById("button" + i);
  var section = document.getElementById("section" + i);
  button.addEventListener(
    "click",
    (function (targetSection, index) {
      return function () {
        // Alle Abschnitte ausblenden
        sections.forEach(function (sec) {
          sec.style.opacity = "0";
          sec.style.zIndex = "0"; // Setze den z-index für alle Abschnitte auf 0
        });
        // Zielabschnitt anzeigen
        targetSection.style.opacity = "1";
        targetSection.style.zIndex = "1"; // Setze den z-index für den ausgewählten Abschnitt auf 1
        // Aktiven Button markieren
        markActiveButton(index);
        // Ausgewählten Abschnitt in der SessionStorage speichern
        saveSelectedSection(index);
      };
    })(section, i - 1)
  ); // Index wird korrekt übergeben
}

// Home-Button-Event-Listener hinzufügen
document.getElementById("homeButton").addEventListener("click", function () {
  // Alle Abschnitte ausblenden
  sections.forEach(function (sec) {
    sec.style.opacity = "0";
    sec.style.zIndex = "0"; // Setze den z-index für alle Abschnitte auf 0
  });
  // Startabschnitt anzeigen (Section 1)
  document.getElementById("section1").style.opacity = "1";
  document.getElementById("section1").style.zIndex = "1"; // Setze den z-index für Section 1 auf 1
  // Aktiven Button markieren
  markActiveButton(0);
  // Ausgewählten Abschnitt in der SessionStorage löschen
  sessionStorage.removeItem("selectedSection");
});

// Beim Laden der Seite den ausgewählten Abschnitt aus der SessionStorage laden
loadSelectedSection();

// ____________
// // Home Section text switch

// Ein Array mit den verschiedenen Texten
var texts = [
  "Junior Web Developer",
  "Junior Web Designer",
  "PC Hard & Software Nerd",
  "Anime & Gaming fan",
];
var currentIndex = 0; // Der aktuelle Index im Array
var textSwitchElement = document.getElementById("textSwitchElement"); // Das HTML-Element, in dem der Text angezeigt wird

// Die Dauer des Breitenübergangs in Millisekunden
var widthTransitionDuration = 2000; // Ändere diesen Wert nach Bedarf (z. B. 2000 für 2 Sekunden)

function changeText() {
  var text = texts[currentIndex]; // Den nächsten Text auswählen

  // Ändere die Breite auf 100% mit der festgelegten Dauer
  textSwitchElement.style.transition = `width ${widthTransitionDuration}ms ease-in-out`;
  textSwitchElement.style.width = "100%"; // Breite auf 100% setzen (vollständig anzeigen)

  // Nach einer kurzen Verzögerung den Text einblenden
  setTimeout(function () {
    textSwitchElement.textContent = text; // Text einblenden

    // Nachdem der Text eingeblendet wurde, Breite auf 0 setzen (ausblenden)
    setTimeout(function () {
      textSwitchElement.style.transition = `width ${widthTransitionDuration}ms ease-in-out`;
      textSwitchElement.style.width = "0"; // Breite auf 0 setzen
    }, 3500); // 1 Sekunde Verzögerung nachdem der Text eingeblendet wurde
  }, 100); // 1 Sekunde Verzögerung nachdem die Breite auf 100% gesetzt wurde

  setTimeout(function () {
    currentIndex = (currentIndex + 1) % texts.length; // Zum nächsten Text wechseln (zyklisch)
    changeText(); // Nächsten Text anzeigen
  }, 6000); // 4 Sekunden Verzögerung nachdem der Text vollständig angezeigt wurde
}

// Initialen Text setzen und den Wechselprozess starten
changeText();

// ____________

// Funktion zur Markierung des aktiven Buttons
function markActiveButton(index) {
  // Alle Buttons auf den normalen Stil zurücksetzen
  var buttons = document.querySelectorAll(".side_buttons");
  buttons.forEach(function (button) {
    button.classList.remove("active_button");
  });

  // Den ausgewählten Button markieren
  buttons[index].classList.add("active_button");
}

// Impressum-Modal
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
  setTimeout(() => {
    modal.classList.add("open");
  }, 10);
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("open");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("open");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  }
});

// Credential-Modal
const open_credits_Modal_Btn = document.getElementById(
  "open_credits_Modal_Btn"
);
const close_credits_Modal_Btn = document.getElementById(
  "close_credits_Modal_Btn"
);
const credits_modal = document.getElementById("credits_modal");

open_credits_Modal_Btn.addEventListener("click", () => {
  credits_modal.style.display = "block";
  setTimeout(() => {
    credits_modal.classList.add("open");
  }, 10);
});

close_credits_Modal_Btn.addEventListener("click", () => {
  credits_modal.classList.remove("open");
  setTimeout(() => {
    credits_modal.style.display = "none";
  }, 300);
});

credits_modal.addEventListener("click", (event) => {
  if (event.target === credits_modal) {
    credits_modal.classList.remove("open");
    setTimeout(() => {
      credits_modal.style.display = "none";
    }, 300);
  }
});
