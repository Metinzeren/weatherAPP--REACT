import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCity,
  deleteCity,
  refreshCitys,
  removeCitys,
} from "../redux/action/cityAction";
import WeatherCart from "./WeatherCart";

const Home = () => {
  const { addCitys, postLoading, errorMessage } = useSelector((state) => state);
  const [cityText, setCityText] = useState("");
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const refreshButton = () => {
    dispatch(refreshCitys(addCitys));
  };
  const clearCity = () => {
    dispatch(removeCitys());
  };
  const handleAddCity = () => {
    dispatch(addCity(cityText));
  };
  const handleDeleteCity = (_city) => {
    dispatch(deleteCity(_city));
  };

  return (
    <div>
      <div className="weatherPage">
        <span>Add new City</span>
        <div className="weatherPage-form">
          <div id="form">
            <input
              value={cityText}
              onChange={(e) => {
                setCityText(e.target.value);
              }}
              type="text"
            ></input>
            <button   onClick={handleAddCity} >ADD</button>
          </div>
        </div>
        {errorMessage ? (
          <p style={{ color: "white", fontStyle: "italic" }}>
            There is no such city
          </p>
        ) : null}
        {postLoading ? (
          <p style={{ color: "white", fontStyle: "italic" }}>LOADİNG</p>
        ) : null}
        <div className="weatherPageRefresh">
          <div className="buttons">
            <button onClick={refreshButton}>Refresh</button>
            <button style={{ marginLeft: "5px" }} onClick={clearCity}>
              Clear
            </button>
          </div>

          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Fulltext search by name"
            type="text"
          ></input>
        </div>
        <div className="flex">
          {addCitys
            .filter((item) => {
              if (search === "") {
                return item;
              } else if (
                item.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item) => {
              return (
                <WeatherCart
                  item={item}
                  handleAddCity={handleAddCity}
                  handleDeleteCity={handleDeleteCity}
                />
              );
            })}
        </div>
      </div>
      <div>
       
      </div>
    </div>
  );
};

export default Home;
