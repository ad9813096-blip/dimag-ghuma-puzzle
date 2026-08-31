const puzzles = [

  // ---------- LEVEL 1 ----------
  {
    type:"choice",
    question:"🍎 इनमें सबसे बड़ा फल कौन सा है?",
    area:"🍎   🍉   🍒",
    options:["सेब","चेरी","तरबूज","अंगूर"],
    answer:2,
    hint:"फल के आकार को देखो।",
    success:"🎉 सही! तरबूज सबसे बड़ा है!"
  },

  // ---------- LEVEL 2 ----------
  {
    type:"drag",
    question:"🐱 बिल्ली को दूध तक पहुँचाओ!",
    area:"",
    answer:"milk",
    hint:"दूध को बिल्ली के पास Drag करो।",
    success:"🐱🥛 वाह! बिल्ली को दूध मिल गया!"
  },

  // ---------- LEVEL 3 ----------
  {
    type:"choice",
    question:"🔢 कौन सा नंबर गायब है?\n1, 2, 3, 4, ?, 6",
    area:"1️⃣ 2️⃣ 3️⃣ 4️⃣ ❓ 6️⃣",
    options:["4","5","7","10"],
    answer:1,
    hint:"नंबरों का क्रम देखो।",
    success:"🧠 सही! 5 गायब था!"
  },

  // ---------- LEVEL 4 ----------
  {
    type:"tap",
    question:"🔍 छुपा हुआ तारा ढूँढो!",
    area:"",
    answer:"star",
    hint:"पेड़ों के आसपास ध्यान से देखो।",
    success:"⭐ मिल गया! नजर तेज है!"
  },

  // ---------- LEVEL 5 ----------
  {
    type:"choice",
    question:"🐔 मुर्गी के कितने पैर होते हैं?",
    area:"🐔",
    options:["1","2","3","4"],
    answer:1,
    hint:"मुर्गी को ध्यान से देखो।",
    success:"🐔 बिल्कुल सही — 2 पैर!"
  },

  // ---------- LEVEL 6 ----------
  {
    type:"drag",
    question:"🗑️ कचरा डस्टबिन में डालो!",
    area:"",
    answer:"bin",
    hint:"कचरे को पकड़कर डस्टबिन तक ले जाओ।",
    success:"♻️ बहुत बढ़िया!"
  },

  // ---------- LEVEL 7 ----------
  {
    type:"choice",
    question:"☀️ सूरज को 'नीचे' कैसे करोगे?",
    area:"☀️ 🌅",
    options:[
      "सूरज को खींचो",
      "फोन की Brightness कम करो",
      "सूरज पर पानी डालो",
      "पेड़ काट दो"
    ],
    answer:1,
    hint:"सूरज को छूने की जरूरत नहीं।",
    success:"😂 कमाल! Brightness कम करके सूरज नीचे कर दिया!"
  },

  // ---------- LEVEL 8 ----------
  {
    type:"tap",
    question:"🎯 सिर्फ लाल गेंद दबाओ!",
    area:"",
    answer:"red",
    hint:"सिर्फ लाल गेंद को दबाना है।",
    success:"🎯 बिल्कुल सही!"
  },

  // ---------- LEVEL 9 ----------
  {
    type:"drag",
    question:"🔑 चाबी को ताले तक पहुँचाओ!",
    area:"",
    answer:"key",
    hint:"चाबी को पकड़कर ताले पर ले जाओ।",
    success:"🔓 दरवाजा खुल गया!"
  },

  // ---------- LEVEL 10 ----------
  {
    type:"choice",
    question:"🧠 सबसे पहले क्या करना चाहिए?",
    area:"🤔 ❓ 🧠",
    options:[
      "कोई भी जवाब दबाओ",
      "सवाल ध्यान से पढ़ो",
      "फोन बंद करो",
      "गेम छोड़ दो"
    ],
    answer:1,
    hint:"Tricky game में सबसे जरूरी चीज क्या है?",
    success:"🏆 शानदार!"
  },

  // ==================================================
  // LEVEL 11
  // ==================================================

  {
    type:"choice",
    question:"🐘 हाथी से बड़ा क्या है?",
    area:"🐘",
    options:[
      "चूहा",
      "पहाड़",
      "बिल्ली",
      "चींटी"
    ],
    answer:1,
    hint:"जानवरों के बाहर भी सोचो।",
    success:"🧠 सही! पहाड़ बहुत बड़ा है!"
  },

  // LEVEL 12

  {
    type:"tap",
    question:"👀 कौन सी आँख अलग है?",
    area:"",
    answer:"different",
    hint:"चारों आँखों को ध्यान से देखो।",
    success:"👀 शानदार observation!"
  },

  // LEVEL 13

  {
    type:"drag",
    question:"🍎 सेब को टोकरी में डालो!",
    area:"",
    answer:"basket",
    hint:"सेब को पकड़ो और टोकरी तक ले जाओ।",
    success:"🍎🧺 सेब टोकरी में पहुँच गया!"
  },

  // LEVEL 14

  {
    type:"choice",
    question:"⏰ अगर अभी 2 बजे हैं तो 2 घंटे बाद कितना बजेगा?",
    area:"⏰ 2:00",
    options:[
      "3 बजे",
      "4 बजे",
      "5 बजे",
      "12 बजे"
    ],
    answer:1,
    hint:"घड़ी को आगे बढ़ाओ।",
    success:"⏰ बिल्कुल सही — 4 बजे!"
  },

  // LEVEL 15

  {
    type:"tap",
    question:"🐶 सबसे खुश कुत्ता कौन सा है?",
    area:"",
    answer:"happy",
    hint:"सिर्फ चेहरे देखो।",
    success:"🐶 सही! यही सबसे खुश है!"
  },

  // LEVEL 16

  {
    type:"choice",
    question:"🧠 अगर 5 + 5 = 10 है, तो 10 + 10 कितना होगा?",
    area:"5 + 5 = 10\n10 + 10 = ?",
    options:[
      "15",
      "20",
      "25",
      "100"
    ],
    answer:1,
    hint:"इस बार trick मत ढूँढो।",
    success:"😄 कभी-कभी सीधा जवाब ही सही होता है!"
  },

  // LEVEL 17

  {
    type:"drag",
    question:"🌙 चाँद को आसमान में वापस रखो!",
    area:"",
    answer:"moon",
    hint:"चाँद को पकड़कर ऊपर वाले target पर ले जाओ।",
    success:"🌙 रात फिर से सुंदर हो गई!"
  },

  // LEVEL 18

  {
    type:"choice",
    question:"🚗 कौन सी गाड़ी पीछे जा रही है?",
    area:"🚗 ➡️   🚙 ⬅️",
    options:[
      "पहली",
      "दूसरी",
      "दोनों",
      "कोई नहीं"
    ],
    answer:1,
    hint:"Arrow को ध्यान से देखो।",
    success:"🚙 सही! दूसरी गाड़ी पीछे जा रही है!"
  },

  // LEVEL 19

  {
    type:"tap",
    question:"🔴 लाल रंग को ढूँढकर दबाओ!",
    area:"",
    answer:"red19",
    hint:"बाकी रंगों से अलग रंग देखो।",
    success:"🔴 मिल गया!"
  },

  // LEVEL 20

  {
    type:"choice",
    question:"🏆 इस गेम को जीतने का सबसे अच्छा तरीका क्या है?",
    area:"🧠 ❤️ 👀",
    options:[
      "जल्दी-जल्दी दबाना",
      "हर सवाल को ध्यान से देखना",
      "Random answer देना",
      "Game बंद कर देना"
    ],
    answer:1,
    hint:"दिमागी गेम में सबसे जरूरी चीज क्या है?",
    success:"🏆 LEVEL 20 COMPLETE! तुम सच में कर सकते हो!"
  },
  
  // ---------- LEVEL 21 ----------
  {
    type:"missing",
    question:"👀 तस्वीर को ध्यान से देखो — क्या गायब है?",
    area:"",
    options:[
      "🐱 बिल्ली",
      "🐶 कुत्ता",
      "🌳 पेड़",
      "🌸 फूल"
    ],
    answer:0,
    hint:"जानवरों को ध्यान से देखो।",
    success:"🎉 बिल्कुल सही! बिल्ली गायब थी!"
 }
   ];

