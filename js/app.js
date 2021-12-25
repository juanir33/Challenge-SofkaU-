class Question {
  constructor(level, category, question, answer, falseA, falseB, falseC, prize) {
    this.level = level;
    this.category = category;
    this.question = question;
    this.answer = answer;
    this.falseA = falseA;
    this.falseB = falseB;
    this.falseC = falseC;
    this.prize  = prize
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
  ),new Question(
    1,
    "Geografia",
    "¿En qué país se encuentra el pico Aconcagua?",
    "Argentina",
    "Brasil",
    "Canada",
    "Suiza",
    1000
  ),new Question(
    1,
    "Geografia",
    "¿Cuál es el idioma más hablado en Suiza?",
    "Aleman",
    "Japones",
    "Arabe",
    "Ingles",
    1000
  ),new Question(
    2,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa",
    2500
  ),new Question(
    2,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa",
    2500
  ),new Question(
    2,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa",
    2500
  ),new Question(
    2,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa",
    2500
  ),,
];

class Player {
  constructor(name) {
    this.name = name;
    this.prize = 0;
    this.round = 1;
    this.finalRound = 5;


  }
}
let players = [new Player('Juan')];
let activeP = players[0];
console.log(activeP.name);
let answers = [];
let btns = [];
let ranQ 
let selectBtn 
let validateBtn 
let totalPrize = 0;


function selectId(id){
    return document.getElementById(id);
};
selectId('next').disabled = true

function updateRound(){
  activeP.round 
  selectId('player_round').innerHTML = `${activeP.round}`;
  return activeP.round
}
function updatePrize(){ 

  let actual = selectId('player_prize').outerText 
  let accumu = Number(actual) + ranQ.prize

  selectId('player_prize').innerText = accumu
  console.log(actual);
}

;


function randomQ(){
  
  let q = questions.filter(question => question.level == activeP.round );
  ranQ = q[Math.floor(Math.random()* q.length)];
  console.log(ranQ);
  answers = [ranQ.answer, ranQ.falseA, ranQ.falseB,ranQ.falseC ];
  answers.sort(() => Math.random() - 0.5);

        
  selectId('category').innerHTML = `${ranQ.category}`;
  selectId('question').innerHTML = `${ranQ.question}`;
  selectId('button_2').innerHTML = answers[0];
  selectId('button_1').innerHTML = answers[1];
  selectId('button_3').innerHTML = answers[2];
  selectId('button_4').innerHTML = answers[3];
      
 

}


function start(){
    updateRound();
    selectId('player_name').innerHTML = `${activeP.name}`;
    selectId('player_prize').innerHTML = `0`
    randomQ();
    
  
  
}
function gameOver(){
  alert('lo sentimos has perdido todo')
}
function playerSelect(event){
  selectBtn = {value: event.target.outerText, id: event.target.id};
    
  if(selectBtn.value === ranQ.answer){
    selectId(selectBtn.id).classList.add('correct');
    setTimeout(()=>{
      selectId(selectBtn.id).classList.remove('correct');
      updatePrize()
      
      selectId('next').disabled = false;
      
      
    }, 2000)
    


     
     }else{
       selectId(selectBtn.id).classList.add('error');
      gameOver()};
}
function nextRound(){
  selectId('next').disabled = true;
  activeP.round++;
  updateRound()
  randomQ()
}
    

    

    
    
    
      

  
    
    
    
console.log(selectBtn);

start()
