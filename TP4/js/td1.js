'use strict';

// M413 - TD1
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function onLoad() {
	console.log( 'In onLoad() function…');
    
}

//1.1
//a
const personne = {
    nom : "Tohsaka",
    prenom : "Rin",
    age: 18,
    taille : 160,
    get lang(){
        return this.langue
    },

    set lang(nvllangue){
        this.langue = nvllangue;

    }
    
};
//b
const personne2 = {};

personne2.nom="Tohsaka";
personne2.prenom="Rin"
personne2.age = 18;
personne2.taille=160;
//c
const x =personne;

x.age = 17;

console.log("\n1.1.c");
console.log(personne);
console.log(personne2);
console.log(x);

//1.2

//a
console.log("\n1.2.a");
console.log(personne.prenom);
console.log(personne["prenom"]);
Object.keys(personne).forEach(key => console.log(key,":",personne[key]));

//b
console.log("\n1.2.b");
for (let p in personne){
    console.log(personne[p]);
};

//c 
console.log("\n1.2.c");
personne.poids = 55;
console.log(personne);

//d
console.log("\n1.2.d");
delete personne.poids;
console.log(personne);

//1.3

//a
const sports = {
    sport1 : "Volley",
    sport2 : "BaseBall",
    sport3 : "Basket",

};

personne.sport = sports;
console.log("\n1.3.a");
console.log(personne);

//b
console.log("\n1.3.b");
console.log(personne.sport.sport1);
console.log(personne.sport.sport2);
console.log(personne.sport.sport3);

//c
console.log("\n1.3.c");
for (let i in personne.sport){
    console.log(personne.sport[i]);
}

//d
const sportsTab = {
    sport1 :[ {nom : "Volley", equipement : ["ballon","fillet"]} ],
    sport2 : [ {nom : "BaseBall", equipement : ["batte"]} ],
    sport3 : [ {nom : "Basket", equipement : ["ballon","panier"]} ],

};

personne.sport = sportsTab;

console.log("\n1.3.d");
for (let i in personne.sport){
    console.log(personne.sport[i]);
}

//1.4

//a
console.log("\n1.4.a");
personne.qui = function(){
    console.log(this.nom + " "+ this.prenom);
};

personne.qui();

//b
console.log("\n1.4.b");
personne.quimaj = function(){
    console.log(this.nom.toUpperCase() + " "+this.prenom.toUpperCase());
};
personne.quimaj();

//1.5

//a
let div = document.createElement('div');
let p = Object.values(personne);
div.textContent=p;
document.body.appendChild(div);

//b
console.log("\n1.5.b");
console.log(JSON.stringify(personne));

//c
console.log("\n1.5.c");
personne.datenaissance = Date();
console.log(JSON.stringify(personne));

//d
console.log("\n1.5.d");
personne.agem = function(){
    return JSON.stringify(this.age);
};
console.log(JSON.stringify(personne));

//2.1

//a
console.log("\n2.1.a");
personne.langue = "fr";
console.log(personne.lang);

//b
console.log("\n2.1.b");
personne.lang ="jp";
console.log(personne.lang);

//d
console.log("\n2.1.d");
const obj = {
  counter: 0,
};

Object.defineProperty(obj, 'reset', {
  get: function() {
    this.counter = 0;
  }
});

Object.defineProperty(obj, 'inc', {
  get: function() {
    this.counter++;
  }
});

Object.defineProperty(obj, 'dec', {
  get: function() {
    this.counter--;
  }
});

Object.defineProperty(obj, 'add', {
  set: function(value) {
    this.counter += value;
  }
});

Object.defineProperty(obj, 'subs', {
  set: function(value) {
    this.counter -= value;
  }
});

console.log(obj.counter); // 0

obj.reset;
console.log(obj.counter); // 0

obj.inc;
console.log(obj.counter); // 1

obj.dec;
console.log(obj.counter); // 0

