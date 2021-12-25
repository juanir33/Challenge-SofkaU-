//CONCURSO DE PREGUNTAS Y RESPUESTAS 

//Genero una fakeBD de preguntas y jugadores. Para luego guardar en localStorage y desde alli obtener info


class Question {
  constructor(
    level,
    category,
    question,
    answer,
    falseA,
    falseB,
    falseC,
    prize
  ) {
    this.level = level;
    this.category = category;
    this.question = question;
    this.answer = answer;
    this.falseA = falseA;
    this.falseB = falseB;
    this.falseC = falseC;
    this.prize = prize;
  }
}

const questions = [
  new Question(
    1,
    "Geografia",
    "¿Qué país está entre Perú y Colombia?",
    "Ecuador",
    "Brasil",
    "Guyana",
    "Panama",
    1000
  ),
  new Question(
    1,
    "Geografia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa",
    1000
  ),
  new Question(
    1,
    "Geografia",
    "¿En qué continente se encuentra Australia?",
    "Oceania",
    "America del Sur",
    "Asia",
    "Europa",
    1000
  ),
  new Question(
    1,
    "Geografia",
    "¿En qué país se encuentra el pico Aconcagua?",
    "Argentina",
    "Brasil",
    "Canada",
    "Suiza",
    1000
  ),
  new Question(
    1,
    "Geografia",
    "¿Cuál es el idioma más hablado en Suiza?",
    "Aleman",
    "Japones",
    "Arabe",
    "Ingles",
    1000
  ),
  new Question(
    2,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa",
    2500
  ),
  new Question(
    2,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa",
    2500
  ),
  new Question(
    2,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa",
    2500
  ),
  new Question(
    2,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa",
    2500
  ),
  new Question(
    2,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa",
    2500
  ),
  new Question(
    3,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa",
    5000
  ),
  new Question(
    3,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa",
    5000
  ),
  new Question(
    3,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa",
    5000
  ),
  new Question(
    3,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa",
    5000
  ),
  new Question(
    3,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa",
    5000
  ),
  new Question(
    4,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa",
    10000
  ),
  new Question(
    4,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa",
    10000
  ),
  new Question(
    4,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa",
    10000
  ),
  new Question(
    4,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa",
    10000
  ),
  new Question(
    4,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa",
    10000
  ),
  new Question(
    5,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa",
    50000
  ),
  new Question(
    5,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa",
    50000
  ),
  new Question(
    5,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa",
    50000
  ),
  new Question(
    5,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa",
    50000
  ),
  new Question(
    5,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa",
    50000
  ),
  ,
];

class Player {
  constructor(name) {
    this.name = name;
    this.prize = 0;
    this.round = 1;
    this.finalRound = 5;
  }
}

//Comenzamos definiendo unas variables globales para utilizar mas a delante
let players = [new Player("Juan")];
let activeP = players[0];

let answers = [];
let btns = [];
let ranQ;
let selectBtn;
let validateBtn;
let totalPrize = 0;
let mayorPrize = 68500;

//Selector de elementos del DOM

function selectId(id) {
  return document.getElementById(id);
}
selectId("next").disabled = true;

//Actualizamos rondas y premios 
function updateRound() {
  activeP.round;
  selectId("player_round").innerHTML = `${activeP.round}`;
  return activeP.round;
}
function updatePrize() {
  let actual = selectId("player_prize").outerText;
  let accumu = Number(actual) + ranQ.prize;

  selectId("player_prize").innerText = accumu;
  console.log(activeP.prize);
  activeP.prize = Number(accumu);
  if (activeP.prize == mayorPrize) {
    selectId("game_container").innerHTML = `<h1>You win </h1>
  `;
  }
}
//Eleccion de pregunta al azar, según ronda/categoria
function randomQ() {
  let q = questions.filter((question) => question.level == activeP.round);
  ranQ = q[Math.floor(Math.random() * q.length)];
  console.log(ranQ);
  answers = [ranQ.answer, ranQ.falseA, ranQ.falseB, ranQ.falseC];
  answers.sort(() => Math.random() - 0.5);

  selectId("category").innerHTML = `${ranQ.category}`;
  selectId("question").innerHTML = `${ranQ.question}`;
  selectId("button_2").innerHTML = answers[0];
  selectId("button_1").innerHTML = answers[1];
  selectId("button_3").innerHTML = answers[2];
  selectId("button_4").innerHTML = answers[3];
}
//Iniciar primera ronda 
function start() {
  updateRound();
  selectId("player_name").innerHTML = `${activeP.name}`;
  selectId("player_prize").innerHTML = `0`;
  randomQ();
}
function gameOver() {
  alert("lo sentimos has perdido todo");
}
//En esta funcione generamos la validacion de la pregunta elegida por el jugador 
//Otorga premio y habilita siguiente, o termina el juego  
function playerSelect(event) {
  selectBtn = { value: event.target.outerText, id: event.target.id };

  if (selectBtn.value === ranQ.answer) {
    selectId(selectBtn.id).classList.add("correct");
    setTimeout(() => {
      selectId(selectBtn.id).classList.remove("correct");
      updatePrize();

      selectId("next").disabled = false;
    }, 2000);
  } else {
    selectId(selectBtn.id).classList.add("error");
    gameOver();
  }
}
//Siguiente pregunta 
function nextRound() {
  selectId("next").disabled = true;
  activeP.round++;

  updateRound();
  randomQ();
}

console.log(selectBtn);

start();