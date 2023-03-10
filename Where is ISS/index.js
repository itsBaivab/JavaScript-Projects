const url = 'https://api.wheretheiss.at/v1/satellites/25544';

var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


async function getdata()
{

    const response = await fetch(url);
    const data = await response.json();
    const { latitude, longitude } = data;
    document.getElementById('lat').textContent= latitude.toFixed(2);
    document.getElementById('lon').textContent= longitude.toFixed(2);
}

// getdata();


setInterval(getdata , 500);