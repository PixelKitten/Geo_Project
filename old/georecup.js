//Fonction d'appel de géolocalisation
function maPosition(position) {
  var infopos = "Position déterminée :\n";
  infopos += "Latitude : " + position.coords.latitude + "\n";
  infopos += "Longitude : " + position.coords.longitude + "\n";
  document.getElementById("infoposition").innerHTML = infopos;
}
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(maPosition);
}
