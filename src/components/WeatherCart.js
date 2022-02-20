import React from "react";

const WeatherCart = ({ item, handleDeleteCity }) => {
  return (
    <div key={item.name} className="weatherPageCart">
      <div className="cartUp">
        <h1>
          {item.name.split(" ")[0]},{item.sys.country}
        </h1>
        <img
          src={
            "http://openweathermap.org/img/w/" + item.weather[0].icon + ".png"
          }
          alt="img"
        ></img>
      </div>
      <div className="cartDown">
        <p>{item.weather[0].main}</p>
        <h1>{Math.round(item.main.temp - 273.15, 2)} °C</h1>
      </div>
      <div className="delete">
        <a href="/#" onClick={handleDeleteCity.bind(this, item.name)}>
          <i class="fa-solid fa-trash"></i>
        </a>
      </div>
    </div>
  );
};

export default WeatherCart;
