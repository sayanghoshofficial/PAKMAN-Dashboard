// useAnimatedValue.js
import { useEffect, useState } from 'react';

const useAnimatedValue = (initialValue, endValue, duration = 1000) => {
  const [animatedValue, setAnimatedValue] = useState(initialValue);

  useEffect(() => {
    const startTime = Date.now();

    const updateValue = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;

      if (elapsed < duration) {
        const progress = elapsed / duration;
        const nextValue = initialValue + progress * (endValue - initialValue);
        const roundedValue = parseFloat(nextValue.toFixed(2)); // Round to two decimal places
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
