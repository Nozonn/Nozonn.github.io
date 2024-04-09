// ========================== MENU ==================================

// méthod trim() to delete the blank space begin and after the word

function showWords(verbs, classDiv, titleTxt, idListChosen, headerId, idLabelVbFr, idLabelColumnVbIrr, entryUserVerb, btnValidation, scoreId, nbrVerbsId) {
    let verbsFr = [];
    for (key in verbs) {verbsFr.push(key.trim())};

    let div = document.querySelector(classDiv);
    let title = document.createElement("h1");
    title.innerHTML = titleTxt;
    div.appendChild(title);

    for (let verbFr in verbsFr) {
        let vbFr = verbsFr[verbFr];
        
        let inf = verbs[vbFr][0];
        let preterit = verbs[vbFr][1];
        let pastPart = verbs[vbFr][2];

        let formsVb = vbFr+" : "+inf+", "+preterit+", "+pastPart;

        let liVb = document.createElement("li");
        liVb.innerHTML = formsVb;
        div.appendChild(liVb);
    }

    div.addEventListener("click", 
        () => {    
            showPage(verbsFr, idListChosen, headerId)
            showItems(verbsFr, idLabelVbFr, idLabelColumnVbIrr, scoreId, nbrVerbsId);
            events(verbs, entryUserVerb, btnValidation, idLabelVbFr, idLabelColumnVbIrr)
        });
}

function  showPage(verbsFr, idListChosen, headerId) {
    document.querySelector(".Menu").setAttribute("style", "display:none");
    document.querySelector(idListChosen).setAttribute("style", "display:block");

    const goMenu = document.querySelector(headerId);

    goMenu.addEventListener("click", 
        () => {
            document.querySelector(idListChosen).setAttribute("style", "display:none");
            document.querySelector(".Menu").setAttribute("style", "display:block");
        });

    nbrWordTotal = verbsFr.length
}

function showItems(listVbFr, idLabelVbFr, idLabelColumnVbIrr, scoreId, nbrVerbsId) {
    const labelVbFr = document.querySelector(idLabelVbFr);
    const labelColumn = document.querySelector(idLabelColumnVbIrr);
    const nbrVb = document.querySelector(nbrVerbsId);
    const labelScore = document.querySelector(scoreId);

    currentList = listVbFr;
    form = columnVbIrr[0];
    let vbLeft = currentList.length;
    let score = nbrWordTotal - vbLeft - wrongAnswer.length
    

    if (currentList.length != 0) {
        let idx = Math.floor(Math.random() * currentList.length);
        choice = currentList[idx];

        nbrVb.innerHTML = nbrWordTotal - vbLeft + 1 + " / " + nbrWordTotal
        labelScore.innerHTML = "Score : " + score + " / " + nbrWordTotal

        labelVbFr.innerHTML = choice; 
        labelColumn.innerHTML = form;

    } else {
        labelVbFr.innerHTML = "END";
        labelColumn.innerHTML = "";

        const answerfield = document.querySelector(".answer");
        answerfield.setAttribute("style", "display:flex; justify-content:center; align-items:center");

        const entry = document.querySelector(".formEntry");
        entry.setAttribute("style", "display:none");

    }
    
}

function events(verbs, entryUserVerb, btnValidation, idLabelVbFr, idLabelColumnVbIrr) {
    // Events
    const userVerb = document.querySelector(entryUserVerb);
    const submit = document.querySelector(btnValidation);
    

    submit.addEventListener("click", 
        () => {validateEntry(verbs, userVerb, idLabelVbFr, idLabelColumnVbIrr)});

    userVerb.onkeydown = (event) =>  {
        if (event.key=="Enter" || event=="13") {validateEntry(verbs, userVerb, idLabelVbFr, idLabelColumnVbIrr)};
    };
}


function validateEntry(verbs, entryUserVerb, idLabelVbFr, idLabelColumnVbIrr) {
    let value = entryUserVerb.value.trim();

    if (value != "") {
        entryUserVerb.value = "";
        comparaisonIsGood(verbs, value, idLabelVbFr, idLabelColumnVbIrr);

    } else {
        entryUserVerb.setAttribute("style", "border-color: red");
    }
    
}


function comparaisonIsGood(verbs, entryValue, idLabelVbFr, idLabelColumnVbIrr) {
    entryValue = entryValue.toLowerCase();
    const labelColumnVbIrr = document.querySelector(idLabelColumnVbIrr);

    switch (form) {
        case "Infinitif":
            if (verbs[choice][0].trim() == entryValue) {
                form = columnVbIrr[1];
            } else {
                alert("You have wrong !!!! :(");
                wrongAnswer.push(choice);
                form = columnVbIrr[0];
            } break

        case "Prétérit":
            if (verbs[choice][1].trim() == entryValue) {       
                form = columnVbIrr[2];
            } else {
                alert("You have wrong !!!! :(")
                wrongAnswer.push(choice);
                form = columnVbIrr[0];
            } break
        
        case "Past participe":
            if (verbs[choice][2].trim() == entryValue) {
                form = columnVbIrr[0];
    
                currentList = currentList.filter( (verb) => verb != choice );
                wrongAnswer = [...new Set(wrongAnswer)];
                showItems(currentList, idLabelVbFr, idLabelColumnVbIrr);
                return
            } else {
                alert("You have wrong !!!! :(");
                wrongAnswer.push(choice);
                form = columnVbIrr[0];
            } break
    }
    labelColumnVbIrr.innerHTML = form;
}


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


