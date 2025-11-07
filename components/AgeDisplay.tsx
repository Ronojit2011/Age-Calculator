import React from 'react';

interface AgeDisplayProps {
  age: {
    years: number | null;
    months: number | null;
    days: number | null;
  };
  isCalculated: boolean;
}

const AnimatedNumber: React.FC<{ value: number | null }> = ({ value }) => {
  return (
    <span className="text-blue-600 dark:text-blue-400 transition-all duration-500">
      {value !== null ? value : '--'}
    </span>
  );
};

const AgeDisplay: React.FC<AgeDisplayProps> = ({ age, isCalculated }) => {
  const { years, months, days } = age;

  const displayStyle = `transition-opacity duration-700 ease-in-out ${isCalculated ? 'opacity-100' : 'opacity-50'}`;

  return (
    <div className={`text-5xl sm:text-7xl lg:text-8xl font-extrabold italic text-gray-800 dark:text-gray-200 leading-tight ${displayStyle}`}>
      <p>
        <AnimatedNumber value={years} />
        <span className="ml-2 sm:ml-4">years</span>
      </p>
      <p>
        <AnimatedNumber value={months} />
        <span className="ml-2 sm:ml-4">months</span>
      </p>
      <p>
        <AnimatedNumber value={days} />
        <span className="ml-2 sm:ml-4">days</span>
      </p>
    </div>
  );
};

export default AgeDisplay;