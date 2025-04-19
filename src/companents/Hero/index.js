import axios from "axios";
import React, { useState } from "react";

const Hero = () => {
  const [velue, setVelue] = useState("");
  const [mainData, setMainData] = useState({});
  const addWeater = () => {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${velue}&units=metric&appid=6b4c292e3e049dbf64d6c2441cc77864&lang=ru`
    ).then((res) => setMainData(res.data));
    console.log(mainData);
    setVelue("");
  };
  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero--tex">
            <input
              onChange={(e) => setVelue(e.target.value)}
              type="text"
              value={velue}
              id="large-input"
              class="block w-[400px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button
              onClick={() => addWeater(velue)}
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
          <>
            {Object.keys(mainData).length ? (
              <div className="hero--cart">
                <img
                  src="https://openweathermap.org/img/w/$%7Bel.icon04d.png"
                  alt=""
                />
                <h1>{mainData?.sys?.country}</h1>
                <h1>{mainData?.name}</h1>
                <h2>Tемпература: {mainData?.main?.temp}</h2>
                <h2>{mainData?.description}</h2>
                {mainData?.weather?.map((el) => (
                  <>
                    <h2>{el?.description}</h2>
                    <img
                      width={200}
                      src={`https://openweathermap.org/img/w/${el.icon}.png `}
                    ></img>
                  </>
                ))}
              </div>
            ) : null}
          </>
        </div>
      </div>
    </div>
  );
};

export default Hero;
