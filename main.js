document.querySelector("#open-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

// Greeting Section

const greetingText = "good morning"
const weatherCondition = "sunny"
const userLocation = "new york"
let temperature = 22.24243
let weatherText = `The weather is ${weatherCondition} in ${userLocation}
and it's ${temperature.toString()}°C outside.`


document.querySelector("#greeting").innerHTML = greetingText
document.querySelector("p#weather").innerHTML = weatherText
