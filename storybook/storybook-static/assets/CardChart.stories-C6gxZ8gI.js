const l="#5850EC",p="#E74694",xe="#6875F5",he="#B4C6FC",ge="#F8B4D9",ve=[15.54,16.36,27.86,17.18,40,25.39,19.64,8.96,29.5,40,19.64,13.89,25,36.07],fe=[15.54,16.36,27.86,17.18,40,25.39,19.64,8.96,29.5,40,19.64,13.89,36.07,20],ue=[15.54,16.36,27.86,17.18,40,25.39,19.64,8.96,29.5,40,19.64,13.89,25,40],ye=[15.54,16.36,58,17.18,58,25.39,19.64,8.96,29.5,58,19.64,13.89,58,36.07],me=`<svg width="16" height="16" viewBox="0 0 20 20" fill="#6B7280" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"/>
</svg>`,n=`<div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;display:flex;align-items:center;justify-content:center;">${me}</div>`,L=e=>`<svg width="16" height="16" viewBox="0 0 20 20" fill="${e}" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"/>
</svg>`,S=e=>`<svg width="16" height="16" viewBox="0 0 20 20" fill="${e}" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clip-rule="evenodd"/>
</svg>`,t=e=>`font:${e} 'Inter',sans-serif;`;function c(e){const r=e==="up"?l:p,i=e==="up"?L(r):S(r),a=e==="up"?"+12.5%":"-23.17%";return`<div style="display:flex;align-items:center;gap:2px;flex-shrink:0;">
    ${i}
    <span style="${t("600 12px/1.5")}color:${r};white-space:nowrap;">${a}</span>
  </div>`}function pe(e){const r=e==="up"?l:p,i="M12.7111 29.6097C6.35555 29.6097 6.35556 19.5123 0 19.5122V62C0 66.4183 3.58173 70 8 70H278C282.418 70 286 66.4279 286 62.0096V1.42073C278.056 1.42073 279.644 12.7805 273.289 12.7805C266.933 12.7805 266.933 19.5122 260.578 19.5122C254.222 19.5122 254.222 12.7805 247.867 12.7805C241.511 12.7805 240.717 24.561 235.156 24.561C229.594 24.561 228.8 6.04878 222.444 6.04878C216.089 6.04878 216.089 0.99999 209.733 1C203.378 1.00001 197.022 9.41466 190.667 9.41466C184.311 9.41466 184.311 4.36591 177.956 4.36588C171.6 4.36586 169.716 8.77907 165.244 12.7805C159.175 18.2123 158.889 29.6098 152.533 29.6098C146.178 29.6097 146.178 19.5122 139.822 19.5122C133.467 19.5122 133.467 11.0976 127.111 11.0976C120.756 11.0976 120.756 9.41463 114.4 9.41463C108.044 9.41463 108.044 24.1402 101.689 24.1402C95.3334 24.1402 95.3333 14.4634 88.9778 14.4634C82.6222 14.4634 82.6222 29.6097 76.2667 29.6098C69.9111 29.6098 69.9111 26.6646 63.5555 26.6646C57.2 26.6646 57.2 24.561 50.8444 24.561C44.4889 24.561 44.4889 32.9756 38.1333 32.9756C31.7778 32.9756 31.7778 41.3902 25.4222 41.3902C19.0667 41.3902 19.0667 29.6097 12.7111 29.6097Z",a="M12.7111 29.6097C6.35555 29.6097 6.35556 19.5123 0 19.5122V62C0 66.4183 3.58173 70 8 70H278C282.418 70 286 66.4279 286 62.0096V24.561C278.056 24.561 279.644 12.7805 273.289 12.7805C266.933 12.7805 266.933 19.5122 260.578 19.5122C254.222 19.5122 254.222 12.7805 247.867 12.7805C241.511 12.7805 240.717 24.561 235.156 24.561C229.594 24.561 228.8 6.04878 222.444 6.04878C216.089 6.04878 216.089 0.99999 209.733 1C203.378 1.00001 197.022 9.41466 190.667 9.41466C184.311 9.41466 184.311 4.36591 177.956 4.36588C171.6 4.36586 169.716 8.77907 165.244 12.7805C159.175 18.2123 158.889 29.6098 152.533 29.6098C146.178 29.6097 146.178 19.5122 139.822 19.5122C133.467 19.5122 133.467 11.0976 127.111 11.0976C120.756 11.0976 120.756 9.41463 114.4 9.41463C108.044 9.41463 108.044 24.1402 101.689 24.1402C95.3334 24.1402 95.3333 14.4634 88.9778 14.4634C82.6222 14.4634 82.6222 29.6097 76.2667 29.6098C69.9111 29.6098 69.9111 26.6646 63.5555 26.6646C57.2 26.6646 57.2 24.561 50.8444 24.561C44.4889 24.561 44.4889 32.9756 38.1333 32.9756C31.7778 32.9756 31.7778 41.3902 25.4222 41.3902C19.0667 41.3902 19.0667 29.6097 12.7111 29.6097Z",x="M0 19.7917C6.35556 19.7917 6.35555 30.0417 12.7111 30.0417C19.0667 30.0417 19.0667 42 25.4222 42C31.7778 42 31.7778 33.4584 38.1333 33.4584C44.4889 33.4584 44.4889 24.9167 50.8444 24.9167C57.2 24.9167 57.2 27.0521 63.5555 27.0521C69.9111 27.0521 69.9111 30.0417 76.2667 30.0417C82.6222 30.0417 82.6222 14.6667 88.9778 14.6667C95.3333 14.6667 95.3334 24.4896 101.689 24.4896C108.044 24.4896 108.044 9.54167 114.4 9.54167C120.756 9.54167 120.756 11.25 127.111 11.25C133.467 11.25 133.467 19.7917 139.822 19.7917C146.178 19.7917 146.178 30.0417 152.533 30.0417C158.889 30.0417 159.175 18.4721 165.244 12.9583C169.716 8.89652 171.6 4.41667 177.956 4.4167C184.311 4.41673 184.311 9.5417 190.667 9.5417C197.022 9.5417 203.378 1.00001 209.733 1C216.089 0.99999 216.089 6.125 222.444 6.125C228.8 6.125 229.594 24.9167 235.156 24.9167C240.717 24.9167 241.511 12.9583 247.867 12.9583C254.222 12.9583 254.222 19.7917 260.578 19.7917C266.933 19.7917 266.933 12.9583 273.289 12.9583C279.644 12.9583 278.056 1.42708 286 1.42708",h="M0 19.7917C6.35556 19.7917 6.35555 30.0417 12.7111 30.0417C19.0667 30.0417 19.0667 42 25.4222 42C31.7778 42 31.7778 33.4584 38.1333 33.4584C44.4889 33.4584 44.4889 24.9167 50.8444 24.9167C57.2 24.9167 57.2 27.0521 63.5555 27.0521C69.9111 27.0521 69.9111 30.0417 76.2667 30.0417C82.6222 30.0417 82.6222 14.6667 88.9778 14.6667C95.3333 14.6667 95.3334 24.4896 101.689 24.4896C108.044 24.4896 108.044 9.54167 114.4 9.54167C120.756 9.54167 120.756 11.25 127.111 11.25C133.467 11.25 133.467 19.7917 139.822 19.7917C146.178 19.7917 146.178 30.0417 152.533 30.0417C158.889 30.0417 159.175 18.4721 165.244 12.9583C169.716 8.89652 171.6 4.41667 177.956 4.4167C184.311 4.41673 184.311 9.5417 190.667 9.5417C197.022 9.5417 203.378 1.00001 209.733 1C216.089 0.99999 216.089 6.125 222.444 6.125C228.8 6.125 229.594 24.9167 235.156 24.9167C240.717 24.9167 241.511 12.9583 247.867 12.9583C254.222 12.9583 254.222 19.7917 260.578 19.7917C266.933 19.7917 266.933 12.9583 273.289 12.9583C279.644 12.9583 278.056 24.9167 286 24.9167",d=`lc-grad-${e}`;return`<div style="position:absolute;bottom:0;left:0;right:0;">
    <svg style="width:100%;height:70px;display:block;" viewBox="0 0 286 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>${e==="up"?`<linearGradient id="${d}" x1="143" y1="1" x2="143" y2="70" gradientUnits="userSpaceOnUse"><stop stop-color="#E5E7EB"/><stop offset="1" stop-color="white"/></linearGradient>`:`<linearGradient id="${d}" x1="143" y1="1" x2="143" y2="70" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.6"/><stop offset="1" stop-color="#B0B0B0" stop-opacity="0"/></linearGradient>`}</defs>
      <path d="${e==="up"?i:a}" fill="url(#${d})"/>
      <path d="${e==="up"?x:h}" stroke="${r}" stroke-width="2"/>
    </svg>
  </div>`}function D(e,r,i=40){const a=e==="up"?xe:p,x=e==="up"?he:ge,h=r.map((d,T)=>{const ce=T===6?x:a;return`<div style="width:3px;height:${d>=i?"100%":`${d}px`};background:${ce};border-radius:32px;flex-shrink:0;"></div>`}).join("");return`<div style="display:flex;align-items:flex-end;justify-content:space-between;width:100%;height:${i}px;flex-shrink:0;">${h}</div>`}const be=["#F2F4F7","#22C55E","#EC4899","#33BEFF","#1D4ED8"],we=[[16,3,7,9,6],[4,3,9,4,15],[17,18,3,4,8],[13,4,18,4,11],[22,13,0,4,11],[14,2,19,4,11],[16,8,7,4,6],[13,3,9,4,6],[7,3,0,6,3],[7,0,0,4,3],[13,3,9,4,6],[7,3,6,0,3]];function Ce(){return`<div style="display:flex;align-items:flex-end;gap:10px;height:50px;flex-shrink:0;">
    ${we.map(e=>`
      <div style="display:flex;flex-direction:column;width:6px;overflow:hidden;flex-shrink:0;">
        ${e.map((r,i)=>r>0?`<div style="width:6px;height:${r}px;background:${be[i]};flex-shrink:0;"></div>`:"").join("")}
      </div>`).join("")}
  </div>`}const s="background:white;border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,0.08);box-sizing:border-box;overflow:hidden;position:relative;";function o(e){return`<div style="${s}width:286px;height:168px;padding:16px;display:flex;flex-direction:column;gap:16px;">
    <div style="display:flex;gap:16px;align-items:flex-start;">
      <div style="flex:1;min-width:0;">
        <div style="${t("500 12px/1.5")}color:#111928;">Total Sales</div>
        <div style="${t("600 24px/1.5")}color:#111928;">$16,416</div>
      </div>
      ${c(e)}
      ${n}
    </div>
    ${pe(e)}
  </div>`}function B(e){const r=e==="up"?l:p,i=e==="up"?"+12.5%":"−8.3%",a=e==="up"?L(r):S(r);return`<div style="${s}width:286px;height:168px;padding:16px;display:flex;flex-direction:column;gap:4px;">
    <div style="display:flex;gap:16px;align-items:flex-start;">
      <div style="flex:1;min-width:0;">
        <div style="${t("500 12px/1.5")}color:#111928;">Total Sales</div>
        <div style="${t("600 24px/1.5")}color:#111928;">$16,416</div>
      </div>
      ${n}
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;">
      <span style="${t("400 12px/1.5")}color:#6B7280;">Compared to day prior</span>
      <div style="display:flex;align-items:center;gap:2px;flex-shrink:0;">
        ${a}
        <span style="${t("600 12px/1.5")}color:${r};white-space:nowrap;">${i}</span>
      </div>
    </div>
    ${pe(e)}
  </div>`}function $(e){return`<div style="${s}width:286px;height:200px;padding:32px 32px 16px;display:flex;flex-direction:column;gap:40px;">
    <div style="display:flex;gap:16px;align-items:flex-start;">
      <div style="flex:1;min-width:0;">
        <div style="${t("500 12px/1.5")}color:#111928;">Total Sales</div>
        ${c(e)}
        <div style="${t("600 24px/1.5")}color:#111928;">$16,416</div>
      </div>
      ${n}
    </div>
    ${D(e,e==="up"?ve:fe)}
  </div>`}function I(e="up"){const r=e==="up"?l:p,i=e==="up"?"+12.5%":"−8.3%",a=e==="up"?L(r):S(r);return`<div style="${s}width:286px;height:200px;padding:32px 32px 16px;display:flex;flex-direction:column;gap:24px;">
    <div style="display:flex;flex-direction:column;gap:16px;">
      <div style="display:flex;gap:16px;align-items:flex-start;">
        <div style="flex:1;min-width:0;">
          <div style="${t("500 12px/1.5")}color:#111928;">Total Sales</div>
          <div style="${t("600 24px/1.5")}color:#111928;">$16,416</div>
        </div>
        ${n}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <span style="${t("400 12px/1.5")}color:#6B7280;">Compared to day prior</span>
        <div style="display:flex;align-items:center;gap:2px;flex-shrink:0;">
          ${a}
          <span style="${t("600 12px/1.5")}color:${r};white-space:nowrap;">${i}</span>
        </div>
      </div>
    </div>
    ${D(e,ue)}
  </div>`}function E(e="up"){return`<div style="${s}width:286px;height:200px;padding:32px 32px 16px;display:flex;flex-direction:column;gap:40px;">
    <div style="display:flex;gap:16px;align-items:flex-start;">
      <div style="flex:1;min-width:0;">
        <div style="${t("500 12px/1.5")}color:#111928;">Total Sales</div>
        <div style="${t("600 24px/1.5")}color:#111928;">$16,416</div>
      </div>
      ${c(e)}
      ${n}
    </div>
    ${D(e,ye,58)}
  </div>`}function V(){return`<div style="${s}width:449px;height:104px;padding:32px 32px 16px;display:flex;flex-direction:row;gap:16px;align-items:flex-end;">
    <div style="display:flex;flex-direction:column;gap:8px;flex:1;min-width:0;justify-content:flex-end;">
      <div style="${t("500 12px/1.5")}color:#111928;">Total Sales</div>
      ${Ce()}
    </div>
    <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;flex-shrink:0;">
      ${c("up")}
      <span style="${t("400 12px/1.5")}color:#6B7280;text-align:right;">Compared to day prior</span>
    </div>
    ${n}
  </div>`}function F(){return`<div style="${s}width:286px;height:168px;padding:16px;display:flex;flex-direction:column;gap:16px;">
    <div style="display:flex;gap:16px;align-items:flex-start;">
      <div style="flex:1;min-width:0;">
        <div style="${t("500 12px/1.5")}color:#111928;">Total Sales</div>
        <div style="${t("600 24px/1.5")}color:#111928;">$16,416</div>
      </div>
      ${c("up")}
      ${n}
    </div>
    <div style="position:absolute;bottom:0;left:0;right:0;">
      <svg style="width:100%;height:69px;display:block;" viewBox="0 0 286 69" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="credit-grad1" x1="143" y1="0" x2="143" y2="69" gradientUnits="userSpaceOnUse">
            <stop stop-color="#E5E7EB"/>
            <stop offset="1" stop-color="white"/>
          </linearGradient>
          <linearGradient id="credit-grad2" x1="143" y1="18" x2="143" y2="60" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1"/>
          </linearGradient>
        </defs>
        <path d="M12.7111 18.5122L0 18.5122V61C0 65.4183 3.58173 69 8 69H278C282.418 69 286 65.4265 286 61.0082V18.5121C278.056 18.5121 279.644 23.561 273.289 23.561C266.933 23.561 266.933 18.5122 260.578 18.5122H247.867C241.511 18.5122 240.717 23.5609 235.156 23.561C229.594 23.561 228.8 35.5001 222.444 35.5001C216.089 35.5001 216.089 18.5122 209.733 18.5122L190.667 18.5122L177.956 18.5122C171.6 18.5122 169.5 17 165.244 18.5122C160.989 20.0243 158.889 60 152.533 60C146.178 60 146.178 18.5122 139.822 18.5122L127.111 18.5122L114.4 18.5122C108.044 18.5122 108.044 23.1402 101.689 23.1402C95.3334 23.1402 95.3333 18.5122 88.9778 18.5122C82.6222 18.5122 82.6222 28.6097 76.2667 28.6097C69.9111 28.6098 69.9111 18.5122 63.5555 18.5122C57.2 18.5122 57.2 23.561 50.8444 23.561C44.4889 23.561 44.4889 18.5122 38.1333 18.5122L25.4222 18.5122H12.7111Z" fill="url(#credit-grad1)"/>
        <path d="M38.1333 18.5122L29.095 18.5122L127.111 18.5122H165.244C169.482 17.0063 171.583 18.4996 177.876 18.5121L190.667 18.5122H247.867H260.578L286 18.5121C278.056 18.5121 279.644 23.5609 273.289 23.5609C266.933 23.5609 266.933 18.5122 260.578 18.5122H247.867C241.511 18.5122 240.717 23.5609 235.156 23.5609C229.594 23.561 228.8 35.5001 222.444 35.5001C216.089 35.5001 216.089 18.5122 209.733 18.5122L190.667 18.5122L177.956 18.5122C177.929 18.5122 177.903 18.5122 177.876 18.5121L165.244 18.5122C160.989 20.0243 158.889 60 152.533 60C146.178 60 146.178 18.5122 139.822 18.5122L127.111 18.5122L114.4 18.5122C108.044 18.5122 108.044 23.1402 101.689 23.1402C95.3334 23.1402 95.3333 18.5122 88.9778 18.5122C82.6222 18.5122 82.6222 28.6097 76.2667 28.6097C69.9111 28.6098 69.9111 18.5122 63.5555 18.5122C57.2 18.5122 57.2 23.561 50.8444 23.561C44.4889 23.561 44.4889 18.5122 38.1333 18.5122Z" fill="url(#credit-grad2)"/>
        <path d="M0 18.7918C6.35556 18.7918 6.35555 18.7918 12.7111 18.7918C19.0667 18.7918 19.0667 18.7918 25.4222 18.7918C31.7778 18.7918 31.7778 18.7918 38.1333 18.7918C44.4889 18.7918 44.4889 23.9168 50.8444 23.9168C57.2 23.9168 57.2 18.7918 63.5555 18.7918C69.9111 18.7918 69.9111 29.0418 76.2667 29.0418C82.6222 29.0418 82.6222 18.7918 88.9778 18.7918C95.3333 18.7917 95.3334 23.4897 101.689 23.4897C108.044 23.4897 108.044 18.7918 114.4 18.7918C120.756 18.7918 120.756 18.7918 127.111 18.7918C133.467 18.7918 133.467 18.7918 139.822 18.7918C146.178 18.7918 146.178 60.5002 152.533 60.5002C158.889 60.5002 161.489 18.7918 165.244 18.7918C169 18.7918 171.6 18.7917 177.956 18.7918C184.311 18.7918 184.311 18.7918 190.667 18.7918C197.022 18.7918 203.378 18.7919 209.733 18.7918C216.089 18.7918 216.089 35.5002 222.444 35.5002C228.8 35.5002 229.594 23.9168 235.156 23.9168C240.717 23.9167 241.511 18.7918 247.867 18.7918C254.222 18.7918 254.222 18.7918 260.578 18.7918C266.933 18.7918 266.933 23.9168 273.289 23.9168C279.644 23.9168 278.056 18.7918 286 18.7918" stroke="${l}" stroke-width="2"/>
      </svg>
    </div>
  </div>`}const Be={title:"Iris Library/Card/KPI",tags:["autodocs","stable"],parameters:{layout:"padded",docs:{description:{component:`
**Card KPI** — Figma component node \`602:20752\`.

Single-metric card with an embedded mini-chart. Shows one top-level business metric with a trend indicator and a supporting sparkline or bar chart.

**When to use**
- Displaying a single numeric KPI at a glance (revenue, users, conversion rate)
- Pairing a metric with its trend direction and magnitude
- Dashboard overview rows where space is limited (286 × 168 – 200 px cards)

**When NOT to use**
- Multiple related metrics in one card → use Card/Reporting
- Detailed time-series exploration → use a full chart component
- Non-numeric content → use Card/Basics

**Anatomy**
\`[label] [value] [trend badge] [icon pill] / [chart area flush to bottom]\`

The chart type (\`property3\`) and trend direction (\`property2\`) are the two Figma variant axes.

### Variant map
| \`property3\` | \`property2\` | Node |
|---|---|---|
| Linechart | Upwards / Downwards | 602:20753, 602:20589 |
| Linechart-vert | Upwards / Downwards | 602:22376, 602:22409 |
| barchart | Upwards / Downwards | 602:20796, 602:20845 |
| barchart-vert | Upwards | 602:23611 |
| barchart-big | Upwards | 602:24711 |
| barchart-segm-hor | Upwards | 602:25133 |
| Credit | Upwards | 602:23265 |

### Tokens
| Element | Value |
|---|---|
| Trend UP | \`#5850EC\` old-colors/brand/600 |
| Trend DOWN | \`#E74694\` old-colors/pink/500 |
| Bar UP | \`#6875F5\` / \`#B4C6FC\` (index-6 lighter) |
| Bar DOWN | \`#E74694\` / \`#F8B4D9\` (index-6 lighter) |
| Icon pill bg | \`#D1D5DB\` old-colors/gray/300 |
| Icon | currency-dollar, 16px, fill #6B7280 |

### QA checklist
- Trend UP is **purple #5850EC** — not green
- Trend DOWN is **pink #E74694** — not red
- Icon pill is grey circle, always \`currency-dollar\`, no coloured badge boxes
- Bar chart: 14 bars, 3px wide, border-radius 32px, bar at index 6 = lighter shade
- Line chart: height 69–70px, flush to card bottom, absolutely positioned
        `}}},argTypes:{direction:{control:"select",options:["up","down"],description:"Trend direction. **Up** = #5850EC (brand purple). **Down** = #E74694 (pink). Never use green/red — matches Figma tokens exactly.",table:{category:"Appearance",defaultValue:{summary:"up"}}},chartType:{control:"select",options:["linechart","linechart-vert","barchart","barchart-vert","barchart-big","barchart-segm-hor","credit"],description:"Chart variant (Figma `property3`). Determines card dimensions and chart layout.",table:{category:"Appearance",defaultValue:{summary:"linechart"}}}},args:{direction:"up",chartType:"linechart"}},g={name:"Interactive (Controls)",parameters:{docs:{description:{story:"Use **direction** to switch trend up/down and **chartType** to preview any KPI variant. Source snippet reflects the linechart structure — adapt the chart area for other types."},source:{transform:(e,r)=>{const{direction:i}=r.args,a=i==="up"?"#5850EC":"#E74694";return`<!-- Card KPI — Linechart / ${i==="up"?"Upwards":"Downwards"} -->
<div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;
            width:286px;height:168px;padding:16px;
            display:flex;flex-direction:column;gap:16px;position:relative;overflow:hidden;">
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;">
      <div style="font:500 12px/1.5 sans-serif;color:#111928;">Total Sales</div>
      <div style="font:600 24px/1.5 sans-serif;color:#111928;">$16,416</div>
    </div>
    <!-- Trend badge -->
    <div style="display:flex;align-items:center;gap:2px;">
      <svg width="16" height="16" viewBox="0 0 20 20" fill="${a}" xmlns="http://www.w3.org/2000/svg">
        ${i==="up"?'<path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"/>':'<path fill-rule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clip-rule="evenodd"/>'}
      </svg>
      <span style="font:600 12px/1.5 sans-serif;color:${a};">${i==="up"?"+12.5%":"−8.3%"}</span>
    </div>
    <!-- Icon pill -->
    <div style="background:#D1D5DB;border-radius:999px;padding:9px;display:flex;align-items:center;justify-content:center;">
      <!-- currency-dollar icon -->
    </div>
  </div>
  <!-- Line chart SVG — flush to card bottom, absolutely positioned -->
  <div style="position:absolute;bottom:0;left:0;right:0;">
    <svg style="width:100%;height:70px;display:block;" viewBox="0 0 286 70" preserveAspectRatio="none">
      <!-- sparkline path here -->
    </svg>
  </div>
</div>`}}}},render:({direction:e,chartType:r})=>{switch(r){case"linechart-vert":return B(e);case"barchart":return $(e);case"barchart-vert":return I(e);case"barchart-big":return E(e);case"barchart-segm-hor":return V();case"credit":return F();default:return o(e)}}},v={name:"Linechart — Upwards (602:20753)",parameters:{docs:{description:{story:"Smooth line chart trending upward. Trend badge: **#5850EC** (brand purple). Area fill: 12% opacity."},source:{language:"html",code:`<!-- Card KPI — Linechart (286×168px) -->
<div style="background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.08);
            width:286px;height:168px;padding:16px;display:flex;flex-direction:column;
            gap:16px;position:relative;overflow:hidden;box-sizing:border-box;">

  <!-- Header row: label + trend + icon pill -->
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;min-width:0;">
      <div style="font:500 12px/1.5 'Inter',sans-serif;color:#111928;">Total Sales</div>
      <div style="font:600 24px/1.5 'Inter',sans-serif;color:#111928;">$16,416</div>
    </div>
    <!-- Trend badge (up: #5850EC, down: #E74694) -->
    <div style="display:flex;align-items:center;gap:2px;flex-shrink:0;">
      <!-- trend-up arrow SVG here -->
      <span style="font:600 12px/1.5 'Inter',sans-serif;color:#5850EC;">+12.5%</span>
    </div>
    <!-- Grey pill icon -->
    <div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;">
      <!-- currency-dollar SVG here -->
    </div>
  </div>

  <!-- Line chart SVG — flush to card bottom, absolute positioned -->
  <div style="position:absolute;bottom:0;left:0;right:0;">
    <svg style="width:100%;height:70px;display:block;" viewBox="0 0 286 70" preserveAspectRatio="none">
      <!-- area fill at 12% opacity (color #5850EC for up, #E74694 for down) -->
      <path d="M0,60 C30,55 55,64 85,48 …286,3 L286,70 L0,70 Z" fill="#5850EC" opacity="0.12"/>
      <!-- stroke line -->
      <path d="M0,60 C30,55 55,64 85,48 …286,3" fill="none" stroke="#5850EC" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</div>`}}},render:()=>`<div style="display:flex;gap:16px;flex-wrap:wrap;">${o("up")}${o("down")}</div>`},f={name:"Linechart — Downwards (602:20589)",parameters:{docs:{description:{story:"Smooth line chart trending downward. Trend badge: **#E74694** (pink)."},source:{language:"html",code:`<!-- Card KPI — Linechart Downwards: same structure as Linechart Upwards.
     Change trend color to #E74694 (pink) and invert the SVG path direction. -->
<div style="background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.08);
            width:286px;height:168px;padding:16px;display:flex;flex-direction:column;
            gap:16px;position:relative;overflow:hidden;box-sizing:border-box;">
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;min-width:0;">
      <div style="font:500 12px/1.5 'Inter',sans-serif;color:#111928;">Total Sales</div>
      <div style="font:600 24px/1.5 'Inter',sans-serif;color:#111928;">$16,416</div>
    </div>
    <div style="display:flex;align-items:center;gap:2px;flex-shrink:0;">
      <!-- trend-down arrow SVG -->
      <span style="font:600 12px/1.5 'Inter',sans-serif;color:#E74694;">−8.3%</span>
    </div>
    <div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;"><!-- dollar SVG --></div>
  </div>
  <div style="position:absolute;bottom:0;left:0;right:0;">
    <svg style="width:100%;height:70px;display:block;" viewBox="0 0 286 70" preserveAspectRatio="none">
      <path d="M0,3 C28,8 50,2 80,18 …286,65 L286,70 L0,70 Z" fill="#E74694" opacity="0.12"/>
      <path d="M0,3 C28,8 50,2 80,18 …286,65" fill="none" stroke="#E74694" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</div>`}}},render:()=>o("down")},u={name:"Linechart-vert — Upwards (602:22376)",parameters:{docs:{description:{story:'Line chart with "Compared to day prior" label. Up + down variants side by side.'},source:{language:"html",code:`<!-- Card KPI — Linechart-vert (286×168px)
     Difference from Linechart: trend badge moves below the value, "Compared to day prior" label added. -->
<div style="background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.08);
            width:286px;height:168px;padding:16px;display:flex;flex-direction:column;
            gap:4px;position:relative;overflow:hidden;box-sizing:border-box;">
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;min-width:0;">
      <div style="font:500 12px/1.5 'Inter',sans-serif;color:#111928;">Total Sales</div>
      <div style="font:600 24px/1.5 'Inter',sans-serif;color:#111928;">$16,416</div>
    </div>
    <div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;"><!-- dollar SVG --></div>
  </div>
  <!-- "Compared to day prior" row with trend -->
  <div style="display:flex;align-items:center;justify-content:space-between;">
    <span style="font:400 12px/1.5 'Inter',sans-serif;color:#6B7280;">Compared to day prior</span>
    <div style="display:flex;align-items:center;gap:2px;flex-shrink:0;">
      <!-- trend arrow SVG -->
      <span style="font:600 12px/1.5 'Inter',sans-serif;color:#5850EC;">+12.5%</span>
    </div>
  </div>
  <!-- Line chart SVG (same as Linechart, see LinechartUp story) -->
  <div style="position:absolute;bottom:0;left:0;right:0;"><!-- SVG chart --></div>
</div>`}}},render:()=>`<div style="display:flex;gap:16px;flex-wrap:wrap;">${B("up")}${B("down")}</div>`},y={name:"barchart — Upwards (602:20796)",parameters:{docs:{description:{story:"14 bars × 3px. Bar color: **#6875F5** (brand/500), bar at index 6 lighter: **#B4C6FC** (brand/300). Trend in header row."},source:{language:"html",code:`<!-- Card KPI — barchart (286×200px)
     Layout: header (label + trend + value) at top, bar chart at bottom.
     14 bars × 3px wide, border-radius 32px, aligned to flex-end (bottom).
     Bar color: up=#6875F5, down=#E74694. Index-6 bar is lighter: up=#B4C6FC, down=#F8B4D9. -->
<div style="background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.08);
            width:286px;height:200px;padding:32px 32px 16px;display:flex;flex-direction:column;
            gap:40px;box-sizing:border-box;">
  <!-- Header -->
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;min-width:0;">
      <div style="font:500 12px/1.5 'Inter',sans-serif;color:#111928;">Total Sales</div>
      <!-- Trend badge -->
      <div style="display:flex;align-items:center;gap:2px;">
        <!-- trend-up arrow SVG -->
        <span style="font:600 12px/1.5 'Inter',sans-serif;color:#5850EC;">+12.5%</span>
      </div>
      <div style="font:600 24px/1.5 'Inter',sans-serif;color:#111928;">$16,416</div>
    </div>
    <div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;"><!-- dollar SVG --></div>
  </div>
  <!-- Bar chart: 14 bars, flex-end aligned, container 56px tall -->
  <div style="display:flex;align-items:flex-end;justify-content:space-between;width:100%;height:56px;flex-shrink:0;">
    <div style="width:3px;height:15px;background:#6875F5;border-radius:32px;"></div>
    <!-- … 13 more bars with heights from Figma … -->
    <!-- Index 6: width:3px; background:#B4C6FC (lighter shade) -->
  </div>
</div>`}}},render:()=>`<div style="display:flex;gap:16px;flex-wrap:wrap;">${$("up")}${$("down")}</div>`},m={name:"barchart-vert — Upwards (602:23611)",parameters:{docs:{description:{story:'Same 14-bar layout with "Compared to day prior" label above the chart.'},source:{language:"html",code:`<!-- Card KPI — barchart-vert (286×200px)
     Same as barchart but "Compared to day prior" label sits between the value and the bars. -->
<div style="background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.08);
            width:286px;height:200px;padding:32px 32px 16px;display:flex;flex-direction:column;
            gap:24px;box-sizing:border-box;">
  <div style="display:flex;flex-direction:column;gap:16px;">
    <div style="display:flex;gap:16px;align-items:flex-start;">
      <div style="flex:1;min-width:0;">
        <div style="font:500 12px/1.5 'Inter',sans-serif;color:#111928;">Total Sales</div>
        <div style="font:600 24px/1.5 'Inter',sans-serif;color:#111928;">$16,416</div>
      </div>
      <div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;"><!-- dollar SVG --></div>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;">
      <span style="font:400 12px/1.5 'Inter',sans-serif;color:#6B7280;">Compared to day prior</span>
      <div style="display:flex;align-items:center;gap:2px;">
        <!-- trend-up arrow SVG -->
        <span style="font:600 12px/1.5 'Inter',sans-serif;color:#5850EC;">+12.5%</span>
      </div>
    </div>
  </div>
  <!-- Bar chart (same as barchart, see BarchartUp story) -->
  <div style="display:flex;align-items:flex-end;justify-content:space-between;width:100%;height:56px;flex-shrink:0;">
    <!-- 14 bars × 3px, heights from Figma -->
  </div>
</div>`}}},render:()=>I("up")},b={name:"barchart-big — Upwards (602:24711)",parameters:{docs:{description:{story:"barchart with 4 bars at full container height instead of 2 (indexes 4, 9, 12, 13 = full)."},source:{language:"html",code:`<!-- Card KPI — barchart-big (286×200px)
     Same structure as barchart, but bars at indexes 4, 9, 12, and 13 reach full height (56px).
     All other bar heights differ from standard barchart. -->
<div style="background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.08);
            width:286px;height:200px;padding:32px 32px 16px;display:flex;flex-direction:column;
            gap:40px;box-sizing:border-box;">
  <!-- Header: label + trend + value -->
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;min-width:0;">
      <div style="font:500 12px/1.5 'Inter',sans-serif;color:#111928;">Total Sales</div>
      <div style="display:flex;align-items:center;gap:2px;">
        <!-- trend-up arrow SVG -->
        <span style="font:600 12px/1.5 'Inter',sans-serif;color:#5850EC;">+12.5%</span>
      </div>
      <div style="font:600 24px/1.5 'Inter',sans-serif;color:#111928;">$16,416</div>
    </div>
    <div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;"><!-- dollar SVG --></div>
  </div>
  <!-- Bar chart: 14 bars × 3px, indexes 4/9/12/13 at 56px (100%) -->
  <div style="display:flex;align-items:flex-end;justify-content:space-between;width:100%;height:56px;flex-shrink:0;">
    <div style="width:3px;height:15px;background:#6875F5;border-radius:32px;"></div>
    <!-- … 11 more bars — index 6: background:#B4C6FC (lighter shade) … -->
    <div style="width:3px;height:56px;background:#6875F5;border-radius:32px;"></div><!-- index 12 -->
    <div style="width:3px;height:56px;background:#6875F5;border-radius:32px;"></div><!-- index 13 -->
  </div>
</div>`}}},render:()=>E("up")},w={name:"barchart-segm-hor — Upwards (602:25133)",parameters:{docs:{description:{story:"Wide horizontal card (449×104px). Left: 12 segmented columns with 5 color categories. Right: trend + subtitle."},source:{language:"html",code:`<!-- Card KPI — barchart-segm-hor (449×104px)
     Layout: flex-row. Left: label + 12 segmented columns. Right: trend badge + "Compared to day prior".
     5 segment colors: gray #F2F4F7, green #22C55E, pink #EC4899, sky #33BFFF, blue #1D4ED8.
     Column width: 6px. Gap between columns: 10px. Container height: 50px. -->
<div style="background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.08);
            width:449px;height:104px;padding:32px 32px 16px;
            display:flex;flex-direction:row;gap:16px;align-items:flex-end;box-sizing:border-box;">

  <!-- Left: label + segmented columns -->
  <div style="display:flex;flex-direction:column;gap:8px;flex:1;min-width:0;justify-content:flex-end;">
    <div style="font:500 12px/1.5 'Inter',sans-serif;color:#111928;">Total Sales</div>
    <!-- Segmented chart: 12 columns × 6px wide, aligned to bottom -->
    <div style="display:flex;align-items:flex-end;gap:10px;height:50px;flex-shrink:0;">
      <!-- Each column: stacked color segments (height in px from data) -->
      <div style="display:flex;flex-direction:column;width:6px;overflow:hidden;flex-shrink:0;">
        <div style="width:6px;height:16px;background:#F2F4F7;flex-shrink:0;"></div>
        <div style="width:6px;height:3px;background:#22C55E;flex-shrink:0;"></div>
        <!-- … repeat for all 12 columns … -->
      </div>
    </div>
  </div>

  <!-- Right: trend badge + subtitle + icon pill -->
  <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:2px;">
      <!-- trend-up arrow SVG -->
      <span style="font:600 12px/1.5 'Inter',sans-serif;color:#5850EC;">+12.5%</span>
    </div>
    <span style="font:400 12px/1.5 'Inter',sans-serif;color:#6B7280;text-align:right;">Compared to day prior</span>
  </div>
  <div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;"><!-- dollar SVG --></div>

</div>`}}},render:()=>V()},C={name:"Credit — Upwards (602:23265)",parameters:{docs:{description:{story:"Credit-style variant with a distinct wave curve shape (different from standard Linechart)."},source:{language:"html",code:`<!-- Card KPI — Credit (286×168px)
     Same shell and header as Linechart. Different SVG path — smoother, credit-card-style wave.
     Trend color: #5850EC (brand/600). No "Compared to day prior" row (same as standard Linechart). -->
<div style="background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.08);
            width:286px;height:168px;padding:16px;display:flex;flex-direction:column;
            gap:16px;position:relative;overflow:hidden;box-sizing:border-box;">

  <!-- Header row: label + value + trend + icon pill -->
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;min-width:0;">
      <div style="font:500 12px/1.5 'Inter',sans-serif;color:#111928;">Total Sales</div>
      <div style="font:600 24px/1.5 'Inter',sans-serif;color:#111928;">$16,416</div>
    </div>
    <div style="display:flex;align-items:center;gap:2px;flex-shrink:0;">
      <!-- trend-up arrow SVG -->
      <span style="font:600 12px/1.5 'Inter',sans-serif;color:#5850EC;">+12.5%</span>
    </div>
    <div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;"><!-- dollar SVG --></div>
  </div>

  <!-- Credit-style wave chart — flush to card bottom, absolutely positioned
       Path differs from standard linechart: smoother, shallower curve with plateau in the middle -->
  <div style="position:absolute;bottom:0;left:0;right:0;">
    <svg style="width:100%;height:70px;display:block;" viewBox="0 0 286 70"
         preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <!-- area fill at 12% opacity -->
      <path d="M0,40 C40,42 60,28 100,32 C140,36 155,20 190,24 C220,28 240,18 286,8
               L286,70 L0,70 Z" fill="#5850EC" opacity="0.12"/>
      <!-- stroke line -->
      <path d="M0,40 C40,42 60,28 100,32 C140,36 155,20 190,24 C220,28 240,18 286,8"
            fill="none" stroke="#5850EC" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</div>`}}},render:()=>F()},k={name:"All variants — overview",args:{direction:"up"},parameters:{controls:{include:["direction"]},layout:"fullscreen",docs:{description:{story:"All 7 chart types side by side. Use the **direction** control to switch all cards between up and down trend simultaneously."},source:{code:"<!-- See individual chart type stories for copy-paste snippets -->",language:"html"}}},render:({direction:e})=>`
    <div style="padding:32px;background:#f3f4f6;display:flex;flex-wrap:wrap;gap:24px;align-items:flex-end;">
      <div>
        <p style="font:600 11px/1.2 sans-serif;color:#6B7280;text-transform:uppercase;letter-spacing:.06em;margin:0 0 8px;">Linechart</p>
        ${o(e)}
      </div>
      <div>
        <p style="font:600 11px/1.2 sans-serif;color:#6B7280;text-transform:uppercase;letter-spacing:.06em;margin:0 0 8px;">Linechart-vert</p>
        ${B(e)}
      </div>
      <div>
        <p style="font:600 11px/1.2 sans-serif;color:#6B7280;text-transform:uppercase;letter-spacing:.06em;margin:0 0 8px;">barchart</p>
        ${$(e)}
      </div>
      <div>
        <p style="font:600 11px/1.2 sans-serif;color:#6B7280;text-transform:uppercase;letter-spacing:.06em;margin:0 0 8px;">barchart-vert</p>
        ${I(e)}
      </div>
      <div>
        <p style="font:600 11px/1.2 sans-serif;color:#6B7280;text-transform:uppercase;letter-spacing:.06em;margin:0 0 8px;">barchart-big</p>
        ${E(e)}
      </div>
      <div>
        <p style="font:600 11px/1.2 sans-serif;color:#6B7280;text-transform:uppercase;letter-spacing:.06em;margin:0 0 8px;">Credit</p>
        ${F()}
      </div>
      <div>
        <p style="font:600 11px/1.2 sans-serif;color:#6B7280;text-transform:uppercase;letter-spacing:.06em;margin:0 0 8px;">barchart-segm-hor</p>
        ${V()}
      </div>
    </div>`};var U,G,P;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  parameters: {
    docs: {
      description: {
        story: 'Use **direction** to switch trend up/down and **chartType** to preview any KPI variant. Source snippet reflects the linechart structure — adapt the chart area for other types.'
      },
      source: {
        transform: (_src, storyCtx) => {
          const {
            direction
          } = storyCtx.args;
          const c = direction === 'up' ? '#5850EC' : '#E74694';
          const pct = direction === 'up' ? '+12.5%' : '−8.3%';
          const arrow = direction === 'up' ? \`<path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"/>\` : \`<path fill-rule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clip-rule="evenodd"/>\`;
          return \`<!-- Card KPI — Linechart / \${direction === 'up' ? 'Upwards' : 'Downwards'} -->
<div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;
            width:286px;height:168px;padding:16px;
            display:flex;flex-direction:column;gap:16px;position:relative;overflow:hidden;">
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;">
      <div style="font:500 12px/1.5 sans-serif;color:#111928;">Total Sales</div>
      <div style="font:600 24px/1.5 sans-serif;color:#111928;">$16,416</div>
    </div>
    <!-- Trend badge -->
    <div style="display:flex;align-items:center;gap:2px;">
      <svg width="16" height="16" viewBox="0 0 20 20" fill="\${c}" xmlns="http://www.w3.org/2000/svg">
        \${arrow}
      </svg>
      <span style="font:600 12px/1.5 sans-serif;color:\${c};">\${pct}</span>
    </div>
    <!-- Icon pill -->
    <div style="background:#D1D5DB;border-radius:999px;padding:9px;display:flex;align-items:center;justify-content:center;">
      <!-- currency-dollar icon -->
    </div>
  </div>
  <!-- Line chart SVG — flush to card bottom, absolutely positioned -->
  <div style="position:absolute;bottom:0;left:0;right:0;">
    <svg style="width:100%;height:70px;display:block;" viewBox="0 0 286 70" preserveAspectRatio="none">
      <!-- sparkline path here -->
    </svg>
  </div>
</div>\`;
        }
      }
    }
  },
  render: ({
    direction,
    chartType
  }) => {
    switch (chartType) {
      case 'linechart-vert':
        return cardLinechartVert(direction);
      case 'barchart':
        return cardBarchart(direction);
      case 'barchart-vert':
        return cardBarchartVert(direction);
      case 'barchart-big':
        return cardBarchartBig(direction);
      case 'barchart-segm-hor':
        return cardBarchartSegmHor();
      case 'credit':
        return cardCredit();
      default:
        return cardLinechart(direction);
    }
  }
}`,...(P=(G=g.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var A,M,H;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Linechart — Upwards (602:20753)',
  parameters: {
    docs: {
      description: {
        story: 'Smooth line chart trending upward. Trend badge: **#5850EC** (brand purple). Area fill: 12% opacity.'
      },
      source: {
        language: 'html',
        code: \`<!-- Card KPI — Linechart (286×168px) -->
<div style="background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.08);
            width:286px;height:168px;padding:16px;display:flex;flex-direction:column;
            gap:16px;position:relative;overflow:hidden;box-sizing:border-box;">

  <!-- Header row: label + trend + icon pill -->
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;min-width:0;">
      <div style="font:500 12px/1.5 'Inter',sans-serif;color:#111928;">Total Sales</div>
      <div style="font:600 24px/1.5 'Inter',sans-serif;color:#111928;">$16,416</div>
    </div>
    <!-- Trend badge (up: #5850EC, down: #E74694) -->
    <div style="display:flex;align-items:center;gap:2px;flex-shrink:0;">
      <!-- trend-up arrow SVG here -->
      <span style="font:600 12px/1.5 'Inter',sans-serif;color:#5850EC;">+12.5%</span>
    </div>
    <!-- Grey pill icon -->
    <div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;">
      <!-- currency-dollar SVG here -->
    </div>
  </div>

  <!-- Line chart SVG — flush to card bottom, absolute positioned -->
  <div style="position:absolute;bottom:0;left:0;right:0;">
    <svg style="width:100%;height:70px;display:block;" viewBox="0 0 286 70" preserveAspectRatio="none">
      <!-- area fill at 12% opacity (color #5850EC for up, #E74694 for down) -->
      <path d="M0,60 C30,55 55,64 85,48 …286,3 L286,70 L0,70 Z" fill="#5850EC" opacity="0.12"/>
      <!-- stroke line -->
      <path d="M0,60 C30,55 55,64 85,48 …286,3" fill="none" stroke="#5850EC" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</div>\`
      }
    }
  },
  render: () => \`<div style="display:flex;gap:16px;flex-wrap:wrap;">\${cardLinechart('up')}\${cardLinechart('down')}</div>\`
}`,...(H=(M=v.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var z,j,K;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Linechart — Downwards (602:20589)',
  parameters: {
    docs: {
      description: {
        story: 'Smooth line chart trending downward. Trend badge: **#E74694** (pink).'
      },
      source: {
        language: 'html',
        code: \`<!-- Card KPI — Linechart Downwards: same structure as Linechart Upwards.
     Change trend color to #E74694 (pink) and invert the SVG path direction. -->
<div style="background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.08);
            width:286px;height:168px;padding:16px;display:flex;flex-direction:column;
            gap:16px;position:relative;overflow:hidden;box-sizing:border-box;">
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;min-width:0;">
      <div style="font:500 12px/1.5 'Inter',sans-serif;color:#111928;">Total Sales</div>
      <div style="font:600 24px/1.5 'Inter',sans-serif;color:#111928;">$16,416</div>
    </div>
    <div style="display:flex;align-items:center;gap:2px;flex-shrink:0;">
      <!-- trend-down arrow SVG -->
      <span style="font:600 12px/1.5 'Inter',sans-serif;color:#E74694;">−8.3%</span>
    </div>
    <div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;"><!-- dollar SVG --></div>
  </div>
  <div style="position:absolute;bottom:0;left:0;right:0;">
    <svg style="width:100%;height:70px;display:block;" viewBox="0 0 286 70" preserveAspectRatio="none">
      <path d="M0,3 C28,8 50,2 80,18 …286,65 L286,70 L0,70 Z" fill="#E74694" opacity="0.12"/>
      <path d="M0,3 C28,8 50,2 80,18 …286,65" fill="none" stroke="#E74694" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</div>\`
      }
    }
  },
  render: () => cardLinechart('down')
}`,...(K=(j=f.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var R,_,O;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Linechart-vert — Upwards (602:22376)',
  parameters: {
    docs: {
      description: {
        story: 'Line chart with "Compared to day prior" label. Up + down variants side by side.'
      },
      source: {
        language: 'html',
        code: \`<!-- Card KPI — Linechart-vert (286×168px)
     Difference from Linechart: trend badge moves below the value, "Compared to day prior" label added. -->
<div style="background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.08);
            width:286px;height:168px;padding:16px;display:flex;flex-direction:column;
            gap:4px;position:relative;overflow:hidden;box-sizing:border-box;">
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;min-width:0;">
      <div style="font:500 12px/1.5 'Inter',sans-serif;color:#111928;">Total Sales</div>
      <div style="font:600 24px/1.5 'Inter',sans-serif;color:#111928;">$16,416</div>
    </div>
    <div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;"><!-- dollar SVG --></div>
  </div>
  <!-- "Compared to day prior" row with trend -->
  <div style="display:flex;align-items:center;justify-content:space-between;">
    <span style="font:400 12px/1.5 'Inter',sans-serif;color:#6B7280;">Compared to day prior</span>
    <div style="display:flex;align-items:center;gap:2px;flex-shrink:0;">
      <!-- trend arrow SVG -->
      <span style="font:600 12px/1.5 'Inter',sans-serif;color:#5850EC;">+12.5%</span>
    </div>
  </div>
  <!-- Line chart SVG (same as Linechart, see LinechartUp story) -->
  <div style="position:absolute;bottom:0;left:0;right:0;"><!-- SVG chart --></div>
</div>\`
      }
    }
  },
  render: () => \`<div style="display:flex;gap:16px;flex-wrap:wrap;">\${cardLinechartVert('up')}\${cardLinechartVert('down')}</div>\`
}`,...(O=(_=u.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var N,Z,W;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'barchart — Upwards (602:20796)',
  parameters: {
    docs: {
      description: {
        story: '14 bars × 3px. Bar color: **#6875F5** (brand/500), bar at index 6 lighter: **#B4C6FC** (brand/300). Trend in header row.'
      },
      source: {
        language: 'html',
        code: \`<!-- Card KPI — barchart (286×200px)
     Layout: header (label + trend + value) at top, bar chart at bottom.
     14 bars × 3px wide, border-radius 32px, aligned to flex-end (bottom).
     Bar color: up=#6875F5, down=#E74694. Index-6 bar is lighter: up=#B4C6FC, down=#F8B4D9. -->
<div style="background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.08);
            width:286px;height:200px;padding:32px 32px 16px;display:flex;flex-direction:column;
            gap:40px;box-sizing:border-box;">
  <!-- Header -->
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;min-width:0;">
      <div style="font:500 12px/1.5 'Inter',sans-serif;color:#111928;">Total Sales</div>
      <!-- Trend badge -->
      <div style="display:flex;align-items:center;gap:2px;">
        <!-- trend-up arrow SVG -->
        <span style="font:600 12px/1.5 'Inter',sans-serif;color:#5850EC;">+12.5%</span>
      </div>
      <div style="font:600 24px/1.5 'Inter',sans-serif;color:#111928;">$16,416</div>
    </div>
    <div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;"><!-- dollar SVG --></div>
  </div>
  <!-- Bar chart: 14 bars, flex-end aligned, container 56px tall -->
  <div style="display:flex;align-items:flex-end;justify-content:space-between;width:100%;height:56px;flex-shrink:0;">
    <div style="width:3px;height:15px;background:#6875F5;border-radius:32px;"></div>
    <!-- … 13 more bars with heights from Figma … -->
    <!-- Index 6: width:3px; background:#B4C6FC (lighter shade) -->
  </div>
</div>\`
      }
    }
  },
  render: () => \`<div style="display:flex;gap:16px;flex-wrap:wrap;">\${cardBarchart('up')}\${cardBarchart('down')}</div>\`
}`,...(W=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:W.source}}};var Q,q,J;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'barchart-vert — Upwards (602:23611)',
  parameters: {
    docs: {
      description: {
        story: 'Same 14-bar layout with "Compared to day prior" label above the chart.'
      },
      source: {
        language: 'html',
        code: \`<!-- Card KPI — barchart-vert (286×200px)
     Same as barchart but "Compared to day prior" label sits between the value and the bars. -->
<div style="background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.08);
            width:286px;height:200px;padding:32px 32px 16px;display:flex;flex-direction:column;
            gap:24px;box-sizing:border-box;">
  <div style="display:flex;flex-direction:column;gap:16px;">
    <div style="display:flex;gap:16px;align-items:flex-start;">
      <div style="flex:1;min-width:0;">
        <div style="font:500 12px/1.5 'Inter',sans-serif;color:#111928;">Total Sales</div>
        <div style="font:600 24px/1.5 'Inter',sans-serif;color:#111928;">$16,416</div>
      </div>
      <div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;"><!-- dollar SVG --></div>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;">
      <span style="font:400 12px/1.5 'Inter',sans-serif;color:#6B7280;">Compared to day prior</span>
      <div style="display:flex;align-items:center;gap:2px;">
        <!-- trend-up arrow SVG -->
        <span style="font:600 12px/1.5 'Inter',sans-serif;color:#5850EC;">+12.5%</span>
      </div>
    </div>
  </div>
  <!-- Bar chart (same as barchart, see BarchartUp story) -->
  <div style="display:flex;align-items:flex-end;justify-content:space-between;width:100%;height:56px;flex-shrink:0;">
    <!-- 14 bars × 3px, heights from Figma -->
  </div>
</div>\`
      }
    }
  },
  render: () => cardBarchartVert('up')
}`,...(J=(q=m.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var X,Y,ee;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'barchart-big — Upwards (602:24711)',
  parameters: {
    docs: {
      description: {
        story: 'barchart with 4 bars at full container height instead of 2 (indexes 4, 9, 12, 13 = full).'
      },
      source: {
        language: 'html',
        code: \`<!-- Card KPI — barchart-big (286×200px)
     Same structure as barchart, but bars at indexes 4, 9, 12, and 13 reach full height (56px).
     All other bar heights differ from standard barchart. -->
<div style="background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.08);
            width:286px;height:200px;padding:32px 32px 16px;display:flex;flex-direction:column;
            gap:40px;box-sizing:border-box;">
  <!-- Header: label + trend + value -->
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;min-width:0;">
      <div style="font:500 12px/1.5 'Inter',sans-serif;color:#111928;">Total Sales</div>
      <div style="display:flex;align-items:center;gap:2px;">
        <!-- trend-up arrow SVG -->
        <span style="font:600 12px/1.5 'Inter',sans-serif;color:#5850EC;">+12.5%</span>
      </div>
      <div style="font:600 24px/1.5 'Inter',sans-serif;color:#111928;">$16,416</div>
    </div>
    <div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;"><!-- dollar SVG --></div>
  </div>
  <!-- Bar chart: 14 bars × 3px, indexes 4/9/12/13 at 56px (100%) -->
  <div style="display:flex;align-items:flex-end;justify-content:space-between;width:100%;height:56px;flex-shrink:0;">
    <div style="width:3px;height:15px;background:#6875F5;border-radius:32px;"></div>
    <!-- … 11 more bars — index 6: background:#B4C6FC (lighter shade) … -->
    <div style="width:3px;height:56px;background:#6875F5;border-radius:32px;"></div><!-- index 12 -->
    <div style="width:3px;height:56px;background:#6875F5;border-radius:32px;"></div><!-- index 13 -->
  </div>
</div>\`
      }
    }
  },
  render: () => cardBarchartBig('up')
}`,...(ee=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var re,te,ie;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'barchart-segm-hor — Upwards (602:25133)',
  parameters: {
    docs: {
      description: {
        story: 'Wide horizontal card (449×104px). Left: 12 segmented columns with 5 color categories. Right: trend + subtitle.'
      },
      source: {
        language: 'html',
        code: \`<!-- Card KPI — barchart-segm-hor (449×104px)
     Layout: flex-row. Left: label + 12 segmented columns. Right: trend badge + "Compared to day prior".
     5 segment colors: gray #F2F4F7, green #22C55E, pink #EC4899, sky #33BFFF, blue #1D4ED8.
     Column width: 6px. Gap between columns: 10px. Container height: 50px. -->
<div style="background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.08);
            width:449px;height:104px;padding:32px 32px 16px;
            display:flex;flex-direction:row;gap:16px;align-items:flex-end;box-sizing:border-box;">

  <!-- Left: label + segmented columns -->
  <div style="display:flex;flex-direction:column;gap:8px;flex:1;min-width:0;justify-content:flex-end;">
    <div style="font:500 12px/1.5 'Inter',sans-serif;color:#111928;">Total Sales</div>
    <!-- Segmented chart: 12 columns × 6px wide, aligned to bottom -->
    <div style="display:flex;align-items:flex-end;gap:10px;height:50px;flex-shrink:0;">
      <!-- Each column: stacked color segments (height in px from data) -->
      <div style="display:flex;flex-direction:column;width:6px;overflow:hidden;flex-shrink:0;">
        <div style="width:6px;height:16px;background:#F2F4F7;flex-shrink:0;"></div>
        <div style="width:6px;height:3px;background:#22C55E;flex-shrink:0;"></div>
        <!-- … repeat for all 12 columns … -->
      </div>
    </div>
  </div>

  <!-- Right: trend badge + subtitle + icon pill -->
  <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:2px;">
      <!-- trend-up arrow SVG -->
      <span style="font:600 12px/1.5 'Inter',sans-serif;color:#5850EC;">+12.5%</span>
    </div>
    <span style="font:400 12px/1.5 'Inter',sans-serif;color:#6B7280;text-align:right;">Compared to day prior</span>
  </div>
  <div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;"><!-- dollar SVG --></div>

</div>\`
      }
    }
  },
  render: () => cardBarchartSegmHor()
}`,...(ie=(te=w.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var ae,ne,se;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Credit — Upwards (602:23265)',
  parameters: {
    docs: {
      description: {
        story: 'Credit-style variant with a distinct wave curve shape (different from standard Linechart).'
      },
      source: {
        language: 'html',
        code: \`<!-- Card KPI — Credit (286×168px)
     Same shell and header as Linechart. Different SVG path — smoother, credit-card-style wave.
     Trend color: #5850EC (brand/600). No "Compared to day prior" row (same as standard Linechart). -->
<div style="background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.08);
            width:286px;height:168px;padding:16px;display:flex;flex-direction:column;
            gap:16px;position:relative;overflow:hidden;box-sizing:border-box;">

  <!-- Header row: label + value + trend + icon pill -->
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;min-width:0;">
      <div style="font:500 12px/1.5 'Inter',sans-serif;color:#111928;">Total Sales</div>
      <div style="font:600 24px/1.5 'Inter',sans-serif;color:#111928;">$16,416</div>
    </div>
    <div style="display:flex;align-items:center;gap:2px;flex-shrink:0;">
      <!-- trend-up arrow SVG -->
      <span style="font:600 12px/1.5 'Inter',sans-serif;color:#5850EC;">+12.5%</span>
    </div>
    <div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;"><!-- dollar SVG --></div>
  </div>

  <!-- Credit-style wave chart — flush to card bottom, absolutely positioned
       Path differs from standard linechart: smoother, shallower curve with plateau in the middle -->
  <div style="position:absolute;bottom:0;left:0;right:0;">
    <svg style="width:100%;height:70px;display:block;" viewBox="0 0 286 70"
         preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <!-- area fill at 12% opacity -->
      <path d="M0,40 C40,42 60,28 100,32 C140,36 155,20 190,24 C220,28 240,18 286,8
               L286,70 L0,70 Z" fill="#5850EC" opacity="0.12"/>
      <!-- stroke line -->
      <path d="M0,40 C40,42 60,28 100,32 C140,36 155,20 190,24 C220,28 240,18 286,8"
            fill="none" stroke="#5850EC" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</div>\`
      }
    }
  },
  render: () => cardCredit()
}`,...(se=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var de,oe,le;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'All variants — overview',
  args: {
    direction: 'up'
  },
  parameters: {
    controls: {
      include: ['direction']
    },
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'All 7 chart types side by side. Use the **direction** control to switch all cards between up and down trend simultaneously.'
      },
      source: {
        code: \`<!-- See individual chart type stories for copy-paste snippets -->\`,
        language: 'html'
      }
    }
  },
  render: ({
    direction
  }) => \`
    <div style="padding:32px;background:#f3f4f6;display:flex;flex-wrap:wrap;gap:24px;align-items:flex-end;">
      <div>
        <p style="font:600 11px/1.2 sans-serif;color:#6B7280;text-transform:uppercase;letter-spacing:.06em;margin:0 0 8px;">Linechart</p>
        \${cardLinechart(direction)}
      </div>
      <div>
        <p style="font:600 11px/1.2 sans-serif;color:#6B7280;text-transform:uppercase;letter-spacing:.06em;margin:0 0 8px;">Linechart-vert</p>
        \${cardLinechartVert(direction)}
      </div>
      <div>
        <p style="font:600 11px/1.2 sans-serif;color:#6B7280;text-transform:uppercase;letter-spacing:.06em;margin:0 0 8px;">barchart</p>
        \${cardBarchart(direction)}
      </div>
      <div>
        <p style="font:600 11px/1.2 sans-serif;color:#6B7280;text-transform:uppercase;letter-spacing:.06em;margin:0 0 8px;">barchart-vert</p>
        \${cardBarchartVert(direction)}
      </div>
      <div>
        <p style="font:600 11px/1.2 sans-serif;color:#6B7280;text-transform:uppercase;letter-spacing:.06em;margin:0 0 8px;">barchart-big</p>
        \${cardBarchartBig(direction)}
      </div>
      <div>
        <p style="font:600 11px/1.2 sans-serif;color:#6B7280;text-transform:uppercase;letter-spacing:.06em;margin:0 0 8px;">Credit</p>
        \${cardCredit()}
      </div>
      <div>
        <p style="font:600 11px/1.2 sans-serif;color:#6B7280;text-transform:uppercase;letter-spacing:.06em;margin:0 0 8px;">barchart-segm-hor</p>
        \${cardBarchartSegmHor()}
      </div>
    </div>\`
}`,...(le=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};const $e=["Interactive","LinechartUp","LinechartDown","LinechartVertUp","BarchartUp","BarchartVert","BarchartBig","BarchartSegmHor","CreditUp","AllVariants"];export{k as AllVariants,b as BarchartBig,w as BarchartSegmHor,y as BarchartUp,m as BarchartVert,C as CreditUp,g as Interactive,f as LinechartDown,v as LinechartUp,u as LinechartVertUp,$e as __namedExportsOrder,Be as default};
