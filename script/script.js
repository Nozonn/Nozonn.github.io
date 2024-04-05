// ========================== LIST 1 ================================

const verbs1 = {
    "s'éveiller / se réveiller": ["to awake", "awoke", "awoken"],
    "être": ["to be", "was/were", "been"],
    "supporter": ["to bear", "bore", "borne"],
    "battre": ["to beat", "beat", "beaten"],
    "devenir": ["to become", "became","become"],
    "commencer": ["to begin", "began","begun"],
    "plier": ["to bend",  "bent ", "bent"],
    "parier": ["to bet", "bet", "bet"],
    "mordre": ["to bite", "bit", "bitten"],
    "saigner": ["to bleed", "bled", "bled"],
    "souffler": ["to blow",  "blew", "blown"],
    "casser": ["to break",  "broke", "broken"],
    "élever": ["to breed", "bred", "bred"],
    "apporter": ["to bring", "brought", "brought"],
    "construire": ["to build", "built", "built"],
    "brûler": ["to burn", "burnt", "burnt"],
    "éclater": ["to burst", "burst", "burst"],
    "acheter": ["to buy", "bought", "bought"],
};



let verbsFr1 = [];
for (let key in verbs1) {
    verbsFr1.push(key);
}

const size = verbsFr1.length;


const divVerbs1 = document.querySelector(".verbs1");

let subtitle1 = document.createElement("h1");
subtitle1.innerHTML = "List 1";
divVerbs1.appendChild(subtitle1);

for (let verbFr in verbsFr1) {
    let frenchVb1 = verbsFr1
[verbFr];
    let verbesIrr1 = frenchVb1 + " : " + verbs1[frenchVb1][0] + ", ";
    verbesIrr1 = verbesIrr1 + verbs1[frenchVb1][1] + ", " + verbs1[frenchVb1][2];
    
    let listVbFr1 = document.createElement("li");
    listVbFr1.innerHTML = verbesIrr1;
    divVerbs1.appendChild(listVbFr1);
}


const clickList1 = () => alert("You cliked the LIST 1!");
divVerbs1.addEventListener("click", clickList1);


// ========================== LIST 2 ================================


const verbs2 = {
    "attraper" : ["to catch", "caught", "caught"],
    "choisir" : ["to choose", "chose", "chosen"],
    "venir" : ["to come", "came", "come"],
    "coûter" : ["to cost", "cost", "cost"],
    "couper" : ["to cut", "cut", "cut"],
    "distribuer, conclure une affaire" : ["to deal", "dealt", "dealt"],
    "creuser, bêcher" : ["to dig", "dug", "dug"],
    "faire" : ["to do", "did", "done"],
    "dessiner" : ["to draw", "drew", "drawn"],
    "rêver (2 forms)" : ["to dream", "dreamt", "dreamt"],
    "boire" : ["to drink", "drank", "drunk"],
    "conduire" : ["to drive", "drove", "driven"],
    "manger" : ["to eat", "ate", "eaten"],
    "tomber" : ["to fall", "fell", "fallen"],
    "nourrir" : ["to feed", "fed", "fed"],
    "se sentir" : ["to feel", "felt", "felt"],
    "se battre" : ["to fight", "fought", "fought"],
    "trouver" : ["to find", "found", "found"],
    "s'enfuir" : ["to flee", "fled", "fled"],
    "voler" : ["to fly", "flew", "flown"],
    "interdire" : ["to forbid", "forbade", "forbidden"],
    "oublier" : ["to forget", "forgot", "forgotten"],
    "geler" : ["to freeze", "froze", "frozen"],
};


let verbsFr2 = [];
for (let key in verbs2) {
    verbsFr2.push(key);
}

const divVerbs2 = document.querySelector(".verbs2");

let subtitle2 = document.createElement("h1");
subtitle2.innerHTML = "List 2";
divVerbs2.appendChild(subtitle2);

for (let verbFr in verbsFr2) {
    let frenchVb2 = verbsFr2[verbFr];
    let verbesIrr2 = frenchVb2 + " : " + verbs2[frenchVb2][0] + ", ";
    verbesIrr2 = verbesIrr2 + verbs2[frenchVb2][1] + ", " + verbs2[frenchVb2][2];
    
    let listVbFr2 = document.createElement("li");
    listVbFr2.innerHTML = verbesIrr2;
    divVerbs2.appendChild(listVbFr2);
}


const clickList2 = () => alert("You cliked the LIST 2!");
divVerbs2.addEventListener("click", clickList2);