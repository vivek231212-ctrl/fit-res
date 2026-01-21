import React, { useState } from 'react';

const Home: React.FC = () => {
  const [showSort, setShowSort] = useState(false);
  const [sortOption, setSortOption] = useState<'low' | 'high'>('low');

  return (
    <div style={{ display: "flex", width: "100%", maxWidth: "390px", height: "auto", minHeight: "797px", flexDirection: "column", alignItems: "center", gap: "16px", position: "relative", background: "#0F0E11", overflowY: "visible", paddingBottom: "40px", margin: "0 auto" }}>
      {/* Header Section */}
      <div style={{ display: "flex", width: "100%", flexDirection: "column", alignItems: "flex-start", gap: "8px", position: "relative", marginTop: "20px", padding: "0 16px" }}>
        <div style={{ display: "flex", height: "56px", justifyContent: "space-between", alignItems: "center", alignSelf: "stretch", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", position: "relative" }}>
            <div style={{ display: "flex", width: "100%", maxWidth: "245.454px", alignItems: "flex-start", gap: "2px", position: "relative" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2px", flex: "1 0 0", position: "relative" }}>
                <svg style={{ display: "flex", alignItems: "center", gap: "6px", alignSelf: "stretch", position: "relative" }} width="246" height="20" viewBox="0 0 246 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Quicksand" fontSize="16" fontWeight="600" letterSpacing="0px"><tspan x="0" y="16">Boketto</tspan></text>
                  <path d="M74.2351 3.19259C75.3965 3.63973 76.6235 3.92858 77.8581 4.07906C77.881 4.08187 77.9038 4.08468 77.9274 4.08757C78.0377 4.10103 78.1479 4.11384 78.2584 4.12573C78.713 4.17863 79.0543 4.32066 79.3491 4.6801C79.518 4.90939 79.6215 5.14875 79.6224 5.43462C79.6226 5.47039 79.6228 5.50615 79.623 5.543C79.623 5.5821 79.623 5.6212 79.6231 5.66148C79.6232 5.70281 79.6234 5.74413 79.6236 5.7867C79.624 5.90017 79.6242 6.01364 79.6243 6.12711C79.6244 6.19835 79.6246 6.2696 79.6247 6.34084C79.6252 6.56472 79.6255 6.7886 79.6256 7.01248C79.6258 7.26898 79.6263 7.52547 79.6273 7.78197C79.628 7.98127 79.6283 8.18056 79.6284 8.37986C79.6284 8.49833 79.6286 8.61679 79.6292 8.73525C79.6369 10.3693 79.3015 11.9609 78.3708 13.3308C78.3579 13.3502 78.3449 13.3695 78.3315 13.3895C77.8655 14.082 77.2643 14.7308 76.5989 15.234C76.5696 15.2577 76.5403 15.2813 76.5102 15.3057C75.8471 15.8342 75.1139 16.265 74.3654 16.6594C74.3346 16.6757 74.3037 16.692 74.272 16.7088C73.7979 16.9551 73.3987 17.081 72.8692 16.943C72.6708 16.8789 72.4897 16.782 72.3063 16.684C72.2646 16.662 72.2228 16.6401 72.181 16.6181C71.4476 16.2296 70.7516 15.7828 70.1016 15.2668C70.0714 15.243 70.0411 15.2191 70.01 15.1945C69.5053 14.7896 69.0197 14.3369 68.625 13.823C68.6108 13.8046 68.5966 13.7862 68.582 13.7673C68.3547 13.4702 68.1525 13.1642 67.9687 12.8386C67.9564 12.8172 67.9442 12.7958 67.9315 12.7738C67.4828 11.9861 67.2199 11.1068 67.0827 10.2134C67.0772 10.179 67.0717 10.1445 67.066 10.109C67.0018 9.64859 67.0063 9.18696 67.0061 8.72299C67.006 8.65127 67.0059 8.57955 67.0057 8.50783C67.0051 8.25677 67.0048 8.00572 67.0049 7.75467C67.0049 7.52187 67.0042 7.28907 67.0032 7.05628C67.0023 6.85508 67.002 6.65389 67.002 6.4527C67.0021 6.33309 67.0019 6.2135 67.0012 6.09389C67.0004 5.96066 67.0007 5.82745 67.0011 5.69422C67.0007 5.65528 67.0004 5.61633 67 5.57621C67.0033 5.13766 67.1587 4.785 67.4724 4.47591C67.8161 4.19593 68.2252 4.14149 68.6501 4.09223C68.8114 4.07334 68.9723 4.05216 69.1333 4.03086C69.1656 4.0266 69.1979 4.02233 69.2311 4.01794C70.2979 3.87402 71.339 3.58801 72.3482 3.21758C73.0737 2.95129 73.5117 2.91377 74.2351 3.19259Z" fill="#AFCC1E"/>
                  <path d="M76.4027 7.29827C76.5976 7.38593 76.7225 7.53272 76.8301 7.7137C76.8807 7.93147 76.8746 8.11201 76.7708 8.31362C76.6566 8.48882 76.4982 8.63019 76.3497 8.77619C76.3129 8.81276 76.2762 8.84936 76.2396 8.88598C76.1629 8.96244 76.0859 9.03868 76.0089 9.11474C75.9107 9.21162 75.8129 9.30884 75.7152 9.40621C75.6212 9.49985 75.5271 9.59334 75.4329 9.68679C75.4065 9.71307 75.4065 9.71307 75.3795 9.73989C75.066 10.0509 75.066 10.0509 74.912 10.1829C74.7612 10.3123 74.6231 10.4538 74.484 10.5956C74.4355 10.645 74.3869 10.6942 74.3382 10.7434C74.1999 10.883 74.0618 11.0228 74.3382 10.7434C74.1999 10.883 74.0618 11.0228 73.9241 11.163C73.8394 11.2493 73.7544 11.3353 73.6692 11.4211C73.637 11.4535 73.605 11.4861 73.5731 11.5188C73.194 11.9075 73.194 11.9075 72.9016 11.9539C72.8674 11.9536 72.8332 11.9533 72.798 11.9529C72.7468 11.9534 72.7468 11.9534 72.6945 11.9539C72.4335 11.9125 72.2616 11.7632 72.0833 11.578C72.0509 11.5452 72.0509 11.5452 72.0179 11.5118C71.9495 11.4424 71.8815 11.3726 71.8136 11.3028C71.7456 11.2334 71.6775 11.1641 71.6093 11.0948C71.5671 11.0519 71.525 11.0089 71.4831 10.9657C71.3612 10.8412 71.2351 10.7242 71.1028 10.6108C71.0041 10.5249 70.9114 10.4333 70.8189 10.3409C70.8006 10.323 70.7822 10.305 70.7633 10.2866C70.5717 10.0956 70.4817 9.93478 70.4744 9.66205C70.4771 9.45486 70.5257 9.3361 70.6711 9.19035C70.8267 9.05114 70.948 8.97356 71.1614 8.9668C71.193 8.96511 71.2245 8.96342 71.257 8.96167C71.5432 9.01594 71.7637 9.22597 71.9605 9.42902C71.9833 9.45205 72.0062 9.47508 72.0297 9.4988C72.1016 9.57137 72.1729 9.64439 72.2443 9.71743C72.2934 9.76715 72.3424 9.81684 72.3916 9.8665C72.511 9.98737 72.63 10.1086 72.7488 10.2302C72.9378 10.0964 73.1028 9.95041 73.2646 9.78524C73.2877 9.76202 73.3107 9.73881 73.3344 9.7149C73.4074 9.64138 73.4801 9.56765 73.5528 9.49388C73.6255 9.42026 73.6982 9.34669 73.7711 9.27322C73.8162 9.22773 73.8612 9.18215 73.9061 9.13647C74.0306 9.01064 74.1592 8.89238 74.2932 8.77675C74.3936 8.68814 74.4874 8.59348 74.5813 8.49817C74.6014 8.47792 74.6215 8.45766 74.6423 8.4368C74.7058 8.37291 74.7692 8.30891 74.8325 8.24488C75.3366 7.73549 75.3366 7.73549 75.5708 7.53937C75.612 7.50325 75.653 7.46703 75.6939 7.43068C75.8989 7.24904 76.1391 7.22513 76.4027 7.29827Z" fill="#161616"/>
                </svg>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "12px", position: "relative" }}>
              <div style={{ width: "30px", height: "30px", overflow: "hidden", position: "relative" }}>
                <svg style={{ fill: "#86A788", strokeWidth: "1px", stroke: "#2F2F2F", position: "absolute", left: "2px", top: "2px" }} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="13" cy="13" r="13" fill="#86A788" stroke="#2F2F2F" />
                </svg>
                <div layer-name="K" style={{ color: "#000", textAlign: "center", fontFamily: "Quicksand", fontSize: "12px", fontStyle: "normal", fontWeight: "600", position: "absolute", left: "11px", top: "11px", width: "8px", height: "8px" }}>
                  <span style={{ fontFamily: "Quicksand, -apple-system, Roboto, Helvetica, sans-serif", fontWeight: "600", fontSize: "12px", color: "rgba(0,0,0,1)" }}>K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", width: "100%", alignItems: "flex-start", gap: "12px", position: "relative" }}>
          <div layer-name="Search bar" style={{ display: "flex", flex: "1 0 0", width: "100%", height: "46px", alignItems: "flex-start", gap: "12px", flexShrink: "0", position: "relative" }}>
            <div style={{ display: "flex", padding: "10px 12px", alignItems: "center", gap: "8px", flex: "1 0 0", alignSelf: "stretch", borderRadius: "24px", background: "#222328", position: "relative" }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke="#ABB7C2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.75 15.75L12.525 12.525" stroke="#ABB7C2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div style={{ color: "#969696", fontFamily: "Quicksand", fontSize: "14px", fontWeight: "600" }}>Search ...</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", alignSelf: "stretch", position: "relative", width: "30px" }}>
            <div style={{ color: "#FFF", textAlign: "center", fontFamily: "Quicksand", fontSize: "12px", fontWeight: "700" }}>VEG</div>
            <svg width="30" height="24" viewBox="0 0 30 24" fill="none">
              <rect y="6" width="26" height="12" rx="6" fill="#1F9653" />
              <circle cx="20.7266" cy="12" r="8" fill="white" stroke="#1F9653" strokeWidth="2" />
              <circle cx="20.5449" cy="12" r="4.5" fill="#1F9653" />
            </svg>
          </div>
        </div>
      </div>

      {/* Banner/Prompt Section */}
      <div style={{ display: "flex", width: "100%", maxWidth: "358px", height: "36px", background: "#030303", borderRadius: "12px", alignItems: "center", padding: "0 12px", justifyContent: "space-between", margin: "0 auto" }}>
        <div style={{ color: "white", fontFamily: "Quicksand", fontSize: "14px", fontWeight: "600" }}>''Tap to see what's best for you ''</div>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
           <path d="M12.5 10L7.5 5V15L12.5 10Z" fill="white" />
        </svg>
      </div>

      {/* Filter Tabs Section */}
      <div className="no-scrollbar" style={{ display: "flex", width: "100%", overflowX: "auto", gap: "8px", paddingBottom: "4px", paddingLeft: "16px", paddingRight: "16px", boxSizing: "border-box" }}>
        <div style={{ padding: "8px 12px", background: "#222328", borderRadius: "16px", color: "#CDCDCD", fontSize: "12px", fontFamily: "Quicksand", fontWeight: "500", whiteSpace: "nowrap" }}>All</div>
        <div style={{ padding: "8px 12px", background: "#0C180C", borderRadius: "16px", color: "#FFF", border: "0.4px solid #00C600", fontSize: "12px", fontFamily: "Quicksand", fontWeight: "500", whiteSpace: "nowrap" }}>High Protein</div>
        <div style={{ padding: "8px 12px", background: "#222328", borderRadius: "16px", color: "#CDCDCD", fontSize: "12px", fontFamily: "Quicksand", fontWeight: "500", whiteSpace: "nowrap" }}>Low Kcal</div>
        <div style={{ padding: "8px 12px", background: "#222328", borderRadius: "16px", color: "#CDCDCD", fontSize: "12px", fontFamily: "Quicksand", fontWeight: "500", whiteSpace: "nowrap" }}>Gluten Free</div>
      </div>

      {/* Section Title & Sort Button */}
      <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", padding: "0 16px", position: "relative" }}>
        <div style={{ color: "white", fontFamily: "Quicksand", fontSize: "18px", fontWeight: "600" }}>High protein</div>
        <button 
          onClick={() => setShowSort(!showSort)}
          style={{ background: "transparent", border: "none", cursor: "pointer", padding: "4px" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
             <path d="M12.4728 14.9954C12.2286 14.7806 11.8314 14.8129 11.6166 15.0572L9.3509 17.6112V7.40384C9.3509 7.0684 9.07431 6.79181 8.73887 6.79181C8.40343 6.79181 8.12683 7.0684 8.12683 7.40384V17.6112L5.86114 15.0572C5.61692 14.8129 5.24911 14.7806 5.00488 14.9954C4.76066 15.2396 4.72829 15.6074 4.94309 15.8516L8.27984 19.5856C8.52995 19.8946 8.97132 19.8475 9.16847 19.5856L12.5346 15.8516C12.7494 15.6103 12.72 15.2102 12.4728 14.9954Z" fill="white" />
             <path d="M19.0256 9.36356L15.7183 5.62958C15.424 5.3324 15.0562 5.31474 14.8002 5.62958L11.4341 9.36356C11.2193 9.60778 11.2516 10.005 11.4959 10.2198C11.8725 10.5199 12.2521 10.314 12.3521 10.158L14.6178 7.60397V17.7819C14.6178 18.1174 14.8944 18.3939 15.2298 18.3939C15.5653 18.3939 15.8419 18.1497 15.8419 17.8113V7.60691L18.1076 10.161C18.3518 10.4052 18.7196 10.4376 18.9638 10.2228C19.208 9.97559 19.2404 9.60778 19.0256 9.36356Z" fill="white" />
          </svg>
        </button>

        {/* Sorting Pop-up */}
        {showSort && (
          <div style={{ 
            position: "absolute", right: "16px", top: "35px", width: "150px", height: "159px", zIndex: 100, filter: "drop-shadow(0 4px 14px rgba(0, 0, 0, 0.60))" 
          }}>
            <div style={{ width: "150px", height: "159px", position: "relative" }}>
              <svg style={{ position: "absolute", left: "82px", top: "-4px" }} width="41" height="41" viewBox="0 0 41 41" fill="none">
                <path d="M17.0358 6.00061C18.5754 3.33378 22.4246 3.33378 23.9642 6.00061L34.7898 24.7526C36.3293 27.4193 34.4047 30.7525 31.3256 30.7525H9.6744C6.59526 30.7525 4.67075 27.4193 6.21023 24.7526L17.0358 6.00061Z" fill="#161616"/>
              </svg>
              <div style={{ width: "150px", height: "144px", borderRadius: "12px", background: "#161616", position: "absolute", left: "0px", top: "15px" }}>
                <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div style={{ color: "#EFEFEF", fontFamily: "Quicksand", fontSize: "14px", fontWeight: "700" }}>Sort</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {/* Low to High */}
                    <div 
                      onClick={() => {setSortOption('low'); setShowSort(false);}}
                      style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}
                    >
                      <div style={{ width: "20px", height: "20px", borderRadius: "50%", border: "2px solid #8FFC86", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {sortOption === 'low' && <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#8FFC86" }}></div>}
                      </div>
                      <span style={{ color: "#EFEFEF", fontFamily: "Quicksand", fontSize: "14px", fontWeight: "500" }}>Low to High</span>
                    </div>
                    {/* High to Low */}
                    <div 
                      onClick={() => {setSortOption('high'); setShowSort(false);}}
                      style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}
                    >
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

      {/* Sorting Info */}
      <div style={{ display: "flex", width: "100%", alignItems: "center", gap: "8px", padding: "0 16px" }}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
           <path d="M6 0C7.65682 0 9.15691 0.671625 10.2427 1.75732C11.3284 2.84309 12 4.34318 12 6C12 7.65682 11.3284 9.15691 10.2427 10.2426C9.15691 11.3284 7.65682 12 6 12C4.34318 12 2.84309 11.3284 1.75739 10.2426C0.671625 9.15691 0 7.65682 0 6C0 4.34318 0.671625 2.84309 1.75739 1.75732C2.84309 0.671625 4.34318 0 6 0ZM5.76495 3.75888" fill="white"/>
        </svg>
        <div style={{ color: "#EFEFEF", fontFamily: "Quicksand", fontSize: "10px" }}>Sorted by highest protein</div>
      </div>

      {/* Product List Items */}
      <div style={{ display: "flex", width: "100%", padding: "12px 16px", background: "#18191B", borderBottom: "0.7px dashed #1B1B1B", gap: "16px", boxSizing: "border-box" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ padding: "4px 6px", background: "#2B2413", border: "0.2px solid #807348", borderRadius: "6px", color: "#F9E39E", fontSize: "10px", fontWeight: "500" }}>Rich Calcium</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <div style={{ color: "#E8E8E8", fontFamily: "Quicksand", fontSize: "14px", fontWeight: "500" }}>Grilled Paneer Tikka</div>
            <div style={{ color: "#CBCBCB", fontFamily: "Quicksand", fontSize: "12px" }}>₹240</div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
             <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <div style={{ width: "4px", height: "4px", background: "#FEFFC4", borderRadius: "50%" }}></div>
                <div style={{ color: "white", fontSize: "10px", fontWeight: "700" }}>25g <span style={{ fontWeight: "400", color: "#EFEFEF" }}>Protein</span></div>
             </div>
             <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <div style={{ width: "4px", height: "4px", background: "#AED2FF", borderRadius: "50%" }}></div>
                <div style={{ color: "white", fontSize: "10px", fontWeight: "700" }}>13g <span style={{ fontWeight: "400", color: "#EFEFEF" }}>Carb</span></div>
             </div>
          </div>
        </div>
        <div style={{ width: "100px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "80px", height: "80px", background: "#222328", borderRadius: "12px", position: "relative", overflow: "hidden", border: "1px solid #494949" }}>
             <img src="https://api.builder.io/api/v1/image/assets/TEMP/cd5de1ef1f42243c430cc5372280dca47ed6264b?width=160" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ width: "80px", height: "38px", background: "#222328", border: "1px solid #2F2F2F", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#00C600", fontWeight: "600", fontSize: "16px", boxShadow: "0 4px 26px 0 rgba(0, 0, 0, 0.45)" }}>Add</div>
        </div>
      </div>

      <div style={{ display: "flex", width: "100%", padding: "12px 16px", background: "#18191B", borderBottom: "0.7px dashed #1B1B1B", gap: "16px", boxSizing: "border-box" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ color: "#E8E8E8", fontFamily: "Quicksand", fontSize: "14px", fontWeight: "500" }}>Hyderabadi Biryani</div>
          <div style={{ color: "#EFEFEF", fontSize: "14px", fontWeight: "700" }}>₹240 <span style={{ textDecoration: "line-through", fontSize: "10px", fontWeight: "400", opacity: 0.6 }}>240</span></div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
             <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <div style={{ width: "4px", height: "4px", background: "#FEFFC4", borderRadius: "50%" }}></div>
                <div style={{ color: "white", fontSize: "10px", fontWeight: "700" }}>25g <span style={{ fontWeight: "400", color: "#EFEFEF" }}>Protein</span></div>
             </div>
          </div>
        </div>
        <div style={{ width: "100px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "80px", height: "80px", background: "#222328", borderRadius: "12px", position: "relative", overflow: "hidden", border: "1px solid #494949" }}>
             <div style={{ width: "100%", height: "100%", background: "#2F2F39" }}></div>
          </div>
          <div style={{ width: "80px", height: "38px", background: "#8FFC86", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#161616", fontWeight: "700", fontSize: "16px" }}>1</div>
        </div>
      </div>

      {/* Starter Footer */}
      <div style={{ display: "flex", width: "100%", background: "#1B1B1B", padding: "16px 20px", justifyContent: "space-between", alignItems: "center", marginTop: "auto", boxSizing: "border-box" }}>
        <div style={{ color: "white", fontFamily: "Quicksand", fontSize: "18px", fontWeight: "600" }}>Starter</div>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
           <path d="M5 12.5L10 7.5L15 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default Home;