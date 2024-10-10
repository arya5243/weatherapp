var int = document.getElementById("int")
var srch = document.getElementById("btn")
var loct=document.getElementById("loct")
var tem = document.getElementById("temp")
var cld = document.getElementById("cloud")
var humd =document.getElementById("f-humd")
var speed =document.getElementById("f-speed")
const Apikey="ff9bfc1758ee829e5d8b1fdd998caa1a";
const Apiurl="https://api.openweathermap.org/data/2.5/weather?"

async function checkweather(){
    try{
        var raw = await fetch(Apiurl+"q="+int.value+"&units=metric"+"&appid="+Apikey);
        var data = await raw.json();
    }
    catch(error){
        console.error("unable to fetch api");
        
    }
    try{
        srch.style.backgroundColor="hsl(160, 100%, 42%)";
        loct.style.color="white"
        humd.style.color="white"
        speed.style.color="white"
        tem.style.color="white"
        tem.innerHTML=data.main.temp+"°C";
        humd.innerHTML=data.main.humidity+"%";
        loct.innerHTML=data.name;
        int.style.border="none"
        speed.innerHTML=data.wind.speed+"km/h"
        console.log(data)
        
    }
    catch(error){
        console.error("enter a valid city name ");
        loct.innerHTML="Enter valid city name"
        setTimeout(()=>{
        srch.style.backgroundColor="red";
        loct.style.color="red"
        tem.innerHTML="--"
        tem.style.color="red"
        humd.innerHTML="----------"
        humd.style.color="red"
        speed.innerHTML="----------"
        speed.style.color="red"
        int.style.border="1px solid red"
        ,4000})

    
        
    }
}


srch.addEventListener("click",()=>{
    try{
        checkweather()
    }
    catch(error){
        console.error("enter a valid city name")
    }
    
})

