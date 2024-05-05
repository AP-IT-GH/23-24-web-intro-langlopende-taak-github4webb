let conmap
= L.map('contactmap').setView([51.220842462555645, 4.40747456535606], 19);
 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 25,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(conmap);
 
let Chiroicon = L.icon({
    iconUrl: 'logo.png',
    shadowUrl: 'logo.png',
 
    iconSize:     [60, 60],
    shadowSize:   [60, 60],
    iconAnchor:   [0, 60],
    shadowAnchor: [0, 60],
    popupAnchor:  [0, 0]
});
 
L.marker([51.220842462555645, 4.40747456535606], {icon: Chiroicon}).addTo(conmap);