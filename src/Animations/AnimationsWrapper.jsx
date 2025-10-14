import  { useEffect, useRef, useState } from "react";
import "../Animations/Animations.css";


// intersection observer function 
export default function AnimatedOnView({
  animation = "fade-in",
  duration = 800,
  threshold = 0.2,
  children, //
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
// if observed 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          
          if (entry.isIntersecting) {
            setIsVisible(true);
          
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`animated-wrapper ${isVisible ? animation : "hidden-state"}`}
      style={{ "--animation-duration": `${duration}ms` }}
    >
      {children}
    </div>
  );
}
