import React, { useEffect, useState } from "react";
import Country from "./Country";

export default function Countries() {
  const [countries, setcountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setcountries(data));
  }, []);
  return (
    <div className="flex justify-center flex-wrap gap-3 mt-2">
      {countries.map((country, index) => (
        <Country country={country} key={index} />
      ))}
    </div>
  );
}
