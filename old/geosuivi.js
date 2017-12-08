
//Fonction de surveillance de mouvement
function surveillePosition(position) {
    var infopos = "Position déterminée :\n";
    infopos += "latitude : " + position.coords.latitude + "\n";
    infopos += "longitude : " + position.coords.longitude + "\n";
    document.getElementById("infoposition").innerHTML = infopos;
}
  var survId = navigator.geolocation.watchPosition(surveillePosition);
  navigator.geolocation.getCurrentPosition(maPosition, erreurPosition, {maximumAge:60000});

 //Callback en cas d'erreur :
 function erreurPosition(error) {
   var info = "Erreur lors de la géolocalisation : ";
   switch(error.code){
     case error.TIMEOUT:
     info += "Temps de réponse dépassé!";
        break;
     case error.PERMISSION_DENIED:
     info += "Vous n'avez pas donné l'accès à votre géolocalisation";
        break;
     case error.POSITION_UNAVAILABLE:
     info += "Votre position n'a pu être déterminée";
        break;
     case error.UNKNOWN_ERROR:
     info += "Erreur Inconnue";
        break;
   }
   document.getElementById("infoposition").innerHTML = info;
 }

$.post("map.php", {lat:position.coords.latitude, lng:position.coords.longitude});
