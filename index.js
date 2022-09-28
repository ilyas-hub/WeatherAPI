const API_KEY = `7908fe687f47c9868b4ef5ae8bfe580a`

const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
    // const API = `https://api.openweathermap.org/data/2.5/weather?
    // q=${city}&appid=${API_KEY}&units=metric`
    // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    const getweather= async(city)=>{
        weather.innerHTML=`<h2>loading...<h2/>`
        const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

        const response= await fetch(url)
        const data= await response.json()
        console.log(data);
        return showWeather(data)
     
    }

    const showWeather = (data) =>{

        if(data.cod=="404"){
            weather.innerHTML=`<h2>Enter valid city Name<h2/>`
            return;
        }

        weather.innerHTML=`
        <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
      </div>
      <div>
        <h2>${data.main.temp}°C</h2>
        <h4>${data.weather[0].main}</h4>
    </div>
        `
    }

    form.addEventListener("submit",
    function(event){
        getweather(search.value)
        event.preventDefault();
    })