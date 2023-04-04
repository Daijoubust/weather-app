import React from 'react'

function getWeatherDescription(temperature) {
    if (temperature > 30) {
        return "It's hot";
        } else if (temperature > 15 && temperature <= 30) {
        return "It's chill";
        } else if (temperature > 0 && temperature <= 15) {
        return "It's cold";
        } else {
        return "It's freeze";
        }
    }

export default getWeatherDescription;