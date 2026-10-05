/* =====================================================================
   SMART CAMPUS ASSISTANT – Dr. D.Y. Patil School Of Science & Technology, Pune
   Sections: 1) Knowledge base  2) Intent engine  3) Views  4) Chat  5) App
   ===================================================================== */

/* ---------- 1) CAMPUS KNOWLEDGE BASE ----------
   Everything below is SAMPLE data. // UPDATE WITH ACTUAL COLLEGE DATA */
const KB = {
  // UPDATE WITH ACTUAL COLLEGE DATA
  timetable: {
    course: "B.Sc. Computer Science – Semester V (sample)",
    days: { // 1 = Monday ... 6 = Saturday
      1: [["09:00","Python Programming","Lab 2","Prof. Sample A"],["11:00","Database Management","Room 301","Prof. Sample B"],["14:00","Web Technologies","Room 302","Prof. Sample C"]],
      2: [["09:00","Data Structures","Room 301","Prof. Sample D"],["11:00","Python Programming","Room 301","Prof. Sample A"],["14:00","Mathematics","Room 105","Prof. Sample E"]],
      3: [["09:00","Web Technologies","Lab 1","Prof. Sample C"],["11:00","Operating Systems","Room 303","Prof. Sample F"],["14:00","Communication Skills","Room 105","Prof. Sample G"]],
      4: [["09:00","Database Management","Lab 2","Prof. Sample B"],["11:00","Data Structures","Room 301","Prof. Sample D"],["14:00","Python Programming","Lab 2","Prof. Sample A"]],
      5: [["09:00","Operating Systems","Room 303","Prof. Sample F"],["11:00","Mathematics","Room 105","Prof. Sample E"],["14:00","Mini Project","Lab 1","Prof. Sample C"]],
      6: [["09:00","Seminar / Mentoring","Room 301","Class Teacher"]]
    }
  },
  // UPDATE WITH ACTUAL COLLEGE DATA
  faculty: [
    {name:"Prof. Sample A", dept:"Computer Science", subject:"Python Programming", keys:["python"], contact:"faculty.a@example.edu", classTeacher:true},
    {name:"Prof. Sample B", dept:"Computer Science", subject:"Database Management", keys:["database","dbms","sql"], contact:"faculty.b@example.edu"},
    {name:"Prof. Sample C", dept:"Computer Science", subject:"Web Technologies", keys:["web","html","javascript"], contact:"faculty.c@example.edu"},
    {name:"Prof. Sample D", dept:"Computer Science", subject:"Data Structures", keys:["data structure","dsa"], contact:"faculty.d@example.edu"},
    {name:"Prof. Sample E", dept:"Mathematics", subject:"Mathematics", keys:["math","maths","mathematics"], contact:"faculty.e@example.edu"},
    {name:"Prof. Sample F", dept:"Computer Science", subject:"Operating Systems", keys:["operating system","os"], contact:"faculty.f@example.edu"}
  ],
  // UPDATE WITH ACTUAL COLLEGE DATA
  notices: [
    {title:"Internal Assessment Schedule", date:"2026-10-12", category:"Examination", text:"Internal assessment dates for Semester V will be displayed on the notice board."},
    {title:"Library Book Return Drive", date:"2026-10-08", category:"Library", text:"Return overdue books before the deadline to avoid fines."},
    {title:"Fee Payment Reminder", date:"2026-10-06", category:"Accounts", text:"Pending fee payments should be cleared at the accounts office."},
    {title:"Technical Fest Registrations Open", date:"2026-10-04", category:"Events", text:"Students can register for the technical fest through their department."}
  ],
  // UPDATE WITH ACTUAL COLLEGE DATA
  events: [
    {name:"Tech Fest (sample)", date:"2026-10-20", location:"Main Auditorium", text:"Coding contest, project exhibition and quiz."},
    {name:"Guest Lecture: Careers in IT (sample)", date:"2026-10-15", location:"Seminar Hall", text:"Industry speaker session for final-year students."},
    {name:"Sports Day (sample)", date:"2026-11-02", location:"College Ground", text:"Inter-department sports competitions."}
  ],
  // UPDATE WITH ACTUAL COLLEGE DATA
  canteen: {
    timing: "08:30 AM – 05:00 PM",
    menu: [["Breakfast","Poha, Upma, Tea/Coffee"],["Lunch","Veg Thali, Dal Rice, Chapati Sabzi"],["Snacks","Sandwich, Samosa, Vada Pav"],["Beverages","Tea, Coffee, Cold Drinks, Lassi"]]
  },
  // UPDATE WITH ACTUAL COLLEGE DATA
  library: {
    hours: "Mon–Sat, 09:00 AM – 05:00 PM (sample)", location: "Library block (confirm with college)",
    services: ["Book issue and return","Reading hall","Digital resources / e-journals","Photocopy and printing","Previous-year question papers"],
    rules: ["Carry your ID card to the library","Silence must be maintained","Late returns may attract a fine","Do not damage or mark books"]
  },
  // UPDATE WITH ACTUAL COLLEGE DATA
  fees: {
    steps: ["Visit the Accounts Office with your ID card","Collect the fee slip or invoice","Pay by cash, DD or the online option if enabled by the college","Keep the receipt for exams and scholarships"],
    note: "Fee amounts and deadlines are not listed here. Check the official notice or contact the Accounts Office."
  },
  wifi: {steps:["Select the campus Wi-Fi network","Log in with your student ID and password issued by the IT department","If login fails, contact the IT helpdesk"], note:"Network name and credentials: UPDATE WITH ACTUAL COLLEGE DATA"},
  idcard: {steps:["New card: apply at the office with your admission receipt and a photo","Lost card: report it to the office, submit a written application and pay the duplicate fee","Carry the ID card on campus at all times"], note:"Duplicate fee and processing time: UPDATE WITH ACTUAL COLLEGE DATA"},
  hostel: {text:"Hostel information is available through the college office or the hostel warden. Facilities, availability and fees should be confirmed with the administration.", steps:["Collect the hostel application form from the office","Submit it with required documents","Wait for the allotment list"]},
  exam: {text:"Exam and internal assessment dates are published on the notice board and in the Notices section.", tips:["Check hall ticket requirements with the exam cell","Keep ID card with you during exams","Final dates: UPDATE WITH ACTUAL COLLEGE DATA"]},
  attendance: {text:"Many universities require a minimum of 75% attendance to appear for exams. Confirm the exact rule with your department.", tips:["Check attendance with your class teacher","Submit medical certificates for long absences"]},
  contact: {name:"Dr. D.Y. Patil School Of Science & Technology, Pune", address:"Pune, Maharashtra (UPDATE WITH FULL ADDRESS)", phone:"+91-XXXXXXXXXX", email:"info@example.edu", hours:"Mon–Sat, 09:00 AM – 05:00 PM"}
};

