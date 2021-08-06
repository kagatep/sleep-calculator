import React from 'react';
import './App.css';
import { calculateSleep, generateDropdownValues } from './util';
import { postScore } from './api';

const Options = ({ values }) =>
  values.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));

function App() {
  const dropdownValues = generateDropdownValues();
  const [bedValue, setBedValue] = React.useState(dropdownValues[0].value);
  const [sleepValue, setSleepValue] = React.useState(dropdownValues[0].value);
  const [outputValue, setOutputValue] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleButtonClick = async () => {
    setIsLoading(true);
    const calculated = calculateSleep(bedValue, sleepValue);
    const { statusCode } = await postScore(calculated);

    if (statusCode === 200) {
      setIsLoading(false);
      setOutputValue(calculated);
    }

    if (statusCode === 400) {
      setIsLoading(false);
      setOutputValue('Sorry, can’t calculate score.');
    }
  };

  return (
    <div className="App">
      <div className="Dropdown">
        <label htmlFor="bed-duration">Duration in bed</label>
        <select
          id="bed-duration"
          value={bedValue}
          onChange={(e) => setBedValue(e.target.value)}
        >
          <Options values={dropdownValues} />
        </select>
      </div>
      <div className="Dropdown">
        <label htmlFor="sleep-duration">Duration asleep</label>
        <select
          id="sleep-duration"
          value={sleepValue}
          onChange={(e) => setSleepValue(e.target.value)}
        >
          <Options values={dropdownValues} />
        </select>
      </div>
      <div>
        <button
          onClick={handleButtonClick}
          disabled={bedValue === 0 || sleepValue === 0}
        >
          {isLoading ? 'Loading' : 'Calculate'}
        </button>
      </div>
      {outputValue > 0 && <p>Score: {outputValue}</p>}
    </div>
  );
}

export default App;
