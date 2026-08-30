const puzzles = [

  {
    question: "🐘 हाथी को फ्रिज में कैसे डालोगे?",
    area: "🐘 + 🧊",
    options: [
      "फ्रिज खोलो → हाथी डालो → फ्रिज बंद करो",
      "हाथी को छोटा करो",
      "फ्रिज को बड़ा करो",
      "हाथी को बाहर छोड़ दो"
    ],
    answer: 0,
    hint: "पहले फ्रिज के बारे में सोचो।",
    success: "😂 बिल्कुल! पहले फ्रिज खोलना पड़ेगा!"
  },

  {
    question: "🍎 इनमें सबसे बड़ा फल कौन सा है?",
    area: "🍎  🍉  🍒",
    options: [
      "सेब",
      "चेरी",
      "तरबूज",
      "तीनों बराबर"
    ],
    answer: 2,
    hint: "फल का आकार देखो।",
    success: "🎉 सही! तरबूज सबसे बड़ा है!"
  },

  {
    question: "🥛 गिलास को दूध से भरना है। क्या करोगे?",
    area: "🥛    🥛    🥛",
    options: [
      "गिलास को उल्टा कर दो",
      "दूध डालो",
      "गिलास तोड़ दो",
      "कुछ मत करो"
    ],
    answer: 1,
    hint: "बहुत आसान लग रहा है... लेकिन ध्यान से सोचो।",
    success: "🥛 सही! दूध डालना ही तो है!"
  },

  {
    question: "🐱 बिल्ली को दूध तक पहुँचाओ।",
    area: "🐱  ➡️  🥛",
    options: [
      "बिल्ली को दूध के पास ले जाओ",
      "दूध को बिल्ली के पास ले जाओ",
      "दोनों को हटा दो",
      "कुछ मत करो"
    ],
    answer: 0,
    hint: "जिसे चलाया जा सकता है, उसे चलाओ।",
    success: "🐱 वाह! बिल्ली दूध तक पहुँच गई!"
  },

  {
    question: "🔢 कौन सा नंबर गायब है?\n1, 2, 3, 4, ?, 6",
    area: "1️⃣ 2️⃣ 3️⃣ 4️⃣ ❓ 6️⃣",
    options: [
      "4",
      "5",
      "7",
      "10"
    ],
    answer: 1,
    hint: "नंबरों का क्रम देखो।",
    success: "🧠 सही! 5 गायब था!"
  },

  {
    question: "🚪 दरवाजा खोलना है। सही चाबी कौन सी है?",
    area: "🚪 🔑 🔑 🔑",
    options: [
      "पहली चाबी",
      "दूसरी चाबी",
      "तीसरी चाबी",
      "कोई भी नहीं"
    ],
    answer: 3,
    hint: "शायद दरवाजे को चाबी की जरूरत ही नहीं है।",
    success: "😂 सही! दरवाजा खुला हुआ है!"
  },

  {
    question: "🐔 मुर्गी के कितने पैर होते हैं?",
    area: "🐔",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 1,
    hint: "मुर्गी को ध्यान से देखो।",
    success: "🐔 सही जवाब — 2 पैर!"
  },

  {
    question: "☀️ सूरज को जल्दी नीचे कैसे लाओगे?",
    area: "☀️ 🌅",
    options: [
      "सूरज को खींचकर नीचे लाओ",
      "फोन की brightness कम करो",
      "सूरज पर पानी डालो",
      "पेड़ काट दो"
    ],
    answer: 1,
    hint: "सूरज को छूना जरूरी नहीं।",
    success: "😂 शानदार! Brightness कम करके सूरज को 'नीचे' कर दिया!"
  },

  {
    question: "🐟 मछली पानी के बाहर है। उसे बचाओ!",
    area: "🐟 💧",
    options: [
      "मछली को पानी में डालो",
      "पानी फेंक दो",
      "मछली को छोड़ दो",
      "स्क्रीन बंद करो"
    ],
    answer: 0,
    hint: "मछली को पानी चाहिए।",
    success: "🐟 बच गई! बहुत बढ़िया!"
  },

  {
    question: "🧠 आखिरी सवाल: सबसे पहले इस Level को कैसे जीतोगे?",
    area: "🤔 ❓ 🧠",
    options: [
      "जल्दी से कोई भी जवाब दबाओ",
      "सवाल को ध्यान से पढ़ो",
      "फोन बंद करो",
      "गेम uninstall करो"
    ],
    answer: 1,
    hint: "Tricky game में सबसे जरूरी चीज क्या है?",
    success: "🏆 बिल्कुल! सवाल को ध्यान से पढ़ना ही असली Trick है!"
  }

];


const defaultGame = {
  coins: 100,
  lives: 5,
  unlocked: 1,
  completed: [],
  currentLevel: 1
};


let gameData =
  JSON.parse(
    localStorage.getItem("tumKarSakteHoGame")
  ) || {...defaultGame};


let currentPuzzle = null;
let currentLevel = 1;
let hintUsed = false;


function saveGame(){

  localStorage.setItem(
    "tumKarSakteHoGame",
    JSON.stringify(gameData)
  );

}


function updateTop(){

  const coins =
    document.getElementById("coins");

  const lives =
    document.getElementById("lives");

  const gameCoins =
    document.getElementById("gameCoins");

  if(coins)
    coins.innerText = gameData.coins;

  if(lives)
    lives.innerText = gameData.lives;

  if(gameCoins)
    gameCoins.innerText = gameData.coins;

}


