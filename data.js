const WORKER_URL = "https://apkhub-web-chat.apkhub-web.workers.dev";
const APP_APK_URL = "https://download1085.mediafire.com/o6bv8ruspn2glJyyBA7evLtPyG7gNcE3LlYX_KaA4EskHSNgbRtGpHajBl4o7DtL74ImLA8Hs0OrU0RqR9uNYoVgEyKM1toYVUzUtE70K-HWEfFmwxrDdfGd3jAJ1m9pi75vP9mCyzVPlFEFkVfxIRd5JrhS4QWq_G4utLqXtb5eGERA/lvu5n4x6smfjafk/apk+hub.apk";

const APPS = [
  {id:"inshot",name:"InShot",ver:"v2.222.1548 (Pro)",desc:"Powerful video & photo editor with pro tools unlocked.",cat:"video",icon:"✂️",badge:"PRO",link:"https://vplink.in/PSWRyG",rating:4.8},
  {id:"koloro",name:"Koloro",ver:"v6.2.8 (VIP)",desc:"Creative photo filters and color grading tools.",cat:"photo",icon:"🎨",badge:"VIP",link:"https://vplink.in/69FQ",rating:4.6},
  {id:"meloshort",name:"MeloShort",ver:"2.42.00 (Premium)",desc:"Watch short dramas with premium access.",cat:"video",icon:"📱",badge:"PREMIUM",link:"https://vplink.in/d9BXu",rating:4.5},
  {id:"loktv",name:"LOKTV",ver:"v1.1.0 (VIP)",desc:"Streaming app for shows and movies.",cat:"video",icon:"📺",badge:"VIP",link:"https://vplink.in/iWGd2",rating:4.4},
  {id:"movieshub",name:"MOVIES HUB",ver:"v2.1.5d (Premium)",desc:"Movies hub with premium content access.",cat:"video",icon:"🎬",badge:"PREMIUM",link:"https://vplink.in/TJMVw",rating:4.3},
  {id:"prime",name:"Prime Video",ver:"v3.0.465.755 MOD",desc:"Prime Video modded build.",cat:"video",icon:"📺",badge:"MOD",link:"https://vplink.in/1HLBB",rating:4.5},
  {id:"hulu",name:"Hulu",ver:"v6.11.0.63 (Premium)",desc:"Hulu streaming premium mod.",cat:"video",icon:"📡",badge:"PREMIUM",link:"https://vplink.in/4rsj",rating:4.2},
  {id:"adobescan",name:"Adobe Scan",ver:"v26.08.01 (Premium)",desc:"Scan documents to PDF with premium features.",cat:"tools",icon:"📄",badge:"PREMIUM",link:"https://vplink.in/4bGBk",rating:4.7},
  {id:"minecraft",name:"Minecraft",ver:"v1.26.10.4 mod",desc:"Minecraft modded experience.",cat:"games",icon:"⛏️",badge:"MOD",link:"https://vplink.in/SjKaer",rating:4.9},
  {id:"fcmobile",name:"FC Mobile",ver:"v26.2.02 mod",desc:"Football game mod.",cat:"games",icon:"⚽",badge:"MOD",link:"https://vplink.in/y5Wg",rating:4.6},
  {id:"zoom",name:"Zoom",ver:"v6.3.1.26498 (Premium)",desc:"Video meetings premium.",cat:"tools",icon:"📹",badge:"PREMIUM",link:"https://vplink.in/rcmnt",rating:4.5},
  {id:"mobipdf",name:"MobiPDF",ver:"v11.16.270612",desc:"PDF reader and editor.",cat:"tools",icon:"📑",badge:"PREMIUM",link:"https://vplink.in/369tD",rating:4.4},
  {id:"wattpad",name:"Wattpad",ver:"v11.36.0 (Premium)",desc:"Read and write stories.",cat:"tools",icon:"📖",badge:"PREMIUM",link:"https://vplink.in/Wdgbn9",rating:4.5},
  {id:"subway",name:"Subway Surfers",ver:"v3.68.5 mod",desc:"Endless runner game mod.",cat:"games",icon:"🏃",badge:"MOD",link:"https://vplink.in/u646AU",rating:4.7},
  {id:"shadow",name:"Shadow Fight 2",ver:"v2.45.0 mod",desc:"Fighting game with mod features.",cat:"games",icon:"⚔️",badge:"MOD",link:"https://vplink.in/7iSbbG",rating:4.6},
  {id:"grammarly",name:"Grammarly",ver:"v2.63.47989",desc:"Writing assistant premium.",cat:"tools",icon:"✍️",badge:"PREMIUM",link:"https://vplink.in/kFbhei",rating:4.6},
  {id:"ytmusic",name:"YT Music",ver:"v9.34.52 MOD",desc:"YouTube Music mod.",cat:"music",icon:"🎵",badge:"MOD",link:"https://vplink.in/BmiKt0",rating:4.5},
  {id:"vanced",name:"YouTube Vanced",ver:"v21.35.442 MOD",desc:"YouTube without ads.",cat:"video",icon:"▶️",badge:"MOD",link:"https://vplink.in/i47gt6",rating:4.8},
  {id:"weezer",name:"Weezer",ver:"v3.7.2 (Premium)",desc:"Music player premium.",cat:"music",icon:"🎧",badge:"PREMIUM",link:"https://vplink.in/9cDJIw",rating:4.3},
  {id:"terabox",name:"TeraBox",ver:"v4.24.6 MOD",desc:"Cloud storage mod.",cat:"tools",icon:"📦",badge:"MOD",link:"https://vplink.in/3g2zW3",rating:4.4},
  {id:"storage",name:"Storage Space",ver:"v29.1.5 (Premium)",desc:"Clean and free storage.",cat:"tools",icon:"🧹",badge:"PREMIUM",link:"https://vplink.in/B58G",rating:4.2},
  {id:"picsart",name:"Picsart",ver:"v30.6.5 (Premium)",desc:"Photo editor with premium assets.",cat:"photo",icon:"🖼️",badge:"PREMIUM",link:"https://vplink.in/PNW8T",rating:4.6},
  {id:"perplexity",name:"Perplexity",ver:"v2.82.1 (Premium)",desc:"AI-powered search assistant.",cat:"tools",icon:"🤖",badge:"PREMIUM",link:"https://vplink.in/8kab",rating:4.7},
  {id:"netflix",name:"Netflix",ver:"v9.81.0 MOD",desc:"Netflix modded client.",cat:"video",icon:"🎬",badge:"MOD",link:"https://vplink.in/OTtjlG",rating:4.5},
  {id:"mockloc",name:"Mock Locations",ver:"v1.37.2 (Premium)",desc:"Fake GPS location tool.",cat:"tools",icon:"📍",badge:"PREMIUM",link:"https://vplink.in/4sc5T",rating:4.3},
  {id:"ggmouse",name:"GG Mouse Pro 2",ver:"v2.3.21 (Premium)",desc:"Auto clicker utility.",cat:"tools",icon:"🖱️",badge:"PREMIUM",link:"https://vplink.in/jYKj",rating:4.4},
  {id:"gcclick",name:"GC Auto Clicker",ver:"v2.2.78 (Premium)",desc:"Automatic click helper.",cat:"tools",icon:"👆",badge:"PREMIUM",link:"https://vplink.in/wL3jw",rating:4.3},
  {id:"esound",name:"eSound",ver:"v4.16.29 (Premium)",desc:"Music streaming premium.",cat:"music",icon:"🎶",badge:"PREMIUM",link:"https://vplink.in/Vqt2",rating:4.4},
  {id:"chatgpt",name:"ChatGPT",ver:"v1.2025.329 (Premium)",desc:"ChatGPT mobile premium.",cat:"tools",icon:"💬",badge:"PREMIUM",link:"https://vplink.in/WkRJK",rating:4.8},
  {id:"capcutmod",name:"CapCut",ver:"v19.6.1 MOD",desc:"Video editor mod build.",cat:"video",icon:"🎥",badge:"MOD",link:"https://vplink.in/w6IiPR",rating:4.7},
  {id:"alight",name:"Alight Motion",ver:"v5.0.279 (Premium)",desc:"Motion graphics editor.",cat:"video",icon:"✨",badge:"PREMIUM",link:"https://vplink.in/bmOYo5",rating:4.6},
  {id:"capcutpro",name:"CapCut",ver:"v18.6.0 (Pro)",desc:"CapCut Pro features unlocked.",cat:"video",icon:"✂️",badge:"PRO",link:"https://vplink.in/OHDG60",rating:4.6},
  {id:"ytpremium",name:"YouTube Premium",ver:"v21.33.326 (Premium)",desc:"YouTube Premium experience.",cat:"video",icon:"▶️",badge:"PREMIUM",link:"https://vplink.in/u2i0s",rating:4.7},
  {id:"vpnindia",name:"VPN India",ver:"v1.162 (Pro)",desc:"VPN client for secure browsing.",cat:"tools",icon:"🔒",badge:"PRO",link:"https://vplink.in/LUxT",rating:4.2},
  {id:"tiktok",name:"TikTok Platinum",ver:"v46.7.5 (MOD)",desc:"TikTok modded platinum build.",cat:"social",icon:"🎵",badge:"MOD",link:"https://vplink.in/eWam",rating:4.5},
  {id:"rdr",name:"Red Dead Redemption",ver:"v1.58.63226194 MOD",desc:"RDR mobile mod.",cat:"games",icon:"🤠",badge:"MOD",link:"https://vplink.in/M4S6ty",rating:4.4},
  {id:"microg",name:"microG Services",ver:"v0.3.1.4.240913",desc:"microG services package.",cat:"tools",icon:"⚙️",badge:"",link:"https://vplink.in/xdaUMm",rating:4.1},
  {id:"webtoon",name:"WEBTOON",ver:"v3.9.11 (Premium)",desc:"Read webtoons with premium.",cat:"tools",icon:"📖",badge:"PREMIUM",link:"https://vplink.in/dvy7",rating:4.5}
];