// ===============================
// GAME DATA
// ===============================

const defaultGame = {
  coins:100,
  lives:5,
  unlocked:1,
  completed:[],
  currentLevel:1
};


let gameData =
  JSON.parse(
    localStorage.getItem("tumKarSakteHoGame")
  ) || {...defaultGame};


let currentPuzzle=null;
let currentLevel=1;
let hintUsed=false;


// ===============================
// SAVE
// ===============================

function saveGame(){

  localStorage.setItem(
    "tumKarSakteHoGame",
    JSON.stringify(gameData)
  );

}


// ===============================
// TOP BAR
// ===============================

function updateTop(){

  const coins =
    document.getElementById("coins");

  const lives =
    document.getElementById("lives");

  const gameCoins =
    document.getElementById("gameCoins");


  if(coins)
    coins.innerText=gameData.coins;

  if(lives)
    lives.innerText=gameData.lives;

  if(gameCoins)
    gameCoins.innerText=gameData.coins;

}


// ===============================
// SCREEN
// ===============================

function showScreen(id){

  document
    .querySelectorAll(".screen")
    .forEach(screen=>{
      screen.classList.remove("active");
    });


  const screen =
    document.getElementById(id);

  if(screen)
    screen.classList.add("active");


  if(id==="levels")
    renderLevels();


  updateTop();

  saveGame();

}


