const charRow = document.getElementById("char-row");
const inputSection = document.getElementById("inputs");
const button = document.getElementById("show-char");

const charsRaw = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 17,
    name: "Wedge Antilles",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
    homeworld: "corellia",
  },
  {
    id: 18,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 19,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: 20,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];

const chars = charsRaw.map((e) => {
  e.homeworld === undefined
    ? (e.homeworld = "other")
    : (e.homeworld = e.homeworld.toLowerCase());
  return e;
});

const homeworldsRaw = chars.map((e) => {
  return e.homeworld.toLowerCase();
});

const homesworldUnique = new Set(homeworldsRaw);
const homeworlds = [...homesworldUnique];

let filteredWorld = "";

const inputs = homeworlds.map((e) => {
  return `<div class="form-check">
    <input class="form-check-input" onchange="radioCheck(this)" type="radio" name="homeworld" id="homeworld-${e}" value="${e}" />
    <label class="form-check-label" for="${e}">${e
    .slice(0, 1)
    .toUpperCase()}${e.slice(1)}</label>
  </div>`;
});

function createCharArr(filterText = filteredWorld) {
  let charArr = [];
  if (filterText !== "") {
    charArr = chars.filter((e) => e.homeworld === filterText);
  } else {
    charArr = chars.slice();
  }
  return charArr;
}

function createCards() {
  let charArr = createCharArr();

  let cardsArr = [];

  cardsArr = charArr.map((e) => {
    return `<div class="col d-flex g-x justify-content-center">
  <div class="card mb-4" style="width: 18rem">
    <img
      src="${e.pic}"
      class="card-img-top"
      alt="${e.name}"
    />
    <div class="card-body">
      <h5 class="card-title">${e.name}</h5>
      <p class="card-text">Home World: ${
        e.homeworld === undefined
          ? "Other"
          : `${e.homeworld.slice(0, 1).toUpperCase()}${e.homeworld.slice(1)}`
      }</p>
    </div>
  </div>
</div>`;
  });
  return cardsArr;
}

function radioCheck(inputEl) {
  if (inputEl.checked) {
    filteredWorld = inputEl.value;
    let cards = [];
    cards = createCards().slice();
    updateCardsView(cards);
  } else {
    filteredWorld = "";
  }
}

function updateCardsView(cards) {
  charRow.innerHTML = "";
  for (let card of cards) {
    charRow.innerHTML += card;
  }
}

function showChars() {
  if (button.dataset.attribute == "closed") {
    charRow.innerHTML = "";
    let cards = [];
    cards = createCards().slice();
    for (let input of inputs) {
      inputSection.innerHTML += input;
    }
    updateCardsView(cards);
    button.dataset.attribute = "opened";
  } else {
    charRow.innerHTML = "";
    inputSection.innerHTML = "";
    button.dataset.attribute = "closed";
  }
}
