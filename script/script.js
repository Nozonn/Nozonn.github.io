// ========================== MENU ==================================

// méthod trim() to delete the blank space begin and after the word

function showWords(verbs, classDiv, titleTxt, idListChosen, idLabelVbFr, idLabelColumnVbIrr, entryUserVerb, btnValidation) {
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
            showPage(idListChosen)
            showItems(verbsFr, idLabelVbFr, idLabelColumnVbIrr);
            events(verbs, entryUserVerb, btnValidation, idLabelVbFr, idLabelColumnVbIrr)
        });
}

function  showPage(selecList) {
    document.querySelector(".Menu").setAttribute("style", "display:none");
    document.querySelector(selecList).setAttribute("style", "display:block");
}

function showItems(listVbFr, idLabelVbFr, idLabelColumnVbIrr) {
    currentList = listVbFr;
    form = columnVbIrr[0];

    let idx = Math.floor(Math.random() * currentList.length);
    choice = currentList[idx];

    let labelVbFr = document.querySelector(idLabelVbFr);
    labelVbFr.innerHTML = choice;
    
    let labelColumn = document.querySelector(idLabelColumnVbIrr);
    labelColumn.innerHTML = form;
}

function events(verbs, entryUserVerb, btnValidation, idLabelVbFr, idLabelColumnVbIrr) {
    // Events
    let userVerb = document.querySelector(entryUserVerb);
    let submit = document.querySelector(btnValidation);


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
    if (form == "Infinitif") {
        if (verbs[choice][0].trim() == entryValue) {
            form = columnVbIrr[1]
            let labelColumnVbIrr = document.querySelector(idLabelColumnVbIrr);
            labelColumnVbIrr.innerHTML = form;

        } else {
            alert("You have wrong !!!! :(");
            form = columnVbIrr[0]
            let labelColumnVbIrr = document.querySelector(idLabelColumnVbIrr);
            labelColumnVbIrr.innerHTML = form;
        }
    } else if (form == "Prétérit") {
        if (verbs[choice][1].trim() == entryValue) {       
            form = columnVbIrr[2]
            let labelColumnVbIrr = document.querySelector(idLabelColumnVbIrr);
            labelColumnVbIrr.innerHTML = form;

        } else {
            alert("You have wrong !!!! :(")
            form = columnVbIrr[0]
            let labelColumnVbIrr = document.querySelector(idLabelColumnVbIrr);
            labelColumnVbIrr.innerHTML = form;
        }
        
    } else {
        if (verbs[choice][2].trim() == entryValue) {
            form = columnVbIrr[0]
            let labelColumnVbIrr = document.querySelector(idLabelColumnVbIrr);
            labelColumnVbIrr.innerHTML = form;

            currentList = currentList.filter( (verb) => verb != choice );
            showItems(currentList, idLabelVbFr, idLabelColumnVbIrr);

        } else {
            alert("You have wrong !!!! :(")
            form = columnVbIrr[0]
            let labelColumnVbIrr = document.querySelector(idLabelColumnVbIrr);
            labelColumnVbIrr.innerHTML = form;
        }
    }

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

// ==================================================================

const columnVbIrr= [
    "Infinitif",
    "Prétérit",
    "Past participe",
]


let currentList;
let form;
let choice;

showWords(verbs1, ".verbs1", "List 1", "#list1", "#labelVbFr1", "#ColumnVbIrr1", "#userVerb1", "#submit1");
showWords(verbs2, ".verbs2", "List 2", "#list2", "#labelVbFr2", "#ColumnVbIrr2", "#userVerb2", "#submit2");
showWords(verbs3, ".verbs3", "List 3", "#list3", "#labelVbFr3", "#ColumnVbIrr3", "#userVerb3", "#submit3");

// ==================================================================

