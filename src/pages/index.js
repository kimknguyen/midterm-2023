import "../app/globals.css";
import Link from "next/link"; 
import ZodiacSign from "../app/components/Zodiac"; 
import React, { useEffect, useState } from "react";
import styles from "../app/components/ZodiacCard.module.css"; 



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

//button
    const calculateSign = (day, month) => {
      if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return "The Ram (Aries)";
      } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return "The Bull (Taurus)";
      } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return "The Twins (Gemini)";
      } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return "The Crab (Cancer)";
      } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return "The Lion (Leo)";
      } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return "The Maiden (Virgo)";
      } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return "The Scales (Libra)";
      } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return "The Scorpion (Scorpio)";
      } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return "The Archer (Sagittarius)";
      } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return "The Mountain Sea-goat (Capricorn)";
      } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return "The Water-bearer (Aquarius)";
      } else {
        return "The Fish (Pisces)";
      }
    };
    

  
  const userSign = () => {
    const input = prompt("Enter Your Birthday: (MM/DD)"); 
    if (input) {
    const [month, day] = input.split("/").map(Number); 
    if (!isNaN(month) && !isNaN(day) && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
      const zodiac = calculateSign(day, month);
      alert(`Your zodiac sign is ${zodiac}. Go check out your recommended music genre`)
 
    } else {
      alert("Invalid. Please enter in MM/DD format.");
    }
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
        <div className = {styles.title}>
        <h1>Star Radio</h1>

        </div>
        
        
        <button className={styles.button}
        id="userBirth" onClick={userSign}>Enter your Birthday</button>
        

        <div className={styles.ZodiacCardContainer}>
        {zodiacSigns.map(sign => (
        
          //<Link href={`/${sign}`} key={sign}>
          //<Link href={`/${sign}?jsonData=${JSON.stringify(jsonData)}`} key={sign}>

          
            <ZodiacSign
              key={sign}
              element={jsonData.western_zodiac[sign].element}
              gloss={jsonData.western_zodiac[sign].gloss}
              symbol={jsonData.western_zodiac[sign].unicode_symbol}
              startDate={jsonData.western_zodiac[sign].approximate_start_date}
              endDate={jsonData.western_zodiac[sign].approximate_end_date}
              keywords={jsonData.western_zodiac[sign].keywords.join(',')}
              music={GenreForZodiac(sign)}
              



              />

          

                
          
  
        )
      )}
      </div>
    
        
      
      </main>
      
    
     
     </>

  ); 

} 


















