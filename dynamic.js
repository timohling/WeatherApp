function myFunction() {
	var apiUrl = 'http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=53.46919&lon=7.48232&appid=bff1c970eb02f1a1ac915c9bf9c6ce9b';
	fetch(apiUrl).then(response => {
		return response.json();
	}).then(data => {
	
	document.getElementById("json").textContent = JSON.stringify(data, undefined, 2);
	
	}).catch(err => {
	
	alert('Sussy Error Lol');

      });
}