/* ---------- 2) INTENT ENGINE ----------
   Each intent has weighted keywords. Multi-word keys are matched as phrases. */
const INTENTS = {
  timetable:{label:"Timetable", words:{timetable:4,"time table":4,schedule:3,lecture:2,class:2,classes:2,period:1,today:1,when:0.5},
    related:["What is today's timetable?","Who teaches Python?","What is the attendance requirement?"]},
  faculty:{label:"Faculty Information", words:{faculty:4,teacher:3,professor:3,teach:3,teaches:3,hod:3,mentor:2,who:1,staff:2,"class teacher":4},
    related:["Who is my class teacher?","Who teaches Python?","How do I contact the college?"]},
  notices:{label:"Notices", words:{notice:4,notices:4,announcement:3,circular:3,news:2,latest:1,update:1,"notice board":4},
    related:["Are there any upcoming events?","What are the exam dates?","How do I pay my fees?"]},
  events:{label:"Events", words:{event:4,events:4,fest:3,seminar:2,workshop:3,upcoming:2,competition:2,function:1},
    related:["What are the latest notices?","What is today's canteen menu?","Where can I find my timetable?"]},
  canteen:{label:"Canteen", words:{canteen:4,menu:3,food:3,lunch:2,breakfast:2,snack:2,snacks:2,cafeteria:4,eat:2,tea:1,coffee:1},
    related:["What are the canteen timings?","What are the library timings?","Are there any upcoming events?"]},
  library:{label:"Library", words:{library:4,book:2,books:2,borrow:3,issue:1,reading:2,journal:2,timings:1.5,timing:1.5,open:1,opens:1,"digital resources":3},
    related:["What are the library rules?","Can I access digital resources?","Where is the library?"]},
  fees:{label:"Fees", words:{fee:4,fees:4,pay:2,payment:3,tuition:3,receipt:2,scholarship:2,challan:3,due:1,"pay my fees":3},
    related:["What are the latest notices?","How can I contact the college?","I lost my ID card"]},
  wifi:{label:"Wi-Fi", words:{wifi:4,"wi-fi":4,"wi fi":4,internet:3,network:2,password:2,connect:2,wireless:3},
    related:["I lost my ID card","How do I report a complaint?","What are the library timings?"]},
  idcard:{label:"ID Card", words:{"id card":5,idcard:5,identity:3,card:2,lost:2,duplicate:3,"student id":4},
    related:["How can I connect to campus Wi-Fi?","How do I pay my fees?","How do I report a complaint?"]},
  hostel:{label:"Hostel", words:{hostel:5,accommodation:3,room:1,warden:3,stay:2,dormitory:3,boarding:2},
    related:["How do I pay my fees?","How can I contact the college?","What is today's canteen menu?"]},
  complaint:{label:"Complaint / Support", words:{complaint:5,complain:4,report:3,problem:2,issue:1.5,grievance:4,help:1,support:2,"file a complaint":4},
    related:["How can I contact the college?","I lost my ID card","How can I connect to campus Wi-Fi?"]},
  exam:{label:"Examination", words:{exam:4,exams:4,examination:4,"hall ticket":4,result:3,results:3,test:2,"internal assessment":4,date:1,dates:1,marks:2},
    related:["What is the attendance requirement?","What are the latest notices?","Where can I find my timetable?"]},
  attendance:{label:"Attendance", words:{attendance:5,attend:3,present:1,absent:3,absence:3,shortage:3,"75":2,percent:1,requirement:1},
    related:["What are the exam dates?","Who is my class teacher?","Where can I find my timetable?"]},
  contact:{label:"College Contact", words:{contact:4,phone:3,email:3,address:3,call:2,office:2,reach:2,location:1.5,where:0.5,number:2},
    related:["How do I report a complaint?","Who is my class teacher?","How do I pay my fees?"]}
};
const CONFIDENCE_THRESHOLD = 40;
const STOP = new Set("a an the is are am of to for in on at my me i can do does how what whats which please tell about any there be it and or".split(" "));

