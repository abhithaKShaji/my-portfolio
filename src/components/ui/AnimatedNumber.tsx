import React, { useState, useEffect } from "react";

interface AnimatedNumberProps {
  value: number;
  inView: boolean;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, inView }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = () => {
      start += Math.ceil(value / 40);
      if (start >= value) {
        setCurrent(value);
        return;
      }
      setCurrent(start);
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return <span>{current}</span>;
};
