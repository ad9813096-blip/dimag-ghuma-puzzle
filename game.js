const puzzles = [
  {
    type: "choice",
    question: "🍎 इनमें सबसे बड़ा फल कौन सा है?",
    area: "🍎   🍉   🍒",
    options: ["सेब", "चेरी", "तरबूज", "अंगूर"],
    answer: 2,
    hint: "फल के आकार को ध्यान से देखो।",
    success: "🎉 सही! तरबूज सबसे बड़ा है!"
  },

  {
    type: "drag",
    question: "🐱 बिल्ली को दूध तक पहुँचाओ!",
    area: "",
    options: [],
    answer: "milk",
    hint: "दूध को बिल्ली के पास Drag करो।",
    success: "🐱🥛 वाह! बिल्ली को दूध मिल गया!"
  },

  {
    type: "choice",
    question: "🔢 कौन सा नंबर गायब है?\n1, 2, 3, 4, ?, 6",
    area: "1️⃣ 2️⃣ 3️⃣ 4️⃣ ❓ 6️⃣",
    options: ["4", "5", "7", "10"],
    answer: 1,
    hint: "नंबरों का क्रम देखो।",
    success: "🧠 सही! 5 गायब था!"
  },

  {
    type: "tap",
    question: "🔍 स्क्रीन पर छुपा हुआ तारा ढूँढो!",
    area: "🌳 🌳 🌳",
    options: [],
    answer: "star",
    hint: "पेड़ों के आसपास ध्यान से देखो।",
    success: "⭐ मिल गया! तुम्हारी नजर तेज है!"
  },

  {
    type: "choice",
    question: "🐔 मुर्गी के कितने पैर होते हैं?",
    area: "🐔",
    options: ["1", "2", "3", "4"],
    answer: 1,
    hint: "मुर्गी को ध्यान से देखो।",
    success: "🐔 बिल्कुल सही — 2 पैर!"
  },

  {
    type: "drag",
    question: "🗑️ कचरा डस्टबिन में डालो!",
    area: "",
    options: [],
    answer: "bin",
    hint: "कचरे को पकड़कर डस्टबिन तक ले जाओ।",
    success: "♻️ बहुत बढ़िया! कचरा सही जगह पहुँच गया!"
  },

  {
    type: "choice",
    question: "☀️ सूरज को 'नीचे' कैसे करोगे?",
    area: "☀️ 🌅",
    options: [
      "सूरज को खींचो",
      "फोन की Brightness कम करो",
      "सूरज पर पानी डालो",
      "पेड़ काट दो"
    ],
    answer: 1,
    hint: "सूरज को छूने की जरूरत नहीं है।",
    success: "😂 कमाल! Brightness कम करके सूरज को नीचे कर दिया!"
  },

  {
    type: "tap",
    question: "🎯 सिर्फ लाल गेंद को दबाओ!",
    area: "🔵   🟢   🔴   🟡",
    options: [],
    answer: "red",
    hint: "सिर्फ लाल गेंद को दबाना है।",
    success: "🎯 बिल्कुल सही!"
  },

  {
    type: "drag",
    question: "🔑 चाबी को ताले तक पहुँचाओ!",
    area: "",
    options: [],
    answer: "key",
    hint: "चाबी को पकड़कर ताले पर ले जाओ।",
    success: "🔓 दरवाजा खुल गया!"
  },

  {
    type: "choice",
    question: "🧠 सबसे पहले क्या करना चाहिए?",
    area: "🤔 ❓ 🧠",
    options: [
      "कोई भी जवाब दबाओ",
      "सवाल ध्यान से पढ़ो",
      "फोन बंद करो",
      "गेम छोड़ दो"
    ],
    answer: 1,
    hint: "Tricky game में सबसे जरूरी चीज क्या है?",
    success: "🏆 शानदार! ध्यान से सोचना ही असली Trick है!"
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

      button.innerText = "🔒";

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


  const area =
    document.getElementById("puzzleArea");

  const options =
    document.getElementById("options");


  area.innerHTML = "";

  options.innerHTML = "";


  if(currentPuzzle.type === "choice"){

    area.innerText =
      currentPuzzle.area;


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

  }


  if(currentPuzzle.type === "drag"){

    createDragPuzzle(
      currentLevel,
      area
    );

  }


  if(currentPuzzle.type === "tap"){

    createTapPuzzle(
      currentLevel,
      area
    );

  }


  document.getElementById(
    "gameMessage"
  ).innerText =
    "🤔 ध्यान से सोचो...";


  showScreen("game");

}


function createDragPuzzle(level,area){

  area.style.position =
    "relative";

  area.style.minHeight =
    "180px";


  let item = "";
  let target = "";


  if(level === 2){

    item = "🥛";
    target = "🐱";

  }

  else if(level === 6){

    item = "🗑️";
    target = "🗑️";

  }

  else if(level === 9){

    item = "🔑";
    target = "🔒";

  }


  const draggable =
    document.createElement("div");

  draggable.innerText = item;

  draggable.style.position =
    "absolute";

  draggable.style.left =
    "25px";

  draggable.style.top =
    "55px";

  draggable.style.fontSize =
    "55px";

  draggable.style.cursor =
    "grab";

  draggable.draggable = true;


  const dropZone =
    document.createElement("div");

  dropZone.innerText = target;

  dropZone.style.position =
    "absolute";

  dropZone.style.right =
    "25px";

  dropZone.style.top =
    "55px";

  dropZone.style.fontSize =
    "55px";

  dropZone.style.padding =
    "10px";


  area.appendChild(draggable);
  area.appendChild(dropZone);


  draggable.addEventListener(
    "dragstart",
    function(event){

      event.dataTransfer.setData(
        "text/plain",
        "drag-item"
      );

    }
  );


  dropZone.addEventListener(
    "dragover",
    function(event){

      event.preventDefault();

    }
  );


  dropZone.addEventListener(
    "drop",
    function(event){

      event.preventDefault();

      completeLevel();

    }
  );


  // Mobile touch support

  let dragging = false;


  draggable.addEventListener(
    "touchstart",
    function(){

      dragging = true;

      draggable.style.transform =
        "scale(1.2)";

    }
  );


  document.addEventListener(
    "touchmove",
    function(event){

      if(!dragging)
        return;


      const touch =
        event.touches[0];

      const rect =
        area.getBoundingClientRect();


      draggable.style.left =
        (
          touch.clientX -
          rect.left -
          25
        ) + "px";


      draggable.style.top =
        (
          touch.clientY -
          rect.top -
          25
        ) + "px";

    },
    {passive:false}
  );


  document.addEventListener(
    "touchend",
    function(){

      if(!dragging)
        return;

      dragging = false;

      draggable.style.transform =
        "scale(1)";


      const a =
        draggable.getBoundingClientRect();

      const b =
        dropZone.getBoundingClientRect();


      const hit =
        a.left < b.right &&
        a.right > b.left &&
        a.top < b.bottom &&
        a.bottom > b.top;


      if(hit){

        completeLevel();

      }

    }
  );

}


function createTapPuzzle(level,area){

  area.style.position =
    "relative";

  area.style.minHeight =
    "180px";


  if(level === 4){

    const tree =
      document.createElement("div");

    tree.innerText =
      "🌳     🌳     🌳";

    tree.style.fontSize =
      "55px";

    tree.style.position =
      "absolute";

    tree.style.top =
      "35px";

    tree.style.left =
      "10px";

    area.appendChild(tree);


    const star =
      document.createElement("button");

    star.innerText =
      "⭐";

    star.style.position =
      "absolute";

    star.style.right =
      "15px";

    star.style.bottom =
      "15px";

    star.style.fontSize =
      "20px";

    star.style.border =
      "0";

    star.style.background =
      "transparent";

    star.style.opacity =
      "0.25";

    star.onclick =
      function(){

        completeLevel();

      };


    area.appendChild(star);

  }


  if(level === 8){

    const balls =
      ["🔵","🟢","🔴","🟡"];


    balls.forEach(ball=>{

      const button =
        document.createElement("button");

      button.innerText = ball;

      button.style.border =
        "0";

      button.style.background =
        "transparent";

      button.style.fontSize =
        "45px";

      button.style.margin =
        "5px";


      button.onclick =
        function(){

          if(ball === "🔴"){

            completeLevel();

          }

          else{

            wrongAnswer();

          }

        };


      area.appendChild(button);

    });

  }

}


function checkAnswer(selected){

  if(
    selected ===
    currentPuzzle.answer
  ){

    completeLevel();

  }

  else{

    wrongAnswer();

  }

}


function wrongAnswer(){

  gameData.lives--;

  updateTop();

  saveGame();


  document.getElementById(
    "gameMessage"
  ).innerText =
    "❌ गलत जवाब! एक Life कम हो गई।";


  if(gameData.lives <= 0){

    setTimeout(
      function(){

        showScreen("gameover");

      },
      700
    );

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

  if(!currentPuzzle)
    return;


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

      if(
        currentLevel < puzzles.length
      ){

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


document.addEventListener(
  "DOMContentLoaded",
  function(){

    updateTop();

    renderLevels();

  }
);