function cardHTML(a,i){
  return `<a class="card" href="detail.html?id=${a.id}" style="animation-delay:${(i%12)*0.04}s">
    ${a.badge?`<span class="c-badge">${a.badge}</span>`:''}
    <div class="c-icon">${a.icon}</div>
    <div class="c-name">${a.name}</div>
    <div class="c-ver">${a.ver}</div>
    <div class="c-desc">${a.desc}</div>
    <span class="c-btn">View Details</span>
  </a>`;
}

function initCursor(){
  if(window.matchMedia('(pointer: coarse)').matches){document.body.classList.add('touch');return;}
  const c=document.createElement('div');c.className='cursor';
  const d=document.createElement('div');d.className='cursor-dot';
  document.body.appendChild(c);document.body.appendChild(d);
  document.addEventListener('mousemove',e=>{
    c.style.left=e.clientX+'px';c.style.top=e.clientY+'px';
    d.style.left=e.clientX+'px';d.style.top=e.clientY+'px';
    // open drawer when cursor near left edge
    if(e.clientX < 28) openSide();
  });
  document.querySelectorAll('a,button,.card,.platform,.chip').forEach(el=>{
    el.addEventListener('mouseenter',()=>c.classList.add('hover'));
    el.addEventListener('mouseleave',()=>c.classList.remove('hover'));
  });
}

