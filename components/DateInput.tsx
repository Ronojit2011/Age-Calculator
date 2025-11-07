import React from 'react';

interface DateInputProps {
  birthDate: string;
  setBirthDate: (date: string) => void;
  comparisonDate: string;
  setComparisonDate: (date: string) => void;
  onCalculate: () => void;
  onClear: () => void;
  error: string;
}

const DateInput: React.FC<DateInputProps> = ({
  birthDate,
  setBirthDate,
  comparisonDate,
  setComparisonDate,
  onCalculate,
  onClear,
  error,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate();
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4">
        <div>
          <label htmlFor="dob" className="block text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
            Date of Birth
          </label>
          <input
            id="dob"
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            max={today}
            className="w-full p-3 text-lg sm:text-xl font-bold bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition duration-200"
          />
        </div>
        <div>
          <label htmlFor="compDate" className="block text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
            Age at the Date of
          </label>
          <input
            id="compDate"
            type="date"
            value={comparisonDate}
            onChange={(e) => setComparisonDate(e.target.value)}
            className="w-full p-3 text-lg sm:text-xl font-bold bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition duration-200"
          />
        </div>
      </div>
      
      {error && <p className="text-red-500 dark:text-red-400 italic text-sm mt-2">{error}</p>}
      
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-end gap-4">
        <button
          type="button"
          onClick={onClear}
          className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 font-bold uppercase tracking-wider hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200"
        >
          Clear
        </button>
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 rounded-lg bg-blue-600 text-white font-bold uppercase tracking-wider hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 focus:ring-blue-500"
        >
          Calculate Age
        </button>
      </div>
    </form>
  );
};

export default DateInput;