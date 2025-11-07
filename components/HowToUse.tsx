import React from 'react';

const HowToUse: React.FC = () => {
  return (
    <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-10 text-gray-700 dark:text-gray-300">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6 border-b-2 border-gray-200 dark:border-gray-600 pb-3 tracking-wide">
        A Comprehensive Guide to Using the Age Calculator
      </h2>
      <div className="space-y-6 text-base leading-relaxed">
        <p>
          Welcome to our advanced Age Calculator! This tool is more than just a simple age finder; it's a comprehensive portal into the timeline of your life. Whether you're curious about your exact age down to the second, planning for a future event, or exploring historical timelines, this guide will walk you through every feature, ensuring you get the most out of this powerful tool. Our calculator is designed with precision, style, and user-friendliness at its core. Let's dive in and explore the dimensions of time together!
        </p>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Section 1: The Basics - Finding Your Current Age
          </h3>
          <p className="mb-2">
            The most common use for an age calculator is, of course, to find out exactly how old you are right now. Here’s the simplest way to do it:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>
              <strong>Step 1: Enter Your Date of Birth:</strong> Locate the 'Date of Birth' field. This is the starting point of your calculation. You can either type your birth date directly into the field using the YYYY-MM-DD format, or you can click the calendar icon to open an interactive date picker. The date picker is often the easiest and most accurate way to select your date, preventing any formatting errors. It's crucial to enter this date correctly, as it forms the foundation for all the results you'll see.
            </li>
            <li>
              <strong>Step 2: Check the 'Age at the Date of' Field:</strong> Next, look at the field labeled 'Age at the Date of'. For finding your current age, you don't need to change anything here. By default, it's automatically set to today's date. This date acts as the endpoint for the calculation. So, by leaving it as today, you're asking the calculator, "How old am I as of right now?"
            </li>
            <li>
              <strong>Step 3: Click 'Calculate Age':</strong> Once your birth date is set, press the vibrant blue 'Calculate Age' button. Instantly, the interface will come to life, presenting you with a wealth of information.
            </li>
          </ul>
        </div>

        <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Section 2: Understanding Your Primary Age Result</h3>
            <p>Immediately after calculating, you'll see your age displayed prominently in a large, elegant font. This is your age broken down into the most familiar format: <strong>Years</strong>, <strong>Months</strong>, and <strong>Days</strong>. Together, these three numbers give you a precise snapshot of your age at this very moment.</p>
        </div>

        <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Section 3: Exploring a Different Point in Time</h3>
            <p className="mb-2">Our calculator's power truly shines when you want to calculate an age relative to a specific date other than today. This is perfect for historical research, event planning, or just satisfying your curiosity. Enter the 'Date of Birth' as you normally would, then click on the 'Age at the Date of' field. Use the date picker to select any date from the past or future. For example:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Historical Curiosity:</strong> Want to know how old Albert Einstein was when he published his theory of relativity in 1915? Enter his birth date (March 14, 1879) and set the comparison date to November 25, 1915.</li>
                <li><strong>Future Planning:</strong> Curious how old you'll be on New Year's Day 2040? Keep your birth date and set the comparison date to January 1, 2040.</li>
            </ul>
        </div>

        <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Section 4: Diving Deeper - The Detailed Summary</h3>
            <p className="mb-2">Below the primary age display, you'll find a detailed 'Summary' section. This is where you can see your age from different perspectives, offering fascinating insights into the passage of time.</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>In Months, Weeks, and Days:</strong> These values show the total number of months, weeks, or days you have lived. It's a great way to grasp the full extent of your life's timeline beyond just years. Seeing your age in total days can really put time into perspective!</li>
                <li><strong>In Hours, Minutes, and Seconds:</strong> For the truly curious, we break down your age into total hours, minutes, and even seconds. Watching these numbers gives a profound sense of the constant, flowing nature of time.</li>
            </ul>
        </div>
        
        <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Section 5: Looking Ahead - Your Next Birthday</h3>
            <p>The 'Next Birthday' feature helps you anticipate your next milestone. It tells you the exact <strong>day of the week</strong> your next birthday will fall on, so you can start planning your celebration well in advance. It also provides a precise <strong>countdown</strong> in the remaining months and days, building excitement as the date approaches.</p>
        </div>

        <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Section 6: User-Friendly Features</h3>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>The 'Clear' Button:</strong> If you want to start a new calculation, simply click the 'Clear' button. This will reset all fields to their default state, giving you a clean slate.</li>
                <li><strong>Light & Dark Mode Toggle:</strong> In the top-right corner, you'll find a toggle with a sun and moon icon. Click this at any time to switch between a crisp, clean light theme and a sleek, eye-friendly dark theme, perfect for reducing eye strain in low-light environments.</li>
            </ul>
        </div>
        
        <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Section 7: Troubleshooting Common Errors</h3>
            <p className="mb-2">Our calculator is designed to be intuitive, but here are solutions to a couple of common issues:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Error: 'Please fill in both dates.'</strong> This message appears if you click 'Calculate Age' before selecting a 'Date of Birth'. Simply use the date picker to enter your birth date and try again.</li>
                <li><strong>Error: 'Date of Birth cannot be in the future...'</strong> This appears if the date of birth you entered is later than the comparison date. Double-check your dates to ensure they are in the correct logical order.</li>
            </ul>
        </div>

        <p className="pt-4 border-t border-gray-200 dark:border-gray-600">
          Thank you for using our Age Calculator! We hope this guide has helped you unlock its full potential. From simple age calculations to detailed temporal explorations, this tool is here to provide clarity, insight, and maybe even a little bit of fun. Explore, calculate, and enjoy your journey through time!
        </p>
      </div>
    </div>
  );
};

export default HowToUse;
