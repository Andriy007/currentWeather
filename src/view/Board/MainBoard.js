import React,  { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { usePosition } from 'use-position';
import { fetchWeatherRequest } from "../../redux-saga/board/boardActions";



const MainBoard = ({ fetchWeather, item }) => {

  const { latitude, longitude } = usePosition();

  const searchQuery = useMemo(
    () => ({
        latitude,
        longitude
    }), [latitude, longitude]
  );

  useEffect(() => {
    if(latitude && longitude) {
      fetchWeather(searchQuery)
    }
  }, [fetchWeather, latitude, longitude, searchQuery]);

  const colorForTemp = useMemo(
    () => {
      if ( item && item.main.temp > -10 && item.main.temp < 30) {
        return "#fff700"
      } else if (item && item.main.temp > 30) {
        return "#ff8c00"
      } else {
        return "#00ffff"
      }
    }, [item]
  )

  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center title"><h1>Current Weather</h1></div>
      <div className="col-12 weather-holder">
          {
            item &&
            <div className="weather-holder__widget">
              <p className="weather-holder__widget--tittle">{item.name}</p>
              <p className="weather-holder__widget--temp"
                 style={{ color: colorForTemp}}>
                {item.main.temp}
                <span>&#8451;</span>
              </p>
            </div>
          }
      </div>
    </div>
  );
};

export default connect(
  state => state.boardItems,
  dispatch => ({
    fetchWeather: payload => dispatch(fetchWeatherRequest(payload)),
  })
)(MainBoard);
