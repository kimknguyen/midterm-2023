const ZodiacSignCard = ({ 
    zodiacAquariusElement, 
    zodiacAquariusGloss,
    zodiacAquariusSymbol, 
    zodiacAquariusStartDate, 
    zodiacAquariusEndDate, 


}) => (
    <div>
        <h2>{zodiacAquariusGloss}</h2>
        <p>Element: {zodiacAquariusElement}</p>
        <p>symbol: {zodiacAquariusSymbol}</p>
        <p>Start: {zodiacAquariusStartDate}</p>
        <p>End: {zodiacAquariusEndDate}</p>

    </div>
);

export default ZodiacSignCard;

/*
function ZodiacSignCard({

  name,

  unicodeSymbol,
  gloss,
  startDate,
  endDate,
  keywords,
}) {
  return (
    <div>
      <h2>
        {name}
        </h2>
     
      <p>Symbol: {unicodeSymbol}</p>
      <p>Gloss: {gloss}</p>
    
      <p>Start Date: {startDate}</p>
      <p>End Date: {endDate}</p>
      <p>Keywords: {keywords.join(', ')}</p>
    </div>
  );
}

function ZodiacSignCardList({ zodiacSigns }) {
  return (
    <div>
      {Object.entries(zodiacSigns).map(([name, sign]) => (
        <ZodiacSignCard
    
          name={name}
          unicodeSymbol={sign.unicode_symbol}
          gloss={sign.gloss}
          startDate={sign.approximate_start_date}
          endDate={sign.approximate_end_date}
          keywords={sign.keywords}
        />
      ))}
    </div>
  );
}



export default ZodiacSignCardList;

*/