// les fonctions qui sont dans un objet, on appelle ça des méthodes
// en POO, éviter de faire des fonctions fléchées

// création d'une variable objet, avec accolade et index:value
const obj = {
    pseudo: "From Scratch",
    ville: "Bordeaux",
    admin: false,

    // le 'this', c'est pour désigner les choses à l'intérieur d'un objet
    // l'objet peut changer, donc on met 'this' et pas 'obj'
    /*direBonjour() { // nom de la méthode, paramètre
        console.log("Bonjour, je suis " + this.pseudo);
        console.log("Bonjour, je suis " + obj.pseudo);
    }*/

    direBonjour: function () { // index et fonction
        console.log("Bonjour, je suis " + this.pseudo);
        console.log("Bonjour, je suis " + obj.pseudo);
    }
}
//console.log(typeof obj); // objet

// ajouter qch à un objet
obj.age = 24;

// modifier un paramètre
obj.pseudo = "Marlène";
//obj.pseudo += "Marlène"; // avec concaténation
obj["admin"] = true;

// supprimer un paramètre dans un objet
delete obj.ville

// chercher si une propriété existe
//console.log("pseudo" in obj);
//console.log("ville" in obj);

// parcourir un objet       i = 0 mieux sur un tableau que sur un objet
/*for (const key in obj) {
    console.log(key);
    console.log(obj[key]); // pour lister la valeur
    console.log(key + " : " + obj[key]);
}*/

//console.log(obj);
//console.log(obj.direBonjour());



let array = [1, 2, 3];
//console.log(typeof array); // objet
//console.log(typeof document.body); // objet

//---------------------------
// Les méthodes natives
//---------------------------
// pour obtenir les clés d'un objet
const keys = Object.keys(obj);
//console.log(keys);

// pour obtenir les valeurs
const values = Object.values(obj);
//console.log(values);

// pour créer des tableaux de chacun des éléments
const nestedArray = Object.entries(obj);
//console.log(nestedArray);

// pour fusionner des tableaux objects
const obj2 = {
    taille: "1m62",
    poids: "55kg"
}

const fusion = Object.assign({}, obj, obj2);
//console.log(fusion);

// pour empêhcer les modifications sur des paramètres
//const newObj = Object.freeze(obj);
// pour modifier des valeurs du paramètre, mais empêcher le rajout de paramètre
const newObj = Object.seal(obj);
newObj.pseudo = "Test";
newObj.adresse = "42 avenue du code";
//console.log(newObj);


//---------------------------
// Utiliser des constructeurs d'objets
//---------------------------
// fonction constructeur (la 1ère lettre doit être en majuscule)
// 'this' fait référence à la méthode, à l'instance de notre classe
function User(pseudo, ville) {  // fonction constructeur qui prend 2 paramètres
    this.pseudo = pseudo;
    this.ville = ville;

    // méthode getCity ; getCity est une méthode de User
    this.getCity = function () {
        console.log(this.pseudo + " habite à " + this.ville)
    }
}

const user1 = new User("From Scratch", "Bordeaux"); // new User = c'est une instance de l'objet ; on instancie l'objet
const user2 = new User("Marlène", "Nîmes");
// console.log(user1);
// console.log(user2);
// // on met les parenthèses pour jouer la méthode
// console.log(user2.getCity());

//---------------------------
// Factory functions
//---------------------------
function User3(pseudo, ville) {
    return {
        pseudo, // pseudo:pseudo    prend le paramètre pseudo
        ville
    }
}
const user4 = User3('France', 'Montpellier');
// console.log(user4);

//---------------------------
// Class
//---------------------------
class Utilisateur {
    constructor(pseudo, ville) {
        this.pseudo = pseudo;
        this.ville = ville;
    }
    // méthodes
    sayMyName = function () {
        console.log("Bonjour, je suis " + this.pseudo + " et je vis à " + this.ville);
    }
}
const user5 = new Utilisateur('Mackenzie', 'Paris');

// pas de fonction fléchée, si non elle perd l'endroit où elle est, elle perd son contexte de scope, sa portée, ne sait pas à qui ça fait référence
Utilisateur.prototype.sayCity = function () {
    console.log("J'habite à " + this.ville);
}
// console.log(user5);
// console.log(user5.sayMyName());
// console.log(user5.sayCity());

//---------------------------
// l'héritage
//---------------------------
class Animal {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }
    saySomething(text) {
        console.log(this.name + " dit : " + text);
    }
}

class Dog extends Animal {
    run() {
        console.log("Le chien court !");
    }
}

const rintintin = new Dog("Rintintin", 9);
console.log(rintintin);








