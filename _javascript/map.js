var shopCoordinates = [-26.1087, 27.8729];

var map = L.map('map').setView(shopCoordinates, 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  maxZoom: 19
}).addTo(map);

L.marker(shopCoordinates).addTo(map)
  .bindPopup("<b>Shani's Bakes</b><br>123 Sweet Street, Cozy Town, ZA<br><a href='https://www.google.com/maps?q=-26.1087,27.8729' target='_blank'>Get Directions</a>")
  .openPopup();
