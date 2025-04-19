import axios from "axios";
import React, { useState } from "react";

const University = () => {
  const [value, setVelue] = useState("");
  const [university, setUniversity] = useState([]);
  const addUni = () => {
    axios(`http://universities.hipolabs.com/search?country=${value}`).then(
      (res) => setUniversity(res.data)
    );
    console.log(university);
    setVelue("");
  };
  return (
    <div id="university">
      <div className="container">
        <div className="university">
          <div className="university--tex">
            <input
              onChange={(e) => setVelue(e.target.value)}
              type="text"
              value={value}
              id="large-input"
              class="block w-[400px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button
              onClick={() => addUni(value)}
              type="button"
              class="text-green bg-blue-800 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-pink-300 dark:hover:bg-pink-700 focus:outline-none dark:focus:ring-blue-400"
            >
              Default
            </button>
          </div>
          <div className="uni">
            {university.map((el) => {
              return (
                <div className="university--cart">
                  <img src={`https://openweathermap.org/img/w/${el.icon}.png`} alt="" />
                  <h3>{el.alpha_two_code}</h3>
                  <h1>{el?.name}</h1>
                  <h1>{el?.country}</h1>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default University;
