import { useSpring, animated } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

function Number({ n }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  // Intersection Observer to check visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Animation logic
  const { number } = useSpring({
    from: { number: 0 },
    number: isVisible ? n : 0, 
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return (
    <div ref={ref}>
      <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
    </div>
  );
}

export default Number;
