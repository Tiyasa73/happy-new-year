import { useEffect, useState } from "react";

function Newyear() {
  const [stage, setStage] = useState("2024"); // Initial stage is "2024"
  const [showFlowerRain, setShowFlowerRain] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setStage("transition"); // Start removing the "4"
    }, 3000);

    const timer2 = setTimeout(() => {
      setStage("2025"); // Show "2025" and greeting
      setShowFlowerRain(true); 
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);
  const generateFlowerStyle = () => {
    return {
      left: `${Math.random() * 100}%`, // Random horizontal position
      animationDuration: `${Math.random() * 5 + 5}s`, // Random animation duration between 5 and 10 seconds
    };
  };

  return (
    <>
      <div className="new-year-container">
        {stage === "2024" && <div className="text-2024">2024</div>}
        {stage === "transition" && (
          <div className="text-transition">
            202<span className="remove-4">4</span>
            <span className="add-5">5</span>
          </div>
        )}
        {stage === "2025" && (
          <div className="text-2025">
            <span>🎉 Happy New Year 2025 !🎊 😊</span>
            <p className="wish">wishing you joy,success,and happiness
               througthout the year!</p>
            <div className="from-text">from Tiyasa</div>
            </div>
      
        )}
        {showFlowerRain && (
          <div className="flower-rain">
            {/* Create a number of flower elements */}
            {new Array(100).fill(0).map((_, index) => (
              <div key={index} className="flower" style={generateFlowerStyle()}></div>
            ))}
          </div>
        )}
      </div>
      </>
  );
}

export default Newyear;
