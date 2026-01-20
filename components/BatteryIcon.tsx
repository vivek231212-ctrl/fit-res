
import React from 'react';

interface BatteryIconProps {
  segments: number; // 1 to 4
  colorType: 'red' | 'orange' | 'yellow';
}

const BatteryIcon: React.FC<BatteryIconProps> = ({ segments, colorType }) => {
  const gradId = `grad-${colorType}-${segments}`;
  
  const getColors = (type: string) => {
    switch (type) {
      case 'red': return { start: '#AA0000', mid1: '#FF0000', mid2: '#D40000', mid3: '#FF2A2A', end: '#800000' };
      case 'orange': return { start: '#AA5200', mid1: '#FF8C00', mid2: '#D46E00', mid3: '#FF8C00', end: '#AA5200' };
      case 'yellow': return { start: '#AA8500', mid1: '#FFC400', mid2: '#D49400', mid3: '#FFC300', end: '#AA8500' };
      default: return { start: '#666', mid1: '#999', mid2: '#777', mid3: '#888', end: '#555' };
    }
  };

  const colors = getColors(colorType);

  return (
    <div className="relative w-[12.7px] h-[28.3px]">
      <svg width="13" height="29" viewBox="28 161 12.7172 28.367" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`${gradId}-frame`} x1="28.2725" y1="178.013" x2="40.4447" y2="178.013" gradientUnits="userSpaceOnUse">
            <stop stopColor="#666666" />
            <stop offset="0.23881" stopColor="#CCCCCC" />
            <stop offset="0.50746" stopColor="#999999" />
            <stop offset="0.73881" stopColor="#E6E6E6" />
            <stop offset="1" stopColor="#808080" />
          </linearGradient>
          <linearGradient id={`${gradId}-shine`} x1="28.2725" y1="178.013" x2="40.4447" y2="178.013" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F2F2F2" />
            <stop offset="0.23881" stopColor="#999999" />
            <stop offset="0.50746" stopColor="#F2F2F2" />
            <stop offset="0.73881" stopColor="#B3B3B3" />
            <stop offset="1" stopColor="#F2F2F2" />
          </linearGradient>
          <linearGradient id={`${gradId}-segment`} x1="28.5481" y1="148.938" x2="39.9847" y2="148.938" gradientUnits="userSpaceOnUse">
            <stop stopColor={colors.start} />
            <stop offset="0.2159" stopColor={colors.mid1} />
            <stop offset="0.55678" stopColor={colors.mid2} />
            <stop offset="0.767" stopColor={colors.mid3} />
            <stop offset="1" stopColor={colors.end} />
          </linearGradient>
        </defs>

        {/* Cap */}
        <path d="M36.1398 161H32.5771C32.2331 161 31.9543 161.279 31.9543 161.623V163.994C31.9543 164.338 32.2331 164.617 32.5771 164.617H36.1398C36.4838 164.617 36.7626 164.338 36.7626 163.994V161.623C36.7626 161.279 36.4838 161 36.1398 161Z" fill="black" />
        
        {/* Frame */}
        <path opacity="0.97" d="M39.7695 163.933H28.9477C28.4243 163.933 28 164.357 28 164.881V188.42C28 188.943 28.4243 189.367 28.9477 189.367H39.7695C40.2929 189.367 40.7172 188.943 40.7172 188.42V164.881C40.7172 164.357 40.2929 163.933 39.7695 163.933Z" fill={`url(#${gradId}-frame)`} />
        <path d="M28.9475 164.186C28.5575 164.186 28.2521 164.49 28.2521 164.88V188.42C28.2521 188.81 28.5578 189.116 28.9475 189.116H39.7692C40.159 189.116 40.4647 188.81 40.4647 188.42V164.88C40.4647 164.49 40.1593 164.186 39.7692 164.186H28.9475Z" fill={`url(#${gradId}-shine)`} />

        {/* Segments - Rendering from bottom up */}
        {Array.from({ length: 4 }).map((_, i) => {
          const isFilled = (4 - i) <= segments;
          if (!isFilled) return null;
          
          // SVG Y coordinates for segments: 164.6, 170.7, 177.0, 183.1
          const yPositions = [183.154, 177.002, 170.796, 164.644];
          // Fixed path template string syntax on line 65
          return (
            <path key={i} d={`M39.2895 ${yPositions[i]}H29.4214C28.898 ${yPositions[i]} 28.4738 ${yPositions[i] + 0.424} 28.4738 ${yPositions[i] + 0.947}V${yPositions[i] + 4.240}C28.4738 ${yPositions[i] + 4.764} 28.898 ${yPositions[i] + 5.188} 29.4214 ${yPositions[i] + 5.188}H39.2895C39.8129 ${yPositions[i] + 5.188} 40.2372 ${yPositions[i] + 4.764} 40.2372 ${yPositions[i] + 4.240}V${yPositions[i] + 0.947}C40.2372 ${yPositions[i] + 0.424} 39.8129 ${yPositions[i]} 39.2895 ${yPositions[i]}Z`} fill={`url(#${gradId}-segment)`} />
          );
        })}
      </svg>
    </div>
  );
};

export default BatteryIcon;
