//Mise en route de la map avec le token d'accès du compte MapBox
mapboxgl.accessToken = 'pk.eyJ1IjoicGl4ZWxjYXQiLCJhIjoiY2pha3k2MG1mM2pwcjMycThmYWRid3pmeCJ9.5YKR6JeMheuIu4fDUfYcRA';
var map = new mapboxgl.Map({
    container: 'map', // l'ID du div contenant la map
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [2.296839, 49.875417], // La position de départ
    zoom: 15 // Le zoom de départ
});

// Ajout des boutons Zoom+, Zoom- et du repositionnement vers le Nord.
map.addControl(new mapboxgl.NavigationControl());

// Ajout de la géolocalisation par un point.
map.addControl(new GeolocateControl({
  PositionOptions:{
    enableHighAccuracy: false, timeout:6000
  },
  trackUserLocation: true
}));


//Début de la fonction des points de GeoJSON avec MapBox.
map.on('load', function () {
        map.addLayer({
            "id": "places",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        //Début du point :
                        "properties": {
                          //La description du point :
                            "description": "<strong>Entrée bâtiment Oméga</strong><p>Entrée principale Visiteur/Parents </p>",
                            "icon": "star" //L'icone du point
                        },
                        "geometry": {
                            "type": "Point", //on définit le type du point
                            "coordinates": [2.298617, 49.874164] //Les Coordonnées du point
                        // fin d'un point :
                      }
                      //Fin de la prise de point :
                  }]
              }
          },
            "layout": {
                "icon-image": "{icon}-15",
                "icon-allow-overlap": true
            }
        });
        map.on('mouseenter', 'places', function () {
                map.getCanvas().style.cursor = 'pointer';
            });
    });

    map.on('load', function () {

        map.addLayer({
            "id": "route",
            "type": "line",
            "source": {
                "type": "geojson",
                "data": {
                  //Ajout d'un tracé de route avec le GeoJSON
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                          [2.296528, 49.878104],
                          [2.296365, 49.877435],
                          [2.296644, 49.877379],
                          [2.296705, 49.877338],
                          [2.296724, 49.877270],
                          [2.296716, 49.877184],
                          [2.296525, 49.876369],
                          [2.296518, 49.876292],
                          [2.296557, 49.876248],
                          [2.296848, 49.876143],
                          [2.296976, 49.876053],
                          [2.297136, 49.875821],
                          [2.297070, 49.875434],
                          [2.296954, 49.874843],
                          [2.298744, 49.874598],
                          [2.298617, 49.874147]
                        ]
                    }
                }
            },
            "layout": {
                "line-join": "round",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#000000",
                "line-width": 3
            }
        });
    });


    //Et une fois les points initialisées on permet à l'utilisateur de modifier les tracés
    //En ne rechargeant que index.html
/*    function maPosition(position) {
      var infopos = "Position déterminée :\n";
      infopos += "Latitude : "+position.coords.latitude+"\n";
      infopos += "Longitude : "+position.coords.longitude+"\n";
      document.getElementById("infoposition").innerHTML = infopos;
    }
    var survId = navigator.geolocation.watchPosition(maPosition);
*/
