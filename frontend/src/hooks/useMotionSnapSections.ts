import { useEffect, useRef } from "react";
import { animate, useReducedMotion } from "motion/react";

const NAV_OFFSET = 72;
const WHEEL_THRESHOLD = 8;
const TOUCH_THRESHOLD = 48;

const useMotionSnapSections = () => {
  const prefersReducedMotion = useReducedMotion();
  const sectionsRef = useRef<Array<HTMLElement | null>>([]);
  const touchStartYRef = useRef<number | null>(null);
  const isSnappingRef = useRef(false);
  const snapAnimationRef = useRef<{ stop: () => void } | null>(null);
  const snapUnlockTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const getTargets = () =>
      sectionsRef.current
        .filter((section): section is HTMLElement => Boolean(section))
        .map((section) => section.getBoundingClientRect().top + window.scrollY - NAV_OFFSET);

    const nearestIndex = (targets: number[], scrollY: number) =>
      targets.reduce(
        (closest, target, index) =>
          Math.abs(target - scrollY) < Math.abs(targets[closest] - scrollY) ? index : closest,
        0
      );

    const snapTo = (targetIndex: number, targets: number[]) => {
      const target = targets[targetIndex];

      if (target === undefined) {
        return false;
      }

      snapAnimationRef.current?.stop();
      isSnappingRef.current = true;

      if (prefersReducedMotion) {
        window.scrollTo(0, target);
        snapUnlockTimeoutRef.current = window.setTimeout(() => {
          isSnappingRef.current = false;
        }, 160);
        return true;
      }

      snapAnimationRef.current = animate(window.scrollY, target, {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (value) => window.scrollTo(0, value),
        onComplete: () => {
          isSnappingRef.current = false;
        }
      });

      return true;
    };

    const snapByDirection = (direction: 1 | -1) => {
      const targets = getTargets();

      if (targets.length === 0) {
        return false;
      }

      const firstTarget = targets[0];
      const lastTarget = targets[targets.length - 1];
      const currentScroll = window.scrollY;
      const isBeforeSections = currentScroll < firstTarget - NAV_OFFSET;
      const isAfterSections = currentScroll > lastTarget + NAV_OFFSET;

      if (isBeforeSections || isAfterSections) {
        if ((isBeforeSections && direction < 0) || (isAfterSections && direction > 0)) {
          return false;
        }

        return snapTo(isBeforeSections ? 0 : targets.length - 1, targets);
      }

      return snapTo(nearestIndex(targets, currentScroll) + direction, targets);
    };

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < WHEEL_THRESHOLD) {
        return;
      }

      if (isSnappingRef.current) {
        event.preventDefault();
        return;
      }

      if (snapByDirection(event.deltaY > 0 ? 1 : -1)) {
        event.preventDefault();
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1) {
        touchStartYRef.current = null;
        return;
      }

      touchStartYRef.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (touchStartYRef.current === null || event.touches.length !== 1) {
        return;
      }

      const deltaY = touchStartYRef.current - event.touches[0].clientY;

      if (Math.abs(deltaY) < TOUCH_THRESHOLD) {
        return;
      }

      if (isSnappingRef.current) {
        event.preventDefault();
        return;
      }

      if (snapByDirection(deltaY > 0 ? 1 : -1)) {
        event.preventDefault();
        touchStartYRef.current = null;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      if (snapUnlockTimeoutRef.current !== null) {
        window.clearTimeout(snapUnlockTimeoutRef.current);
      }

      snapAnimationRef.current?.stop();
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [prefersReducedMotion]);

  return (index: number) => (node: HTMLElement | null) => {
    sectionsRef.current[index] = node;
  };
};

export default useMotionSnapSections;
