import React from "react";
import axios from "axios";  

export default function Weather () {

    function handleResponse(response) {
    alert (`The weather in New York is Math.round(${response.data.main.temp}) C`); 
    }
    let apiKey = "88e0dcff954aec9e80363d859d6d1b98";
    let apiUrl  = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return (
        <h2>Hello from Weather</h2>
    );
}