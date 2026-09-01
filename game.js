// ======================================================
// TUM KAR SAKTE HO - TRICKY PUZZLES
// COMPLETE GAME V1.0
// LEVEL 1 - 50
// ======================================================


// ======================================================
// PUZZLES
// ======================================================

const puzzles = [

  // ================= LEVEL 1 =================
  {
    type:"choice",
    question:"🍎 इनमें सबसे बड़ा फल कौन सा है?",
    area:"🍎   🍉   🍒   🍇",
    options:["सेब","चेरी","तरबूज","अंगूर"],
    answer:2,
    hint:"फल के आकार को देखो।",
    success:"🎉 सही! तरबूज सबसे बड़ा है!"
  },

  // ================= LEVEL 2 =================
  {
    type:"drag",
    question:"🐱 बिल्ली को दूध तक पहुँचाओ!",
    area:"",
    answer:"milk",
    hint:"दूध को बिल्ली के पास Drag करो।",
    success:"🐱🥛 वाह! बिल्ली को दूध मिल गया!"
  },

  // ================= LEVEL 3 =================
  {
    type:"choice",
    question:"🔢 कौन सा नंबर गायब है?\n1, 2, 3, 4, ?, 6",
    area:"1️⃣ 2️⃣ 3️⃣ 4️⃣ ❓ 6️⃣",
    options:["4","5","7","10"],
    answer:1,
    hint:"नंबरों का क्रम देखो।",
    success:"🧠 सही! 5 गायब था!"
  },

  // ================= LEVEL 4 =================
  {
    type:"tap",
    question:"🔍 छुपा हुआ तारा ढूँढो!",
    area:"",
    answer:"star",
    hint:"पेड़ों के आसपास ध्यान से देखो।",
    success:"⭐ मिल गया! नजर तेज है!"
  },

  // ================= LEVEL 5 =================
  {
    type:"choice",
    question:"🐔 मुर्गी के कितने पैर होते हैं?",
    area:"🐔",
    options:["1","2","3","4"],
    answer:1,
    hint:"मुर्गी को ध्यान से देखो।",
    success:"🐔 बिल्कुल सही — 2 पैर!"
  },

  // ================= LEVEL 6 =================
  {
    type:"drag",
    question:"🗑️ कचरा डस्टबिन में डालो!",
    area:"",
    answer:"bin",
    hint:"कचरे को पकड़कर डस्टबिन तक ले जाओ।",
    success:"♻️ बहुत बढ़िया!"
  },

  // ================= LEVEL 7 =================
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

  // ================= LEVEL 8 =================
  {
    type:"tap",
    question:"🎯 सिर्फ लाल गेंद दबाओ!",
    area:"",
    answer:"red",
    hint:"सिर्फ लाल गेंद को दबाना है।",
    success:"🎯 बिल्कुल सही!"
  },

  // ================= LEVEL 9 =================
  {
    type:"drag",
    question:"🔑 चाबी को ताले तक पहुँचाओ!",
    area:"",
    answer:"key",
    hint:"चाबी को पकड़कर ताले पर ले जाओ।",
    success:"🔓 दरवाजा खुल गया!"
  },

  // ================= LEVEL 10 =================
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

  // ================= LEVEL 11 =================
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

  // ================= LEVEL 12 =================
  {
    type:"tap",
    question:"👀 कौन सी आँख अलग है?",
    area:"",
    answer:"different",
    hint:"चारों आँखों को ध्यान से देखो।",
    success:"👀 शानदार observation!"
  },

  // ================= LEVEL 13 =================
  {
    type:"drag",
    question:"🍎 सेब को टोकरी में डालो!",
    area:"",
    answer:"basket",
    hint:"सेब को पकड़ो और टोकरी तक ले जाओ।",
    success:"🍎🧺 सेब टोकरी में पहुँच गया!"
  },

  // ================= LEVEL 14 =================
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

  // ================= LEVEL 15 =================
  {
    type:"tap",
    question:"🐶 सबसे खुश कुत्ता कौन सा है?",
    area:"",
    answer:"happy",
    hint:"सिर्फ चेहरे देखो।",
    success:"🐶 सही! यही सबसे खुश है!"
  },

  // ================= LEVEL 16 =================
  {
    type:"choice",
    question:"🧠 10 + 10 कितना होगा?",
    area:"10 + 10 = ?",
    options:["15","20","25","100"],
    answer:1,
    hint:"इस बार सीधा जवाब सोचो।",
    success:"😄 बिल्कुल सही!"
  },

  // ================= LEVEL 17 =================
  {
    type:"drag",
    question:"🌙 चाँद को आसमान में वापस रखो!",
    area:"",
    answer:"moon",
    hint:"चाँद को पकड़कर ऊपर वाले target पर ले जाओ।",
    success:"🌙 रात फिर से सुंदर हो गई!"
  },

  // ================= LEVEL 18 =================
  {
    type:"choice",
    question:"🚗 कौन सी गाड़ी पीछे जा रही है?",
    area:"🚗 ➡️     🚙 ⬅️",
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

  // ================= LEVEL 19 =================
  {
    type:"tap",
    question:"🔴 लाल रंग को ढूँढकर दबाओ!",
    area:"",
    answer:"red19",
    hint:"बाकी रंगों से अलग रंग देखो।",
    success:"🔴 मिल गया!"
  },

  // ================= LEVEL 20 =================
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
    success:"🏆 LEVEL 20 COMPLETE!"
  },

  // ================= LEVEL 21 =================
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
    hint:"तस्वीर में कौन सा जानवर नहीं है?",
    success:"🎉 बिल्कुल सही! बिल्ली गायब थी!"
  },

  // ================= LEVEL 22 =================
  {
    type:"choice",
    question:"🧠 कौन सा महीना 28 दिन रखता है?",
    area:"📅 ❓",
    options:[
      "फरवरी",
      "जनवरी",
      "सिर्फ फरवरी",
      "सभी महीने"
    ],
    answer:3,
    hint:"सवाल को ध्यान से पढ़ो।",
    success:"😲 सही! सभी महीनों में कम से कम 28 दिन होते हैं!"
  },

  // ================= LEVEL 23 =================
  {
    type:"tap",
    question:"🔎 अलग इमोजी ढूँढो!",
    area:"",
    answer:"odd23",
    hint:"सभी को ध्यान से compare करो।",
    success:"🧠 तुम्हारी नजर बहुत तेज है!"
  },

  // ================= LEVEL 24 =================
  {
    type:"drag",
    question:"🍎 फल को सही टोकरी में डालो!",
    area:"",
    answer:"fruit24",
    hint:"सेब को टोकरी तक खींचो।",
    success:"🍎🧺 शानदार!"
  },

  // ================= LEVEL 25 =================
  {
    type:"choice",
    question:"🐟 मछली कहाँ रहती है?",
    area:"🐟 🌊",
    options:[
      "पेड़ पर",
      "पानी में",
      "आसमान में",
      "रेगिस्तान में"
    ],
    answer:1,
    hint:"मछली का प्राकृतिक घर सोचो।",
    success:"🐟🌊 बिल्कुल सही!"
  },

  // ================= LEVEL 26 =================
  {
    type:"missing",
    question:"👀 कौन सी चीज तस्वीर में नहीं है?",
    area:"",
    options:[
      "🌳 पेड़",
      "🚗 कार",
      "☀️ सूरज",
      "🏠 घर"
    ],
    answer:1,
    hint:"सड़क को ध्यान से देखो।",
    success:"🚗 सही! कार गायब थी!"
  },

  // ================= LEVEL 27 =================
  {
    type:"choice",
    question:"🔢 2, 4, 6, 8, ?",
    area:"2️⃣ 4️⃣ 6️⃣ 8️⃣ ❓",
    options:["9","10","11","12"],
    answer:1,
    hint:"हर बार कितने बढ़ रहे हैं?",
    success:"🔢 सही! 10!"
  },

  // ================= LEVEL 28 =================
  {
    type:"tap",
    question:"🎯 सिर्फ नीला गोला दबाओ!",
    area:"",
    answer:"blue28",
    hint:"रंग पहचानो।",
    success:"🔵 बिल्कुल सही!"
  },

  // ================= LEVEL 29 =================
  {
    type:"choice",
    question:"🐄 गाय क्या देती है?",
    area:"🐄 🥛",
    options:[
      "दूध",
      "पानी",
      "तेल",
      "जूस"
    ],
    answer:0,
    hint:"गाय से मिलने वाली चीज सोचो।",
    success:"🐄🥛 सही जवाब!"
  },

  // ================= LEVEL 30 =================
  {
    type:"choice",
    question:"🧠 अगर तुम दौड़ में दूसरे व्यक्ति को पीछे छोड़ दो, तो तुम किस स्थान पर हो?",
    area:"🏃 🏃 🏃",
    options:[
      "पहले",
      "दूसरे",
      "तीसरे",
      "चौथे"
    ],
    answer:1,
    hint:"तुमने किसे पीछे छोड़ा?",
    success:"😎 सही! तुम दूसरे स्थान पर हो!"
  },

  // ================= LEVEL 31 =================
  {
    type:"tap",
    question:"⭐ सिर्फ चमकता हुआ तारा दबाओ!",
    area:"",
    answer:"star31",
    hint:"एक तारा बाकी से अलग है।",
    success:"⭐ सही पकड़ा!"
  },

  // ================= LEVEL 32 =================
  {
    type:"drag",
    question:"🔑 चाबी को सही ताले तक ले जाओ!",
    area:"",
    answer:"key32",
    hint:"चाबी को lock तक drag करो।",
    success:"🔓 ताला खुल गया!"
  },

  // ================= LEVEL 33 =================
  {
    type:"choice",
    question:"🌧️ बारिश के समय किस चीज की जरूरत पड़ सकती है?",
    area:"🌧️ ☔",
    options:[
      "छाता",
      "धूप का चश्मा",
      "पंखा",
      "रेत"
    ],
    answer:0,
    hint:"बारिश से बचने के लिए क्या लेते हैं?",
    success:"☔ बिल्कुल सही!"
  },

  // ================= LEVEL 34 =================
  {
    type:"missing",
    question:"🔍 तस्वीर में कौन सी चीज गायब है?",
    area:"",
    options:[
      "🐟 मछली",
      "🌳 पेड़",
      "☀️ सूरज",
      "🏠 घर"
    ],
    answer:0,
    hint:"पानी के पास देखो।",
    success:"🐟 सही! मछली गायब थी!"
  },

  // ================= LEVEL 35 =================
  {
    type:"choice",
    question:"🕐 5 बजे के 3 घंटे बाद कितना बजेगा?",
    area:"🕐 5:00 + 3 घंटे",
    options:[
      "6 बजे",
      "7 बजे",
      "8 बजे",
      "9 बजे"
    ],
    answer:2,
    hint:"5 से तीन घंटे आगे बढ़ो।",
    success:"⏰ सही! 8 बजे!"
  },

  // ================= LEVEL 36 =================
  {
    type:"tap",
    question:"🍎 सिर्फ लाल सेब दबाओ!",
    area:"",
    answer:"apple36",
    hint:"रंग पर ध्यान दो।",
    success:"🍎 सही!"
  },

  // ================= LEVEL 37 =================
  {
    type:"choice",
    question:"🧠 इनमें सबसे हल्का कौन है?",
    area:"🐘 🐱 🐜",
    options:[
      "हाथी",
      "बिल्ली",
      "चींटी",
      "कुत्ता"
    ],
    answer:2,
    hint:"बहुत छोटा जीव सोचो।",
    success:"🐜 सही! चींटी!"
  },

  // ================= LEVEL 38 =================
  {
    type:"drag",
    question:"🎁 Gift को बच्चे तक पहुँचाओ!",
    area:"",
    answer:"gift38",
    hint:"Gift को बच्चे के पास drag करो।",
    success:"🎁😊 बच्चे को gift मिल गया!"
  },

  // ================= LEVEL 39 =================
  {
    type:"choice",
    question:"🔢 10 में से 1 घटाओ तो क्या बचेगा?",
    area:"10 - 1 = ?",
    options:["8","9","10","11"],
    answer:1,
    hint:"साधारण calculation।",
    success:"🔢 बिल्कुल सही!"
  },

  // ================= LEVEL 40 =================
  {
    type:"missing",
    question:"👀 इस तस्वीर में क्या नहीं है?",
    area:"",
    options:[
      "🌸 फूल",
      "🐦 पक्षी",
      "🌳 पेड़",
      "☀️ सूरज"
    ],
    answer:1,
    hint:"आसमान में ध्यान से देखो।",
    success:"🐦 सही! पक्षी गायब था!"
  },

  // ================= LEVEL 41 =================
  {
    type:"tap",
    question:"🎯 अलग रंग वाला गोला दबाओ!",
    area:"",
    answer:"odd41",
    hint:"बाकी चार एक जैसे हैं।",
    success:"🎯 बहुत बढ़िया!"
  },

  // ================= LEVEL 42 =================
  {
    type:"choice",
    question:"🐘 हाथी की सूंड कहाँ होती है?",
    area:"🐘",
    options:[
      "पूँछ की जगह",
      "नाक के पास",
      "पैर के पास",
      "कान के पीछे"
    ],
    answer:1,
    hint:"हाथी का चेहरा देखो।",
    success:"🐘 सही!"
  },

  // ================= LEVEL 43 =================
  {
    type:"drag",
    question:"🌟 तारे को रात के आसमान तक पहुँचाओ!",
    area:"",
    answer:"star43",
    hint:"तारे को ऊपर वाले target पर ले जाओ।",
    success:"🌟 आसमान चमक उठा!"
  },

  // ================= LEVEL 44 =================
  {
    type:"choice",
    question:"🧠 कौन सा बड़ा है?",
    area:"10   100   1000",
    options:[
      "10",
      "100",
      "1000",
      "तीनों बराबर"
    ],
    answer:2,
    hint:"अंकों की संख्या देखो।",
    success:"🧠 सही!"
  },

  // ================= LEVEL 45 =================
  {
    type:"tap",
    question:"❤️ सिर्फ दिल वाला emoji दबाओ!",
    area:"",
    answer:"heart45",
    hint:"सिर्फ दिल ढूँढो।",
    success:"❤️ बिल्कुल सही!"
  },

  // ================= LEVEL 46 =================
  {
    type:"missing",
    question:"🏠 तस्वीर में क्या गायब है?",
    area:"",
    options:[
      "🏠 घर",
      "🌳 पेड़",
      "🚲 साइकिल",
      "☀️ सूरज"
    ],
    answer:2,
    hint:"घर के पास जमीन को देखो।",
    success:"🚲 सही! साइकिल गायब थी!"
  },

  // ================= LEVEL 47 =================
  {
    type:"choice",
    question:"🔢 1 + 2 + 3 = ?",
    area:"1️⃣ + 2️⃣ + 3️⃣ = ?",
    options:["5","6","7","8"],
    answer:1,
    hint:"तीनों numbers जोड़ो।",
    success:"🔢 सही! 6!"
  },

  // ================= LEVEL 48 =================
  {
    type:"drag",
    question:"🪙 सिक्का Treasure Box में डालो!",
    area:"",
    answer:"coin48",
    hint:"सिक्के को बॉक्स तक drag करो।",
    success:"🪙💰 Treasure मिल गया!"
  },

  // ================= LEVEL 49 =================
  {
    type:"tap",
    question:"🔍 छुपा हुआ crown ढूँढो!",
    area:"",
    answer:"crown49",
    hint:"चारों तरफ ध्यान से देखो।",
    success:"👑 वाह! Crown मिल गया!"
  },

  // ================= LEVEL 50 =================
  {
    type:"choice",
    question:"🏆 आखिरी सवाल! इस गेम में जीतने के लिए सबसे जरूरी क्या है?",
    area:"🧠 👀 ❤️",
    options:[
      "जल्दी करना",
      "Random answer देना",
      "ध्यान और दिमाग से खेलना",
      "Game बंद करना"
    ],
    answer:2,
    hint:"Tricky Puzzle में सबसे ताकतवर चीज तुम्हारा दिमाग है।",
    success:"🏆🔥 LEVEL 50 COMPLETE! तुम सच में कर सकते हो!"
  }

  ];

  // ======================================================
