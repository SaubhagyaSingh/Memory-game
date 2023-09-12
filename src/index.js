const card_arr = [
  {
    name: "vishy",
    img: "assets/vishy.jpeg",
  },
  {
    name: "fabi",
    img: "assets/fabi.jpeg",
  },
  {
    name: "hikaru",
    img: "assets/hikaru.jpeg",
  },
  {
    name: "levy",
    img: "assets/levy.jpeg",
  },
  {
    name: "magnus",
    img: "assets/magnus.jpeg",
  },
  {
    name: "vd",
    img: "assets/vd.jpeg",
  },
  {
    name: "vishy",
    img: "assets/vishy.jpeg",
  },
  {
    name: "fabi",
    img: "assets/fabi.jpeg",
  },
  {
    name: "hikaru",
    img: "assets/hikaru.jpeg",
  },
  {
    name: "levy",
    img: "assets/levy.jpeg",
  },
  {
    name: "magnus",
    img: "assets/magnus.jpeg",
  },
  {
    name: "vd",
    img: "assets/vd.jpeg",
  },
];

card_arr.sort(() => 0.5 - Math.random());

console.log(card_arr);

const grid = document.getElementById("mygrid");
let cardsChosen = [];
let cardsChosenIds = [];
let cardswon = [];

function create_board() {
  for (let i = 0; i < 12; i++) {
    const tile = document.createElement("img");
    tile.setAttribute("src", "assets/bg.jpeg");
    tile.setAttribute("data-id", i);
    tile.setAttribute("class", "tiled");
    tile.addEventListener("click", flipcard);

    grid.appendChild(tile);
    console.log(tile);
  }
}

function checkMatch() {
  const cards = document.querySelectorAll("img");
  let card1 = cardsChosenIds[0];
  let card2 = cardsChosenIds[1];

  if (card1 === card2) {
    alert("You have clicked the same card twice");

    cards[card1].setAttribute("src", "assets/bg.jpeg");
    cards[card2].setAttribute("src", "assets/bg.jpeg");
  } else if (cardsChosen[0] === cardsChosen[1]) {
    alert("Match Found!");
    cards[card1].setAttribute("src", "assets/done.jpeg");
    cards[card2].setAttribute("src", "assets/done.jpeg");
    cards[card1].removeEventListener("click", flipcard);
    cards[card2].removeEventListener("click", flipcard);
    cardswon.push(cardsChosen);
  } else {
    cards[card1].setAttribute("src", "assets/bg.jpeg");
    cards[card2].setAttribute("src", "assets/bg.jpeg");
  }
  cardsChosen = [];
  cardsChosenIds = [];
  if (cardswon.length === 6) {
    const title = document.getElementById("title");
    title.innerHTML = "Congratulations! You completed the Puzzle";
  }
}

function flipcard() {
  let cardId = this.getAttribute("data-id");
  let path = card_arr[cardId].img;
  cardsChosen.push(card_arr[cardId].img);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", path);

  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

create_board();
