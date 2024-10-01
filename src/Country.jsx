import React, { useState } from "react";

export default function Country({
  country,
  handleVisitedCountries,
  handleVisitedflag,
}) {
  const style = " w-72 h-4/5 rounded-xl border-2 border-black";
  const imgStyle = " w-full h-44 rounded-xl p-1";
  const textStyle = "text-xl font-bold text-center m-1";

  const { name, flags, population, area } = country;
  const [visited, setvisited] = useState(false);
  const handleVisited = () => {
    setvisited(() => !visited);
  };

  return (
    <div className={style}>
      <img src={flags.png} className={imgStyle} />
      <h1 className={textStyle}>Country Name : {name.common.slice(0, 11)}</h1>
      <h1 className={textStyle}>Population : {population}</h1>
      <h1 className={textStyle}>Area : {area}</h1>
      <button
        onClick={handleVisited}
        className={`border-2 border-black px-2 py-1 rounded m-auto block mt-3 font-bold text-white ${
          visited ? "bg-green-600" : "bg-red-500"
        }`}
      >
        {visited ? " Visited " : "Going"}
      </button>
      <h1 className={textStyle}>
        {visited ? "I visited this Country" : "I want to Visit this country"}
      </h1>
      <button
        onClick={() => handleVisitedCountries(country)}
        className="border-2 border-black px-2 py-1 rounded m-auto block mt-3 font-bold"
      >
        {" "}
        click me
      </button>
      <button
        onClick={() => handleVisitedflag(country.flags.png)}
        className="border-2 border-black px-2 py-1 rounded m-auto block mt-3 font-bold"
      >
        click me for flag
      </button>
    </div>
  );
}
