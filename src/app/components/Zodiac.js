"use-client"; 


const ZodiacSignCard = ({ 
  
    gloss,
    symbol, 
    startDate, 
    endDate, 
    keywords,
    music, 


}) => (
    <div>
        
        <h2>{gloss} {symbol}</h2>
        

        <p>Start: {startDate}</p>
        <p>End: {endDate}</p>
        <p>You are {keywords}</p>
        <p>You should try {music}</p>

    </div>
);

export default ZodiacSignCard;

