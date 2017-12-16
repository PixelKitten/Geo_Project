mapboxgl.accessToken = 'pk.eyJ1IjoicGl4ZWxjYXQiLCJhIjoiY2pha3k2MG1mM2pwcjMycThmYWRid3pmeCJ9.5YKR6JeMheuIu4fDUfYcRA';
var bounds = [
  [2.291458, 49.872038], //Southwest
  [2.302636, 49.878806]  //Northeast
]
var map = new mapboxgl.Map({
    container: 'map',
    center: [2.296839, 49.875417],
    style: 'mapbox://styles/mapbox/satellite-v9',
    zoom: 15,
    maxBound: bounds
});

map.on('load', function () {

    map.addLayer({
        "id": "route",
        "type": "line",
        "source": {
            "type": "geojson",
            "data": {
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
            "line-width": 8
        }
    });
});
