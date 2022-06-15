//La date d'aujourd'hui à afficher
const aujourdhui=document.getElementById("date");
//L'heure actuel à afficher
const heure_actuel=document.getElementById("heure_actuel");
//Le nombre de minutes qui reste à afficher
const reste=document.getElementById("restant");
//L'heure de fin de la période
const heure_fin=document.getElementById("heure_fin");

let heure_now=new Date();







//Les jours de la semaine
const semaine=["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
let j_semaine=semaine[heure_now.getDay()];

//Les jours de la semaine
const mois=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Novembre","Décembre"];
let j_mois=mois[heure_now.getMonth()];

aujourdhui.innerHTML=j_semaine+" "+heure_now.getDate()+" "+j_mois;
//Affichage de l'heure principale
let h=heure_now.getHours();
if (h<10) {h = "0" + h}
let m=heure_now.getMinutes();
if (m<10) {m = "0" + m}
heure_actuel.innerHTML=h + "h" + m;


// Changement d'heure principale
setInterval(function(){
    let heure_now=new Date()
    // Formatage de l'heure en cas de non-présence de 2 chiffres
    let h=heure_now.getHours();
    if (h<10) {h = "0" + h}
    let m=heure_now.getMinutes();
if (m<10) {m = "0" + m}
    heure_actuel.innerHTML=h + "h" + m;


    //Afficher l'heure d'école
    timestampNow = (((heure_now.getHours() * 60) + heure_now.getMinutes()) * 60) + heure_now.getSeconds();


setTimeout(function(){
let proch=[30600,33300,36000,38700,39600,42300,45000,48000,50700,53400,54300,57000];
if(proch[1]>timestampNow && proch[0]<timestampNow){
    document.getElementById("h1").classList.toggle("cligno");
    document.getElementById("reste").innerHTML=proch[1]-timestampNow +" secondes avant la deuxième heure"
}else if(proch[2]>timestampNow && proch[1]<timestampNow){
    document.getElementById("h2").classList.toggle("cligno");
    document.getElementById("reste").innerHTML=proch[2]-timestampNow +" secondes avant la troisième heure"

}else if(proch[3]>timestampNow && proch[2]<timestampNow){
    document.getElementById("h3").classList.toggle("cligno");
    document.getElementById("reste").innerHTML=proch[3]-timestampNow +" secondes avant la première récré"

}else if(proch[4]>timestampNow && proch[3]<timestampNow){
    document.getElementById("r1").classList.toggle("cligno");
    document.getElementById("reste").innerHTML=proch[4]-timestampNow +" secondes avant la quatrième heure"

}else if(proch[5]>timestampNow && proch[4]<timestampNow){
    document.getElementById("h4").classList.toggle("cligno");
    document.getElementById("reste").innerHTML=Math.floor((proch[5]-timestampNow)/60)+" minutes avant la cinquième heure";

}else if(proch[6]>timestampNow && proch[5]<timestampNow){
    document.getElementById("h5").classList.toggle("cligno");
    document.getElementById("reste").innerHTML=proch[6]-timestampNow +" secondes avant le temps de midi"

}else if(proch[7]>timestampNow && proch[6]<timestampNow){
    document.getElementById("tm").classList.toggle("cligno");
    document.getElementById("reste").innerHTML=proch[7]-timestampNow +" secondes avant la sixième heure"

}else if(proch[8]>timestampNow && proch[7]<timestampNow){
    document.getElementById("h6").classList.toggle("cligno");
    document.getElementById("reste").innerHTML=proch[8]-timestampNow +" secondes avant la septième heure"

}else if(proch[9]>timestampNow && proch[8]<timestampNow){
    document.getElementById("h7").classList.toggle("cligno");
    document.getElementById("reste").innerHTML=proch[9]-timestampNow +" secondes avant la deuxième récré"

}else if(proch[10]>timestampNow && proch[9]<timestampNow){
    document.getElementById("r2").classList.toggle("cligno");
    document.getElementById("reste").innerHTML=proch[10]-timestampNow +" secondes avant la huitième heure"

}else if(proch[11]>timestampNow && proch[10]<timestampNow){
    document.getElementById("h8").classList.toggle("cligno");
    document.getElementById("reste").innerHTML=proch[11]-timestampNow +" secondes avant la neuvième heure"

}else if(proch[12]>timestampNow && proch[11]<timestampNow){
    document.getElementById("h9").classList.toggle("cligno");
    document.getElementById("reste").innerHTML=proch[12]-timestampNow +" secondes avant la fin de la journée"

}
},16.6666667);
},1000);
