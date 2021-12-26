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
  )
  
];
if(!localStorage.getItem('questions')){
   localStorage.setItem('questions', JSON.stringify(questions) )
} 

class Player {
  constructor(name) {
    this.name = name;
    this.prize = 0;
    this.round = 1;
    this.finalRound = 5;
  }
}
let players = [new Player("Juan")];
if(!localStorage.getItem('players')){
  localStorage.setItem('players', JSON.stringify(players))
}

//Comenzamos definiendo unas variables globales para utilizar mas a delante
let users = getPlayer()


let activeP = users[users.length-1]
let answers = [];
let btns = [
  selectId("button_1"),
  selectId("button_2"),
  selectId("button_3"),
  selectId("button_4"),
];
let ranQ;
let selectBtn;
let validateBtn;
let totalPrize = 0;
let mayorPrize = 68500;
const swalBoot = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success m-1",
    cancelButton: "btn btn-danger m-1",
    title: "text-white",
  },
  buttonsStyling: false,
  allowEscapeKey: false,
  allowOutsideClick: false,
});
window.addEventListener('onload', log())
function log(){
  let players = getPlayer()
  Swal.fire({
    title: 'Registra tu nombre completo',
    showConfirmButton: true,
    confirmButtonText: 'Empezar',
    input: 'text',
    inputLabel: 'Tu nombre',
    inputPlaceholder: 'Nombre y Apellido',

  }).then((result)=>{
    
    let playerName = Swal.getInput().value.toUpperCase()
    selectId('player_name').outerText = playerName;
    if(result.isConfirmed){
      let newPlayer = new Player(playerName);
      players.push(newPlayer);
      data = JSON.stringify(players)
      localStorage.setItem('players', data);
     
      
      


      }
    
  })
  
}


function getPlayer(){
  let usersLs = localStorage.getItem('players');
  let users = JSON.parse(usersLs);
  return users
  
  

  
 

}

function getQ(){
  let ques = localStorage.getItem('questions');
  let quesL = JSON.parse(ques);
  
  return quesL
}


//Selector de elementos del DOM

function selectId(id) {
  return document.getElementById(id);
}
selectId("next").disabled = true;
function restart() {
  window.location.assign(`login.html`);
}
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
    swalBoot
          .fire({
            title: "FELICIDADES",
            text: `Has ganado $${activeP.prize}`,
            icon: "success",
            color: "#f00",
            background: "#8b8b55",
          }).then((result)=>{
            if(result.isConfirmed){
              restart()
            }

          })
  ;
  }
  let user = getPlayer();
  user.forEach((player) => {
    if(player.name === activeP.name){
      player.prize = activeP.prize;
      data = JSON.stringify(user);
      localStorage.setItem('players', data)

    }
  })
  
  

}
function takePrize() {
  
  swalBoot
    .fire({
      title: "Estas seguro de retirarte",
      text: "No hay vuelta atras!",
      icon: "question",
      showCancelButton: true,
      cancelButtonText: "Volver a jugar",
      confirmButtonText: "Si, deseo retirarme",
      background: "#8b8b55",
      iconColor: "#fff",
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalBoot
          .fire({
            title: "Listo, retiro exitoso!",
            text: `Has ganado $${activeP.prize}`,
            icon: "success",
            color: "#f00",
            background: "#8b8b55",
          })
          .then((result) => {
            if (result.isConfirmed) {
              restart();
            }
          });
      }
    });
}
function disableBtn(value) {
  btns.forEach((element) => {
    element.disabled = value;
  });
}
//Eleccion de pregunta al azar, según ronda/categoria
function randomQ() {
  let quesL = getQ()
  let q = quesL.filter((question) => question.level == activeP.round);
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
  activeP.prize = 0;
  Swal.fire({
    title: "Lo sentimos has perdido todo",
    text: `$${activeP.prize}`,
    showConfirmButton: true,
    confirmButtonText: "Ok",
  }).then((result) => {
    if (result.isConfirmed) {
      restart();
    }
  });
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
      selectId("next").style.display = "unset";
      selectId("next").disabled = false;
      disableBtn(true);
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
  disableBtn(false);
  updateRound();
  randomQ();
}

console.log(selectBtn);

start();