// LEVEL 51 - 100
// ======================================================

const extraPuzzles = [
  {
    type:"drag",
    question:"🚗 गाड़ी का टायर गायब है! कार को टकराने से बचाओ!",
    area:"",
    answer:"tire51",
    hint:"छत पर रखी गोल चीज को पहिए की जगह लगाओ!",
    success:"🍕 वाह! पिज्जा को ही टायर बना दिया!"
  },

  {
    type:"tap",
    question:"🐱 सोई हुई बिल्ली को जगाओ!",
    area:"",
    answer:"cloud52",
    hint:"बादलों को हटाकर सूरज की रोशनी बिल्ली पर लाओ।",
    success:"☀️ सूरज निकलते ही बिल्ली जाग गई!"
  },

  {
    type:"choice",
    question:"🍎 टोकरी में 3 सेब हैं, तुमने 2 ले लिए। अब तुम्हारे पास कितने सेब हैं?",
    area:"🍎 🍎 🍎",
    options:["1","2","3","0"],
    answer:1,
    hint:"तुमने खुद कितने उठाए?",
    success:"🧠 सही! 2 सेब तुम्हारे पास हैं!"
  },

  {
    type:"drag",
    question:"🔥 आग को बुझाओ!",
    area:"",
    answer:"water54",
    hint:"पानी की बाल्टी को आग के ऊपर drag करो।",
    success:"🌊 आग बुझ गई!"
  },

  {
    type:"choice",
    question:"📱 फोन को चार्ज करने के लिए क्या जोड़ना होगा?",
    area:"📱 🔌 🔋",
    options:["चार्जर","पानी","सूरज","किताब"],
    answer:0,
    hint:"इलेक्ट्रॉनिक चीज सोचो।",
    success:"🔌 सही! चार्जर!"
  },

  {
    type:"missing",
    question:"👀 कमरे में क्या गायब है?",
    area:"",
    options:["🪑 कुर्सी","🖼️ फ्रेम","💡 बल्ब","⏰ घड़ी"],
    answer:2,
    hint:"छत की तरफ देखो।",
    success:"💡 बिल्कुल सही! बल्ब गायब था!"
  },

  {
    type:"choice",
    question:"🧠 रात में आसमान में सबसे ज्यादा क्या चमकता है?",
    area:"🌌 🌙 ⭐",
    options:["सूरज","चाँद","टॉर्च","बल्ब"],
    answer:1,
    hint:"रात का राजा कौन है?",
    success:"🌙 सही! चाँद!"
  },

  {
    type:"tap",
    question:"🔍 सबसे भारी डंबल कौन सा है?",
    area:"",
    answer:"heavy58",
    hint:"बड़े साइज वाले डंबल को दबाओ।",
    success:"🏋️ बहुत मजबूत नजर है!"
  },

  {
    type:"drag",
    question:"🌱 पौधे को पानी दो ताकि फूल खिले!",
    area:"",
    answer:"can59",
    hint:"Watering Can को पौधे पर ले जाओ।",
    success:"🌸 सुंदर फूल खिल गया!"
  },

  {
    type:"choice",
    question:"🔢 5 + 5 × 0 कितना होगा?",
    area:"5 + 5 × 0 = ?",
    options:["0","5","10","25"],
    answer:1,
    hint:"पहले गुणा फिर जोड़।",
    success:"🧠 सही! जवाब 5 है!"
  },

  {
    type:"choice",
    question:"🐔 मुर्गी पहले आई या अंडा?",
    area:"🐔 🥚",
    options:["मुर्गी","अंडा","दोनों साथ में","गेम बनाने वाला"],
    answer:3,
    hint:"Tricky puzzle है!",
    success:"😂 सही! गेम बनाने वाले ने सबसे पहले code लिखा!"
  },

  {
    type:"drag",
    question:"🔑 तिजोरी को खोलो!",
    area:"",
    answer:"key62",
    hint:"चाबी को तिजोरी के लॉक पर रखो।",
    success:"💎 तिजोरी खुल गई!"
  },

  {
    type:"tap",
    question:"🎯 असली हीरा पहचानो!",
    area:"",
    answer:"diamond63",
    hint:"जो सबसे ज्यादा चमक रहा है उसे दबाओ।",
    success:"💎 शानदार पहचान!"
  },

  {
    type:"missing",
    question:"🔍 पार्क के सीन में क्या गायब है?",
    area:"",
    options:["⚽ फुटबॉल","🌳 पेड़","🦋 तितली","🐶 कुत्ता"],
    answer:0,
    hint:"घास पर ध्यान दो।",
    success:"⚽ फुटबॉल गायब थी!"
  },

  {
    type:"choice",
    question:"🧠 ऐसी कौन सी चीज है जो सूखी हो तो 1 किलो, गीली हो तो 2 किलो और जल जाए तो 3 किलो?",
    area:"🤔 ❓",
    options:["सल्फर","पानी","लकड़ी","बर्फ"],
    answer:0,
    hint:"साइंस की एक खास चीज...",
    success:"🧠 बिल्कुल सही!"
  },

  {
    type:"drag",
    question:"🐵 बंदर को केला खिलाओ!",
    area:"",
    answer:"banana66",
    hint:"केले को बंदर तक drag करो।",
    success:"🍌🐵 बंदर खुश हो गया!"
  },

  {
    type:"tap",
    question:"🎈 सबसे बड़ा गुब्बारा फोड़ो!",
    area:"",
    answer:"balloon67",
    hint:"सबसे बड़े गुब्बारे पर tap करो।",
    success:"💥 POP! सही गुब्बारा!"
  },

  {
    type:"choice",
    question:"🔢 99 के बाद क्या आता है?",
    area:"9️⃣ 9️⃣ ➡️ ❓",
    options:["98","100","101","1000"],
    answer:1,
    hint:"गिनती आगे बढ़ाओ।",
    success:"💯 सही! 100!"
  },

  {
    type:"drag",
    question:"🐟 मछली को वापस पानी में डालो!",
    area:"",
    answer:"fish69",
    hint:"मछली को तालाब तक ले जाओ।",
    success:"🌊🐟 मछली बच गई!"
  },

  {
    type:"choice",
    question:"🧠 कौन सा शब्द हमेशा 'गलत' ही लिखा जाता है?",
    area:"📝 ❓",
    options:["सही","गलत","दिमाग","शब्द"],
    answer:1,
    hint:"शब्द को खुद पढ़ो।",
    success:"😜 सही!"
  },

  {
    type:"tap",
    question:"🔍 इनमें से कौन सा पक्षी उड़ नहीं सकता?",
    area:"",
    answer:"penguin71",
    hint:"पेन्गुइन ढूँढो।",
    success:"🐧 सही! पेन्गुइन उड़ नहीं सकता!"
  },

  {
    type:"choice",
    question:"🧊 बर्फ पिघलकर क्या बनती है?",
    area:"🧊 ➡️ ❓",
    options:["भाप","पानी","आग","पत्थर"],
    answer:1,
    hint:"ठंडा तरल पदार्थ।",
    success:"💧 बिल्कुल सही! पानी!"
  },

  {
    type:"drag",
    question:"🕯️ मोमबत्ती को बुझाओ!",
    area:"",
    answer:"candle73",
    hint:"मोमबत्ती को ढक दो।",
    success:"🕯️ मोमबत्ती बुझ गई!"
  },

  {
    type:"missing",
    question:"👀 क्लासरूम में क्या गायब है?",
    area:"",
    options:["📑 डस्टर","📐 स्केल","🖍️ चॉक","🖊️ पेन"],
    answer:2,
    hint:"बोर्ड के पास देखो।",
    success:"🖍️ सही! चॉक गायब था!"
  },

  {
    type:"choice",
    question:"🧠 अगर 1 अंडा उबलने में 10 मिनट लेता है, तो 5 अंडे उबलने में कितना समय लेंगे?",
    area:"🥚 🥚 🥚 🥚 🥚",
    options:["50 मिनट","10 मिनट","25 मिनट","5 मिनट"],
    answer:1,
    hint:"सारे अंडे एक साथ उबल रहे हैं।",
    success:"😄 सही! 10 मिनट!"
  },

  {
    type:"tap",
    question:"🎯 4 पत्तियों वाला Lucky Clover दबाओ!",
    area:"",
    answer:"clover76",
    hint:"पत्तियों की गिनती करो।",
    success:"🍀 Lucky Clover मिल गया!"
  },

  {
    type:"drag",
    question:"🔋 बैटरी को रिमोट में लगाओ!",
    area:"",
    answer:"battery77",
    hint:"बैटरी को रिमोट तक drag करो।",
    success:"📺 TV चालू हो गया!"
  },

  {
    type:"choice",
    question:"🌞 सूरज किस दिशा में उगता है?",
    area:"☀️ 🧭",
    options:["पश्चिम","पूर्व","उत्तर","दक्षिण"],
    answer:1,
    hint:"दिशा याद करो।",
    success:"🌅 बिल्कुल सही! पूर्व!"
  },

  {
    type:"tap",
    question:"🔍 छुपा हुआ चूहा ढूँढो!",
    area:"",
    answer:"mouse79",
    hint:"Cheese के पीछे देखो।",
    success:"🐭 चूहा पकड़ा गया!"
  },

  {
    type:"choice",
    question:"🧠 जिसके पास आँखें नहीं हैं फिर भी रोता है और जिसके पास पंख नहीं हैं फिर भी उड़ता है?",
    area:"☁️ 🌧️ ❓",
    options:["पतंग","बादल","हवा","परिंदा"],
    answer:1,
    hint:"आसमान में बारिश कौन करता है?",
    success:"🌧️ सही! बादल!"
  },

  {
    type:"drag",
    question:"🍕 पिज्जा का टुकड़ा प्लेट में रखो!",
    area:"",
    answer:"pizza81",
    hint:"स्लाइस को प्लेट में drag करो।",
    success:"🍕🍽️ Yum!"
  },

  {
    type:"missing",
    question:"🏠 रसोई में क्या गायब है?",
    area:"",
    options:["🔪 चाकू","🍽️ प्लेट","🥄 चम्मच","🍳 कड़ाही"],
    answer:2,
    hint:"खाने की जगह देखो।",
    success:"🥄 चम्मच गायब था!"
  },

  {
    type:"choice",
    question:"🔢 10, 20, 30, 40, ?",
    area:"10 20 30 40 ❓",
    options:["45","50","60","100"],
    answer:1,
    hint:"10-10 जोड़ते जाओ।",
    success:"🔢 सही! 50!"
  },

  {
    type:"tap",
    question:"🎯 उल्लू को ढूँढकर tap करो!",
    area:"",
    answer:"owl84",
    hint:"पेड़ की डाल पर देखो।",
    success:"🦉 सही पकड़ा!"
  },

  {
    type:"choice",
    question:"🧠 ऐसा कौन सा फल है जो मीठा होने के बावजूद बाजार में नहीं बिकता?",
    area:"🍎 🍌 ❓",
    options:["आम","सबर का फल","अंगूर","केला"],
    answer:1,
    hint:"'सबर का फल मीठा होता है'।",
    success:"😄 सही! सबर का फल!"
  },

  {
    type:"drag",
    question:"🕶️ चश्मा दादाजी को पहनाओ!",
    area:"",
    answer:"glass86",
    hint:"चश्मे को दादाजी के चेहरे पर रखो।",
    success:"👓 अब दादाजी साफ देख सकते हैं!"
  },

  {
    type:"tap",
    question:"🔍 सबसे छोटी चींटी कौन सी है?",
    area:"",
    answer:"ant87",
    hint:"बारीक नजर से देखो।",
    success:"🐜 बहुत बढ़िया!"
  },

  {
    type:"choice",
    question:"🧠 कौन सी चीज काटने पर लोग गाना गाते हैं?",
    area:"🎂 🔪 🎵",
    options:["सेब","सब्जी","बर्थडे केक","रस्सी"],
    answer:2,
    hint:"Happy Birthday!",
    success:"🎂🎉 बिल्कुल सही!"
  },

  {
    type:"drag",
    question:"⚽ बॉल को गोल पोस्ट में डालो!",
    area:"",
    answer:"goal89",
    hint:"बॉल को नेट की तरफ drag करो।",
    success:"⚽🥅 GOAAAL!"
  },

  {
    type:"missing",
    question:"🔍 Beach scene में क्या गायब है?",
    area:"",
    options:["🏐 वॉलीबॉल","🏖️ छाता","🦀 केकड़ा","⛵ नाव"],
    answer:1,
    hint:"रेत पर बैठने की जगह देखो।",
    success:"🏖️ छाता गायब था!"
  },

  {
    type:"choice",
    question:"🔢 1, 3, 5, 7, ?",
    area:"1️⃣ 3️⃣ 5️⃣ 7️⃣ ❓",
    options:["8","9","10","11"],
    answer:1,
    hint:"विषम संख्याएँ चल रही हैं।",
    success:"🔢 सही! 9!"
  },

  {
    type:"tap",
    question:"🎯 सिर्फ उड़ने वाला हवाई जहाज दबाओ!",
    area:"",
    answer:"plane92",
    hint:"आसमान में उड़ती चीज ढूँढो।",
    success:"✈️ सही पकड़ा!"
  },

  {
    type:"drag",
    question:"🍔 बर्गर को पूरा बनाओ!",
    area:"",
    answer:"burger93",
    hint:"ऊपर वाला Bun बर्गर पर रखो।",
    success:"🍔 यम्मी बर्गर!"
  },

  {
    type:"choice",
    question:"🧠 वह क्या है जो बिना पैरों के भागता है और कभी वापस नहीं आता?",
    area:"⏳ ❓",
    options:["पानी","समय","हवा","गाड़ी"],
    answer:1,
    hint:"घड़ी टिक-टिक चलती है...",
    success:"⏰ बिल्कुल सही! समय!"
  },

  {
    type:"tap",
    question:"🔍 सबसे चमकीला तारा ढूँढो!",
    area:"",
    answer:"star95",
    hint:"सबसे चमकीले तारे पर tap करो।",
    success:"🌟 शाबाश!"
  },

  {
    type:"missing",
    question:"👀 स्पेस में क्या नहीं है?",
    area:"",
    options:["🚀 रॉकेट","🪐 ग्रह","☁️ बादल","⭐ तारे"],
    answer:2,
    hint:"बादल कहाँ होते हैं?",
    success:"☁️ सही!"
  },

  {
    type:"choice",
    question:"🧠 किस जानवर की जीभ काली/नीली होती है?",
    area:"🦒 🐘 🦁",
    options:["शेर","जिराफ","हाथी","घोड़ा"],
    answer:1,
    hint:"सबसे लंबी गर्दन वाला जानवर।",
    success:"🦒 बिल्कुल सही! जिराफ!"
  },

  {
    type:"drag",
    question:"🏆 ट्रॉफी को विजेता तक पहुँचाओ!",
    area:"",
    answer:"trophy98",
    hint:"ट्रॉफी को खिलाड़ी पर drag करो।",
    success:"🏆🥇 चैंपियन!"
  },

  {
    type:"tap",
    question:"🎯 असली चाबी ढूँढो!",
    area:"",
    answer:"key99",
    hint:"जिस चाबी का cut-out ताले से match करे।",
    success:"🔑 चाबी मिल गई!"
  },

  {
    type:"choice",
    question:"👑 100 Levels पूरे करने वाले हो! तुम्हारा दिमाग कैसा है?",
    area:"🧠 🔥 🏆",
    options:["साधारण","तेज","सुपर जीनियस!","पता नहीं"],
    answer:2,
    hint:"अपने आप पर भरोसा रखो!",
    success:"🎉🔥 100 LEVELS COMPLETE! तुम सच में सुपर जीनियस हो!"
  }
];


