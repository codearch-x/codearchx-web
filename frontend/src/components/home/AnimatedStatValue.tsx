import { useEffect } from "react";
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from "motion/react";

type AnimatedStatValueProps = {
  value: number;
  suffix?: string;
};

const AnimatedStatValue = ({ value, suffix = "" }: AnimatedStatValueProps) => {
  const count = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();
  const displayValue = useTransform(count, (latest) => `${Math.round(latest)}${suffix}`);

  useEffect(() => {
    if (shouldReduceMotion) {
      count.set(value);
      return;
    }

    const controls = animate(count, value, {
      type: "keyframes",
      duration: 3,
      ease: "easeOut"
    });

    return () => controls.stop();
  }, [count, shouldReduceMotion, value]);

  return <motion.strong>{displayValue}</motion.strong>;
}

export default AnimatedStatValue;
