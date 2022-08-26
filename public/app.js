// create map
const myMap = L.map("map").setView([48.868672, 2.34213], 13);

// add openstreetmap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  minZoom: "1",
}).addTo(myMap);
// create and main add geolocation marker
let main = L.marker([48.87007, 2.346453]);
main.addTo(myMap).bindPopup("<p1><b>The Hoxton, Paris</b></p1>").openPopup();
// draw the 2nd arrondissement
let polygon = L.polygon([
  [48.863368120198004, 2.3509079846928516],
  [48.86933262048345, 2.3542531602919805],
  [48.87199261164275, 2.3400569901592183],
  [48.86993336274516, 2.3280142476578813],
  [48.86834104280146, 2.330308418109664],
]).addTo(myMap);
// create red pin marker
let prS = L.marker([48.866200610611926, 2.352236247419453], {
  icon: "redPin",
}).bindPopup("Réaumur-Sébastopol");

// // metro station markers
let rS = L.marker([48.866200610611926, 2.352236247419453]);
rS.bindPopup("Réaumur-Sébastopol");
let sSD = L.marker([48.869531786321566, 2.3528590208055196]);
sSD.bindPopup("Strasbourg-Saint-Denis");
let sentier = L.marker([48.8673721067762, 2.347107922912739]);
sentier.bindPopup("Sentier");
let bourse = L.marker([48.86868503971672, 2.3412285142058167]);
bourse.bindPopup("Bourse");
let qS = L.marker([48.869560129483226, 2.3358638645569543]);
qS.bindPopup("Quatre Septembre");
let gB = L.marker([48.871282159004856, 2.3434818588892714]);
gB.bindPopup("Grands Boulevards");

let stations = L.layerGroup([rS, sSD, sentier, bourse, qS, gB]).addTo(myMap);