// ======================================================
// LEVEL 51-100 MAIN PUZZLES में जोड़ें
// ======================================================

puzzles.push(...extraPuzzles);


// ======================================================
// GAME DATA
// ======================================================

const defaultGame = {
  coins:100,
  lives:5,
  unlocked:1,
  completed:[],
  currentLevel:1
};


let gameData;

try{

  gameData =
    JSON.parse(
      localStorage.getItem("tumKarSakteHoGame")
    );

}catch(error){

  gameData=null;

}


if(!gameData){

  gameData={
    ...defaultGame
  };

}


// ======================================================
// IMPORTANT DATA SAFETY
// ======================================================

if(!Array.isArray(gameData.completed))
  gameData.completed=[];

if(typeof gameData.coins!=="number")
  gameData.coins=100;

if(typeof gameData.lives!=="number")
  gameData.lives=5;

if(typeof gameData.unlocked!=="number")
  gameData.unlocked=1;


// पुराना save हो तो Level 20 complete होने पर 21 unlock
if(gameData.completed.includes(20)){

  gameData.unlocked =
    Math.max(
      gameData.unlocked,
      21
    );

}


// Maximum Level 50
gameData.unlocked =
  Math.min(
    Math.max(gameData.unlocked,1),
    puzzles.length
  );


