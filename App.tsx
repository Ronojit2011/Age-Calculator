import React, { useState, useEffect } from 'react';
import DateInput from './components/DateInput';
import AgeDisplay from './components/AgeDisplay';
import DetailedResults from './components/DetailedResults';
import ThemeToggle from './components/ThemeToggle';
import HowToUse from './components/HowToUse';

interface Age {
  years: number | null;
  months: number | null;
  days: number | null;
}

interface Summary {
  totalMonths: string | null;
  totalWeeks: string | null;
  totalDays: string | null;
  totalHours: string | null;
  totalMinutes: string | null;
  totalSeconds: string | null;
}

interface NextBirthday {
  dayOfWeek: string | null;
  months: number | null;
  days: number | null;
}

const App: React.FC = () => {
  const [birthDate, setBirthDate] = useState<string>('');
  const [comparisonDate, setComparisonDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [age, setAge] = useState<Age>({ years: null, months: null, days: null });
  const [summary, setSummary] = useState<Summary>({ totalMonths: null, totalWeeks: null, totalDays: null, totalHours: null, totalMinutes: null, totalSeconds: null });
  const [nextBirthday, setNextBirthday] = useState<NextBirthday>({ dayOfWeek: null, months: null, days: null });
  const [error, setError] = useState<string>('');
  const [isCalculated, setIsCalculated] = useState<boolean>(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const calculateDateDifference = (startDate: Date, endDate: Date) => {
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();

    if (days < 0) {
      months--;
      const lastMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
      days += lastMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }
    return { years, months, days };
  };

  const handleCalculateAge = () => {
    if (!birthDate || !comparisonDate) {
      setError('Please fill in both dates.');
      setIsCalculated(false);
      return;
    }

    const birthDateObj = new Date(birthDate);
    const comparisonDateObj = new Date(comparisonDate);

    if (isNaN(birthDateObj.getTime()) || isNaN(comparisonDateObj.getTime())) {
      setError('Please enter valid dates.');
      setIsCalculated(false);
      return;
    }

    if (birthDateObj > comparisonDateObj) {
      setError('Date of Birth cannot be in the future of the comparison date.');
      setIsCalculated(false);
      return;
    }

    // Calculate Age
    const calculatedAge = calculateDateDifference(birthDateObj, comparisonDateObj);
    setAge(calculatedAge);

    // Calculate Summary
    const diffTime = comparisonDateObj.getTime() - birthDateObj.getTime();
    const totalSeconds = Math.floor(diffTime / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = calculatedAge.years * 12 + calculatedAge.months;
    
    const formatter = new Intl.NumberFormat('en-US');
    setSummary({
      totalSeconds: formatter.format(totalSeconds),
      totalMinutes: formatter.format(totalMinutes),
      totalHours: formatter.format(totalHours),
      totalDays: formatter.format(totalDays),
      totalWeeks: formatter.format(totalWeeks),
      totalMonths: formatter.format(totalMonths),
    });

    // Calculate Next Birthday
    let nextBirthdayDate = new Date(comparisonDateObj.getFullYear(), birthDateObj.getMonth(), birthDateObj.getDate());
    if (nextBirthdayDate < comparisonDateObj || (nextBirthdayDate.getTime() === comparisonDateObj.getTime() && diffTime > 0) ) {
        nextBirthdayDate.setFullYear(comparisonDateObj.getFullYear() + 1);
    }
    
    const dayOfWeek = nextBirthdayDate.toLocaleDateString('en-US', { weekday: 'long' });
    const birthdayCountdown = calculateDateDifference(comparisonDateObj, nextBirthdayDate);

    setNextBirthday({
        dayOfWeek,
        months: birthdayCountdown.months,
        days: birthdayCountdown.days,
    });
    
    setError('');
    setIsCalculated(true);
  };
  
  const handleClear = () => {
    setBirthDate('');
    setComparisonDate(new Date().toISOString().split('T')[0]);
    setAge({ years: null, months: null, days: null });
    setSummary({ totalMonths: null, totalWeeks: null, totalDays: null, totalHours: null, totalMinutes: null, totalSeconds: null });
    setNextBirthday({ dayOfWeek: null, months: null, days: null });
    setError('');
    setIsCalculated(false);
  };

  const containerClasses = `bg-white dark:bg-gray-800 rounded-t-2xl shadow-lg p-6 sm:p-10 transition-all duration-500 ${isCalculated ? 'rounded-b-2xl' : 'rounded-bl-2xl rounded-br-[100px] md:rounded-br-[150px]'}`;

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 font-sans p-4 transition-colors duration-300">
      <div className="w-full max-w-2xl mx-auto">
        <div className={containerClasses}>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 tracking-wider">
              Age Calculator
            </h1>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
          <DateInput
            birthDate={birthDate}
            setBirthDate={setBirthDate}
            comparisonDate={comparisonDate}
            setComparisonDate={setComparisonDate}
            onCalculate={handleCalculateAge}
            onClear={handleClear}
            error={error}
          />
          <hr className="border-gray-200 dark:border-gray-600" />
          <div className="mt-8">
            <AgeDisplay age={age} isCalculated={isCalculated} />
            <DetailedResults summary={summary} nextBirthday={nextBirthday} isCalculated={isCalculated} />
          </div>
        </div>
        <HowToUse />
         <footer className="text-center mt-6">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
            </p>
        </footer>
      </div>
    </main>
  );
};

export default App;