// ========================== LIST 3 ================================
const verbs3 = {
    "obtenir" : ["to get", "got", "got"],
    "donner" : ["to give", "gave", "given"],
    "aller" : ["to go", "went", "gone"],
    "cultiver, pousser, grandir" : ["to grow", "grew", "grown"],
    "avoir" : ["to have", "had ", "had "],
    "entendre" : ["to hear", "heard ", "heard "],
    "cacher" : ["to hide", "hid ", "hidden "],
    "frapper" : ["to hit", "hit ", "hit "],
    "tenir" : ["to hold", "held", "held "],
    "faire mal" : ["to hurt", "hurt ", "hurt "],
    "garder" : ["to keep", "kept ", "kept "],
    "s'agenouiller" : ["to kneel", "knelt ", "knelt "],
    "tricoter (2 forms)" : ["to knit", "knit ", "knit "],
    "connaître, savoir" : ["to know", "knew ", "known "],
    "étendre" : ["to lay", "laid ", "laid "],
    "conduire, mener" : ["to lead", "led ", "led "],
    "sauter (2 forms)" : ["to leap", "leapt ", "leapt "],
    "apprendre (2 forms)" : ["to learn", "learnt ", "learnt "],
    "quitter, laisser" : ["to leave", "left ", "left "],
    "prêter" : ["to lend", "lent ", "lent "],
    "laisser" : ["to let", "let ", "let "],
    "être étendu" : ["to lie", "lay ", "lain "],
    "allumer (2 forms)" : ["to light", "lit ", "lit "],
    "perdre" : ["to lose", "lost ", "lost "],
};


// ========================== LIST 4 ================================
const verbs4 = {
    "fabriquer, faire" : ["to make", "made", "made"],
    "signifier" : ["to mean", "meant", "meant"],
    "rencontrer" : ["to meet", "met", "met"],
    "payer" : ["to pay", "paid", "paid"],
    "mettre" : ["to put", "put", "put"],
    "lire" : ["to read", "read", "read"],
    "aller en vélo, à cheval" : ["to ride", "rode", "ridden"],
    "sonner, téléphoner" : ["to ring", "rang", "rung"],
    "se lever" : ["to rise", "rose", "risen"],
    "courir" : ["to run", "ran", "run"],
    "dire" : ["to say", "said", "said"],
    "voir" : ["to see", "saw", "seen"],
    "vendre" : ["to sell", "sold", "sold"],
    "envoyer" : ["to send", "sent", "sent"],
    "placer" : ["to set", "set", "set"],
    "secouer" : ["to shake", "shook", "shaken"],
    "briller" : ["to shine", "shone", "shone"],
    "tirer (arme)" : ["to shoot", "shot", "shot"],
    "montrer" : ["to show", "showed", "shown"],
    "fermer" : ["to shut", "shut", "shut"],
    "chanter" : ["to sing", "sang", "sung"],
    "sombrer" : ["to sink", "sank", "sunk"],
    "être assis" : ["to sit", "sat", "sat"],
    "dormir" : ["to sleep", "slept", "slept"],
    "glisser" : ["to slide", "slid", "slid"],
    "sentir (2 forms)" : ["to smell", "smelt", "smelt"],
};


// ========================== LIST 5 ================================

const verbs5 = {
    "parler" : ["to speak", "spoke", "spoken"],
    "épeler (2 forms)" : ["to spell", "spelt", "spelt"],
    "dépenser, passer du temps" : ["to spend", "spent", "spent"],
    "gâter (2 forms)" : ["to spoil", "spoilt", "spoilt"],
    "(s') étendre" : ["to spread", "spread", "spread"],
    "être debout" : ["to stand", "stood", "stood"],
    "voler (dérober des choses)" : ["to steal", "stole", "stolen"],
    "coller" : ["to stick", "stuck", "stuck"],
    "jurer" : ["to swear", "swore", "sworn"],
    "balayer" : ["to sweep", "swept", "swept"],
    "nager" : ["to swim", "swam", "swum"],
    "prendre" : ["to take", "took", "taken"],
    "enseigner" : ["to teach", "taught", "taught"],
    "déchirer" : ["to tear", "tore", "torn"],
    "raconter" : ["to tell", "told", "told"],
    "penser" : ["to think", "thought", "thought"],
    "jeter" : ["to throw", "threw", "thrown"],
    "comprendre" : ["to understand", "understood", "understood"],
    "renverser, bouleverser" : ["to upset", "upset", "upset"],
    "s'éveiller, éveiller (2 forms)" : ["to wake", "woke", "woken"],
    "porter un vêtement" : ["to wear", "wore", "worn"],
    "pleurer" : ["to weep", "wept", "wept"],
    "gagner" : ["to win", "won", "won"],
    "écrire" : ["to write", "wrote", "written"],
};

// ==================================================================

const columnVbIrr= [
    "Infinitif",
    "Prétérit",
    "Past participe",
];


let nbrWordTotal;
let currentList;
let form;
let choice;
let wrongAnswer = [];

showWords(verbs1, ".verbs1", "List 1", "#list1", "#header1", "#labelVbFr1", "#ColumnVbIrr1", "#userVerb1", "#submit1", "#score1", "#nbrVb1");
showWords(verbs2, ".verbs2", "List 2", "#list2", "#header2", "#labelVbFr2", "#ColumnVbIrr2", "#userVerb2", "#submit2", "#score2", "#nbrVb2");
showWords(verbs3, ".verbs3", "List 3", "#list3", "#header3", "#labelVbFr3", "#ColumnVbIrr3", "#userVerb3", "#submit3", "#score3", "#nbrVb3");
showWords(verbs4, ".verbs4", "List 4", "#list4", "#header4", "#labelVbFr4", "#ColumnVbIrr4", "#userVerb4", "#submit4", "#score4", "#nbrVb4");
showWords(verbs5, ".verbs5", "List 5", "#list5", "#header5", "#labelVbFr5", "#ColumnVbIrr5", "#userVerb5", "#submit5", "#score5", "#nbrVb5");

// ==================================================================

