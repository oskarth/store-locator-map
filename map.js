var map;
function initialize() {
    var mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(59.325, 18.05),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    Map = new google.maps.Map(document.getElementById('map-canvas'),
                              mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);
