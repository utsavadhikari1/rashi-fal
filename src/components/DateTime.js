import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center text-2xl text-red-700">
      {date.toLocaleTimeString()}
      <div>{date.toLocaleDateString()}</div>
    </div>
  );
};

export default DateTime;
