"use scrict"

/* TABLEAU

declarer tableau vide names 
Ajouter "Vincent", "Paul", et "Arthur" via la methode push

pour chaque element du tableau

ajouter a la fin (va a la peche)
afficher chaque elements

*/

let names=[]
names.push ("Vincent", "Paul", "Arthur");
names.forEach(name =>{
    name += " va la peche ";
    console.log(name)
}
)