function sideHTML(){
  return `
  <div class="edge-hint" id="edgeHint">⬇</div>
  <button class="side-toggle" id="sideToggle" onclick="toggleSide()" aria-label="Download panel">⬇ App</button>
  <div class="side-backdrop" id="sideBackdrop" onclick="closeSide()"></div>
  <aside class="side" id="sidePanel" onmouseleave="onSideLeave(event)">
    <div class="side-top">
      <div class="logo"><i>A</i>APK<span>Hub</span></div>
      <button class="side-close" onclick="closeSide()">✕</button>
    </div>
    <h2>Download Our App</h2>
    <div class="platform active"><div class="pi">🤖</div><div><b>Android</b><small>APK ready to install</small></div></div>
    <div class="platform soon"><div class="pi">🪟</div><div><b>Windows</b><small>Coming soon</small></div></div>
    <div class="platform soon"><div class="pi">🍎</div><div><b>iOS</b><small>Coming soon</small></div></div>
    <div class="platform soon"><div class="pi">💻</div><div><b>Mac</b><small>Coming soon</small></div></div>
    <button class="dl-main" type="button" onclick="confirmDownload()">↓ Download Android APK</button>
    <p class="side-note">Safe, fast & free. Always scan APKs before installing. For educational use only.</p>
  </aside>
  <div class="popup-overlay" id="welcomePopup">
    <div class="popup-box">
      <h3>⚠️ Disclaimer & Tutorial</h3>
      <p><b>Disclaimer:</b> All apps/games are for educational purposes only. Use at your own risk. Always scan APKs before installing.</p>
      <p style="margin-top:10px"><b>How to download apps:</b></p>
      <ol>
        <li>App card pe View Details → Download</li>
        <li>Vplink ads skip karo</li>
        <li>MediaFire se APK lo</li>
        <li>Unknown sources allow karke install</li>
      </ol>
      <p>Full guide Tutorials page pe hai.</p>
      <div class="popup-btns"><button class="btn-ok" onclick="closeWelcome()">Samajh gaya ✓</button></div>
    </div>
  </div>
  <div class="popup-overlay" id="dlPopup">
    <div class="popup-box">
      <h3>📥 Download Notice</h3>
      <p>Download se pehle yaad rakho:</p>
      <ol>
        <li>APK ko antivirus se scan karo</li>
        <li>Apne risk pe install karo</li>
        <li>Educational use only</li>
      </ol>
      <div class="popup-btns">
        <button class="btn-cancel" onclick="closeDl()">Cancel</button>
        <button class="btn-ok" id="dlGo">Continue ↓</button>
      </div>
    </div>
  </div>`;
}

