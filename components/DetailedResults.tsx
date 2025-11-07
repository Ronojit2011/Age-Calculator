import React from 'react';

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

interface DetailedResultsProps {
  summary: Summary;
  nextBirthday: NextBirthday;
  isCalculated: boolean;
}

const SummaryItem: React.FC<{ label: string; value: string | null }> = ({ label, value }) => (
  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center sm:text-left">
    <p className="text-sm uppercase text-gray-500 dark:text-gray-400 tracking-wider">{label}</p>
    <p className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">{value ?? '-'}</p>
  </div>
);

const DetailedResults: React.FC<DetailedResultsProps> = ({ summary, nextBirthday, isCalculated }) => {
  if (!isCalculated) {
    return null;
  }

  return (
    <div className="mt-10 transition-opacity duration-1000 ease-in-out opacity-100">
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 border-b-2 border-gray-200 dark:border-gray-600 pb-2 tracking-wide">
          Summary
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-gray-700 dark:text-gray-300">
          <SummaryItem label="In Months" value={summary.totalMonths} />
          <SummaryItem label="In Weeks" value={summary.totalWeeks} />
          <SummaryItem label="In Days" value={summary.totalDays} />
          <SummaryItem label="In Hours" value={summary.totalHours} />
          <SummaryItem label="In Minutes" value={summary.totalMinutes} />
          <SummaryItem label="In Seconds" value={summary.totalSeconds} />
        </div>
      </div>

      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 border-b-2 border-gray-200 dark:border-gray-600 pb-2 tracking-wide">
          Next Birthday
        </h2>
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center">
            <p className="text-2xl sm:text-3xl font-bold text-blue-500 dark:text-blue-400 mb-2">{nextBirthday.dayOfWeek}</p>
            <p className="text-lg text-gray-800 dark:text-gray-200">
                <span className="font-semibold">{nextBirthday.months}</span> months & <span className="font-semibold">{nextBirthday.days}</span> days
            </p>
        </div>
      </div>
    </div>
  );
};

export default DetailedResults;