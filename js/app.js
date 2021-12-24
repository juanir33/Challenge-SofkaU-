class Question {
  constructor(level, category, question, answer, falseA, falseB, falseC) {
    this.level = level;
    this.category = category;
    this.question = question;
    this.answer = answer;
    this.falseA = falseA;
    this.falseB = falseB;
    this.falseC = falseC;
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.price = 0;
    this.round = 1;
    this.finalRound = 5;
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
    "Panama"
  ),
  new Question(
    1,
    "Geografia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa"
  ),
  new Question(
    1,
    "Geografia",
    "¿En qué continente se encuentra Australia?",
    "Oceania",
    "America del Sur",
    "Asia",
    "Europa"
  ),new Question(
    1,
    "Geografia",
    "¿En qué país se encuentra el pico Aconcagua?",
    "Argentina",
    "Brasil",
    "Canada",
    "Suiza"
  ),new Question(
    1,
    "Geografia",
    "¿Cuál es el idioma más hablado en Suiza?",
    "Aleman",
    "Japones",
    "Arabe",
    "Ingles",
  ),new Question(
    2,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa"
  ),new Question(
    2,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa"
  ),new Question(
    2,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa"
  ),new Question(
    2,
    "Historia",
    "¿En qué continente se encuentra Jamaica?",
    "America",
    "America del Sur",
    "Asia",
    "Europa"
  ),,
];
let players = [new Player('Juan')];
let activeP = players[0];
console.log(activeP.name);

function selectId(id){
    return document.getElementById(id);
};

function randomQ(){
    if(activeP.round <= activeP.finalRound){
        let q = questions.filter(question => question.level == activeP.round );
        let ranQ = q[Math.floor(Math.random()* q.length)];
        selectId('category').innerHTML = `${ranQ.category}`;
        selectId('question').innerHTML = `${ranQ.question}`;
        selectId('button_1').innerHTML = `${ranQ.answer}`;
        selectId('button_2').innerHTML = `${ranQ.falseA}`;
        selectId('button_3').innerHTML = `${ranQ.falseB}`;
        selectId('button_4').innerHTML = `${ranQ.falseC}`;
        console.log(ranQ);

    }else{
        console.log('error');
    }

   
}

function start(){
    
    selectId('player_name').innerHTML = `${activeP.name}`;
    randomQ()
    
    console.log(randQ);

}
start()
