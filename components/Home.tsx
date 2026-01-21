import React, { useState } from 'react';

interface HomeProps {
  onMenuOpen: () => void;
}

const Home: React.FC<HomeProps> = ({ onMenuOpen }) => {
  const [showSort, setShowSort] = useState(false);
  const [sortOption, setSortOption] = useState<'low' | 'high'>('low');

  return (
    <div style={{ display: "flex", width: "100%", height: "auto", flexDirection: "column", alignItems: "center", gap: "16px", position: "relative", background: "transparent", padding: "0 16px" }}>
      {/* Header Row */}
      <div style={{ display: "flex", height: "56px", justifyContent: "space-between", alignItems: "center", alignSelf: "stretch", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "4px", position: "relative" }}>
          <div style={{ display: "flex", width: "245.454px", alignItems: "flex-start", gap: "2px", position: "relative" }}>
            <svg width="246" height="20" viewBox="0 0 246 20" fill="none">
              <text fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Quicksand" fontSize="16" fontWeight="600"><tspan x="0" y="16">Boketto</tspan></text>
              <path d="M74.2351 3.19259C75.3965 3.63973 76.6235 3.92858 77.8581 4.07906C77.881 4.08187 77.9038 4.08468 77.9274 4.08757C78.0377 4.10103 78.1479 4.11384 78.2584 4.12573C78.713 4.17863 79.0543 4.32066 79.3491 4.6801C79.518 4.90939 79.6215 5.14875 79.6224 5.43462C79.6226 5.47039 79.6228 5.50615 79.623 5.543C79.623 5.5821 79.623 5.6212 79.6231 5.66148C79.6232 5.70281 79.6234 5.74413 79.6236 5.7867C79.624 5.90017 79.6242 6.01364 79.6243 6.12711C79.6244 6.19835 79.6246 6.2696 79.6247 6.34084C79.6252 6.56472 79.6255 6.7886 79.6256 7.01248C79.6258 7.26898 79.6263 7.52547 79.6273 7.78197C79.628 7.98127 79.6283 8.18056 79.6284 8.37986C79.6284 8.49833 79.6286 8.61679 79.6292 8.73525C79.6369 10.3693 79.3015 11.9609 78.3708 13.3308C78.3579 13.3502 78.3449 13.3695 78.3315 13.3895C77.8655 14.082 77.2643 14.7308 76.5989 15.234C76.5696 15.2577 76.5403 15.2813 76.5102 15.3057C75.8471 15.8342 75.1139 16.265 74.3654 16.6594C74.3346 16.6757 74.3037 16.692 74.272 16.7088C73.7979 16.9551 73.3987 17.081 72.8692 16.943C72.6708 16.8789 72.4897 16.782 72.3063 16.684C72.2646 16.662 72.2228 16.6401 72.181 16.6181C71.4476 16.2296 70.7516 15.7828 70.1016 15.2668C70.0714 15.243 70.0411 15.2191 70.01 15.1945C69.5053 14.7896 69.0197 14.3369 68.625 13.823C68.6108 13.8046 68.5966 13.7862 68.582 13.7673C68.3547 13.4702 68.1525 13.1642 67.9687 12.8386C67.9564 12.8172 67.9442 12.7958 67.9315 12.7738C67.4828 11.9861 67.2199 11.1068 67.0827 10.2134C67.066 10.109C67.0018 9.64859 67.0063 9.18696 67.0061 8.72299C67.006 8.65127 67.0059 8.57955 67.0057 8.50783C67.0051 8.25677 67.0048 8.00572 67.0049 7.75467C67.0049 7.52187 67.0042 7.28907 67.0032 7.05628C67.0023 6.85508 67.002 6.65389 67.002 6.4527C67.0021 6.33309 67.0019 6.2135 67.0012 6.09389C67.0004 5.96066 67.0007 5.82745 67.0011 5.69422C67.0007 5.65528 67.0004 5.61633 67 5.57621C67.0033 5.13766 67.1587 4.785 67.4724 4.47591C67.8161 4.19593 68.2252 4.14149 68.6501 4.09223C68.8114 4.07334 68.9723 4.05216 69.1333 4.03086C69.1656 4.0266 69.1979 4.02233 69.2311 4.01794C70.2979 3.87402 71.339 3.58801 72.3482 3.21758C73.0737 2.95129 73.5117 2.91377 74.2351 3.19259Z" fill="#AFCC1E"/>
              <path d="M76.4027 7.29827C76.5976 7.38593 76.7225 7.53272 76.8301 7.7137C76.8807 7.93147 76.8746 8.11201 76.7708 8.31362C76.6566 8.48882 76.4982 8.63019 76.3497 8.77619C76.3129 8.81276 76.2762 8.84936 76.2396 8.88598C76.1629 8.96244 76.0859 9.03868 76.0089 9.11474C75.9107 9.21162 75.8129 9.30884 75.7152 9.40621C75.6212 9.49985 75.5271 9.59334 75.4329 9.68679C75.4065 9.71307 75.4065 9.71307 75.3795 9.73989C75.066 10.0509 75.066 10.0509 74.912 10.1829C74.7612 10.3123 74.6231 10.4538 74.484 10.5956C74.4355 10.645 74.3869 10.6942 74.3382 10.7434C74.1999 10.883 74.0618 11.0228 73.9241 11.163C73.8394 11.2493 73.7544 11.3353 73.6692 11.4211C73.637 11.4535 73.605 11.4861 73.5731 11.5188C73.194 11.9075 73.194 11.9075 72.9016 11.9539C72.8674 11.9536 72.8332 11.9533 72.798 11.9529C72.7468 11.9534 72.7468 11.9534 72.6945 11.9539C72.4335 11.9125 72.2616 11.7632 72.0833 11.578C72.0509 11.5452 72.0509 11.5452 72.0179 11.5118C71.9495 11.4424 71.8815 11.3726 71.8136 11.3028C71.7456 11.2334 71.6775 11.1641 71.6093 11.0948C71.5671 11.0519 71.525 11.0089 71.4831 10.9657C71.3612 10.8412 71.2351 10.7242 71.1028 10.6108C71.0041 10.5249 70.9114 10.4333 70.8189 10.3409C70.8006 10.323 70.7822 10.305 70.7633 10.2866C70.5717 10.0956 70.4817 9.93478 70.4744 9.66205C70.4771 9.45486 70.5257 9.3361 70.6711 9.19035C70.8267 9.05114 70.948 8.97356 71.1614 8.9668C71.193 8.96511 71.2245 8.96342 71.257 8.96167C71.5432 9.01594 71.7637 9.22597 71.9605 9.42902C71.9833 9.45205 72.0062 9.47508 72.0297 9.4988C72.1016 9.57137 72.1729 9.64439 72.2443 9.71743C72.2934 9.76715 72.3424 9.81684 72.3916 9.8665C72.511 9.98737 72.63 10.1086 72.7488 10.2302C72.9378 10.0964 73.1028 9.95041 73.2646 9.78524C73.2877 9.76202 73.3107 9.73881 73.3344 9.7149C73.4074 9.64138 73.4801 9.56765 73.5528 9.49388C73.6255 9.42026 73.6982 9.34669 73.7711 9.27322C73.8162 9.22773 73.8612 9.18215 73.9061 9.13647C74.0306 9.01064 74.1592 8.89238 74.2932 8.77675C74.3936 8.68814 74.4874 8.59348 74.5813 8.49817C74.6014 8.47792 74.6215 8.45766 74.6423 8.4368C74.7058 8.37291 74.7692 8.30891 74.8325 8.24488C75.3366 7.73549 75.3366 7.73549 75.5708 7.53937C75.612 7.50325 75.653 7.46703 75.6939 7.43068C75.8989 7.24904 76.1391 7.22513 76.4027 7.29827Z" fill="#161616"/>
            </svg>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "30px", height: "30px", background: "#86A788", borderRadius: "50%", border: "1px solid #2F2F2F", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#000", fontFamily: "Quicksand", fontSize: "12px", fontWeight: "600" }}>K</span>
          </div>
          <button onClick={onMenuOpen} style={{ color: "#CDCDCD" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>

      {/* Search bar */}
      <div style={{ display: "flex", width: "358px", alignItems: "flex-start", gap: "12px" }}>
        <div style={{ display: "flex", height: "46px", flex: 1, padding: "10px 12px", alignItems: "center", gap: "8px", borderRadius: "24px", background: "#222328" }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke="#ABB7C2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.75 15.75L12.525 12.525" stroke="#ABB7C2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ color: "#969696", fontFamily: "Quicksand", fontSize: "14px", fontWeight: "600" }}>Search ... </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
           <span style={{ color: "#FFF", fontSize: "12px", fontWeight: "700" }}>VEG</span>
           <svg width="30" height="24" viewBox="0 0 30 24" fill="none">
              <rect y="6" width="26" height="12" rx="6" fill="#1F9653" />
              <circle cx="20.7266" cy="12" r="8" fill="white" stroke="#1F9653" strokeWidth="2" />
              <path d="M25.0449 12.0022C25.0449 14.4875 23.0302 16.5022 20.5449 16.5022C18.0596 16.5022 16.0449 14.4875 16.0449 12.0022C16.0449 9.51692 18.0596 7.5022 20.5449 7.5022C23.0302 7.5022 25.0449 9.51692 25.0449 12.0022Z" fill="#1F9653"/>
           </svg>
        </div>
      </div>

      {/* Goal Section */}
      <div style={{ width: "358px", height: "124px", position: "relative" }}>
        <div style={{ display: "flex", width: "100%", height: "100%", padding: "12px", flexDirection: "column", gap: "7px", borderRadius: "16px", background: "#0F0E11", border: "0.5px solid #2F2F2F" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
            <span style={{ color: "#EFEFEF", fontFamily: "Quicksand", fontSize: "14px", fontWeight: "500" }}>Your Dinner Goal</span>
            <span style={{ color: "#8FFC86", fontFamily: "Quicksand", fontSize: "14px", fontWeight: "600", textDecoration: "underline" }}>Edit</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", width: "100%" }}>
            {/* Kcal Wheel SVG */}
            <svg width="67" height="67" viewBox="0 0 67 67" fill="none">
              <text fill="white" style={{ whiteSpace: "pre" }} fontFamily="Lexend" fontSize="16" fontWeight="500"><tspan x="20.6166" y="32.3585">622</tspan></text>
              <text fill="#CCCCCC" style={{ whiteSpace: "pre" }} fontFamily="Lexend" fontSize="12"><tspan x="21.267" y="48.3585">Kcal</tspan></text>
              <path d="M33.5 0C37.8993 0 42.2555 0.866 46.319 2.55C50.384 4.233 54.077 6.701 57.188 9.811C60.298 12.922 62.766 16.615 64.45 20.68C66.133 24.744 67 29.1 67 33.5L59.63 33.5C59.63 30.068 58.954 26.67 57.641 23.5C56.327 20.33 54.403 17.449 51.976 15.023C49.55 12.596 46.669 10.672 43.499 9.359C40.329 8.045 36.931 7.37 33.5 7.37V0Z" fill="#FEFFC4" stroke="#2F2F37" strokeWidth="0.8"/>
              <path d="M67 33.5C67 41.649 64.029 49.518 58.645 55.635C53.26 61.751 45.831 65.696 37.748 66.729C29.664 67.762 21.482 65.814 14.732 61.249C7.981 56.683 3.127 49.814 1.077 41.927L8.21 40.073C9.809 46.225 13.595 51.583 18.861 55.144C24.126 58.705 30.508 60.225 36.813 59.419C43.118 58.613 48.913 55.536 53.113 50.765C57.313 45.994 59.63 39.856 59.63 33.5H67Z" fill="#AED2FF" stroke="#2F2F37" strokeWidth="0.8"/>
              <path d="M1.501 43.416C0.134 39.004 -0.306 34.357 0.208 29.766C0.723 25.176 2.181 20.741 4.492 16.742L10.874 20.428C9.071 23.548 7.934 27.007 7.532 30.588C7.131 34.168 7.474 37.793 8.541 41.234L1.501 43.416Z" fill="#BCA2FF" stroke="#2F2F37" strokeWidth="0.8"/>
              <path d="M4.338 17.011C7.273 11.82 11.54 7.507 16.699 4.517C21.858 1.526 27.721 -0.032 33.684 0L33.643 7.37C28.992 7.344 24.419 8.561 20.395 10.893C16.371 13.226 13.043 16.59 10.754 20.638L4.338 17.011Z" fill="#FFABF4" stroke="#2F2F37" strokeWidth="0.8"/>
            </svg>
            
            {/* Macros Display */}
            <div style={{ flex: 1, display: "flex", padding: "8px 12px 11px", flexDirection: "column", gap: "12px", borderRadius: "12px", border: "0.6px solid #848E75", background: "#18171C" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {/* Protein */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <div style={{ width: "5px", height: "5px", background: "#FEFFC4", borderRadius: "50%" }}></div>
                    <span style={{ fontFamily: "Lexend", fontSize: "10px", fontWeight: "300", color: "#CCC" }}><strong style={{ color: "#FFF", fontSize: "12px", fontWeight: "500" }}>25</strong>gm</span>
                  </div>
                  <span style={{ fontFamily: "Lexend", fontSize: "12px", color: "#CCC" }}>Protein</span>
                </div>
                <div style={{ width: "1px", height: "14px", background: "#3E3E3E" }}></div>
                {/* Carb */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <div style={{ width: "5px", height: "5px", background: "#AED2FF", borderRadius: "50%" }}></div>
                    <span style={{ fontFamily: "Lexend", fontSize: "10px", fontWeight: "300", color: "#CCC" }}><strong style={{ color: "#FFF", fontSize: "12px", fontWeight: "500" }}>90</strong>gm</span>
                  </div>
                  <span style={{ fontFamily: "Lexend", fontSize: "12px", color: "#CCC" }}>Carb</span>
                </div>
                <div style={{ width: "1px", height: "14px", background: "#3E3E3E" }}></div>
                {/* Fat */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <div style={{ width: "5px", height: "5px", background: "#BCA2FF", borderRadius: "50%" }}></div>
                    <span style={{ fontFamily: "Lexend", fontSize: "10px", fontWeight: "300", color: "#CCC" }}><strong style={{ color: "#FFF", fontSize: "12px", fontWeight: "500" }}>18</strong>gm</span>
                  </div>
                  <span style={{ fontFamily: "Lexend", fontSize: "12px", color: "#CCC" }}>Fat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div style={{ width: "358px", height: "36px", position: "relative", cursor: "pointer" }}>
        <div style={{ width: "100%", height: "100%", background: "#030303", borderRadius: "12px", display: "flex", alignItems: "center", padding: "0 12px", justifyContent: "space-between" }}>
           <span style={{ color: "white", fontFamily: "Quicksand", fontSize: "14px", fontWeight: "600" }}>''Tap to see what's best for you ''</span>
           <path d="M337.9 21.8L341.7 18.4C342 18.1 342 17.8 341.7 17.5L337.9 14.1" stroke="white" strokeWidth="2"/>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="no-scrollbar" style={{ display: "flex", width: "358px", overflowX: "auto", gap: "8px" }}>
        <div style={{ padding: "10px 12px", background: "#222328", borderRadius: "16px", color: "#CDCDCD", fontSize: "12px", fontWeight: "500" }}>All</div>
        <div style={{ padding: "8px 12px", background: "#0C180C", border: "0.4px solid #00C600", borderRadius: "16px", color: "#FFF", fontSize: "12px", fontWeight: "500" }}>High Protein</div>
        <div style={{ padding: "10px 12px", background: "#222328", borderRadius: "16px", color: "#CDCDCD", fontSize: "12px", fontWeight: "500" }}>Low Kcal</div>
        <div style={{ padding: "10px 12px", background: "#222328", borderRadius: "16px", color: "#CDCDCD", fontSize: "12px", fontWeight: "500" }}>Gluten Free</div>
      </div>

      {/* Section Header with Sort */}
      <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", padding: "0 16px", position: "relative" }}>
        <div style={{ color: "white", fontFamily: "Quicksand", fontSize: "18px", fontWeight: "600" }}>High protein</div>
        <button onClick={() => setShowSort(!showSort)} style={{ padding: "4px" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12.47 14.99C12.22 14.78 11.83 14.81 11.61 15.05L9.35 17.61V7.4C9.35 7.06 9.07 6.79 8.73 6.79C8.4 6.79 8.12 7.06 8.12 7.4V17.61L5.86 15.05C5.61 14.81 5.24 14.78 5 14.99C4.76 15.23 4.72 15.6 4.94 15.85L8.27 19.58C8.52 19.89 8.97 19.84 9.16 19.58L12.53 15.85C12.74 15.61 12.72 15.21 12.47 14.99Z" fill="white"/>
            <path d="M19.02 9.36L15.71 5.62C15.42 5.33 15.05 5.31 14.8 5.62L11.43 9.36C11.21 9.6 11.25 10 11.49 10.21C11.87 10.51 12.25 10.31 12.35 10.15L14.61 7.6V17.78C14.61 18.11 14.89 18.39 15.22 18.39C15.56 18.39 15.84 18.14 15.84 17.81V7.6L18.1 10.16C18.35 10.4 18.71 10.43 18.96 10.22C19.2 9.97 19.24 9.6 19.02 9.36Z" fill="white"/>
          </svg>
        </button>

        {showSort && (
          <div style={{ position: "absolute", right: "16px", top: "35px", width: "150px", height: "159px", zIndex: 100, filter: "drop-shadow(0 4px 14px rgba(0, 0, 0, 0.60))" }}>
            <div style={{ width: "150px", height: "159px", position: "relative" }}>
              <svg style={{ position: "absolute", left: "82px", top: "-4px" }} width="41" height="41" viewBox="0 0 41 41" fill="none">
                <path d="M17.0358 6.00061C18.5754 3.33378 22.4246 3.33378 23.9642 6.00061L34.7898 24.7526C36.3293 27.4193 34.4047 30.7525 31.3256 30.7525H9.6744C6.59526 30.7525 4.67075 27.4193 6.21023 24.7526L17.0358 6.00061Z" fill="#161616"/>
              </svg>
              <div style={{ width: "150px", height: "144px", borderRadius: "12px", background: "#161616", position: "absolute", left: "0px", top: "15px" }}>
                <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div style={{ color: "#EFEFEF", fontFamily: "Quicksand", fontSize: "14px", fontWeight: "700" }}>Sort</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div onClick={() => {setSortOption('low'); setShowSort(false);}} style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                      <div style={{ width: "20px", height: "20px", borderRadius: "50%", border: "2px solid #8FFC86", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {sortOption === 'low' && <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#8FFC86" }}></div>}
                      </div>
                      <span style={{ color: "#EFEFEF", fontFamily: "Quicksand", fontSize: "14px", fontWeight: "500" }}>Low to High</span>
                    </div>
                    <div onClick={() => {setSortOption('high'); setShowSort(false);}} style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                      <div style={{ width: "20px", height: "20px", borderRadius: "50%", border: "2px solid #8FFC86", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {sortOption === 'high' && <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#8FFC86" }}></div>}
                      </div>
                      <span style={{ color: "#EFEFEF", fontFamily: "Quicksand", fontSize: "14px", fontWeight: "500" }}>High to Low</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Product Items */}
      <div style={{ display: "flex", width: "100%", padding: "12px 16px", background: "#18191B", borderBottom: "0.7px dashed #1B1B1B", gap: "16px" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ padding: "4px 6px", background: "#2B2413", border: "0.2px solid #807348", borderRadius: "6px", color: "#F9E39E", fontSize: "10px", fontWeight: "500", width: "fit-content" }}>Rich Calcium</div>
          <div>
            <div style={{ color: "#E8E8E8", fontFamily: "Quicksand", fontSize: "14px", fontWeight: "500" }}>Grilled Paneer Tikka</div>
            <div style={{ color: "#CBCBCB", fontFamily: "Quicksand", fontSize: "12px" }}>₹240</div>
          </div>
          <div style={{ display: "flex", gap: "14px" }}>
             <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <div style={{ width: "4px", height: "4px", background: "#FEFFC4", borderRadius: "50%" }}></div>
                <span style={{ color: "white", fontSize: "10px", fontWeight: "700" }}>25g <span style={{ fontWeight: "400", color: "#EFEFEF" }}>Protein</span></span>
             </div>
          </div>
        </div>
        <div style={{ width: "100px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "80px", height: "80px", background: "#222328", borderRadius: "12px", overflow: "hidden", border: "1px solid #494949" }}>
             <img src="https://api.builder.io/api/v1/image/assets/TEMP/cd5de1ef1f42243c430cc5372280dca47ed6264b?width=160" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ width: "80px", height: "38px", background: "#222328", border: "1px solid #2F2F2F", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#00C600", fontWeight: "600", fontSize: "16px" }}>Add</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", width: "100%", background: "#1B1B1B", padding: "16px 20px", justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
        <span style={{ color: "white", fontFamily: "Quicksand", fontSize: "18px", fontWeight: "600" }}>Starter</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 12.5L10 7.5L15 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
    </div>
  );
};

export default Home;