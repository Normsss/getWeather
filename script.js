const instertInputInUrl = () => {
    const city = document.querySelector("#city").value;
    const webUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1a70ad7842bc94ac36c7c185861a0571`
    console.log(webUrl)
    

    

    fetch(webUrl)
    .then((response) => response.json())
    .then(data => {
        const icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        console.log(icon);


        document.getElementById("weather-container").innerHTML = 
        `<img class="icon" src=${icon}>
        <h1 class="cityname">${data.name}</h1>
        <p>Now is:</p>
        <p class="weather">${data.weather[0].main}</p>
        <p>& Its temperature is: </p>
        <p class="temp">${data.main.temp}º</p>`;

    });         
        

    
    
    

};







// $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=1a70ad7842bc94ac36c7c185861a0571", function(data)
// {
// console.log(data);
// var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
// console.log(icon);
// var cityname = data.name;
// var temp = data.main.temp;
// var weather= data.weather[0].main;
 



// $(".icon").attr("src", icon);
// $(".weather").append(weather)
// $(".temp").append(temp);
// $(".cityname").append(cityname)
// });