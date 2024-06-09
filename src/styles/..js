import React from 'react';

// Shared Tailwind CSS classes
const flex = 'flex';
const flexCol = 'flex-col';
const flexRow = 'flex-row';
const itemsCenter = 'items-center';
const justifyBetween = 'justify-between';
const justifyCenter = 'justify-center';
const p4 = 'p-4';
const wFull = 'w-full';
const mdW1_3 = 'md:w-1/3';
const lgW1_4 = 'lg:w-1/4';
const mdW2_3 = 'md:w-2/3';
const lgW3_4 = 'lg:w-3/4';
const bgBlue200 = 'bg-blue-200';
const bgWhite = 'bg-white';
const textWhite = 'text-white';
const textZinc700 = 'text-zinc-700';
const roundedMd = 'rounded-md';
const text6xl = 'text-6xl';
const textLg = 'text-lg';
const mr2 = 'mr-2';
const mb2 = 'mb-2';
const mb4 = 'mb-4';
const gridCols1 = 'grid-cols-1';
const mdGridCols2 = 'md:grid-cols-2';
const lgGridCols3 = 'lg:grid-cols-3';
const gap4 = 'gap-4';
const shadowMd = 'shadow-md';
const flexGrow = 'flex-grow';
const textMd = 'text-md';
const text2xl = 'text-2xl';
const textCenter = 'text-center';
const textSm = 'text-sm';

const WeatherApp = () => {
  return (
    <div className={`${flex} ${flexCol} ${flexRow} h-screen`}>
      <div className={`${bgBlue200} ${flex} ${flexCol} ${p4} ${wFull} ${mdW1_3} ${lgW1_4}`}>
        <div className={`${flex} ${itemsCenter} ${mb4}`}>
          <input type="text" placeholder="Search for places" className={`${wFull} p-2 ${roundedMd} ${bgWhite} ${textZinc700}`} />
          <button className={`ml-2 p-2 ${roundedMd} ${bgZinc300}`}>
            <img aria-hidden="true" alt="settings" src="https://placehold.co/20x20" />
          </button>
        </div>
        <div className={`${flex} ${flexCol} ${itemsCenter} ${textWhite}`}>
          <div className={`${text6xl} ${mb2}`}>28°C</div>
          <div className={`${textLg} ${mb4}`}>Scattered clouds</div>
          <div className={`${flex} ${itemsCenter} ${mb2}`}>
            <img aria-hidden="true" alt="calendar" src="https://placehold.co/20x20" className={mr2} />
            <span>Jun 12, 2018</span>
          </div>
          <div className={`${flex} ${itemsCenter}`}>
            <img aria-hidden="true" alt="location" src="https://placehold.co/20x20" className={mr2} />
            <span>Bengaluru, IN</span>
          </div>
        </div>
      </div>
      
      <div className={`${flex} ${flexCol} ${wFull} ${mdW2_3} ${lgW3_4} ${p4}`}>
        <div className={`${flex} ${justifyBetween} ${itemsCenter} ${mb4}`}>
          <div className={`${flex} ${itemsCenter}`}>
            <button className={`mr-4 text-lg font-bold`}>Today</button>
            <button className={`text-lg`}>Week</button>
          </div>
          <div className={`${flex} ${itemsCenter}`}>
            <button className={`p-2 ${roundedMd} ${bgZinc300} ${mr2}`}>°C</button>
            <button className={`p-2 ${roundedMd} ${bgZinc300}`}>°F</button>
          </div>
        </div>
        <div className={`${flexGrow} ${bgWhite} ${roundedMd} ${shadowMd} ${p4} ${mb4}`}>
          <img aria-hidden="true" alt="chart" src="https://placehold.co/600x200" className="w-full" />
        </div>
        <div className={`${bgWhite} ${roundedMd} ${shadowMd} ${p4}`}>
          <h2 className={`${textLg} font-bold mb-4`}>Today's Highlights</h2>
          <div className={`${flex} ${gridCols1} ${mdGridCols2} ${lgGridCols3} ${gap4}`}>
            <div className={`${bgZinc100} ${p4} ${roundedMd}`}>
              <h3 className={`${textMd} font-semibold ${mb2}`}>UV Index</h3>
              <img aria-hidden="true" alt="uv index" src="https://placehold.co/100x100" className="mx-auto" />
            </div>
            <div className={`${bgZinc100} ${p4} ${roundedMd}`}>
              <h3 className={`${textMd} font-semibold ${mb2}`}>Wind Status</h3>
              <img aria-hidden="true" alt="wind status" src="https://placehold.co/100x100" className="mx-auto" />
            </div>
            <div className={`${bgZinc100} ${p4} ${roundedMd}`}>
              <h3 className={`${textMd} font-semibold ${mb2}`}>Sunrise & Sunset</h3>
              <img aria-hidden="true" alt="sunrise and sunset" src="https://placehold.co/100x100" className="mx-auto" />
            </div>
            <div className={`${bgZinc100} ${p4} ${roundedMd}`}>
              <h3 className={`${textMd} font-semibold ${mb2}`}>Humidity</h3>
              <div className={`${textCenter} ${text2xl}`}>63%</div>
            </div>
            <div className={`${bgZinc100} ${p4} ${roundedMd}`}>
              <h3 className={`${textMd} font-semibold ${mb2}`}>Visibility</h3>
              <div className={`${textCenter} ${text2xl}`}>12km</div>
            </div>
            <div className={`${bgZinc100} ${p4} ${roundedMd}`}>
              <h3 className={`${textMd} font-semibold ${mb2}`}>Air Quality</h3>
              <div className={`${textCenter} ${text2xl}`}>101</div>
              <div className={`${textCenter} ${textSm}`}>Unhealthy for Sensitive Groups</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
