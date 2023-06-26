import React, { useEffect, useState } from "react";

const RandomNumber = ({ minMax }) => {
  const [randomNumber, setRandomNumber] = useState(0);
  const radom = () => {
    const maxRandom = Math.round(Math.random() * (+minMax.max - +minMax.min));
    setRandomNumber(maxRandom + +minMax.min);
  };
  useEffect(() => {
    radom();
  }, [minMax]);
  return <div>{randomNumber}</div>;
};

const Random = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [minMax, setMinMax] = useState({ min: 0, max: 0 });
  const onMinChange = (event) => {
    const {
      target: { value },
    } = event;
    setMin(value);
  };
  const onMaxChange = (event) => {
    const {
      target: { value },
    } = event;
    setMax(value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (+max < +min) {
      alert("Error");
    } else {
      setMinMax({ min, max });
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="min">min</label>
        <input
          id="min"
          type="number"
          placeholder="min"
          value={min}
          onChange={onMinChange}
          onClick={() => setMin("")}
          required
        />
        <label htmlFor="min">max</label>
        <input
          id="max"
          type="number"
          placeholder="max"
          value={max}
          onChange={onMaxChange}
          onClick={() => setMax("")}
          required
        />
        <input type="submit" value="Create Random Number" />
      </form>
      <RandomNumber minMax={minMax} />
    </>
  );
};

export default Random;
