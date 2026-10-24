// declaration des variables
let client = "Awa";
let codeplat = 1;
let quantite = "3";
let montantverse = 5000;
let nomplat = "";
let prixunitaire = 0;

// conversion de la quantite en nombre
let conversion = Number (quantite);

// determination des prix avec la contion if 
if(codeplat === 1){
    nomplat = "Attieke-poisson";
    prixunitaire = 1500;
} else if(codeplat === 2){
    nomplat ="Riz-poulet";
    prixunitaire = 2000;
} else if(codeplat === 3){
    nomplat = "Alloco";
    prixunitaire = 1000;
}else{
    console.log("code plat invalide");
}

// declarion de la fonction

function caculertotal(prixunitaire, quantite){
    return (prixunitaire*quantite);
}

// appel de la fonction

let totalcalculer = caculertotal(prixunitaire,conversion);

// affichage des resultats

console.log("==== RECAPITULATIF DE LA COMMANDE DE:", client);
console.log("le plat choisi est : ", nomplat);
console.log("le prix unitaire est :", prixunitaire);
console.log("la quantite est : ", conversion);

// declatation de la boucle

console.log("")
console.log("==== preparation des portions ====");

for (let i = 1; i <= conversion; i++){
    console.log("portion ", i ,"/",conversion, "preparation de ton ",nomplat);
}


