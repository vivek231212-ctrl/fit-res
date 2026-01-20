
import React from 'react';

interface MenuProps {
  onNavigate: (view: 'list' | 'splash' | 'cart' | 'details') => void;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ onNavigate, onClose }) => {
  return (
    <div className="flex flex-col h-full bg-[#0F0E11] p-8 animate-in fade-in zoom-in-95 duration-300 overflow-y-auto">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-white text-2xl font-bold font-quicksand tracking-tight">Navigation Menu</h1>
        <button onClick={onClose} className="text-[#7C7C7C] hover:text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-4 font-quicksand">
        <button 
          onClick={() => onNavigate('list')}
          className="group relative h-[60px] flex items-center bg-[#222328] rounded-[16px] px-6 transition-all active:scale-95 border border-white/5 hover:border-[#8FFC86]/30"
        >
          <span className="text-[#CDCDCD] group-hover:text-white text-[16px] font-bold tracking-wider uppercase">1. Dashboard</span>
          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
             <div className="w-2 h-2 rounded-full bg-[#8FFC86] shadow-[0_0_8px_#8FFC86]"></div>
          </div>
        </button>

        <button 
          onClick={() => onNavigate('splash')}
          className="group relative h-[60px] flex items-center bg-[#222328] rounded-[16px] px-6 transition-all active:scale-95 border border-white/5 hover:border-[#8FFC86]/30"
        >
          <span className="text-[#CDCDCD] group-hover:text-white text-[16px] font-bold tracking-wider uppercase">2. Splash Animation</span>
          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
             <div className="w-2 h-2 rounded-full bg-[#8FFC86] shadow-[0_0_8px_#8FFC86]"></div>
          </div>
        </button>

        <button 
          onClick={() => onNavigate('cart')}
          className="group relative h-[60px] flex items-center bg-[#222328] rounded-[16px] px-6 transition-all active:scale-95 border border-white/5 hover:border-[#8FFC86]/30"
        >
          <span className="text-[#CDCDCD] group-hover:text-white text-[16px] font-bold tracking-wider uppercase">3. View Cart</span>
          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
             <div className="w-2 h-2 rounded-full bg-[#8FFC86] shadow-[0_0_8px_#8FFC86]"></div>
          </div>
        </button>

        <button 
          onClick={() => onNavigate('details')}
          className="group relative h-[60px] flex items-center bg-[#222328] rounded-[16px] px-6 transition-all active:scale-95 border border-white/5 hover:border-[#8FFC86]/30"
        >
          <span className="text-[#CDCDCD] group-hover:text-white text-[16px] font-bold tracking-wider uppercase">4. Pizza Details</span>
          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
             <div className="w-2 h-2 rounded-full bg-[#8FFC86] shadow-[0_0_8px_#8FFC86]"></div>
          </div>
        </button>
      </div>

      <div className="mt-auto pb-8 text-center">
        <p className="text-[#595959] text-xs font-quicksand uppercase tracking-[0.2em]">Hungryle App v1.0</p>
      </div>
    </div>
  );
};

export default Menu;
