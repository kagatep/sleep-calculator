export const generateDropdownValues = () => {
  const values = [];

  for (let i = 0; i <= 48; i++) {
    const hrsLabel = i === 1 ? 'hour' : 'hours';
    const minsLabel = i % 2 > 0 ? ' 30 minutes' : '';
    values.push({
      value: i * 30,
      label: `${Math.floor(i / 2)} ${hrsLabel}${minsLabel}`,
    });
  }

  return values;
};

export const calculateSleep = (bed, sleep) => 100 * (bed / sleep);