// ===============================
// LEVEL MAP
// ===============================

function renderLevels(){

  const grid =
    document.getElementById("levelGrid");

  if(!grid)
    return;


  grid.innerHTML="";


  puzzles.forEach((puzzle,index)=>{

    const level=index+1;

    const button =
      document.createElement("button");


    button.className="level-btn";


    const completed =
      gameData.completed.includes(level);


    const unlocked =
      level<=gameData.unlocked;


    if(completed)
      button.classList.add("completed");

    else if(unlocked)
      button.classList.add("unlocked");

    else
      button.classList.add("locked");


    if(completed){

      button.innerHTML =
        level+
        '<span class="check">✓</span>';

    }

    else if(unlocked){

      button.innerText=level;

    }

    else{

      button.innerText="🔒";

    }


    if(unlocked){

      button.onclick=
        ()=>startLevel(level);

    }


    grid.appendChild(button);

  });

}


// ===============================
// START LEVEL
// ===============================

function startLevel(level){

  if(level<1 || level>puzzles.length)
    return;


  if(level>gameData.unlocked){

    showScreen("levels");

    return;

  }


  if(gameData.lives<=0){

    showScreen("gameover");

    return;

  }


  currentLevel=level;

  currentPuzzle=
    puzzles[level-1];

  hintUsed=false;


  document.getElementById(
    "currentLevel"
  ).innerText=level;


  document.getElementById(
    "puzzleNumber"
  ).innerText="Puzzle "+level;


  document.getElementById(
    "question"
  ).innerText=
    currentPuzzle.question;


  const area=
    document.getElementById(
      "puzzleArea"
    );


  const options=
    document.getElementById(
      "options"
    );


  area.innerHTML="";

  options.innerHTML="";


  if(currentPuzzle.type==="choice"){

    area.innerText=
      currentPuzzle.area;


    currentPuzzle.options
      .forEach((option,index)=>{

        const button=
          document.createElement(
            "button"
          );


        button.className=
          "option-btn";


        button.innerText=option;


        button.onclick=
          ()=>checkAnswer(index);


        options.appendChild(button);

      });

  }


  if(currentPuzzle.type==="drag"){

    createDragPuzzle(
      currentLevel,
      area
    );

  }


  if(currentPuzzle.type==="tap"){

    createTapPuzzle(
      currentLevel,
      area
    );

  }
  if(currentPuzzle.type==="missing"){

    createMissingPuzzle(
     currentLevel,
     area,
     options
   );

  }
  
  document.getElementById(
    "gameMessage"
  ).innerText=
    "🤔 ध्यान से सोचो...";


  showScreen("game");

}


