// Function to generate select option dropdown values in 30 minute increments
export const generateDropdownValues = () => {
  const values = [];

  for (let i = 0; i <= 48; i++) {
    const hrsLabel = Math.floor(i / 2) === 1 ? 'hour' : 'hours';
    const minsLabel = i % 2 > 0 ? ' 30 minutes' : '';
    values.push({
      value: i * 30,
      label: `${Math.floor(i / 2)} ${hrsLabel}${minsLabel}`,
    });
  }

  return values;
};

// Function to calculate sleep based on duration in bed and duration asleep
export const calculateSleep = (durationInBed, durationAsleep) =>
  100 * (durationInBed / durationAsleep);
