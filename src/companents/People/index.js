import axios from "axios";
import React, { useState } from "react";

const People = () => {
  const [velue, setVelue] = useState("");
  const [people, setPeople] = useState({});
  const addPeople = () => {
    axios(`https://api.genderize.io/?name=${velue}`).then((res) =>
      setPeople(res.data)
    );
    setVelue("")
  };
  return (
    <div id="people">
      <div className="container">
        <div className="people">
          <div className="people--tex">
            <input
              onChange={(e) => setVelue(e.target.value)}
              type="text"
              value={velue}
              id="large-input"
              class="block w-[400px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button
              onClick={() => addPeople(velue)}
              type="button"
              class="text-white bg-green-500 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
            >
              Default
            </button>
          </div>
          <>
            {Object.keys(people).length ? (
                
              <div className="people--cart">
                <h1>{people?.name}</h1>
                <h1>{people?.gender}</h1>
              </div>
            ) : null}
          </>
        </div>
      </div>
    </div>
  );
};

export default People;
