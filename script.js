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
    });
    // Zielabschnitt anzeigen
    sections[selectedIndex].style.opacity = "1";
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
        });
        // Zielabschnitt anzeigen
        targetSection.style.opacity = "1";
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
  });
  // Startabschnitt anzeigen (Section 1)
  document.getElementById("section1").style.opacity = "1";
  // Aktiven Button markieren
  markActiveButton(0);
  // Ausgewählten Abschnitt in der SessionStorage löschen
  sessionStorage.removeItem("selectedSection");
});

// Beim Laden der Seite den ausgewählten Abschnitt aus der SessionStorage laden
loadSelectedSection();

// Funktion zur Markierung des aktiven Buttons
function markActiveButton(index) {
  // Alle Buttons auf den normalen Stil zurücksetzen
  var buttons = document.querySelectorAll(".side_buttons");
  buttons.forEach(function (button) {
    button.classList.remove("active-button");
  });

  // Den ausgewählten Button markieren
  buttons[index].classList.add("active-button");
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
