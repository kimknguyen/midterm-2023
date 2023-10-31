"use-client"; 
import React from "react"; 
import styles from "./ZodiacCard.module.css"; 

const ZodiacSignCard = ({
    gloss,
    symbol,
    startDate,
    endDate,
    keywords,
    music,
    isZodiacAssigned, 

  }) => (


    <div className={styles.ZodiacCardWrapper}>

        <h2>{gloss} {symbol}</h2>
        <p>{startDate} - {endDate}</p>
        <p>You are {keywords}</p>
        <p>You should try {" "} <span style={{color:"#301934"}}>{music}</span></p>
      </div>
  );
  

export default ZodiacSignCard;