obj.add = 5;
console.log(obj.counter); // 5

obj.subs = 2;
console.log(obj.counter); // 3

//2.2

//a

function Personne(nom, prenom, age, couleurYeux) {
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
  this.couleurYeux = couleurYeux;
  this.name = function(){
      console.log("my name is "+this.prenom+" "+this.nom);
  };
  this.changeName = function(newName){
      this.nom = newName;
  };
}

personne.constructor = Personne;

//b
console.log("\n2.2.b");
let mere = new Personne("maman","maman",18,"marron");
let pere = new Personne("papa","papa",52,"bleu");

console.log(mere);
console.log(pere);

//c
console.log("\n2.2.c");

mere.name();
pere.name();

//d
console.log("\n2.2.d");

mere.changeName("béné");
mere.name();

//e
console.log("\n2.2.e");
// déclaration d'une chaîne de caractères
let x1 = "Hello";

// vérification de la longueur de la chaîne de caractères
console.log(x1.length); // affiche 5

// déclaration d'un nombre
let x2 = 42;

// conversion du nombre en chaîne de caractères
console.log(x2.toString()); // affiche "42"

//f
console.log("\n2.2.f");
console.log(Math.PI);
console.log(Math.floor(5));
console.log(Math.random());

//3
console.log("\n3");
Personne.prototype.nationalite = "";
Personne.prototype.name = function() {
  return this.nom + " " + this.prenom;
};

console.log(mere);

//3.1

//a
console.log("\n3.1");

function PersonneE(nom, prenom,estomac) {
  this.nom = nom;
  this.prenom = prenom;
  this.estomac = [];
  this.name = function(){
      console.log("my name is "+this.prenom+" "+this.nom);
  };
  
}

personne.constructor = Personne;

PersonneE.prototype.manger = function(aliment){
      if (this.estomac.length<10){
          this.estomac.push(aliment)
      }
      else{
          console.log("ventre plein");
      }
  };
 PersonneE.prototype.mangerOK = function(){
      this.estomac.clear();
  };

let rayan = new PersonneE("rayan","rzk","");
rayan.manger("patate");
console.log(rayan);

//3.2
console.log("\n3.2");

function Car(modele, conso100km, res) {
  this.modele = modele;
  this.conso100km = conso100km;
  this.reservoirlitre = res;
  this.compteurkm = 0;
};

Car.prototype.addfuel = function(nblt) {
  this.reservoirlitre = nblt;
};

Car.prototype.drive = function(nbkm) {
  // Calcule la distance maximale que la voiture peut parcourir avec le carburant actuel
  let distancemax = this.reservoirlitre* this.conso100km;

  if (distancemax >= nbkm) {
    // La voiture peut parcourir toute la distance demandée
    this.compteurkm += nbkm;
    this.reservoirlitre -= this.conso100km / 100 * nbkm;
  } if(this.reservoirlitre<=0) {
    // La voiture va tomber en panne sèche avant d'arriver
      console.log(distancemax);
    console.log( "Je serai à cours d'essence après " + distancemax + " km");
  }
}

let subuWu = new Car("SubuWu WRX", 10,100);
subuWu.addfuel(100);
subuWu.drive(999);
console.log("km : "+subuWu.compteurkm+ " fuel : "+subuWu.reservoirlitre);

//3.3
console.log("\n3.3");

function Baby(nom, prenom, jouetFavori) {
  Personne.call(this, nom, prenom); // appel du constructeur parent avec les arguments correspondants
  this.jouetFavori = jouetFavori;
}

// Héritage de Personne pour Baby
Baby.prototype = Object.create(Personne.prototype);
Baby.prototype.constructor = Baby;

// Ajout de la méthode jouer() pour Baby
Baby.prototype.jouer = function() {
  console.log("Je joue avec mon jouet favori " + this.jouetFavori);
}

let bb = new Baby("non","merci","ps4")
bb.jouer();









    


        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
