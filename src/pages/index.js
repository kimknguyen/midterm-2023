import "../app/globals.css";
import React, { useEffect, useState } from "react";

const apiURL = "https://binaryjazz.us/wp-json/genrenator/v1/genre/12";
const jsonFileURL = "https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/zodiac.json";

function fetchDataFromAPI() {
  return fetch(apiURL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch data from API");
      }
      return response.json();
    });
}

function fetchDataFromJSONFile() {
  return fetch(jsonFileURL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch data from JSON file");
      }
      return response.json();
    });
}

export default function Home() {
  const [apiData, setApiData] = useState(null);
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    Promise.all([fetchDataFromAPI(), fetchDataFromJSONFile()])
      .then(data => {
        const apiData = data[0];
        const jsonData = data[1];

        // Log the data to the console
        console.log("Data from API:", apiData);
        console.log("Data from JSON file:", jsonData);

        setApiData(apiData);
        setJsonData(jsonData);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, []);

  if (!apiData || !jsonData) return null;

  return (
    <>
      <main>
        <h1>Pick your Astrology</h1>
        
      </main>
    </>
  );
}







/*

import "../app/globals.css" 
import React from "react";

const apiURL = "https://binaryjazz.us/wp-json/genrenator/v1/genre/12";
const jsonFileURL = "https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/zodiac.json";


function fetchDataFromAPI() {
  return fetch(apiURL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch data from API");
      }
      return response.json();
    });
}

function fetchDataFromJSONFile() {
  return fetch(jsonFileURL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch data from JSON file");
      }
      return response.json();
    });
}


Promise.all([fetchDataFromAPI(), fetchDataFromJSONFile()])
.then(data => {
  const apiData = data[0];
  const jsonData = data[1];

  // Log the data to the console
  console.log("Data from API:", apiData);
  console.log("Data from JSON file:", jsonData);


})
.catch(error => {
  console.error("Error:", error);
});



export default function Home({ apiData, jsonData }) {
    console.log( apiData); 
    console.log( jsonData ); 

    if (!jsonData, !apiData) return null; 

    return (
        <>
      
        <main>
            <h1>Pick your Astrology</h1>
            <Zodiac
                zodiacAquarius ={apiData.western_zodiac.Aquarius}
                zodiacAries ={apiData.western_zodiac.Aries}



            />




        </main>
        
        </>
    )
}




*/











