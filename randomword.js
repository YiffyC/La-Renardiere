const rdmW = document.querySelector("#rdmTitle");
const qdroite = document.querySelector("#droite");
const qgauche = document.querySelector("#gauche");

async function load() {
    let url = 'https://random-words-api.vercel.app/word';
    let obj = await (await fetch(url)).json();
    console.log(obj[0].word);
    console.log(obj[0].definition);
    rdmWord = obj[0].word;
    rdmDef = obj[0].definition;

    function displayrdm(){
	//rdmW.innerHTML = `&#129418; &nbsp; ${obj[0].word} &nbsp; &#129418;`;
	//qgauche.innerHTML =  `${obj[0].word}`;
	qdroite.innerHTML = `${obj[0].word} : ${obj[0].definition}`; 
	};




    displayrdm();
};




load();