let currentPuzzle=null;
let currentLevel=1;
let hintUsed=false;


// ======================================================
// SAVE GAME
// ======================================================

function saveGame(){

  localStorage.setItem(
    "tumKarSakteHoGame",
    JSON.stringify(gameData)
  );

}


// ======================================================
// TOP BAR
// ======================================================

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


// ======================================================
// SCREEN
// ======================================================

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


// ======================================================
// LEVEL MAP
// ======================================================

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


    if(completed){

      button.classList.add(
        "completed"
      );

    }
    else if(unlocked){

      button.classList.add(
        "unlocked"
      );

    }
    else{

      button.classList.add(
        "locked"
      );

    }


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

      button.onclick =
        function(){

          startLevel(level);

        };

    }


    grid.appendChild(button);

  });

}


// ======================================================
// START LEVEL
// ======================================================

function startLevel(level){

  if(
    level<1 ||
    level>puzzles.length
  )
    return;


  if(
    level>
    gameData.unlocked
  ){

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


  const currentLevelEl =
    document.getElementById(
      "currentLevel"
    );

  const puzzleNumberEl =
    document.getElementById(
      "puzzleNumber"
    );

  const questionEl =
    document.getElementById(
      "question"
    );

  const area =
    document.getElementById(
      "puzzleArea"
    );

  const options =
    document.getElementById(
      "options"
    );


  if(!area || !options || !questionEl){

    console.error(
      "Game HTML elements missing."
    );

    return;

  }


  if(currentLevelEl)
    currentLevelEl.innerText=level;


  if(puzzleNumberEl)
    puzzleNumberEl.innerText=
      "Puzzle "+level;


  questionEl.innerText=
    currentPuzzle.question;


  area.innerHTML="";

  options.innerHTML="";


  area.style.position="relative";

  area.style.minHeight="190px";


  // ================= CHOICE =================

  if(
    currentPuzzle.type==="choice"
  ){

    area.innerText =
      currentPuzzle.area || "";


    currentPuzzle.options.forEach(
      function(option,index){

        const button =
          document.createElement(
            "button"
          );


        button.className=
          "option-btn";


        button.innerText=option;


        button.onclick =
          function(){

            checkAnswer(index);

          };


        options.appendChild(button);

      }
    );

  }


  // ================= DRAG =================

  if(
    currentPuzzle.type==="drag"
  ){

    createDragPuzzle(
      currentLevel,
      area
    );

  }


  // ================= TAP =================

  if(
    currentPuzzle.type==="tap"
  ){

    createTapPuzzle(
      currentLevel,
      area
    );

  }


  // ================= MISSING =================

  if(
    currentPuzzle.type==="missing"
  ){

    createMissingPuzzle(
      currentLevel,
      area,
      options
    );

  }


  const message =
    document.getElementById(
      "gameMessage"
    );


  if(message){

    message.innerText=
      "🤔 ध्यान से सोचो...";

  }


  showScreen("game");

}


// ======================================================
// DRAG PUZZLES
// ======================================================

function createDragPuzzle(level,area){

  area.style.position="relative";

  area.style.minHeight="220px";


  let item="🎁";
  let target="🎯";


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

  if(level===24){

    item="🍎";
    target="🧺";

  }

  if(level===32){

    item="🔑";
    target="🔒";

  }

  if(level===38){

    item="🎁";
    target="👦";

  }

  if(level===43){

    item="🌟";
    target="🌌";

  }

  if(level===48){

    item="🪙";
    target="📦";

  }


  const draggable =
    document.createElement("div");


  draggable.innerText=item;


  draggable.style.position=
    "absolute";

  draggable.style.left=
    "20px";

  draggable.style.top=
    "70px";

  draggable.style.fontSize=
    "55px";

  draggable.style.cursor=
    "grab";

  draggable.style.userSelect=
    "none";

  draggable.style.touchAction=
    "none";


  const dropZone =
    document.createElement("div");


  dropZone.innerText=target;


  dropZone.style.position=
    "absolute";

  dropZone.style.right=
    "25px";

  dropZone.style.top=
    "70px";

  dropZone.style.fontSize=
    "55px";

  dropZone.style.userSelect=
    "none";


  area.appendChild(draggable);

  area.appendChild(dropZone);


  // ================= PC DRAG =================

  draggable.addEventListener(
    "dragstart",
    function(event){

      event.dataTransfer.setData(
        "text/plain",
        "drag"
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


  // ================= MOBILE DRAG =================

  let dragging=false;


  draggable.addEventListener(
    "touchstart",
    function(event){

      dragging=true;

      draggable.style.transform=
        "scale(1.2)";

    },
    {passive:false}
  );


  const moveHandler =
    function(event){

      if(!dragging)
        return;


      event.preventDefault();


      const touch =
        event.touches[0];


      const rect =
        area.getBoundingClientRect();


      draggable.style.left =
        (
          touch.clientX -
          rect.left -
          27
        )+"px";


      draggable.style.top =
        (
          touch.clientY -
          rect.top -
          27
        )+"px";

    };


  const endHandler =
    function(){

      if(!dragging)
        return;


      dragging=false;


      draggable.style.transform=
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


// ======================================================
// TAP PUZZLES
// ======================================================

function createTapPuzzle(level,area){

  area.style.position="relative";

  area.style.minHeight="200px";


  // ================= LEVEL 4 =================

  if(level===4){

    area.innerHTML=`

      <div style="
        position:absolute;
        left:20px;
        top:40px;
        font-size:48px;
      ">
        🌳 🌳 🌳
      </div>

      <button
        id="hiddenStar"
        style="
          position:absolute;
          right:20px;
          bottom:15px;
          border:0;
          background:transparent;
          font-size:22px;
          opacity:.3;
        "
      >
        ⭐
      </button>

    `;


    document.getElementById(
      "hiddenStar"
    ).onclick =
      function(){

        completeLevel();

      };

  }


  // ================= LEVEL 8 =================

  else if(level===8){

    const balls=[
      "🔵",
      "🟢",
      "🔴",
      "🟡"
    ];


    balls.forEach(
      function(ball){

        createTapButton(
          area,
          ball,
          function(){

            if(ball==="🔴")
              completeLevel();
            else
              wrongAnswer();

          }
        );

      }
    );

  }


  // ================= LEVEL 12 =================

  else if(level===12){

    const eyes=[
      "👁️",
      "👁️",
      "👀",
      "👁️"
    ];


    eyes.forEach(
      function(eye,index){

        createTapButton(
          area,
          eye,
          function(){

            if(index===2)
              completeLevel();
            else
              wrongAnswer();

          }
        );

      }
    );

  }


  // ================= LEVEL 15 =================

  else if(level===15){

    const dogs=[
      "🐶",
      "🐶",
      "🐕",
      "🐶"
    ];


    dogs.forEach(
      function(dog,index){

        createTapButton(
          area,
          dog,
          function(){

            if(index===2)
              completeLevel();
            else
              wrongAnswer();

          }
        );

      }
    );

  }


  // ================= LEVEL 19 =================

  else if(level===19){

    const colors=[
      "🔵",
      "🟢",
      "🟡",
      "🔴",
      "🟣"
    ];


    colors.forEach(
      function(color){

        createTapButton(
          area,
          color,
          function(){

            if(color==="🔴")
              completeLevel();
            else
              wrongAnswer();

          }
        );

      }
    );

  }


  // ================= LEVEL 23 =================

  else if(level===23){

    const items=[
      "🍎",
      "🍎",
      "🍏",
      "🍎",
      "🍎"
    ];


    items.forEach(
      function(item,index){

        createTapButton(
          area,
          item,
          function(){

            if(index===2)
              completeLevel();
            else
              wrongAnswer();

          }
        );

      }
    );

  }


  // ================= LEVEL 28 =================

  else if(level===28){

    const items=[
      "🔴",
      "🟢",
      "🔵",
      "🟡"
    ];


    items.forEach(
      function(item){

        createTapButton(
          area,
          item,
          function(){

            if(item==="🔵")
              completeLevel();
            else
              wrongAnswer();

          }
        );

      }
    );

  }


  // ================= LEVEL 31 =================

  else if(level===31){

    const items=[
      "⭐",
      "⭐",
      "🌟",
      "⭐",
      "⭐"
    ];


    items.forEach(
      function(item,index){

        createTapButton(
          area,
          item,
          function(){

            if(index===2)
              completeLevel();
            else
              wrongAnswer();

          }
        );

      }
    );

  }


  // ================= LEVEL 36 =================

  else if(level===36){

    const items=[
      "🍎",
      "🍏",
      "🍎",
      "🍎"
    ];


    items.forEach(
      function(item,index){

        createTapButton(
          area,
          item,
          function(){

            if(index===1)
              completeLevel();
            else
              wrongAnswer();

          }
        );

      }
    );

  }


  // ================= LEVEL 41 =================

  else if(level===41){

    const items=[
      "🔵",
      "🔵",
      "🟣",
      "🔵",
      "🔵"
    ];


    items.forEach(
      function(item,index){

        createTapButton(
          area,
          item,
          function(){

            if(index===2)
              completeLevel();
            else
              wrongAnswer();

          }
        );

      }
    );

  }


  // ================= LEVEL 45 =================

  else if(level===45){

    const items=[
      "⭐",
      "❤️",
      "⭐",
      "⭐",
      "⭐"
    ];


    items.forEach(
      function(item,index){

        createTapButton(
          area,
          item,
          function(){

            if(index===1)
              completeLevel();
            else
              wrongAnswer();

          }
        );

      }
    );

  }


  // ================= LEVEL 49 =================

  else if(level===49){

    area.innerHTML=`

      <div style="
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        gap:18px;
        padding:20px;
      ">

        <button class="tap49">⭐</button>
        <button class="tap49">🌙</button>
        <button class="tap49">🌈</button>
        <button id="crown49" class="tap49">👑</button>
        <button class="tap49">☀️</button>

      </div>

    `;


    document
      .querySelectorAll(".tap49")
      .forEach(
        function(button){

          button.style.border="0";
          button.style.background=
            "transparent";
          button.style.fontSize="48px";


          button.onclick=
            function(){

              if(button.id==="crown49")
                completeLevel();
              else
                wrongAnswer();

            };

        }
      );

  }

}


// ======================================================
// TAP BUTTON HELPER
// ======================================================

function createTapButton(
  area,
  text,
  callback
){

  const button =
    document.createElement(
      "button"
    );


  button.innerText=text;


  button.style.border="0";

  button.style.background=
    "transparent";

  button.style.fontSize=
    "48px";

  button.style.cursor=
    "pointer";

  button.style.padding=
    "10px";


  button.onclick=callback;


  area.appendChild(button);

}


// ======================================================
// MISSING OBJECT PUZZLE
// ======================================================

function createMissingPuzzle(
  level,
  area,
  options
){

  area.style.position="relative";

  area.style.minHeight="240px";


  let scene="";


  // ================= LEVEL 21 =================

  if(level===21){

    scene=`

      <div style="
        width:100%;
        height:220px;
        border-radius:20px;
        background:
          linear-gradient(
            #bde7ff 0 60%,
            #8bd17c 60%
          );
        position:relative;
        overflow:hidden;
      ">

        <div style="
          position:absolute;
          top:10px;
          right:20px;
          font-size:40px;
        ">☀️</div>

        <div style="
          position:absolute;
          left:20px;
          bottom:15px;
          font-size:50px;
        ">🌳</div>

        <div style="
          position:absolute;
          left:80px;
          bottom:15px;
          font-size:45px;
        ">🌳</div>

        <div style="
          position:absolute;
          left:42%;
          bottom:15px;
          font-size:52px;
        ">🏠</div>

        <div style="
          position:absolute;
          right:80px;
          bottom:18px;
          font-size:38px;
        ">🌸</div>

        <div style="
          position:absolute;
          right:20px;
          bottom:15px;
          font-size:46px;
        ">🐶</div>

        <div style="
          position:absolute;
          left:50%;
          top:55px;
          font-size:30px;
        ">🦋</div>

      </div>

    `;

  }


  // ================= LEVEL 26 =================

  else if(level===26){

    scene=`

      <div style="
        width:100%;
        height:220px;
        border-radius:20px;
        background:
          linear-gradient(
            #bde7ff 0 60%,
            #8bd17c 60%
          );
        position:relative;
        overflow:hidden;
      ">

        <div style="
          position:absolute;
          top:10px;
          left:20px;
          font-size:42px;
        ">☀️</div>

        <div style="
          position:absolute;
          left:20px;
          bottom:15px;
          font-size:50px;
        ">🌳</div>

        <div style="
          position:absolute;
          left:42%;
          bottom:15px;
          font-size:52px;
        ">🏠</div>

        <div style="
          position:absolute;
          right:30px;
          bottom:15px;
          font-size:42px;
        ">🌸</div>

      </div>

    `;

  }


  // ================= LEVEL 34 =================

  else if(level===34){

    scene=`

      <div style="
        width:100%;
        height:220px;
        border-radius:20px;
        background:
          linear-gradient(
            #9edcff 0 45%,
            #57b7e8 45% 100%
          );
        position:relative;
        overflow:hidden;
      ">

        <div style="
          position:absolute;
          top:10px;
          right:20px;
          font-size:42px;
        ">☀️</div>

        <div style="
          position:absolute;
          left:25px;
          bottom:15px;
          font-size:50px;
        ">🌳</div>

        <div style="
          position:absolute;
          left:45%;
          bottom:30px;
          font-size:50px;
        ">🏠</div>

        <div style="
          position:absolute;
          right:30px;
          bottom:20px;
          font-size:40px;
        ">🌸</div>

      </div>

    `;

  }


  // ================= LEVEL 40 =================

  else if(level===40){

    scene=`

      <div style="
        width:100%;
        height:220px;
        border-radius:20px;
        background:
          linear-gradient(
            #bde7ff 0 60%,
            #8bd17c 60%
          );
        position:relative;
        overflow:hidden;
      ">

        <div style="
          position:absolute;
          top:10px;
          left:20px;
          font-size:42px;
        ">☀️</div>

        <div style="
          position:absolute;
          left:25px;
          bottom:15px;
          font-size:50px;
        ">🌳</div>

        <div style="
          position:absolute;
          left:43%;
          bottom:15px;
          font-size:52px;
        ">🏠</div>

        <div style="
          position:absolute;
          right:25px;
          bottom:15px;
          font-size:40px;
        ">🌸</div>

      </div>

    `;

  }


  // ================= LEVEL 46 =================

  else if(level===46){

    scene=`

      <div style="
        width:100%;
        height:220px;
        border-radius:20px;
        background:
          linear-gradient(
            #bde7ff 0 60%,
            #8bd17c 60%
          );
        position:relative;
        overflow:hidden;
      ">

        <div style="
          position:absolute;
          top:10px;
          right:20px;
          font-size:42px;
        ">☀️</div>

        <div style="
          position:absolute;
          left:25px;
          bottom:15px;
          font-size:50px;
        ">🌳</div>

        <div style="
          position:absolute;
          left:42%;
          bottom:15px;
          font-size:52px;
        ">🏠</div>

        <div style="
          position:absolute;
          right:30px;
          bottom:15px;
          font-size:40px;
        ">🌸</div>

      </div>

    `;

  }


  area.innerHTML=scene;


  // ===============================
  // OPTIONS
  // ===============================

  options.innerHTML="";


  currentPuzzle.options.forEach(
    function(option,index){

      const button =
        document.createElement(
          "button"
        );


      button.className=
        "option-btn";


      button.innerText=option;


      button.onclick=
        function(){

          if(
            index===
            currentPuzzle.answer
          ){

            completeLevel();

          }
          else{

            wrongAnswer();

          }

        };


      options.appendChild(button);

    }
  );

}


// ======================================================
// CHECK ANSWER
// ======================================================

function checkAnswer(selected){

  if(!currentPuzzle)
    return;


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


// ======================================================
// WRONG ANSWER
// NO VIBRATION
// ======================================================

function wrongAnswer(){

  const card =
    document.querySelector(
      ".game-card"
    );


  if(card){

    card.classList.remove(
      "wrong-shake"
    );


    void card.offsetWidth;


    card.classList.add(
      "wrong-shake"
    );

  }


  // ================= SOUND =================

  const wrongSound =
    document.getElementById(
      "wrongSound"
    );


  if(wrongSound){

    wrongSound.currentTime=0;

    wrongSound
      .play()
      .catch(
        function(){}
      );

  }


  // ================= LIFE =================

  gameData.lives--;


  if(gameData.lives<0)
    gameData.lives=0;


  updateTop();

  saveGame();


  const message =
    document.getElementById(
      "gameMessage"
    );


  if(message){

    if(gameData.lives>0){

      message.innerText=
        "😄 ओहो! गलत जवाब... फिर से सोचो!";

    }
    else{

      message.innerText=
        "💔 सारी Lives खत्म हो गईं!";

    }

  }


  // ================= GAME OVER =================

  if(gameData.lives<=0){

    setTimeout(
      function(){

        showScreen("gameover");

      },
      700
    );

  }

}


// ======================================================
// COMPLETE LEVEL
// ======================================================

function completeLevel(){

  if(!currentPuzzle)
    return;


  // ================= CELEBRATION =================

  showVictoryCelebration();


  // ================= WIN SOUND =================

  const winSound =
    document.getElementById(
      "winSound"
    );


  if(winSound){

    winSound.currentTime=0;

    winSound
      .play()
      .catch(
        function(){}
      );

  }


  // ================= ALREADY COMPLETE =================

  const alreadyCompleted =
    gameData.completed.includes(
      currentLevel
    );


  let stars=3;


  if(hintUsed)
    stars=2;


  // ================= REWARD =================

  if(!alreadyCompleted){

    gameData.completed.push(
      currentLevel
    );

    gameData.coins+=20;

  }


  // ================= UNLOCK NEXT =================

  if(
    currentLevel===
    gameData.unlocked
  ){

    if(
      gameData.unlocked<
      puzzles.length
    ){

      gameData.unlocked++;

    }

  }


  // ================= SAVE =================

  gameData.currentLevel=
    currentLevel;


  saveGame();

  updateTop();


  // ================= RESULT =================

  const resultTitle =
    document.getElementById(
      "resultTitle"
    );


  const resultText =
    document.getElementById(
      "resultText"
    );


  if(resultTitle){

    resultTitle.innerText=
      "🎉 LEVEL COMPLETE!";

  }


  if(resultText){

    resultText.innerText=
      currentPuzzle.success;

  }


  const result =
    document.getElementById(
      "result"
    );


  if(result){

    const reward =
      result.querySelector(
        ".reward"
      );


    if(reward){

      reward.innerText=
        "⭐".repeat(stars)+
        "  🪙 +20 Coins";

    }

  }


  showScreen("result");

}


// ======================================================
// NEXT LEVEL
// ======================================================

function nextLevel(){

  if(
    currentLevel<
    puzzles.length
  ){

    const next=
      currentLevel+1;


    if(
      next<=gameData.unlocked
    ){

      startLevel(next);

    }
    else{

      showScreen("levels");

    }

  }
  else{

    showScreen("levels");

  }

}


// ======================================================
// HINT
// ======================================================

function useHint(){

  if(!currentPuzzle)
    return;


  if(hintUsed){

    const message =
      document.getElementById(
        "gameMessage"
      );


    if(message){

      message.innerText=
        "💡 Hint पहले ही इस्तेमाल हो चुका है।";

    }


    return;

  }


  if(gameData.coins<20){

    const message =
      document.getElementById(
        "gameMessage"
      );


    if(message){

      message.innerText=
        "❌ Hint के लिए 20 Coins चाहिए।";

    }


    return;

  }


  gameData.coins-=20;

  hintUsed=true;


  saveGame();

  updateTop();


  const message =
    document.getElementById(
      "gameMessage"
    );


  if(message){

    message.innerText=
      "💡 Hint: "+
      currentPuzzle.hint;

  }

}


// ======================================================
// SKIP LEVEL
// ======================================================

function skipLevel(){

  if(gameData.coins<30){

    const message =
      document.getElementById(
        "gameMessage"
      );


    if(message){

      message.innerText=
        "❌ Skip के लिए 30 Coins चाहिए।";

    }


    return;

  }


  gameData.coins-=30;


  if(
    currentLevel===
    gameData.unlocked
  ){

    if(
      gameData.unlocked<
      puzzles.length
    ){

      gameData.unlocked++;

    }

  }


  saveGame();

  updateTop();


  const message =
    document.getElementById(
      "gameMessage"
    );


  if(message){

    message.innerText=
      "⏭️ Level Skip!";

  }


  setTimeout(
    function(){

      if(
        currentLevel<
        puzzles.length
      ){

        startLevel(
          currentLevel+1
        );

      }

    },
    500
  );

}


// ======================================================
// RESTORE LIVES
// ======================================================

function restoreLives(){

  gameData.lives=5;

  saveGame();

  updateTop();

  showScreen("levels");

}


// ======================================================
// RESET GAME
// ======================================================

function resetGame(){

  if(
    !confirm(
      "पूरा Game Reset करना है?"
    )
  )
    return;


  gameData={
    ...defaultGame
  };


  currentLevel=1;

  currentPuzzle=null;

  hintUsed=false;


  saveGame();

  updateTop();

  showScreen("home");

}


// ======================================================
// VICTORY CELEBRATION
// ======================================================

function showVictoryCelebration(){

  const container =
    document.getElementById(
      "victoryCelebration"
    );


  if(!container)
    return;


  container.innerHTML="";


  // 🎉 BIG POP

  const pop =
    document.createElement("div");


  pop.className=
    "victory-pop";


  pop.innerText="🎉";


  container.appendChild(pop);


  // 🎊 CONFETTI

  for(
    let i=0;
    i<45;
    i++
  ){

    const piece =
      document.createElement(
        "div"
      );


    piece.className=
      "confetti-piece";


    piece.style.left=
      Math.random()*100+
      "%";


    piece.style.animationDelay=
      Math.random()*.5+
      "s";


    piece.style.transform=
      "rotate("+
      Math.random()*360+
      "deg)";


    container.appendChild(
      piece
    );

  }


  setTimeout(
    function(){

      container.innerHTML="";

    },
    2500
  );

}


// ======================================================
// START GAME
// ======================================================

document.addEventListener(
  "DOMContentLoaded",
  function(){

    // पुराने save से Level 21 fix
    if(
      gameData.completed.includes(20)
    ){

      gameData.unlocked=
        Math.max(
          gameData.unlocked,
          21
        );

    }


    saveGame();

    updateTop();

    renderLevels();

  }
);

// ===============================
// BACKGROUND MUSIC
// ===============================

const backgroundMusic =
  document.getElementById("backgroundMusic");

function startBackgroundMusic() {

  if (!backgroundMusic)
    return;

  backgroundMusic.volume = 0.12;

  backgroundMusic.play().catch(() => {
    // Browser autoplay को रोक सकता है
  });

}


// Game में पहली user click/touch पर music शुरू
document.addEventListener(
  "click",
  function startMusicOnce() {

    startBackgroundMusic();

    document.removeEventListener(
      "click",
      startMusicOnce
    );

  },
  { once: true }
);

