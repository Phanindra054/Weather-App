const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&appid=370c07bad1094cb4373971843a94f656&q=";

function show()
{
    let asd=document.getElementById("sb").value;
    checkweather(asd);
}

async function checkweather(city)
{
    const response =await fetch(apiurl + city);
    var data =await response.json();
    console.log(data.weather[0].main);
    document.getElementById("city").innerHTML=data.name;
    document.getElementById("tmp").innerHTML=Math.round(data.main.temp)+"°C";
    document.getElementById("hu").innerHTML=data.main.humidity+"%";
    document.getElementById("sp").innerHTML=data.wind.speed+"Km/h";
    document.getElementById("typ").innerHTML=data.weather[0].main;
    if(data.weather[0].main=="Clouds")
    {
        document.getElementById("wea").style.backgroundImage = "url('cloudy.gif')";
    }
    else if(data.weather[0].main=="Rain")
    {
        document.getElementById("wea").style.backgroundImage="url('rain.gif')";
    }
    else if(data.weather[0].main=="Clear")
    {
        document.getElementById("wea").style.backgroundImage="url('clear.gif')";
    }
    else if(data.weather[0].main=="Drizzle")
    {
        document.getElementById("wea").style.backgroundImage="url('drizzle.gif')";
    }
    else if(data.weather[0].main=="Mist")
    {
        document.getElementById("wea").style.backgroundImage="url('mist.gif')";
    }
}