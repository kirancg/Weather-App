import React from 'react';

const Weather = (props) => {
    return (
        <div className="weather__info">
            {
                props.city && props.country && <p className="weather__key">Location:
                    <span>{props.city},{props.country} </span> </p>
            }

            {
                props.temperature && <p className="weather__key">Temperature:
                    <span>{props.temperature} </span> </p>
            }
            {
                props.realFeel && <p className="weather__key">Real Feel:
                    <span>{props.realFeel} </span> </p>
            }
            {
                props.humidity && <p className="weather__key">humidity:
                    <span>{props.humidity}% </span> </p>
            }   
            {
                props.description && <p className="weather__key">Condition:
                    <span>{props.description} </span> </p>
            }  
            {
                props.error && <p className="weather__key">
                    <span>{props.error} </span> </p>
            }   
        </div>
    );
}

export default Weather;