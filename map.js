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

function detectBrowser() {
    var useragent = navigator.userAgent;
    var mapdiv = document.getElementById("map-canvas");

    if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
        mapdiv.style.width = '100%';
        mapdiv.style.width = '100%';
    } else {
        mapdiv.style.width = '600px';
        mapdiv.style.width = '800px';
    }
}

google.maps.event.addDomListener(window, 'load', initialize);

// does this work?
detectBrowser();
