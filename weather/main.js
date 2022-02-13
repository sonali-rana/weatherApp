

const api={
	key:"33511362b25cccb127143a2f07c6cd34",
	base:"https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.getElementById("search-box");

function getResults(data)
{
      fetch(`${api.base}weather?q=${data}&units=metric&APPID=${api.key}`)
      .then((weather)=>{
           return weather.json()      
      }).then(displayResults);
}

searchBox.addEventListener('keypress',function(event){

	if(event.keyCode == 13)
	{   getResults(searchBox.value);
		console.log(searchBox.value);
	}

});

function displayResults(weather)
{
     if(weather.weather[0].main.toUpperCase()=="CLEAR")
     {
          document.body.style.backgroundImage = "url('clear.jpg')";
     }
     else if(weather.weather[0].main.toUpperCase()=="SUNNY")
     {
          document.body.style.backgroundImage = "url('sunny.jpg')";
     }
     else if(weather.weather[0].main.toUpperCase()=="RAIN")
     {
          document.body.style.backgroundImage = "url('rainy.jpg')";
     }
     else if(weather.weather[0].main.toUpperCase()=="CLOUDS")
     {
          document.body.style.backgroundImage = "url('cloudy.png')";
     }
     else if(weather.weather[0].main.toUpperCase()=="SNOWFALL")
     {
          document.body.style.backgroundImage = "url('snow.jpg')";
     }


     console.log(weather);
     let city=document.querySelector(".location .city");
     city.innerText=`${weather.name},${weather.sys.country}`;

     let now=new Date();
     let date=document.querySelector(".location .date");
     date.innerText=dateBuilder(now);

     let temp=document.querySelector(".current .temp");
     temp.innerHTML=`${Math.round(weather.main.temp)}<span>&#176;C</span>`;

     let weater=document.querySelector(".current .weather");
     weater.innerText=`${weather.weather[0].main}`;

     let highLow=document.querySelector(".current .high-low");
     highLow.innerHTML=`${Math.round(weather.main.temp_max)}<span>&#176;C</span>/ ${Math.round(weather.main.temp_min)}<span>&#176;C</span>`
}


function dateBuilder(d)
{
       const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
       const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

       let day = days[ d.getDay() ];
       let month = months[ d.getMonth() ];
       let date=d.getDate();
       let year=d.getFullYear();

       return `${day} , ${month} ${date} ${year}`;
}



