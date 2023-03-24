import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import { fetchData } from "../services/index.js";
import Card from "../component/card.jsx";


export const Home = () => {

  const [chars, setChars] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);


  const getCharsFromFetch = async () => {
    const data = await fetchData("people");
    setChars(data.results);
  };
  const getPlanetsFromFetch = async () => {
    const data = await fetchData("planets");
    setPlanets(data.results);
  };
  const getVehiclesFromFetch = async () => {
    const data = await fetchData("vehicles");
    setVehicles(data.results);
  };

  useEffect(() => {
    getCharsFromFetch();
    getPlanetsFromFetch();
    getVehiclesFromFetch();
  }, []);

  return (
    <div className="mt-5">
      <div className="container d-flex justify-content-center mx-5">
          <h1>Characters</h1>
        <div className="chars d-flex flex-nowrap gap-2">
          {chars.map((elem, i) => (
            <Card key={i} index={i} uid={elem.uid} name={elem.name} var='people' img='characters' />
          ))}
        </div>
          <h1>Planets</h1>
        <div className="planets d-flex flex-nowrap gap-2">
          {planets.map((elem, i) => (
            <Card key={i} index={i}  uid={elem.uid} name={elem.name} var= 'planets' img='planets' />
          ))}
        </div>
          <h1>Vehicles</h1>
        <div className="vehicles d-flex flex-nowrap gap-2">
          {vehicles.map((elem, i) => (
            <Card key={i} index={i}  uid={elem.uid} name={elem.name} var= 'vehicles' img='vehicles' />
          ))}
        </div>
      </div>
    </div>
  );
};
