import "../app/globals.css";
import Link from "next/link"; 
import ZodiacSign from "../app/components/Zodiac"; 
import React, { useEffect, useState } from "react";

const apiURL = "https://binaryjazz.us/wp-json/genrenator/v1/genre/100";
const jsonFileURL = "https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/zodiac.json";

//fetching data from API
function fetchDataFromAPI() {
  return fetch(apiURL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Error");
      }
      return response.json();
    });
}

//fetching data from JSON
function fetchDataFromJSONFile() {
  return fetch(jsonFileURL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Error");
      }
      return response.json();
    });
}


export default function Home() {
  const [apiData, setApiData] = useState(null);
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    Promise.all([fetchDataFromAPI(), fetchDataFromJSONFile()]) //fetching data from both sources
      .then(data => { //block is executed
        const apiData = data[0];
        const jsonData = data[1];

      //can see data in the console log 
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

  const zodiacSigns = Object.keys(jsonData.western_zodiac); //don't have to do it individually


    const calculateZodiacSign = (day, month) => {
      if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return "Aries";
      } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return "Taurus";
      } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return "Gemini";
      } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return "Cancer";
      } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return "Leo";
      } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return "Virgo";
      } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return "Libra";
      } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return "Scorpio";
      } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return "Sagittarius";
      } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return "Capricorn";
      } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return "Aquarius";
      } else {
        return "Pisces";
      }
    };
    
  
  const userSign = () => {
    const input = prompt("Enter Your Birthday: (MM/DD)"); 
    const [month, day] = input.split("/").map(Number); 

    if (!isNaN(month) && !isNaN(day) && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
      const zodiac = calculateZodiacSign(day, month);
      alert('Your zodiac sign is ${zodiac}. Go check out your recommended music genre')
    } else {
      alert("Invalid date format or out-of-range values. Please enter in MM/DD format.");
    }
  }

  userSign(); 
  


  const GenreForZodiac = (sign) => {
    const keywords = jsonData.western_zodiac[sign].keywords;
    const matchedGenres = [];

    for (const genre of apiData) {
      for (const keyword of keywords) {
        if (genre.toLowerCase().includes(keyword.toLowerCase())) { //convert to lowercase to match
          matchedGenres.push(genre);
          break; //exit the loop 
        }
      }
    }

    if (matchedGenres.length > 0) { 
      return matchedGenres[Math.floor(Math.random() * matchedGenres.length)]; //random genre from list of matched genre
    }
    //if there are no matching genres just do a random genre, selects random index in api
    return apiData[Math.floor(Math.random() * apiData.length)];
  };



  return (
     <>
     
     <main>
        <h1>Star Radio</h1>

        <button id="userBirth" onClick={userSign}>Enter your Birthday</button>
        


        {zodiacSigns.map(sign => (
          <Link href={`/${sign}`} key={sign}>
           
            <ZodiacSign
             //key={sign}
              element={jsonData.western_zodiac[sign].element}
              gloss={jsonData.western_zodiac[sign].gloss}
              symbol={jsonData.western_zodiac[sign].unicode_symbol}
              startDate={jsonData.western_zodiac[sign].approximate_start_date}
              endDate={jsonData.western_zodiac[sign].approximate_end_date}
              keywords={jsonData.western_zodiac[sign].keywords.join(',')}
              music={GenreForZodiac(sign)}
              



              />


          
          </Link>
        )
      )}
        
    
        
      
      </main>
      
    
     
     </>

  ); 

} 









