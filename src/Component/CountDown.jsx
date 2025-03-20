import React, { useState, useEffect } from 'react';

const CountDown = () => {
  const [days, setDays] = useState(99);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      } else if (days > 0) {
        setDays(days - 1);
        setHours(23);
        setMinutes(59);
        setSeconds(59);
      } else {
        clearInterval(interval); 
      }
    }, 1000);

    return () => clearInterval(interval); 
  }, [seconds, minutes, hours, days]);

  return (
    <div className="grid grid-flow-col gap-3 text-center auto-cols-max">
      <div className="flex flex-col border p-1 rounded-lg leading-[10px]">
        <span className="countdown font-mono text-md text-center mx-auto">
          <span style={{ "--value": days }} aria-live="polite" aria-label={days}>
            {days}
          </span>
        </span>
        <span className='text-[10px]'>Days</span>
      </div>
      <div className="flex flex-col border p-1 rounded-lg leading-[10px]">
        <span className="countdown font-mono text-md text-center mx-auto">
          <span style={{ "--value": hours }} aria-live="polite" aria-label={hours}>
            {hours}
          </span>
        </span>
        <span className='text-[10px]'>Hours</span>
      </div>
      <div className="flex flex-col border p-1 rounded-lg leading-[10px]">
        <span className="countdown font-mono text-md text-center mx-auto">
          <span style={{ "--value": minutes }} aria-live="polite" aria-label={minutes}>
            {minutes}
          </span>
        </span>
        <span className='text-[10px]'>Min</span>
      </div>
      <div className="flex flex-col border p-1 rounded-lg leading-[10px]">
        <span className="countdown font-mono text-md text-center mx-auto">
          <span style={{ "--value": seconds }} aria-live="polite" aria-label={seconds}>
            {seconds}
          </span>
        </span>
        <span className='text-[10px]'>Sec</span>
      </div>
    </div>
  );
};

export default CountDown;
