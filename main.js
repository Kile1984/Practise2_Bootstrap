// google-map

function initMap() {
	// Create a map object and specify the DOM element for display.
	var myLatLng = {lat: 44.835905, lng: 20.455788};
    var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 44.801591, lng: 20.455788},
          zoom: 16
     });
    var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Takovska 45'
	});
}
// /google map

