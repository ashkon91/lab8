function initMap() {
  // Create center marker at UCSD
  var ucsd_ltlng = {lat:32.880, lng:-117.236};

  var cnt = {lat:32.884984, lng:-117.241335};
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: cnt,
    zoom: 15
  });

  var marker = new google.maps.Marker({
      position: cnt,
      map: map,
      title: 'CICC'
  });
}