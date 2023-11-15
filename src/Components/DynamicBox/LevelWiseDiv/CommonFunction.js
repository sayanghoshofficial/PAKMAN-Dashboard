import React, { useEffect, useState } from 'react';
import Style from './level.module.css';

export function formatNumber(value) {
    if (value < 100) {
        const formattedValue = value % 1 === 0 ? value.toFixed(0) : value.toFixed(2);
        return formattedValue.replace(/\.?0*$/, '');
    } else if (value < 1000) {
        return value.toString();
    } else if (value < 1000000) {
        return (value / 1000).toFixed(1) + 'K';
    } else {
        return (value / 1000000).toFixed(1) + 'M';
    }
}

export const BigValue = ({ elem }) => {
    const [animatedValue, setAnimatedValue] = useState(0);

    useEffect(() => {
        const animationDuration = 1000; // in milliseconds
        const start = 0;
        const end = elem?.value || 0;

        const startTime = Date.now();

        const updateValue = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;

            if (elapsed < animationDuration) {
                // Calculate the animated value based on time elapsed
                const progress = elapsed / animationDuration;
                const nextValue = start + progress * (end - start);
                setAnimatedValue(nextValue);
                requestAnimationFrame(updateValue);
            } else {
                // Ensure the final value is set when the animation is complete
                setAnimatedValue(end);
            }
        };

        // Start the animation
        updateValue();
    }, [elem?.value]);

    return (
        <div className={Style.BigValue}>
            <p>
                <span>{elem?.startUnit}</span>
                {formatNumber(animatedValue)}
                <span style={{ fontWeight: elem?.endUnit === '%' ? '300' : 'normal' }}>
                    {elem?.endUnit}
                </span>
            </p>
        </div>
    );
};
