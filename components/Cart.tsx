
import React from 'react';

interface CartProps {
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
  return (
    <div className="absolute bottom-0 left-0 w-full bg-[#222328] rounded-t-[24px] cart-shadow flex flex-col font-quicksand animate-in slide-in-from-bottom duration-300">
      {/* Handle */}
      <div className="flex justify-center pt-3 pb-2" onClick={onClose}>
        <div className="w-[38px] h-[2px] rounded-full bg-[#7C7C7C]"></div>
      </div>

      <div className="px-4 py-2">
        {/* Title */}
        <h2 className="text-white text-[18px] font-bold mb-4">Your Cart</h2>

        {/* Cart Items List */}
        <div className="flex flex-col border-b border-dashed border-[#595959] pb-4 mb-4 gap-6">
          
          {/* Item 1 */}
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                {/* Veg Icon */}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10 0H2C0.895431 0 0 0.895431 0 2V10C0 11.1046 0.895431 12 2 12H10C11.1046 12 12 11.1046 12 10V2C12 0.895431 11.1046 0 10 0Z" fill="#FEFEFE" stroke="#008000" strokeWidth="0.5"/>
                  <circle cx="6" cy="6" r="3" fill="#008000" />
                </svg>
                <span className="text-white text-[12px] font-bold">Hyderabadi Biryani</span>
              </div>
              <span className="text-white text-[12px] font-semibold">₹280</span>
              <div className="flex items-center gap-1 mt-1 cursor-pointer">
                <span className="text-white text-[12px] font-semibold capitalize">Edit</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3.36501 10.4795C3.58359 10.5306 3.82675 10.4841 3.97148 10.3635L8.33509 6.72706C8.49443 6.59426 8.49443 6.40553 8.33505 6.27273L3.97144 2.63649C3.86591 2.54853 3.70799 2.5 3.54541 2.5C3.48511 2.5 3.4241 2.50669 3.36497 2.52053C3.14635 2.57164 3.00006 2.70924 3.00006 2.86366L3.00006 10.1364C3.0001 10.2908 3.14639 10.4284 3.36501 10.4795ZM4.091 3.90029L4.091 6.49998L4.091 9.09968L4.091 3.90029Z" fill="#009700"/>
                </svg>
              </div>
            </div>
            
            {/* Qty Selector */}
            <div className="flex items-center justify-between w-[76px] h-[30px] bg-[#EFEFEF] rounded-lg px-2 shadow-md">
              <button className="text-[#009700] flex items-center justify-center">
                <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
                  <path d="M9.61111 1.36364H0.388889C0.174111 1.36364 0 1.05838 0 0.681818C0 0.305256 0.174111 0 0.388889 0H9.61111C9.82589 0 10 0.305256 10 0.681818C10 1.05838 9.82589 1.36364 9.61111 1.36364Z" fill="#0F0E11"/>
                </svg>
              </button>
              <span className="text-[#0F0E11] text-[14px] font-semibold">2</span>
              <button className="text-[#0F0E11] flex items-center justify-center font-bold">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                   <path d="M5 0C4.70146 0 4.45946 0.242013 4.45946 0.540541V4.45948H0.540541C0.242013 4.45948 0 4.70148 0 5.00002C0 5.29856 0.242013 5.54056 0.540541 5.54056H4.45946V9.45946C4.45946 9.75799 4.70146 10 5 10C5.29854 10 5.54054 9.75799 5.54054 9.45946V5.54056H9.45946C9.75799 5.54056 10 5.29856 10 5.00002C10 4.70148 9.75799 4.45948 9.45946 4.45948H5.54054V0.540541C5.54054 0.242013 5.29854 0 5 0Z" fill="#0F0E11"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10 0H2C0.895431 0 0 0.895431 0 2V10C0 11.1046 0.895431 12 2 12H10C11.1046 12 12 11.1046 12 10V2C12 0.895431 11.1046 0 10 0Z" fill="#FEFEFE" stroke="#008000" strokeWidth="0.5"/>
                  <circle cx="6" cy="6" r="3" fill="#008000" />
                </svg>
                <span className="text-white text-[12px] font-bold">Broccoli Almond Soup</span>
              </div>
              <span className="text-white text-[12px] font-semibold">₹280 x 2</span>
            </div>
            <div className="flex items-center justify-between w-[76px] h-[30px] bg-[#EFEFEF] rounded-lg px-2 shadow-md">
              <button className="text-[#009700] flex items-center justify-center">
                <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
                  <path d="M9.61111 1.36364H0.388889C0.174111 1.36364 0 1.05838 0 0.681818C0 0.305256 0.174111 0 0.388889 0H9.61111C9.82589 0 10 0.305256 10 0.681818C10 1.05838 9.82589 1.36364 9.61111 1.36364Z" fill="#0F0E11"/>
                </svg>
              </button>
              <span className="text-[#0F0E11] text-[14px] font-semibold">1</span>
              <button className="text-[#0F0E11] flex items-center justify-center font-bold">
                 <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                   <path d="M5 0C4.70146 0 4.45946 0.242013 4.45946 0.540541V4.45948H0.540541C0.242013 4.45948 0 4.70148 0 5.00002C0 5.29856 0.242013 5.54056 0.540541 5.54056H4.45946V9.45946C4.45946 9.75799 4.70146 10 5 10C5.29854 10 5.54054 9.75799 5.54054 9.45946V5.54056H9.45946C9.75799 5.54056 10 5.29856 10 5.00002C10 4.70148 9.75799 4.45948 9.45946 4.45948H5.54054V0.540541C5.54054 0.242013 5.29854 0 5 0Z" fill="#0F0E11"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Add item link */}
        <div className="mb-8">
          <span className="text-[#8FFC86] text-[14px] font-bold underline cursor-pointer">+Add new item</span>
        </div>

        {/* Checkout Footer */}
        <div className="flex justify-between items-center pb-8">
          <div className="flex flex-col">
            <div className="text-white text-[16px]">
              <span className="font-semibold">2</span>
              <span className="font-normal ml-1">Items</span>
            </div>
          </div>
          
          {/* Vertical Separator */}
          <div className="h-[38px] w-[1px] bg-[#7C7C7C]"></div>

          <button className="bg-[#8FFC86] text-[#242424] px-5 py-2.5 rounded-lg text-[16px] font-bold active:scale-95 transition-transform">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
