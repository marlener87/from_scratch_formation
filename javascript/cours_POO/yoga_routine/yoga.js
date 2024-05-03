const main = document.querySelector('main');
const basicArray = [
    { pic: 0, min: 1 },
    { pic: 1, min: 1 },
    { pic: 2, min: 1 },
    { pic: 3, min: 1 },
    { pic: 4, min: 1 },
    { pic: 5, min: 1 },
    { pic: 6, min: 1 },
    { pic: 7, min: 1 },
    { pic: 8, min: 1 },
    { pic: 9, min: 1 }
];

let exerciceArray = [];

// fonction anonyme qui se lance toute seule au démarrage de la page
// fonction anonyme = fonction qui n'a pas de nom, se lance 1 fois et après ne se relance plus
// get stored exercices array
(() => {
    if (localStorage.exercices) {   // on teste si il existe des exercices dans le localStorage
        exerciceArray = JSON.parse(localStorage.exercices);    // alors tu me récupères ces exercices et tu les passes à exerciceArray
    } else {    // sinon, si ça n'existe pas
        exerciceArray = basicArray;  // exerciceArray prend ce qu'il y a dans basicArray
    }
})();



// générateur d'exercice, c'est lui qu'on va instancier pour lancer la routine, le minutage et quand il est à la fin du chronomètre, il lance un nouvel exercice
class Exercice {
    constructor() {
        this.index = 0;
        this.minutes = exerciceArray[this.index].min;
        this.seconds = 0;
    }

    updateCountdown() {
        this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

        setTimeout(() => {
            if (this.minutes === 0 && this.seconds === "00") {
                this.index++;
                this.ring();
                if (this.index < exerciceArray.length) {
                    this.minutes = exerciceArray[this.index].min;
                    this.seconds = 0;
                    this.updateCountdown();
                } else {
                    return page.finish();
                }
                
            } else if (this.seconds === "00") {
                this.minutes--;
                this.seconds = 59;
                this.updateCountdown();
            } 
            else {
                this.seconds--;
                this.updateCountdown(); // récursivité
            }
        }, 1000)

        return (main.innerHTML = `
            <div class='exercice-container'>
                <p>${this.minutes}:${this.seconds}</p>
                <img src='./img/${exerciceArray[this.index].pic}.png' />
                <div>${this.index + 1}/${exerciceArray.length}</div>
            </div>
        `);
    }

    ring() {
        const audio = new Audio();
        audio.src = "ring.mp3";
        audio.play();
    }
}

// objet
const utils = {
    pageContent: function(title, content, btn) {
        document.querySelector('h1').innerHTML = title;
        main.innerHTML = content;
        document.querySelector('.btn-container').innerHTML = btn;
    },

    //gère les minutes
    handleEventMinutes: function() {
        document.querySelectorAll('input[type="number"]').forEach((input) => {
            input.addEventListener('input', (e) => {
                //console.log(e);
                // on map exerciceArray jusqu'à trouver l'élément qui a été cliqué
                exerciceArray.map((exo) => {
                    //console.log("test");
                    if (exo.pic == e.target.id) {
                        //console.log('yes');
                        exo.min = parseInt(e.target.value);
                        console.log(exerciceArray);
                        this.store();
                    }
                })
            })
        })
    },

    // gère les flèches
    handleEventArrow: function() {
        document.querySelectorAll('.arrow').forEach((arrow) => {
            arrow.addEventListener('click', (e) => {
                //console.log(e);
                // pour identifier la position
                let position = 0;
                exerciceArray.map((exo) => {
                    if (exo.pic == e.target.dataset.pic && position != 0) { // si la position 
                        //[exerciceArray[0], exerciceArray[1]] = [exerciceArray[1], exerciceArray[0]] 
                        [exerciceArray[position], exerciceArray[position - 1]] = [exerciceArray[position - 1], exerciceArray[position]];
                        page.lobby();
                        this.store();
                        //console.log("dataset");
                        //console.log(exerciceArray);
                    } else {
                        position++;
                        //console.log(position);
                    }
                })
            })
        })
    },

    deleteItem: function() {
        document.querySelectorAll('.deleteBtn').forEach((btn) => {
            btn.addEventListener("click", (e) => {
                //console.log(e);
                // avec la méthode filter
                /*let newArray = exerciceArray.filter((exo) => exo.pic != e.target.dataset.pic)
                exerciceArray = newArray;
                page.lobby();
                console.log(newArray);*/

                // avec la méthode map
                let newArr = [];
                exerciceArray.map((exo) => {
                    if (exo.pic != e.target.dataset.pic) {
                        newArr.push(exo);
                    }
                })
                exerciceArray = newArr;
                page.lobby();
                this.store();
                console.log(newArr);
            })
        })
    },

    reboot: function() {
        exerciceArray = basicArray;
        page.lobby();
        this.store();
    },

    // permet de stocker les choses
    // à chaque fois que l'on change l'array, il faut que l'on stocke. Donc lorsque l'on recharge la page, la routine est sauvegardée
    store: function() {
        localStorage.exercices = JSON.stringify(exerciceArray); // il faut transformer le stockage en JSON
    },
}

const page = {
    lobby: function() {
        // document.querySelector('h1').innerHTML = "Paramétrage <i id='reboot' class='fas fa-undo'></i>";
        // main.innerHTML = "Exercices";
        // document.querySelector('.btn-container').innerHTML = "<button id='start'>Commencer<i class='far fa-play-circle'></i></button>";
        let mapArray = exerciceArray
            .map((exo) => `
                <li>
                    <div class='card-header'>
                        <input type='number' id=${exo.pic} min='1' max='10' value=${exo.min}>
                        <span>min</span>
                    </div>
                    <img src='./img/${exo.pic}.png' />
                    <i class='fas fa-arrow-alt-circle-left arrow' data-pic=${exo.pic}></i>
                    <i class='fas fa-times-circle deleteBtn' data-pic=${exo.pic}></i>
                </li>
            `).join("");
        
        utils.pageContent(
            "Paramétrage <i id='reboot' class='fas fa-undo'></i>", 
            //"Exercices", 
            "<ul>" + mapArray + "</ul>",
            "<button id='start'>Commencer<i class='far fa-play-circle'></i></button>"
        );

        utils.handleEventMinutes();

        utils.handleEventArrow();

        utils.deleteItem();

        reboot.addEventListener('click', () => utils.reboot());

        start.addEventListener('click', () => this.routine()); 
    },

    routine: function() {
        const exercice = new Exercice();
        utils.pageContent(
            "Routine",
            //"Exercice avec chrono",
            exercice.updateCountdown(),
            null
        )
    },

    finish: function() {
        utils.pageContent(
            "C'est terminé !",
            "<button id='start'>Recommencer</button>",
            "<button id='reboot' class='btn-reboot'>Réinitialiser <i class='fas fa-times-circle'></i></button>",
        )

        start.addEventListener('click', () => this.routine());
        reboot.addEventListener('click', () => utils.reboot()); // pour remettre le tableau à 0

    }
}
page.lobby();
//page.routine();
//page.finish();

















