
import React from 'react';

interface BatteryIconProps {
  segments: number; // 1 to 4
  colorType: 'red' | 'orange' | 'yellow';
}

const BatteryIcon: React.FC<BatteryIconProps> = ({ segments, colorType }) => {
  const getSegmentGradients = (type: string) => {
    switch (type) {
      case 'red':
        return ['#AA0000', '#FF0000', '#D40000', '#FF2A2A', '#800000'];
      case 'orange':
        return ['#AA5200', '#FF8C00', '#D46E00', '#FF8C00', '#AA5200'];
      case 'yellow':
        return ['#AA8500', '#FFC400', '#D49400', '#FFC300', '#AA8500'];
      default:
        return ['#666', '#999', '#777', '#888', '#555'];
    }
  };

  const colors = getSegmentGradients(colorType);
  const gradId = `grad-${colorType}-${segments}`;

  return (
    <div className="relative w-[12.7px] h-[28.3px]">
      <svg width="13" height="29" viewBox="0 0 13 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`${gradId}-segment`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={colors[0]} />
            <stop offset="21.5%" stopColor={colors[1]} />
            <stop offset="55.6%" stopColor={colors[2]} />
            <stop offset="76.7%" stopColor={colors[3]} />
            <stop offset="100%" stopColor={colors[4]} />
          </linearGradient>
          <linearGradient id="frame-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#666666" />
            <stop offset="23.8%" stopColor="#CCCCCC" />
            <stop offset="50.7%" stopColor="#999999" />
            <stop offset="73.8%" stopColor="#E6E6E6" />
            <stop offset="100%" stopColor="#808080" />
          </linearGradient>
          <linearGradient id="frame-shine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F2F2F2" />
            <stop offset="23.8%" stopColor="#999999" />
            <stop offset="50.7%" stopColor="#F2F2F2" />
            <stop offset="73.8%" stopColor="#B3B3B3" />
            <stop offset="100%" stopColor="#F2F2F2" />
          </linearGradient>
        </defs>
        
        {/* Cap */}
        <path d="M8.1398 0H4.5771C4.2331 0 3.9543 0.279 3.9543 0.623V2.994C3.9543 3.338 4.2331 3.617 4.5771 3.617H8.1398C8.4838 3.617 8.7626 3.338 8.7626 2.994V0.623C8.7626 0.279 8.4838 0 8.1398 0Z" fill="url(#frame-grad)" />
        
        {/* Main Body Frame */}
        <rect x="0" y="2.933" width="12.7" height="25.43" rx="0.947" fill="url(#frame-grad)" />
        <rect x="0.252" y="3.186" width="12.2" height="24.93" rx="0.695" fill="url(#frame-shine)" strokeWidth="0.1" />

        {/* Segments (filling from bottom) */}
        {Array.from({ length: 4 }).map((_, i) => {
          const segmentIndex = 3 - i; // bottom is 3, top is 0
          const isFilled = (4 - segmentIndex) <= segments;
          if (!isFilled) return null;

          const yPos = 3.644 + (segmentIndex * 6.15);
          return (
            <rect 
              key={i}
              x="0.473" 
              y={yPos} 
              width="11.76" 
              height="5.19" 
              rx="0.921" 
              fill={`url(#${gradId}-segment)`} 
            />
          );
        })}
      </svg>
    </div>
  );
};

export default BatteryIcon;
