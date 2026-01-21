import React, { useState } from 'react';
import Logo from './components/Logo.tsx';
import DetailBranding from './components/DetailBranding.tsx';
import BatteryIcon from './components/BatteryIcon.tsx';
import Cart from './components/Cart.tsx';
import Menu from './components/Menu.tsx';
import PizzaDetails from './components/PizzaDetails.tsx';
import Home from './components/Home.tsx';
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
  const [view, setView] = useState<'main' | 'menu' | 'details' | 'home'>('home');

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

  const handleMenuNavigate = (target: 'list' | 'splash' | 'cart' | 'details' | 'home') => {
    if (target === 'splash') {
      setView('home');
      triggerSplash();
    } else if (target === 'cart') {
      setView('home');
      setShowCart(true);
    } else if (target === 'details') {
      setView('details');
    } else if (target === 'list') {
      setView('main');
    } else {
      setView('home');
    }
  };

  if (isSplashing) {
    return (
      <div className="flex justify-center items-center h-[100dvh] w-full bg-black overflow-hidden">
        <div className="relative w-full max-w-[390px] h-full max-h-[844px] overflow-hidden">
          <DetailBranding />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-[100dvh] w-full bg-black overflow-hidden">
      {/* Mobile Frame - Responsive Wrapper */}
      <div className="relative w-full max-w-[390px] h-full max-h-[844px] bg-[#0F0E11] sm:rounded-[35px] overflow-hidden shadow-2xl flex flex-col transition-all duration-300">
        
        {view === 'menu' ? (
          <Menu onNavigate={(v) => handleMenuNavigate(v as any)} onClose={() => setView('home')} />
        ) : (
          <div className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden relative no-scrollbar">
            {/* Status Bar - Fixed Layout */}
            <div className="w-full px-6 pt-4 pb-2 flex justify-between items-center z-30 sticky top-0 bg-[#0F0E11]">
              <div className="flex items-center space-x-1">
                <span className="text-white text-[15px] font-semibold leading-none">19:02</span>
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
                <div className="relative w-[25px] h-[12px]">
                  <rect x="0.5" y="0.5" width="22" height="11" rx="2.5" stroke="white" strokeOpacity="0.4" fill="none" />
                  <rect x="2" y="2" width="18" height="8" rx="1" fill="white" />
                </div>
              </div>
            </div>

            {view === 'details' ? (
              <div className="flex-1 animate-in slide-in-from-bottom duration-500 relative">
                <PizzaDetails />
              </div>
            ) : view === 'home' ? (
              <div className="flex-1 flex flex-col relative animate-in fade-in duration-700">
                <Home onMenuOpen={() => setView('menu')} />
              </div>
            ) : (
              <>
                <div className="px-8 pt-10 flex justify-between items-end">
                  <Logo />
                  <button onClick={() => setView('menu')} className="mb-1 p-1 text-[#CDCDCD] hover:text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                  </button>
                </div>
                <div className="px-4 mt-[53px] flex flex-col space-y-[12.3px]">
                  {items.map((item) => (
                    <div key={item.id} onClick={() => handleCardClick(item.level)} className={`relative h-[46px] flex items-center rounded-[12px] overflow-hidden cursor-pointer transition-all duration-300 ${activeLevel === item.level ? 'bg-[#0C180C] border border-[#00C600] border-[0.6px] glow-green' : 'bg-[#222328]'}`}>
                      <div className="ml-4 flex items-center space-x-3 w-full">
                        <BatteryIcon segments={item.segments} colorType={item.colorType} />
                        <span className={`text-[14px] font-bold tracking-[0.1em] font-quicksand ${activeLevel === item.level ? 'text-white' : 'text-[#CDCDCD]'}`}>{item.level.toUpperCase()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Home Indicator - Fixed in place */}
            <div className="mt-auto flex justify-center py-4 bg-transparent pointer-events-none">
                <div className="w-[139px] h-[5px] bg-white rounded-[100px]"></div>
            </div>

            {showCart && <Cart onClose={closeCart} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;