
import React, { useState } from 'react';
import Logo from './components/Logo.tsx';
import DetailBranding from './components/DetailBranding.tsx';
import BatteryIcon from './components/BatteryIcon.tsx';
import Cart from './components/Cart.tsx';
import Menu from './components/Menu.tsx';
import { HungerLevel, StatusItem } from './types.ts';

const INITIAL_ITEMS: StatusItem[] = [
  { id: '1', level: HungerLevel.HIGH, segments: 4, colorType: 'red' },
  { id: '2', level: HungerLevel.MEDIUM, segments: 3, colorType: 'orange' },
  { id: '3', level: HungerLevel.LOW, segments: 2, colorType: 'yellow' },
];

const App: React.FC = () => {
  const [items] = useState<StatusItem[]>(INITIAL_ITEMS);
  const [isSplashing, setIsSplashing] = useState<boolean>(false);
  const [activeLevel, setActiveLevel] = useState<HungerLevel | null>(null);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [view, setView] = useState<'main' | 'menu'>('main');

  const handleCardClick = (level: HungerLevel) => {
    setActiveLevel(level);
    triggerSplash(() => setShowCart(true));
  };

  const triggerSplash = (callback?: () => void) => {
    setIsSplashing(true);
    setTimeout(() => {
      setIsSplashing(false);
      if (callback) callback();
    }, 500);
  };

  const closeCart = () => {
    setShowCart(false);
    setActiveLevel(null);
  };

  const handleMenuNavigate = (target: 'list' | 'splash' | 'cart') => {
    setView('main');
    if (target === 'list') {
      closeCart();
    } else if (target === 'splash') {
      triggerSplash();
    } else if (target === 'cart') {
      setShowCart(true);
    }
  };

  if (isSplashing) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black py-8">
        <div className="relative w-[390px] h-[844px] rounded-[30px] overflow-hidden shadow-2xl">
          <DetailBranding />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-black py-8">
      {/* Mobile Frame - 390x844 */}
      <div className="relative w-[390px] h-[844px] bg-[#0F0E11] rounded-[30px] overflow-hidden shadow-2xl flex flex-col border border-white/5 transition-all duration-300">
        
        {view === 'menu' ? (
          <Menu onNavigate={handleMenuNavigate} onClose={() => setView('main')} />
        ) : (
          <>
            {/* Status Bar */}
            <div className="px-8 pt-4 flex justify-between items-center z-10">
              <div className="flex items-center space-x-1">
                <span className="text-white text-[15px] font-semibold">19:02</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
                  <rect x="0" y="7" width="3" height="4" rx="1" fill="white" />
                  <rect x="4.5" y="4" width="3" height="7" rx="1" fill="white" />
                  <rect x="9" y="2" width="3" height="9" rx="1" fill="white" />
                  <rect x="13.5" y="0" width="3" height="11" rx="1" fill="white" />
                </svg>
                <svg width="16" height="12" viewBox="0 0 16 12" fill="white">
                  <path d="M8 12L0 4C2.5 1.5 5.5 0 8 0C10.5 0 13.5 1.5 16 4L8 12Z" />
                </svg>
                <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
                  <rect x="0.5" y="0.5" width="22" height="11" rx="2.5" stroke="white" strokeOpacity="0.4" />
                  <rect x="2" y="2" width="18" height="8" rx="1" fill="white" />
                  <path d="M23 4C24 4.5 24.5 5.2 24.5 6C24.5 6.8 24 7.5 23 8" stroke="white" strokeOpacity="0.4" />
                </svg>
              </div>
            </div>

            {/* Logo Section + Menu Toggle */}
            <div className="px-8 pt-10 flex justify-between items-end">
              <Logo />
              <button 
                onClick={() => setView('menu')}
                className="mb-1 p-1 text-[#CDCDCD] hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Dynamic Card List */}
            <div className="px-4 mt-[53px] flex flex-col space-y-[12.3px]">
              {items.map((item) => {
                const isActive = activeLevel === item.level;
                
                return (
                  <div 
                    key={item.id} 
                    onClick={() => handleCardClick(item.level)}
                    className={`relative h-[46px] flex items-center rounded-[12px] overflow-hidden cursor-pointer transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#0C180C] border border-[#00C600] border-[0.6px] glow-green' 
                        : 'bg-[#222328]'
                    }`}
                  >
                    <div className="ml-4 flex items-center space-x-3 w-full">
                      <BatteryIcon segments={item.segments} colorType={item.colorType} />
                      <span className={`text-[14px] font-bold tracking-[0.1em] font-quicksand ${isActive ? 'text-white' : 'text-[#CDCDCD]'}`}>
                        {item.level.toUpperCase()}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-[140px] h-[5px] bg-white rounded-full"></div>

            {/* Cart Modal / Drawer */}
            {showCart && <Cart onClose={closeCart} />}
          </>
        )}

      </div>
    </div>
  );
};

export default App;
