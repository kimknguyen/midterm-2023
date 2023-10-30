import "../app/globals.css";
import Link from "next/link"; 

import ZodiacSign from "../app/components/Zodiac"; 
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
        <Link href="/Aquarius">Aquarius</Link>
        <Link href="/Aquarius">Aquarius</Link>
        <Link href="/Aquarius">Aquarius</Link>
        <Link href="/Aquarius">Aquarius</Link>
        <Link href="/Aquarius">Aquarius</Link>
        <Link href="/Aquarius">Aquarius</Link>
        <Link href="/Aquarius">Aquarius</Link>
        <Link href="/Aquarius">Aquarius</Link>
        <Link href="/Aquarius">Aquarius</Link>
        <Link href="/Aquarius">Aquarius</Link>
        <Link href="/Aquarius">Aquarius</Link>
        <Link href="/Aquarius">Aquarius</Link>
        <ZodiacSign
          zodiacAquariusElement={jsonData.western_zodiac.Aquarius.element}
          zodiacAquariusGloss={jsonData.western_zodiac.Aquarius.gloss}
          zodiacAquariusSymbol={jsonData.western_zodiac.Aquarius.unicode_symbol}
          zodiacAquariusStartDate={jsonData.western_zodiac.Aquarius.approximate_start_date}
          zodiacAquariusEndDate={jsonData.western_zodiac.Aquarius.approximate_end_date}

        />
        
       
       
        
       
       
        
        
      
      </main>
     
     
     
     </>

  ); 

} 
    
   
    
/*
<ZodiacSign
          zodiacAquariusElement={jsonData.western_zodiac.Aquarius.element}
          zodiacAquariusGloss={jsonData.western_zodiac.Aquarius.gloss}
          zodiacAquariusSymbol={jsonData.western_zodiac.Aquarius.unicode_symbol}
          zodiacAquariusStartDate={jsonData.western_zodiac.Aquarius.approximate_start_date}
          zodiacAquariusEndDate={jsonData.western_zodiac.Aquarius.approximate_end_date}

        />
*/
      
      
       
      
    









/*
<ZodiacSign
          zodiacSigns={jsonData.western_zodiac}

        />




<main>
        <h1>Pick your Astrology</h1>
        
        <Zodiac 
          zodiacSigns={jsonData.western_zodiac}
        />

        

      
      
       
      </main>

*/




