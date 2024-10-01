import React, { useEffect, useState } from "react";
import Country from "./Country";

export default function Countries() {
  const [countries, setcountries] = useState([]);
  const [visitedCountries, setvisitedCountries] = useState([]);
  const [visitedflag, setVisitedflag] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setcountries(data));
  }, []);

  const handleVisitedCountries = (country) => {
    console.log("Add this to your visited Countries");

    const newVisitedCountries = [...visitedCountries, country];
    setvisitedCountries(newVisitedCountries);
  };
  const handleVisitedflag = (flag) => {
    const newVisitedflag = [...visitedflag, flag];
    setVisitedflag(newVisitedflag);
  };

  return (
    <div>
      <div className=" flex justify-center m-10">
        <h1 className=" text-xl font-bold fixed">
          Visited Countries : {visitedCountries.length}
        </h1>
        <ul className="mt-10">
          {visitedCountries.map((country) => (
            <li>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="flex gap-1 justify-center mb-2">
        {visitedflag.map((flag) => (
          <img src={flag} className="w-10 h-10"></img>
        ))}
      </div>
      <div className="flex justify-center flex-wrap gap-3 ">
        {countries.map((country, index) => (
          <Country
            country={country}
            key={index}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedflag={handleVisitedflag}
          />
        ))}
      </div>
    </div>
  );
}
