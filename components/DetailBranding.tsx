
import React from 'react';

const DetailBranding: React.FC = () => {
  return (
    <div style={{ display: "flex", width: "100%", height: "100%", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#0F0E11", position: "relative" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
        {/* Branding Logo Area */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
           <h1 style={{ color: "#FFF", fontFamily: "Quicksand", fontSize: "32px", fontWeight: "700", letterSpacing: "1px" }}>Boketto</h1>
           <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "4px 12px", background: "rgba(143, 252, 134, 0.1)", borderRadius: "20px", border: "1px solid #8FFC86" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#8FFC86", boxShadow: "0 0 8px #8FFC86" }}></div>
              <span style={{ color: "#8FFC86", fontFamily: "Quicksand", fontSize: "14px", fontWeight: "600" }}>Smart Menu Ready</span>
           </div>
        </div>
        
        {/* Decorative elements or loading state could go here */}
        <div style={{ marginTop: "40px", opacity: 0.6 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="animate-spin">
            <circle cx="20" cy="20" r="18" stroke="#2F2F2F" strokeWidth="4" />
            <path d="M20 2C29.9411 2 38 10.0589 38 20" stroke="#8FFC86" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Bottom Home Indicator */}
      <div style={{ position: "absolute", bottom: "8px", left: "50%", transform: "translateX(-50%)", width: "139px", height: "5px", borderRadius: "100px", background: "#FFF" }}></div>
    </div>
  );
};

export default DetailBranding;
