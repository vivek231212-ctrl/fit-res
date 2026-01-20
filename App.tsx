
import React, { useState } from 'react';
import Logo from './components/Logo';
import BatteryIcon from './components/BatteryIcon';
import { HungerLevel, StatusItem } from './types';

const INITIAL_ITEMS: StatusItem[] = [
  { id: '1', level: HungerLevel.MEDIUM, segments: 3, colorType: 'orange' },
  { id: '2', level: HungerLevel.LOW, segments: 2, colorType: 'yellow' },
];

const App: React.FC = () => {
  const [items] = useState<StatusItem[]>(INITIAL_ITEMS);

  return (
    <div className="flex justify-center items-center min-h-screen bg-black py-8">
      {/* Mobile Frame - 390x844 */}
      <div className="relative w-[390px] h-[844px] bg-[#0F0E11] rounded-[30px] overflow-hidden shadow-2xl flex flex-col">
        
        {/* Status Bar */}
        <div className="px-8 pt-4 flex justify-between items-center z-10">
          <div className="flex items-center space-x-1">
            <span className="text-white text-[15px] font-semibold">19:02</span>
          </div>
          <div className="flex items-center space-x-1.5">
            {/* Cellular */}
            <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
              <rect x="0" y="7" width="3" height="4" rx="1" fill="white" />
              <rect x="4.5" y="4" width="3" height="7" rx="1" fill="white" />
              <rect x="9" y="2" width="3" height="9" rx="1" fill="white" />
              <rect x="13.5" y="0" width="3" height="11" rx="1" fill="white" />
            </svg>
            {/* Wifi */}
            <svg width="16" height="12" viewBox="0 0 16 12" fill="white">
              <path d="M8 12L0 4C2.5 1.5 5.5 0 8 0C10.5 0 13.5 1.5 16 4L8 12Z" />
            </svg>
            {/* Battery */}
            <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
              <rect x="0.5" y="0.5" width="22" height="11" rx="2.5" stroke="white" strokeOpacity="0.4" />
              <rect x="2" y="2" width="18" height="8" rx="1" fill="white" />
              <path d="M23 4C24 4.5 24.5 5.2 24.5 6C24.5 6.8 24 7.5 23 8" stroke="white" strokeOpacity="0.4" />
            </svg>
          </div>
        </div>

        {/* Logo Section */}
        <div className="px-8 pt-10">
          <Logo />
        </div>

        {/* Main Card (HUNG) */}
        <div className="px-4 mt-12">
          <div className="relative h-[46px] flex items-center bg-[#0C180C] rounded-[12px] border border-[#00C600]/40 overflow-hidden glow-green">
             {/* Glowing border effect is handled by glow-green class */}
             <div className="ml-4 flex items-center space-x-3 w-full">
                <BatteryIcon segments={4} colorType="red" />
                <span className="text-white text-[14px] font-semibold tracking-wider uppercase">Hung</span>
             </div>
          </div>
        </div>

        {/* List Items */}
        <div className="px-4 mt-3 space-y-3">
          {items.map((item) => (
            <div key={item.id} className="relative h-[46px] flex items-center bg-[#222328] rounded-[12px] overflow-hidden">
               <div className="ml-4 flex items-center space-x-3 w-full">
                  <BatteryIcon segments={item.segments} colorType={item.colorType} />
                  <span className="text-[#CDCDCD] text-[14px] font-semibold tracking-wider uppercase">
                    {item.level}
                  </span>
               </div>
            </div>
          ))}
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[140px] h-[5px] bg-white rounded-full"></div>

      </div>
    </div>
  );
};

export default App;
