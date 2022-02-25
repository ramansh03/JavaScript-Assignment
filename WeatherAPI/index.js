var input = document.querySelector('.text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=8721d8b1aaaa51300a9f6e48d5864ded')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'] - 273.15;
  var nameValue = data['name'];

  main.innerHTML = nameValue;
  temp.innerHTML = "Temp : "+tempValue.toFixed(2)+"°C";
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})