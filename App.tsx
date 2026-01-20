
import React, { useState } from 'react';
import Logo from './components/Logo.tsx';
import BatteryIcon from './components/BatteryIcon.tsx';
import { HungerLevel, StatusItem } from './types.ts';

const INITIAL_ITEMS: StatusItem[] = [
  { id: '1', level: HungerLevel.HIGH, segments: 4, colorType: 'red' },
  { id: '2', level: HungerLevel.MEDIUM, segments: 3, colorType: 'orange' },
  { id: '3', level: HungerLevel.LOW, segments: 2, colorType: 'yellow' },
];

const App: React.FC = () => {
  const [items] = useState<StatusItem[]>(INITIAL_ITEMS);
  const [view, setView] = useState<'list' | 'detail'>('list');
  const [selectedItem, setSelectedItem] = useState<StatusItem | null>(null);

  const handleCardClick = (item: StatusItem) => {
    setSelectedItem(item);
    setView('detail');
  };

  const handleBack = () => {
    setView('list');
    setSelectedItem(null);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black py-8">
      {/* Mobile Frame - 390x844 */}
      <div className="relative w-[390px] h-[844px] bg-[#0F0E11] rounded-[30px] overflow-hidden shadow-2xl flex flex-col border border-white/5 transition-all duration-300">
        
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

        {/* Logo Section - Clickable to return home */}
        <div className="px-8 pt-10 cursor-pointer active:opacity-70 transition-opacity" onClick={handleBack}>
          <Logo />
        </div>

        {view === 'list' ? (
          <div className="flex flex-col h-full">
            {/* Active Header Card (Using first item as default active) */}
            <div className="px-4 mt-[53px]">
              <div 
                className="relative h-[46px] flex items-center bg-[#0C180C] rounded-[12px] border border-[#00C600] border-[0.6px] overflow-hidden glow-green cursor-pointer"
                onClick={() => handleCardClick(items[0])}
              >
                <div className="ml-4 flex items-center space-x-3 w-full">
                  <BatteryIcon segments={items[0].segments} colorType={items[0].colorType} />
                  <span className="text-white text-[14px] font-bold tracking-[0.1em]">{items[0].level}</span>
                </div>
              </div>
            </div>

            {/* List of other cards */}
            <div className="px-4 mt-[12.3px] space-y-[12px]">
              {items.slice(1).map((item) => (
                <div 
                  key={item.id} 
                  className="relative h-[46px] flex items-center bg-[#222328] rounded-[12px] overflow-hidden cursor-pointer active:bg-[#2a2b30] transition-colors"
                  onClick={() => handleCardClick(item)}
                >
                  <div className="ml-4 flex items-center space-x-3 w-full">
                    <BatteryIcon segments={item.segments} colorType={item.colorType} />
                    <span className="text-[#CDCDCD] text-[14px] font-bold tracking-[0.1em]">
                      {item.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-full animate-in fade-in duration-300">
            {/* Detail View Page Content */}
            <div className="px-4 mt-[53px]">
              <div className="relative h-[46px] flex items-center bg-[#0C180C] rounded-[12px] border border-[#00C600] border-[0.6px] overflow-hidden glow-green">
                <div className="ml-4 flex items-center space-x-3 w-full">
                  <BatteryIcon segments={selectedItem?.segments || 0} colorType={selectedItem?.colorType || 'red'} />
                  <span className="text-white text-[14px] font-bold tracking-[0.1em]">{selectedItem?.level}</span>
                </div>
              </div>
            </div>
            
            {/* detail page sub-content area */}
            <div className="px-8 mt-12">
               <p className="text-[#CDCDCD] text-[15px] leading-relaxed">
                 You have reached the <span className="text-white font-semibold">{selectedItem?.level}</span> hunger state. 
                 Please monitor your energy levels closely.
               </p>
               <button 
                 onClick={handleBack}
                 className="mt-8 h-[46px] w-full bg-[#222328] rounded-[12px] text-white font-bold tracking-[0.1em] active:scale-95 transition-transform"
               >
                 BACK TO DASHBOARD
               </button>
            </div>
          </div>
        )}

        {/* Home Indicator */}
        <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-[140px] h-[5px] bg-white rounded-full"></div>

      </div>
    </div>
  );
};

export default App;