// Basic text normalisation: lowercase, remove punctuation, light stemming.
function normalize(text){ return text.toLowerCase().replace(/[^a-z0-9\s'-]/g," ").replace(/\s+/g," ").trim(); }
function stem(w){ return w.length>4 ? w.replace(/(ing|es|s)$/,"") : w; }
function tokenize(text){ return normalize(text).split(" ").filter(w=>w && !STOP.has(w)).map(stem); }

// Score every intent, then convert the best score into a confidence %.
function analyze(text){
  const norm = normalize(text), tokens = tokenize(text);
  const scores = Object.entries(INTENTS).map(([id,intent])=>{
    let score = 0;
    for(const [key,weight] of Object.entries(intent.words)){
      if(key.includes(" ")||key.includes("-")){ if(norm.includes(key)) score += weight; }   // phrase
      else if(tokens.includes(stem(key))) score += weight;                                  // single keyword
    }
    return {id,score};
  }).sort((a,b)=>b.score-a.score);
  const best = scores[0], second = scores[1].score;
  if(best.score===0) return {intent:null,confidence:0};
  const strength = best.score/(best.score+2);                 // more matched keywords = higher
  const clarity = 0.75 + 0.25*(1-second/best.score);          // a close runner-up lowers it
  const confidence = Math.min(98, Math.round(strength*clarity*105));
  return {intent: confidence>=CONFIDENCE_THRESHOLD ? best.id : null, confidence, guess:best.id};
}

const li = arr => "<ul class='clean'>"+arr.map(x=>`<li>${x}</li>`).join("")+"</ul>";
const fmtDate = d => new Date(d+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});
const todayClasses = () => KB.timetable.days[new Date().getDay()] || [];

// Answer builders: each reads the knowledge base and may use details from the question.
const ANSWERS = {
  timetable:()=>{ const c=todayClasses(); return c.length
    ? `Here is today's timetable (${KB.timetable.course}):`+li(c.map(r=>`${r[0]} – ${r[1]} (${r[2]})`))+"You can see the full week in the Timetable section."
    : "There are no classes scheduled today. You can see the full week in the Timetable section."; },
  faculty:(q)=>{ const n=normalize(q);
    if(n.includes("class teacher")){ const f=KB.faculty.find(x=>x.classTeacher); return `Your class teacher is <b>${f.name}</b> (${f.dept}). Contact: ${f.contact}`; }
    const f=KB.faculty.find(x=>x.keys.some(k=>n.includes(k)));
    return f ? `<b>${f.subject}</b> is taught by <b>${f.name}</b> (${f.dept}). Contact: ${f.contact}`
             : "Faculty details are in the Faculty section. Try asking about a subject, for example “Who teaches Python?”"; },
  notices:()=>"Latest notices:"+li(KB.notices.slice(0,3).map(n=>`<b>${n.title}</b> (${fmtDate(n.date)})`)),
  events:()=>"Upcoming events:"+li(KB.events.map(e=>`<b>${e.name}</b> – ${fmtDate(e.date)}, ${e.location}`)),
  canteen:()=>"Today's canteen menu:"+li(KB.canteen.menu.map(m=>`<b>${m[0]}:</b> ${m[1]}`))+`Canteen timing: ${KB.canteen.timing}`,
  library:(q)=>{ const n=normalize(q); const L=KB.library;
    if(n.includes("rule")) return "Library rules:"+li(L.rules);
    if(n.includes("digital")||n.includes("journal")) return "Digital resources and e-journals are listed among the library services:"+li(L.services);
    if(n.includes("where")) return `The library is located at: ${L.location}.`;
    return `Library timings: <b>${L.hours}</b>.<br>Services:`+li(L.services); },
  fees:()=>"To pay your college fees:"+li(KB.fees.steps)+KB.fees.note,
  wifi:()=>"To connect to campus Wi-Fi:"+li(KB.wifi.steps)+KB.wifi.note,
  idcard:()=>"ID card help:"+li(KB.idcard.steps)+KB.idcard.note,
  hostel:()=>KB.hostel.text+li(KB.hostel.steps),
  complaint:()=>"You can report a problem from the Complaints section. Fill in your name, category, priority and description, and it will be recorded.",
  exam:()=>KB.exam.text+li(KB.exam.tips),
  attendance:()=>KB.attendance.text+li(KB.attendance.tips),
  contact:()=>{ const c=KB.contact; return `<b>${c.name}</b><br>${c.address}<br>Phone: ${c.phone}<br>Email: ${c.email}<br>Office hours: ${c.hours}`; }
};

// Main entry: question text in, structured reply out.
function respond(text){
  const r = analyze(text);
  if(!r.intent) return {
    html:"I'm not completely sure what you're asking. Could you try asking about timetable, faculty, fees, library, hostel, events, notices, Wi-Fi, ID card, or complaints?",
    label:null, confidence:r.confidence,
    related:["What are the latest notices?","Where can I find my timetable?","How do I pay my fees?"]};
  return {html:ANSWERS[r.intent](text), label:INTENTS[r.intent].label, confidence:r.confidence, related:INTENTS[r.intent].related};
}

/* ---------- 3) VIEWS ---------- */
const NAV = [
  ["dashboard","🏠","Dashboard"],["assistant","✨","AI Assistant"],["timetable","📅","Timetable"],["faculty","👩‍🏫","Faculty"],
  ["notices","📢","Notices"],["events","🎉","Events"],["canteen","🍽️","Canteen"],["library","📚","Library"],
  ["fees","💳","Fees"],["services","🛎️","Student Services"],["complaints","📝","Complaints"],["settings","⚙️","Settings"]
];
const QUICK = [["timetable","📅","Timetable","Today's classes"],["faculty","👩‍🏫","Faculty","Teachers & subjects"],["notices","📢","Notices","Latest updates"],
  ["events","🎉","Events","What's coming up"],["canteen","🍽️","Canteen","Today's menu"],["library","📚","Library","Hours & rules"],
  ["fees","💳","Fees","How to pay"],["services","📶","Wi-Fi","Get connected"],["services","🪪","ID Card","Apply or replace"],
  ["services","🏠","Hostel","Accommodation"],["complaints","📝","Complaints","Report a problem"]];
const SUGGESTIONS = ["What are today's notices?","Where can I find my timetable?","What are the library timings?","How can I pay my fees?","Who teaches Python?","What events are coming up?","What is today's canteen menu?","How do I report a complaint?"];

const getComplaints = () => { try{ return JSON.parse(localStorage.getItem("scaComplaints"))||[]; }catch(e){ return []; } };
const pendingCount = () => getComplaints().filter(c=>c.status==="Pending").length;
const pageHead = (t,s) => `<div class="mt-0"><h2 style="font-size:1.3rem;margin-bottom:2px">${t}</h2><p class="muted" style="margin-bottom:16px">${s}</p></div>`;
const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let selectedDay = new Date().getDay() || 1;

const VIEWS = {
  dashboard:()=>`
    <div class="card welcome"><h2>Welcome to Smart Campus Assistant</h2><p>Your digital campus companion at Dr. D.Y. Patil School Of Science &amp; Technology, Pune.</p>
      <button class="btn mt" data-go="assistant">✨ Start chatting</button></div>
    <div class="grid g4 mt">
      <div class="card stat"><div class="ico">📅</div><div><b>${todayClasses().length}</b><span class="muted">Today's classes</span></div></div>
      <div class="card stat"><div class="ico">📢</div><div><b>${KB.notices.length}</b><span class="muted">New notices</span></div></div>
      <div class="card stat"><div class="ico">🎉</div><div><b>${KB.events.length}</b><span class="muted">Upcoming events</span></div></div>
      <div class="card stat"><div class="ico">📝</div><div><b>${pendingCount()}</b><span class="muted">Pending complaints</span></div></div>
    </div>
    <h2 class="mt">Quick actions</h2>
    <div class="grid g4">${QUICK.map(q=>`<button class="card action" data-go="${q[0]}"><div class="ico">${q[1]}</div><b>${q[2]}</b><span>${q[3]}</span></button>`).join("")}</div>
    <div class="card mt"><h2>Try asking</h2><div class="related" style="margin:0">${SUGGESTIONS.slice(0,5).map(s=>`<button class="chip" data-ask="${s}">${s}</button>`).join("")}</div></div>`,

  assistant:()=>`${pageHead("Smart Campus AI","Ask me anything about your campus.")}<div id="chatMount"></div>`,

  timetable:()=>{ const rows=KB.timetable.days[selectedDay]||[];
    return pageHead("Timetable",KB.timetable.course+" – sample data")+
    `<div class="tabs">${[1,2,3,4,5,6].map(d=>`<button class="tab ${d===selectedDay?"active":""}" data-day="${d}">${DAYS[d]}</button>`).join("")}</div>
     <div class="card table-wrap"><table><tr><th>Time</th><th>Subject</th><th>Room</th><th>Faculty</th></tr>
     ${rows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join("")}</table></div>`; },

  faculty:()=>pageHead("Faculty","Sample directory – UPDATE WITH ACTUAL COLLEGE DATA")+
    `<div class="grid g3">${KB.faculty.map(f=>`<div class="card"><h3>${f.name}</h3><p class="muted">${f.dept}</p><p class="mt" style="margin-top:10px"><span class="tag">${f.subject}</span></p><p class="muted" style="margin-top:10px">✉️ ${f.contact}</p></div>`).join("")}</div>`,

  notices:()=>pageHead("Notices","Latest announcements")+
    `<div class="grid g2">${KB.notices.map(n=>`<div class="card"><span class="tag">${n.category}</span> <span class="muted">${fmtDate(n.date)}</span><h3 style="margin:8px 0 4px">${n.title}</h3><p class="muted">${n.text}</p></div>`).join("")}</div>`,

  events:()=>pageHead("Events","Upcoming campus events")+
    `<div class="grid g3">${KB.events.map(e=>`<div class="card"><h3>${e.name}</h3><p class="muted">📅 ${fmtDate(e.date)}<br>📍 ${e.location}</p><p style="margin-top:8px">${e.text}</p></div>`).join("")}</div>`,

  canteen:()=>pageHead("Canteen","Today's menu · "+KB.canteen.timing)+
    `<div class="grid g2">${KB.canteen.menu.map(m=>`<div class="card"><h3>${m[0]}</h3><p class="muted">${m[1]}</p></div>`).join("")}</div>`,

  library:()=>{ const L=KB.library; return pageHead("Library","Hours, services and rules")+
    `<div class="grid g3"><div class="card"><h3>Opening hours</h3><p class="muted">${L.hours}</p><p class="muted" style="margin-top:6px">📍 ${L.location}</p></div>
     <div class="card"><h3>Services</h3>${li(L.services)}</div><div class="card"><h3>Rules</h3>${li(L.rules)}</div></div>`; },

  fees:()=>pageHead("Fees","General guidance for paying college fees")+
    `<div class="card"><h3>How to pay</h3>${li(KB.fees.steps)}<p class="muted">${KB.fees.note}</p></div>`,

  services:()=>{ const info=[["📶 Wi-Fi",li(KB.wifi.steps)+KB.wifi.note],["🪪 ID card",li(KB.idcard.steps)+KB.idcard.note],["🏠 Hostel",KB.hostel.text+li(KB.hostel.steps)],
      ["📝 Examination",KB.exam.text+li(KB.exam.tips)],["✅ Attendance",KB.attendance.text+li(KB.attendance.tips)],
      ["☎️ College contact",`${KB.contact.address}<br>Phone: ${KB.contact.phone}<br>Email: ${KB.contact.email}<br>${KB.contact.hours}`]];
    return pageHead("Student Services","Wi-Fi, ID card, hostel, exams, attendance and contacts")+
      `<div class="grid g3">${info.map(i=>`<div class="card"><h3>${i[0]}</h3><div class="muted" style="margin-top:6px">${i[1]}</div></div>`).join("")}</div>`; },

  complaints:()=>{ const list=getComplaints().slice().reverse();
    return pageHead("Complaints","Report a problem. Complaints are saved in this browser only (localStorage).")+
    `<div class="grid g2"><div class="card"><div id="complaintMsg"></div>
      <form id="complaintForm" novalidate>
        <div class="field"><label for="cName">Student name</label><input id="cName" required></div>
        <div class="field"><label for="cCat">Category</label><select id="cCat"><option>Academics</option><option>Facilities</option><option>Library</option><option>Canteen</option><option>Wi-Fi / IT</option><option>Hostel</option><option>Other</option></select></div>
        <div class="field"><label for="cPri">Priority</label><select id="cPri"><option>Low</option><option selected>Medium</option><option>High</option></select></div>
        <div class="field"><label for="cDesc">Description</label><textarea id="cDesc" rows="4" required></textarea></div>
        <button class="btn primary" type="submit">Submit complaint</button></form></div>
      <div class="card"><h3>Your submitted complaints</h3>${list.length?list.map(c=>`<div style="padding:10px 0;border-bottom:1px solid var(--line)"><span class="tag ${c.priority.toLowerCase()}">${c.priority}</span> <b>${c.category}</b> <span class="muted">· ${c.status} · ${c.date}</span><p class="muted">${c.name}: ${c.description.replace(/</g,"&lt;")}</p></div>`).join(""):'<p class="muted" style="margin-top:8px">Nothing submitted yet. Use the form to report a problem.</p>'}</div></div>`; },

  settings:()=>pageHead("Settings","Manage data stored in this browser")+
    `<div class="card"><h3>Chat</h3><p class="muted">Remove all messages from the AI assistant.</p><button class="btn mt" data-action="clearChat">Clear chat history</button></div>
     <div class="card mt"><h3>Complaints</h3><p class="muted">Delete complaints saved in this browser.</p><button class="btn danger mt" data-action="clearComplaints">Delete saved complaints</button></div>
     <div class="card mt"><h3>About</h3><p class="muted">Smart campus AI assistant: an AI-powered campus question classifier running entirely in your browser. It uses keyword scoring over the campus knowledge base, not a large language model.</p></div>`
};

/* ---------- 4) CHAT ---------- */
let chatBox = null;
const timeNow = () => new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"});

function buildChat(){
  chatBox = document.createElement("div");
  chatBox.className = "card chat";
  chatBox.innerHTML = `
    <div class="chat-head"><div class="avatar">✨</div><div class="grow"><b>Smart Campus AI</b><br><span class="status-dot">🟢 AI Assistant Online</span> <span class="muted">· Powered by Campus Knowledge Base</span></div>
      <button class="btn" data-action="clearChat">Clear chat</button></div>
    <div class="messages" id="messages" aria-live="polite"></div>
    <div class="suggest">${SUGGESTIONS.map(s=>`<button class="chip" data-ask="${s}">${s}</button>`).join("")}</div>
    <form class="chat-input" id="chatForm"><input id="chatInput" placeholder="Ask about timetable, fees, library…" autocomplete="off" aria-label="Your question"><button class="btn primary" type="submit">Send</button></form>`;
  chatBox.querySelector("#chatForm").addEventListener("submit",e=>{ e.preventDefault(); const i=chatBox.querySelector("#chatInput"); const t=i.value.trim(); if(t){ i.value=""; sendMessage(t); } });
  greet();
}
function addMessage(who,html){
  const box = chatBox.querySelector("#messages"), el = document.createElement("div");
  el.className = "msg "+who;
  el.innerHTML = `<div class="avatar">${who==="bot"?"✨":"🧑"}</div><div class="bubble">${html}<span class="time">${timeNow()}</span></div>`;
  box.appendChild(el); box.scrollTop = box.scrollHeight; return el;
}
function greet(){
  addMessage("bot","Hi! I'm the Smart Campus AI for Dr. D.Y. Patil School Of Science &amp; Technology. Ask me about your timetable, faculty, fees, library, events and more.");
}
function sendMessage(text){
  const box = chatBox.querySelector("#messages");
  addMessage("user", text.replace(/</g,"&lt;"));
  const typing = addMessage("bot",'<span class="typing"><span></span><span></span><span></span></span>');
  setTimeout(()=>{
    const r = respond(text);
    const meta = r.label ? `<div class="meta">Intent: <b>${r.label}</b> · Confidence: <b>${r.confidence}%</b></div>` : "";
    const rel = `<div class="related">You may also ask:${r.related.map(q=>`<button class="chip" data-ask="${q}">${q}</button>`).join("")}</div>`;
    typing.remove(); addMessage("bot", meta+r.html+rel); box.scrollTop = box.scrollHeight;
  }, 650);
}
function askAssistant(text){ if(currentView!=="assistant") showView("assistant"); sendMessage(text); }

/* ---------- 5) APP ---------- */
let currentView = "dashboard";
function showView(id){
  currentView = id;
  document.getElementById("view").innerHTML = VIEWS[id]();
  document.getElementById("pageTitle").textContent = NAV.find(n=>n[0]===id)[2];
  document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.go===id));
  if(id==="assistant"){ if(!chatBox) buildChat(); document.getElementById("chatMount").appendChild(chatBox); chatBox.querySelector("#chatInput").focus(); }
  if(id==="complaints") document.getElementById("complaintForm").addEventListener("submit",submitComplaint);
  closeMenu(); window.scrollTo(0,0);
}
function submitComplaint(e){
  e.preventDefault();
  const name=document.getElementById("cName").value.trim(), desc=document.getElementById("cDesc").value.trim(), msg=document.getElementById("complaintMsg");
  if(!name||!desc){ msg.innerHTML='<div class="toast" style="background:#fee2e2;color:#991b1b">Enter your name and a description before submitting.</div>'; return; }
  const list=getComplaints();
  list.push({id:Date.now(),name,category:document.getElementById("cCat").value,priority:document.getElementById("cPri").value,description:desc,status:"Pending",date:new Date().toLocaleDateString("en-IN")});
  try{ localStorage.setItem("scaComplaints",JSON.stringify(list)); }catch(err){}
  showView("complaints");
  document.getElementById("complaintMsg").innerHTML='<div class="toast">Complaint submitted. Reference #'+list[list.length-1].id.toString().slice(-6)+'</div>';
}
const openMenu = () => { document.getElementById("sidebar").classList.add("open"); document.getElementById("backdrop").classList.add("show"); };
const closeMenu = () => { document.getElementById("sidebar").classList.remove("open"); document.getElementById("backdrop").classList.remove("show"); };