// ===============================
// DRAG PUZZLES
// ===============================

function createDragPuzzle(level,area){

  area.style.position="relative";

  area.style.minHeight="190px";


  let item="";
  let target="";


  if(level===2){

    item="🥛";
    target="🐱";

  }


  if(level===6){

    item="🗑️";
    target="🗑️";

  }


  if(level===9){

    item="🔑";
    target="🔒";

  }


  if(level===13){

    item="🍎";
    target="🧺";

  }


  if(level===17){

    item="🌙";
    target="☁️";

  }


  const draggable=
    document.createElement("div");


  draggable.innerText=item;


  draggable.style.position="absolute";
  draggable.style.left="20px";
  draggable.style.top="60px";
  draggable.style.fontSize="55px";
  draggable.style.cursor="grab";
  draggable.draggable=true;


  const dropZone=
    document.createElement("div");


  dropZone.innerText=target;


  dropZone.style.position="absolute";
  dropZone.style.right="20px";
  dropZone.style.top="60px";
  dropZone.style.fontSize="55px";


  area.appendChild(draggable);
  area.appendChild(dropZone);


  draggable.addEventListener(
    "dragstart",
    event=>{

      event.dataTransfer.setData(
        "text/plain",
        "drag"
      );

    }
  );


  dropZone.addEventListener(
    "dragover",
    event=>{
      event.preventDefault();
    }
  );


  dropZone.addEventListener(
    "drop",
    event=>{

      event.preventDefault();

      completeLevel();

    }
  );


  let dragging=false;


  draggable.addEventListener(
    "touchstart",
    event=>{

      dragging=true;

      draggable.style.transform=
        "scale(1.2)";

    }
  );


  const moveHandler=
    event=>{

      if(!dragging)
        return;


      event.preventDefault();


      const touch=
        event.touches[0];


      const rect=
        area.getBoundingClientRect();


      draggable.style.left=
        (
          touch.clientX-
          rect.left-
          27
        )+"px";


      draggable.style.top=
        (
          touch.clientY-
          rect.top-
          27
        )+"px";

    };


  const endHandler=
    ()=>{

      if(!dragging)
        return;


      dragging=false;

      draggable.style.transform=
        "scale(1)";


      const a=
        draggable.getBoundingClientRect();


      const b=
        dropZone.getBoundingClientRect();


      const hit=
        a.left<b.right &&
        a.right>b.left &&
        a.top<b.bottom &&
        a.bottom>b.top;


      if(hit){

        completeLevel();

      }

    };


  document.addEventListener(
    "touchmove",
    moveHandler,
    {passive:false}
  );


  document.addEventListener(
    "touchend",
    endHandler
  );

}


// ===============================
// TAP PUZZLES
// ===============================

