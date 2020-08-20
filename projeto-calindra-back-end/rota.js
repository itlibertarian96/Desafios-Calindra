ar platform = new H.service.Platform({
  'apikey': 'COLOCA A SUA CHAVE AQUI'
});


var defaultLayers = platform.createDefaultLayers();


var map = new H.Map(
  document.getElementById('mapContainer'),
  defaultLayers.vector.normal.map,
  {
    zoom: 14,
    center: { lat: 52.5, lng: 13.4 }
  });


var defaultLayers = platform.createDefaultLayers();

var geocodingParams;


var onResult = function (result) {
  var locations = result.Response.View[0].Result,
    position,
    marker;
  
  for (i = 0; i < locations.length; i++) {
    position = {
      lat: locations[i].Location.DisplayPosition.Latitude,
      lng: locations[i].Location.DisplayPosition.Longitude
    };
    map.setCenter(position)
    marker = new H.map.Marker(position);
    map.addObject(marker);
  }
};


var geocoder = platform.getGeocodingService();

