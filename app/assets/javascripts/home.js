$(document).ready(function(){
  // Clear search input box on page load
  $('#search').val('');
  // Initialize map

  L.mapbox.accessToken = 'pk.eyJ1IjoiZGVlcGFsaWNoYXVkaGFyeSIsImEiOiJjaWkxejZ5ZDQwMGdkdDhtMGJqN2NmajU0In0.tpfMon92jnu9Y8ykQcOAGg';
  var map = L.mapbox.map('map', 'deepalichaudhary.odc0ihh0').setView([40, -74.50], 9);

  // Code to search location entered in search box.
  $('#search_button').click(function(){
	geocodeThis();
  });

  function geocodeThis() {
	var geocoder = L.mapbox.geocoder('mapbox.places');
    var text = document.getElementById('search').value;
	if (text.length >= 4) {
	  geocoder.query(text, showMap);
	}
  }// function geocodeThis() end

  function showMap(err, data) {
	if (!map) {
		map = L.mapbox.map('map', 'deepalichaudhary.odc0ihh0');
	}

	if (data.lbounds) {
		map.fitBounds(data.lbounds);
	} else if (data.latlng) {
		map.setView([data.latlng[0], data.latlng[1]], 13);
	}
   }// function showMap end
});
