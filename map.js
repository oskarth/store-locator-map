var map;
function initialize() {
    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(59.325, 18.05),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var marker = new google.maps.Marker({
        position: map.getCenter(),
        map: map,
        title: 'Click to zoom'
    });

    google.maps.event.addListener(marker, 'click', function() {
        map.setZoom(14);
        map.setCenter(marker.getPosition());
    });
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