function showScreen(id){

  document
    .querySelectorAll(".screen")
    .forEach(screen => {

      screen.classList.remove("active");

    });


  const screen =
    document.getElementById(id);

  if(screen)
    screen.classList.add("active");


  if(id === "levels")
    renderLevels();

  updateTop();

  saveGame();

}


function renderLevels(){

  const grid =
    document.getElementById("levelGrid");

  if(!grid)
    return;


  grid.innerHTML = "";


  puzzles.forEach((puzzle,index)=>{

    const level =
      index + 1;

    const button =
      document.createElement("button");

    button.className = "level-btn";


    const isCompleted =
      gameData.completed.includes(level);

    const isUnlocked =
      level <= gameData.unlocked;


    if(isCompleted)
      button.classList.add("completed");

    else if(isUnlocked)
      button.classList.add("unlocked");

    else
      button.classList.add("locked");


    if(isCompleted){

      button.innerHTML =
        level +
        '<span class="check">✓</span>';

    }

    else if(isUnlocked){

      button.innerText = level;

    }

    else{

      button.innerText =
        "🔒";

    }


    if(isUnlocked){

      button.onclick =
        function(){

          startLevel(level);

        };

    }


    grid.appendChild(button);

  });

}


function startLevel(level){

  if(level < 1 || level > puzzles.length)
    return;


  if(level > gameData.unlocked){

    showScreen("levels");

    return;

  }


  if(gameData.lives <= 0){

    showScreen("gameover");

    return;

  }


  currentLevel = level;

  currentPuzzle =
    puzzles[level - 1];

  hintUsed = false;


  document.getElementById(
    "currentLevel"
  ).innerText = level;


  document.getElementById(
    "puzzleNumber"
  ).innerText =
    "Puzzle " + level;


  document.getElementById(
    "question"
  ).innerText =
    currentPuzzle.question;


  document.getElementById(
    "puzzleArea"
  ).innerText =
    currentPuzzle.area;


  const options =
    document.getElementById("options");

  options.innerHTML = "";


  currentPuzzle.options.forEach(
    (option,index)=>{

      const button =
        document.createElement("button");

      button.className =
        "option-btn";

      button.innerText =
        option;


      button.onclick =
        function(){

          checkAnswer(index);

        };


      options.appendChild(button);

    }
  );


  document.getElementById(
    "gameMessage"
  ).innerText =
    "🤔 ध्यान से सोचो...";


  showScreen("game");

}


function checkAnswer(selected){

  if(!currentPuzzle)
    return;


  if(selected === currentPuzzle.answer){

    completeLevel();

  }

  else{

    gameData.lives--;

    updateTop();

    saveGame();


    document.getElementById(
      "gameMessage"
    ).innerText =
      "❌ गलत! एक Life कम हो गई।";


    if(gameData.lives <= 0){

      setTimeout(
        function(){

          showScreen("gameover");

        },
        600
      );

    }

  }

}


function completeLevel(){

  const alreadyCompleted =
    gameData.completed.includes(
      currentLevel
    );


  if(!alreadyCompleted){

    gameData.completed.push(
      currentLevel
    );

    gameData.coins += 20;

  }


  if(
    currentLevel === gameData.unlocked &&
    gameData.unlocked < puzzles.length
  ){

    gameData.unlocked++;

  }


  saveGame();

  updateTop();


  document.getElementById(
    "resultTitle"
  ).innerText =
    "🎉 सही जवाब!";


  document.getElementById(
    "resultText"
  ).innerText =
    currentPuzzle.success;


  document.getElementById(
    "result"
  ).querySelector(".reward").innerText =
    alreadyCompleted
      ? "🧠 Level दोबारा पूरा!"
      : "🪙 +20 Coins";


  showScreen("result");

}


function nextLevel(){

  if(currentLevel < puzzles.length){

    startLevel(
      currentLevel + 1
    );

  }

  else{

    showScreen("levels");

  }

}


function useHint(){

  if(hintUsed){

    document.getElementById(
      "gameMessage"
    ).innerText =
      "💡 Hint पहले ही इस्तेमाल हो चुका है।";

    return;

  }


  if(gameData.coins < 20){

    document.getElementById(
      "gameMessage"
    ).innerText =
      "❌ Hint के लिए 20 Coins चाहिए।";

    return;

  }


  gameData.coins -= 20;

  hintUsed = true;

  saveGame();

  updateTop();


  document.getElementById(
    "gameMessage"
  ).innerText =
    "💡 Hint: " +
    currentPuzzle.hint;

}


function skipLevel(){

  if(gameData.coins < 30){

    document.getElementById(
      "gameMessage"
    ).innerText =
      "❌ Skip करने के लिए 30 Coins चाहिए।";

    return;

  }


  gameData.coins -= 30;

  saveGame();

  updateTop();


  document.getElementById(
    "gameMessage"
  ).innerText =
    "⏭️ Level Skip किया गया!";


  setTimeout(
    function(){

      if(currentLevel < puzzles.length){

        startLevel(
          currentLevel + 1
        );

      }

    },
    500
  );

}


function restoreLives(){

  gameData.lives = 5;

  saveGame();

  updateTop();

  showScreen("levels");

}


function resetGame(){

  const ok =
    confirm(
      "पूरा Game Reset करना है?"
    );


  if(!ok)
    return;


  gameData =
    {...defaultGame};


  saveGame();

  updateTop();

  showScreen("home");

}


document.addEventListener(
  "DOMContentLoaded",
  function(){

    updateTop();

    renderLevels();

  }
);
