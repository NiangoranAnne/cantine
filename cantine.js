// declaration des variables
let client = "Awa";
let codeplat = 1;
let quantite = "3";
let montantverse = 5000;
let nomplat = "";
let prixunitaire = 0;

// conversion de la quantite en nombre
let conversion = nombre ( quantite);

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