function initApp(){
  document.getElementById("nav").innerHTML = NAV.map(n=>`<button class="nav-item" data-go="${n[0]}"><span>${n[1]}</span>${n[2]}</button>`).join("");
  document.getElementById("sbDate").textContent = new Date().toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"short"});
  const h=new Date().getHours(), open=h>=9&&h<17&&new Date().getDay()!==0;
  document.getElementById("sbLibrary").textContent = "📚 Library: "+(open?"Open now":"Closed now");
  document.getElementById("menuBtn").addEventListener("click",openMenu);
  document.getElementById("backdrop").addEventListener("click",closeMenu);
  document.addEventListener("click",e=>{
    const t=e.target.closest("[data-go],[data-ask],[data-day],[data-action]"); if(!t) return;
    if(t.dataset.go) showView(t.dataset.go);
    else if(t.dataset.ask) askAssistant(t.dataset.ask);
    else if(t.dataset.day){ selectedDay=+t.dataset.day; showView("timetable"); }
    else if(t.dataset.action==="clearChat"){ if(chatBox){ chatBox.querySelector("#messages").innerHTML=""; greet(); } if(currentView==="settings") t.textContent="Chat cleared ✓"; }
    else if(t.dataset.action==="clearComplaints"){ localStorage.removeItem("scaComplaints"); t.textContent="Complaints deleted ✓"; }
  });
  showView("dashboard");
}
if(typeof document!=="undefined") initApp();
if(typeof module!=="undefined") module.exports = {analyze,respond};
