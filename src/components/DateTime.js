import React, {useState, useEffect}  from 'react'

const DateTime = () => {

const [date, setDate] = useState(new Date());

useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
}, []);

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <div className='flex items-center justify-center text-2xl font-bold text-white-600  '>
        <h2>{date.toLocaleTimeString()}</h2> 
        <h2>{date.toLocaleDateString(undefined, options)}</h2>
    </div>
  );
}

export default DateTime;

