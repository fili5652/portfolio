// Lav en variabel, der refererer til ".toggle-btn"
const btn = document.querySelector(".toggle-btn");
// Lav en variabel, der refererer til "nav"
const nav = document.querySelector(".banner nav");
// Lav en variabel, der refererer til ".luk-luk"
const luk = document.querySelector(".luk-luk");

// Lav en function, der hedder toggleMenu()
function toggleMenu() {
  nav.classList.toggle("shown");

  // 1. Toggle en klasse på nav vha. classList.toggle
  // 2. Toggle en klasse, der hedder "shown"

  // 1. Lav en variabel, der hedder menuShown
  const menuShown = nav.classList.contains("shown");
  // 2. Den skal være lig med, om nav-variablen indeholder klassen "shown" vha. classList.contains("")
  // menuShown = classList.contains("shown")

  // 1. Lav en if/else sætning => if (...) {...} else {...}
  // 2. Spørg om menu i if-sætningen => if (menu)
  if (menuShown) {
    document.querySelector(".luk-luk").classList.remove(".toggle-btn");

    // hvis nav har klassen "shown", sæt da btn.textContent til "Luk"
  } else {
    document.querySelector(".toggle-btn").classList.remove(".luk-luk");
    // hvis IKKE nav har klassen "shown", sæt da btn.textContent til "Menu"
  }
}

/* Tilføj et klik-event til btn, der sætter toggleMenu-funktionen i gang */
btn.addEventListener("click", toggleMenu);