function createTapPuzzle(level,area){

  area.style.position="relative";

  area.style.minHeight="190px";


  if(level===4){

    area.innerHTML=
      `
      <div style="
        position:absolute;
        left:25px;
        top:45px;
        font-size:48px;
      ">
        🌳 🌳 🌳
      </div>

      <button
        id="hiddenStar"
        style="
          position:absolute;
          right:15px;
          bottom:15px;
          border:0;
          background:transparent;
          font-size:20px;
          opacity:.25;
        "
      >
        ⭐
      </button>
      `;


    document.getElementById(
      "hiddenStar"
    ).onclick=
      ()=>completeLevel();

  }


  if(level===8){

    ["🔵","🟢","🔴","🟡"]
      .forEach(ball=>{

        const button=
          document.createElement(
            "button"
          );


        button.innerText=ball;

        button.style.border="0";
        button.style.background=
          "transparent";
        button.style.fontSize="45px";


        button.onclick=()=>{

          if(ball==="🔴")
            completeLevel();

          else
            wrongAnswer();

        };


        area.appendChild(button);

      });

  }


  if(level===12){

    const eyes=[
      "👁️",
      "👁️",
      "👀",
      "👁️"
    ];


    eyes.forEach((eye,index)=>{

      const button=
        document.createElement(
          "button"
        );


      button.innerText=eye;

      button.style.border="0";
      button.style.background=
        "transparent";
      button.style.fontSize="50px";


      button.onclick=()=>{

        if(index===2)
          completeLevel();

        else
          wrongAnswer();

      };


      area.appendChild(button);

    });

  }


  if(level===15){

    const dogs=[
      "🐶",
      "🐶",
      "🐕",
      "🐶"
    ];


    dogs.forEach((dog,index)=>{

      const button=
        document.createElement(
          "button"
        );


      button.innerText=dog;

      button.style.border="0";
      button.style.background=
        "transparent";
      button.style.fontSize="50px";


      button.onclick=()=>{

        if(index===2)
          completeLevel();

        else
          wrongAnswer();

      };


      area.appendChild(button);

    });

  }


  if(level===19){

    const colors=[
      "🔵",
      "🟢",
      "🟡",
      "🔴",
      "🟣"
    ];


    colors.forEach(color=>{

      const button=
        document.createElement(
          "button"
        );


      button.innerText=color;

      button.style.border="0";
      button.style.background=
        "transparent";
      button.style.fontSize="45px";


      button.onclick=()=>{

        if(color==="🔴")
          completeLevel();

        else
          wrongAnswer();

      };


      area.appendChild(button);

    });

  }

}

// ===============================
// MISSING OBJECT PUZZLE
// ===============================

function createMissingPuzzle(level,area,options){

  area.style.position="relative";
  area.style.minHeight="240px";

  area.innerHTML = `
    <div style="
      width:100%;
      height:220px;
      border-radius:20px;
      background:linear-gradient(#bde7ff 0 60%,#8bd17c 60%);
      position:relative;
      overflow:hidden;
      display:flex;
      align-items:flex-end;
      justify-content:space-around;
      padding-bottom:20px;
      box-sizing:border-box;
      font-size:48px;
    ">
      <span>🌳</span>
      <span>🏠</span>
      <span>🌸</span>
      <span>🐶</span>
      <span>🦋</span>
    </div>
  `;

  options.forEach((option,index)=>{

    const button =
      document.createElement("button");

    button.className="option-btn";

    button.innerText=option;

    button.onclick=()=>{

      if(index===currentPuzzle.answer){

        completeLevel();

      }
      else{

        wrongAnswer();

      }

    };

    document
      .getElementById("options")
      .appendChild(button);

  });

}


// ===============================
// ANSWER
// ===============================

function checkAnswer(selected){

  if(
    selected===
    currentPuzzle.answer
  ){

    completeLevel();

  }

  else{

    wrongAnswer();

  }

}


// ===============================
// WRONG
// ===============================

function wrongAnswer(){

  const card = document.querySelector(".game-card");

  if (card) {

    card.classList.remove("wrong-shake");

    void card.offsetWidth;

    card.classList.add("wrong-shake");

  }

    const wrongSound =
    document.getElementById("wrongSound");

  if (wrongSound) {
    wrongSound.currentTime = 0;
    wrongSound.play().catch(() => {});
  }

  // ❤️ Life कम
  gameData.lives--;

  updateTop();
  saveGame();

  // 😄 Message
  document.getElementById("gameMessage").innerText =
    "😄 ओहो! गलत जवाब... फिर से सोचो!";

  // 💔 Lives खत्म
  if (gameData.lives <= 0) {

    setTimeout(
      () => showScreen("gameover"),
      700
    );

  }

}

