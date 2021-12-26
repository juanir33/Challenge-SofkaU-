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
    prize,
    image
  ) {
    this.level = level;
    this.category = category;
    this.question = question;
    this.answer = answer;
    this.falseA = falseA;
    this.falseB = falseB;
    this.falseC = falseC;
    this.prize = prize;
    this.image = image;

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
    1000,
    './assets/img/download.jpeg'
  ),
  new Question(
    1,
    "Geografia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa",
    1000,
    './assets/img/download.jpeg'
  ),
  new Question(
    1,
    "Geografia",
    "¿En qué continente se encuentra Australia?",
    "Oceania",
    "America del Sur",
    "Asia",
    "Europa",
    1000,
    './assets/img/download.jpeg'
  ),
  new Question(
    1,
    "Geografia",
    "¿En qué país se encuentra el pico Aconcagua?",
    "Argentina",
    "Brasil",
    "Canada",
    "Suiza",
    1000,
    './assets/img/download.jpeg'
  ),
  new Question(
    1,
    "Geografia",
    "¿Cuál es el idioma más hablado en Suiza?",
    "Aleman",
    "Japones",
    "Arabe",
    "Ingles",
    1000,
    './assets/img/download.jpeg'
  ),
  new Question(
    2,
    "Historia",
    "¿En qué año el hombre pisó la Luna por primera vez?",
    "1969",
    "1967",
    "1996",
    "1869",
    2500,
    './assets/img/historia.jpg'
  ),
  new Question(
    2,
    "Historia",
    "¿Cuánto duró la Guerra de los Cien Años?",
    "116",
    "98",
    "100",
    "112",
    2500,
    './assets/img/historia.jpg'
  ),
  new Question(
    2,
    "Historia",
    "¿Quiénes fueron, según la leyenda, los dos hermanos fundadores de la ciudad de Roma?",
    "Romulo y Remo",
    "Romualdo y Renaldo",
    "Marco y Aurelio",
    "Juan y Maximo",
    2500,
    './assets/img/historia.jpg'
  ),
  new Question(
    2,
    "Historia",
    "¿Para qué religión es especialmente importante el rey Haile Selassie I?",
    "Rastafari",
    "Budismo",
    "Judia",
    "Protestante",
    2500,
    './assets/img/historia.jpg'
  ),
  new Question(
    2,
    "Historia",
    "¿Cómo se apellidaban los dos exploradores que dieron la primera vuelta al mundo?",
    "Magallanes-Elcano",
    "Colon-Hernandez",
    "Polo-Khan",
    "Cortez-Colon",
    2500,
    './assets/img/historia.jpg'
  ),
  new Question(
    3,
    "Entretenimiento",
    "¿A quién interpretaba John Travolta en “Grease”?",
    "Danny Zuko",
    "Samuel Zuko",
    "Doody",
    "Sonny",
    5000,
    './assets/img/entretenimiento.jpeg'
  ),
  new Question(
    3,
    "Entretenimiento",
    "¿Qué conocido cómico imitó a Hitler en la película “El Gran Dictador”?",
    "Charles Chaplin",
    "MrBean",
    "Steve Martin",
    "Bill Murray",
    5000,
    './assets/img/entretenimiento.jpeg'
  ),
  new Question(
    3,
    "Entretenimiento",
    "¿Cómo se llama la ciudad donde se encuentra el Mago de Oz?",
    "Esmeralda",
    "Ruby",
    "Esperada",
    "Jade",
    5000,
    './assets/img/entretenimiento.jpeg'
  ),
  new Question(
    3,
    "Entretenimiento",
    "¿Cómo se llama el protagonista de la serie de cómics The Sandman, de Neil Gaiman?",
    "Morfeo",
    "Lucifer",
    "Sandman",
    "Hector Hall",
    5000,
    './assets/img/entretenimiento.jpeg'
  ),
  new Question(
    3,
    "Entretenimiento",
    "¿En qué país transcurre la acción de la película 'Chappie'?",
    "Sudafrica",
    "Irlanda",
    "Alemania",
    "Sudan",
    5000,
    './assets/img/entretenimiento.jpeg'
  ),
  new Question(
    4,
    "Arte y Literatura",
    "¿Quién escribió “La colmena”?",
    "Camilo José Cela",
    "Mario Benedetti",
    "Gabriel García Márquez",
    "Pablo Neruda",
    10000,
    './assets/img/arte.jpg'
  ),
  new Question(
    4,
    "Arte y Literatura",
    "¿Qué animal mitológico da nombre a uno de los libros más conocidos de Thomas Hobbes?",
    "Leviatán",
    "Quimera",
    "Toro de Creta",
    "Basilisco",
    10000,
    './assets/img/arte.jpg'
  ),
  new Question(
    4,
    "Arte y Literatura",
    "¿Cómo se llama el pintor noruego autor de la obra “El Grito”?",
    "Edvard Munch",
    "Erik Werenskiold",
    "Harald Sohlber",
    "Ragnhild Kaarbø",
    10000,
    './assets/img/arte.jpg'
  ),
  new Question(
    4,
    "Arte y Literatura",
    "¿Qué pianista y cantante de jazz compuso un álbum titulado “Glad Rag Doll”?",
    "Diana Krall",
    "Carla Bley",
    "Erroll Garner",
    "Bud Powell",
    10000,
    './assets/img/arte.jpg'
  ),
  new Question(
    4,
    "Arte y Literatura",
    "¿Qué pintor hizo el cuadro llamado “La joven de la perla”?",
    "Johannes Vermeer",
    "Gustav Klimt",
    "El Greco",
    "Alberto Durero",
    10000,
    './assets/img/arte.jpg'
  ),
  new Question(
    5,
    "Ciencia y Naturaleza",
    "¿Qué especie de árbol de uso frecuente en la llamada medicina tradicional china es un ejemplo de fósil viviente por sus antiquísimos orígenes?",
    "Gingko biloba",
    "Cupressus chengiana",
    "Nageia nagi",
    "Picea brachytyla",
    50000,
    './assets/img/ciencia.jpg'
  ),
  new Question(
    5,
    "Ciencia y Naturaleza",
    "¿Cuáles son las bases nitrogenadas del ADN?",
    "guanina, adenina, timina y citosina.",
    "citosina, uracilo y timina",
    "adenosina, flavina, riboflavina, citosina",
    "guanodina, timidina, citisina",
    50000,
    './assets/img/ciencia.jpg'
  ),
  new Question(
    5,
    "Ciencia y Naturaleza",
    "¿En qué archipiélago vive la única especie de cormorán que no es capaz de volar?",
    "Islas Galápagos",
    "Islas Paracelso",
    "Archipiélago de Hochelaga",
    "Archipiélago de Mergui",
    50000,
    './assets/img/ciencia.jpg'
  ),
  new Question(
    5,
    "Ciencia y Naturaleza",
    "¿Con qué denominación se conoce la línea dibujada por las estrellas Alnitak, Alnilam y Mintaka vistas desde nuestro planeta",
    "Orión",
    "Osa Mayor",
    "Cygnus",
    "Pegaso",
    50000,
    './assets/img/ciencia.jpg'
  ),
  new Question(
    5,
    "Ciencia y Naturaleza",
    "¿Cómo se llama el tipo de célula nerviosa más abundante en el cerebro humano?",
    "Gliales",
    "Neuronas",
    "Dendritas",
    "Astrositas",
    50000,
    './assets/img/ciencia.jpg'
  ),
];
if (!localStorage.getItem("questions")) {
  localStorage.setItem("questions", JSON.stringify(questions));
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
if (!localStorage.getItem("players")) {
  localStorage.setItem("players", JSON.stringify(players));
}

//Comenzamos definiendo unas variables globales para utilizar mas a delante
let users = getPlayer();

let activeP = {};
console.log(activeP);
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
window.location.addEventListener("onload", log());
function log() {
  let players = getPlayer();
  Swal.fire({
    title: "Registra tu nombre completo",
    showConfirmButton: true,
    confirmButtonText: "Empezar",
    input: "text",
    inputLabel: "Tu nombre",
    inputPlaceholder: "Nombre y Apellido",
  }).then((result) => {
    let playerName = Swal.getInput().value.toUpperCase();

    if (result.isConfirmed) {
      let newPlayer = new Player(playerName);
      players.push(newPlayer);
      data = JSON.stringify(players);
      localStorage.setItem("players", data);
      start();
    }
  });
}

function getPlayer() {
  let usersLs = localStorage.getItem("players");
  let users = JSON.parse(usersLs);
  return users;
}

function getQ() {
  let ques = localStorage.getItem("questions");
  let quesL = JSON.parse(ques);

  return quesL;
}

//Selector de elementos del DOM

function selectId(id) {
  return document.getElementById(id);
}
selectId("next").disabled = true;
function restart() {
  window.location.reload();
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
      })
      .then((result) => {
        if (result.isConfirmed) {
          restart();
        }
      });
  }
  let user = getPlayer();
  user.forEach((player) => {
    if (player.name == activeP.name) {
      player.prize = activeP.prize;
      data = JSON.stringify(user);
      localStorage.setItem("players", data);
    }
    console.log(activeP.name);
  });
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
  let quesL = getQ();
  let q = quesL.filter((question) => question.level == activeP.round);
  ranQ = q[Math.floor(Math.random() * q.length)];
  console.log(ranQ);
  answers = [ranQ.answer, ranQ.falseA, ranQ.falseB, ranQ.falseC];
  answers.sort(() => Math.random() - 0.5);

  selectId('image').setAttribute('src', ranQ.image)
  selectId("category").innerHTML = `${ranQ.category}`;
  selectId("question").innerHTML = `${ranQ.question}`;
  selectId("button_2").innerHTML = answers[0];
  selectId("button_1").innerHTML = answers[1];
  selectId("button_3").innerHTML = answers[2];
  selectId("button_4").innerHTML = answers[3];
}
//Iniciar primera ronda
function start() {
  let players = getPlayer();
  activeP = players[players.length - 1];
  updateRound();
  selectId("player_name").innerHTML = `${activeP.name}`;
  selectId("player_prize").innerHTML = `0`;
  randomQ();
}

function gameOver() {
  activeP.prize = 0;

  let user = getPlayer();
  user.forEach((player) => {
    if (player.name == activeP.name) {
      player.prize = activeP.prize;
      data = JSON.stringify(user);
      localStorage.setItem("players", data);
    }
  });
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

function topPlayers(){
  window.location.assign('ranking.html')
  let top = getPlayer();
  let sorted = top.sort((a, b)=> {
    if(a.prize > b.prize){
      return -1
    }else if(a.prize < b.prize){
      return 1
    }else{
      return 0
    }
  })
  sorted.forEach((player)=> {
    let data = document.createElement('tr');
      data.innerHTML = `      
      <td>${player.name}</td>            
      <td>${player.prize}</td>`;
    
    selectId('table_players').appendChild(data)

  })
  
}