function openSide(){
  document.getElementById('sidePanel')?.classList.add('open');
  document.getElementById('sideBackdrop')?.classList.add('show');
  document.body.classList.add('side-open');
}
function closeSide(){
  document.getElementById('sidePanel')?.classList.remove('open');
  document.getElementById('sideBackdrop')?.classList.remove('show');
  document.body.classList.remove('side-open');
}
function toggleSide(){
  const p=document.getElementById('sidePanel');
  if(p.classList.contains('open')) closeSide(); else openSide();
}
function onSideLeave(e){
  // only auto-close on desktop mouse leave
  if(window.matchMedia('(pointer: fine)').matches){
    // if related target is still inside panel, ignore
    if(e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) return;
    closeSide();
  }
}

function confirmDownload(){
  document.getElementById('dlPopup').classList.add('show');
  document.getElementById('dlGo').onclick=function(){
    document.getElementById('dlPopup').classList.remove('show');
    window.open(APP_APK_URL,'_blank');
  };
}
function closeDl(){document.getElementById('dlPopup').classList.remove('show');}
function closeWelcome(){
  document.getElementById('welcomePopup').classList.remove('show');
  localStorage.setItem('apkhub_web_welcome','1');
}

function navHTML(active){
  const items=[['index.html','Home'],['apps.html','Apps'],['games.html','Games'],['categories.html','Categories'],['tutorials.html','Tutorials'],['about.html','About'],['ai-help.html','AI Help']];
  return `<div class="topnav">
    <div class="nav-links">${items.map(([h,l])=>`<a href="${h}" class="${active===l?'active':''}">${l}</a>`).join('')}</div>
  </div>`;
}

function chatHTML(){
  return `<button class="chat-btn" onclick="toggleChat()">🤖</button>
  <div class="chat-panel" id="chatPanel">
    <div class="chat-h"><span>APK Hub Helper</span><button onclick="toggleChat()" style="background:none;border:none;color:#fff;font-size:18px">✕</button></div>
    <div class="chat-m" id="chatMessages"><div class="msg bot">Assalam o Alaikum! Download, install ya link skip ke baare mein poochho.</div></div>
    <div class="chat-i"><input id="chatInput" placeholder="Type your question..." onkeydown="if(event.key==='Enter')sendChat()"><button onclick="sendChat()">➤</button></div>
  </div>`;
}

function toggleChat(){document.getElementById('chatPanel').classList.toggle('open');}
function addMsg(t,type){const d=document.createElement('div');d.className='msg '+type;d.innerHTML=t;const m=document.getElementById('chatMessages');m.appendChild(d);m.scrollTop=99999;}
async function sendChat(){
  const input=document.getElementById('chatInput');const text=input.value.trim();if(!text)return;
  addMsg(text,'user');input.value='';addMsg('Thinking...','bot');
  try{
    const res=await fetch(WORKER_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:text})});
    const data=await res.json();document.getElementById('chatMessages').lastChild.remove();
    addMsg(data.reply||('Error: '+(data.error||'Problem')),'bot');
  }catch(e){document.getElementById('chatMessages').lastChild.remove();addMsg('Network error. Internet check karo.','bot');}
}

window.addEventListener('DOMContentLoaded',()=>{
  initCursor();
  // layout is full width now - side is overlay drawer
  document.querySelector('.layout')?.classList.add('full');
  if(!localStorage.getItem('apkhub_web_welcome')){
    setTimeout(()=>document.getElementById('welcomePopup')?.classList.add('show'),600);
  }
});