// ===============================
// COMPLETE
// ===============================
function completeLevel(){

  showVictoryCelebration();
  
  const winSound = document.getElementById("winSound");

 if (winSound) {
  winSound.currentTime = 0;
  winSound.play().catch(() => {});
}
  
  const alreadyCompleted =
    gameData.completed.includes(currentLevel);

  let stars = 3;

  if(hintUsed)
    stars = 2;

  if(!alreadyCompleted){

    gameData.completed.push(currentLevel);

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
    "🎉 LEVEL COMPLETE!";

  document.getElementById(
    "resultText"
  ).innerText =
    currentPuzzle.success;

  const reward =
    document.getElementById(
      "result"
    ).querySelector(".reward");

  reward.innerText =
    "⭐".repeat(stars) +
    "  🪙 +20 Coins";

  showScreen("result");

}

// ===============================
// NEXT
// ===============================

function nextLevel(){

  if(currentLevel<puzzles.length){

    startLevel(
      currentLevel+1
    );

  }

  else{

    showScreen("levels");

  }

}


// ===============================
// HINT
// ===============================

function useHint(){

  if(!currentPuzzle)
    return;


  if(hintUsed){

    document.getElementById(
      "gameMessage"
    ).innerText=
      "💡 Hint पहले ही इस्तेमाल हो चुका है।";

    return;

  }


  if(gameData.coins<20){

    document.getElementById(
      "gameMessage"
    ).innerText=
      "❌ Hint के लिए 20 Coins चाहिए।";

    return;

  }


  gameData.coins-=20;

  hintUsed=true;

  saveGame();

  updateTop();


  document.getElementById(
    "gameMessage"
  ).innerText=
    "💡 Hint: "+
    currentPuzzle.hint;

}


// ===============================
// SKIP
// ===============================

function skipLevel(){

  if(gameData.coins<30){

    document.getElementById(
      "gameMessage"
    ).innerText=
      "❌ Skip के लिए 30 Coins चाहिए।";

    return;

  }


  gameData.coins-=30;

  saveGame();

  updateTop();


  document.getElementById(
    "gameMessage"
  ).innerText=
    "⏭️ Level Skip!";


  setTimeout(()=>{

    if(
      currentLevel<puzzles.length
    ){

      if(
        currentLevel===
        gameData.unlocked
      ){

        gameData.unlocked++;

      }


      startLevel(
        currentLevel+1
      );

    }

  },500);

}


// ===============================
// RESTORE LIVES
// ===============================

function restoreLives(){

  gameData.lives=5;

  saveGame();

  updateTop();

  showScreen("levels");

}


// ===============================
// RESET
// ===============================

function resetGame(){

  if(
    !confirm(
      "पूरा Game Reset करना है?"
    )
  )
    return;


  gameData=
    {...defaultGame};


  saveGame();

  updateTop();

  showScreen("home");

}


// ===============================
// START
// ===============================

document.addEventListener(
  "DOMContentLoaded",
  function(){

    updateTop();

    renderLevels();

  }
);

function showVictoryCelebration(){

  const container =
    document.getElementById(
      "victoryCelebration"
    );

  if(!container)
    return;

  container.innerHTML = "";

  // 🎉 Big victory pop
  const pop =
    document.createElement("div");

  pop.className =
    "victory-pop";

  pop.innerText =
    "🎉";

  container.appendChild(pop);


  // 🎊 Confetti
  for(let i = 0; i < 45; i++){

    const piece =
      document.createElement("div");

    piece.className =
      "confetti-piece";

    piece.style.left =
      Math.random() * 100 + "%";

    piece.style.animationDelay =
      Math.random() * .5 + "s";

    piece.style.transform =
      "rotate(" +
      Math.random() * 360 +
      "deg)";

    container.appendChild(piece);

  }

  // Remove effect
  setTimeout(function(){

    container.innerHTML = "";

  },2500);

}
