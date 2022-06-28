
function GetAPI() {
	var apiUrl = 'http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=53.46919&lon=7.48232&appid=bff1c970eb02f1a1ac915c9bf9c6ce9b';
	fetch(apiUrl).then(response => {
		return response.json();
	}).then(data => {
	
		var pureJson = (JSON.stringify(data));

		var obj = JSON.parse(pureJson);
		delete obj.coord;

		for (var i = 0; i <= Object.keys(obj.list).length - 1; i++) {
			var luft = new Array();
			var zeit = new Array();
			
			delete obj.list[i].components;

			luft[i] = obj.list[i].main.aqi;
			zeit[i] = obj.list[i].dt;

			console.log(luft[i]);
			console.log(zeit[i]);
		}

		document.getElementById("json").textContent = pureJson;

	}).catch(err => {
                
		alert('Failed to call WeatherAPI, please try again later.');

	});
}

const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})