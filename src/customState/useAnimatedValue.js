// useAnimatedValue.js
import { useEffect, useState } from 'react';

const useAnimatedValue = (initialValue, endValue, duration = 1000) => {
  const [animatedValue, setAnimatedValue] = useState(initialValue);

  useEffect(() => {
    const startTime = Date.now();

    function countDecimalPlaces(value) {
      const match = value.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
      if (!match) return 0;
      return Math.max(
        // Number of digits right of decimal point.
        (match[1] ? match[1].length : 0),
        // Adjust for scientific notation.
        (match[2] ? +match[2] : 0)
      );
    }


    const updateValue = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;

      if (elapsed < duration) {
        const progress = elapsed / duration;
        const nextValue = initialValue + progress * (endValue - initialValue);
        const roundedValue = countDecimalPlaces(endValue) === 3
          ? parseFloat(nextValue.toFixed(4)) // Round to four decimal places
          : parseFloat(nextValue.toFixed(2)); // Round to two decimal places
          
        setAnimatedValue(roundedValue);
        requestAnimationFrame(updateValue);
      } else {
        setAnimatedValue(endValue);
      }
    };

    updateValue();
  }, [initialValue, endValue, duration]);

  return animatedValue;
};

export default useAnimatedValue;
