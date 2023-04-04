import React from 'react';

function getStyle(weatherDescription) {
    let style = {
        color: "black",
        background: "none"
        };

        switch (weatherDescription) {
        case "It's hot":
            style.color = "red";
            break;
        case "It's chill":
            style.color = "skyblue";
            break;
        case "It's cold":
            style.color = "blue";
            break;
        case "It's freeze":
            style.color = "cyan";
            break;
        default:
            break;
        }

        return style;

    }

export default getStyle;