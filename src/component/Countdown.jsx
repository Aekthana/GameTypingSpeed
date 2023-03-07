import React, { useState, useEffect} from "react";


function Countdown() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setTime(parseInt(value));
  };

  return (
    <div>
      <label>Countdown:</label>
      <input type="number" value={time} onChange={handleInputChange} />
      <div>{time} seconds</div>
    </div>
  );
}


export default Countdown;
