# 🎓 Smart Campus Virtual Assistant

**Dr. D.Y. Patil School Of Science & Technology, Pune**

A student-friendly campus dashboard with a built-in AI chatbot. Students can ask everyday college questions and get instant answers about timetables, faculty, fees, the library and more. It runs fully in the browser, with no backend, database or API keys.

---

## ✨ Features

### 🤖 Smart Campus AI Chatbot
- Understands questions in many different wordings, not just one fixed sentence
- Detects the **intent** of each question (for example Library, Fees, Hostel) and shows a **confidence score**
- Gives **related follow-up questions** after every answer
- Suggests helpful topics when it is unsure, instead of a plain "I don't understand"
- Chat window with bot and user avatars, timestamps, a typing animation, Enter-to-send, a clear-chat button and a scrollable history
- One-click **suggested questions** that send automatically
- Status indicator: 🟢 AI Assistant Online · Powered by Campus Knowledge Base

### 📊 Dashboard
- Welcome card for the institute
- Live statistics: today's classes, new notices, upcoming events and pending complaints
- Clickable quick-action cards for Timetable, Faculty, Notices, Events, Canteen, Library, Fees, Wi-Fi, ID Card, Hostel and Complaints
- Dark status bar showing the institute name, today's date and library open/closed status

### 📚 Campus Information Pages
| Page | What students can see |
|------|----------------------|
| **Timetable** | Day-wise class schedule with time, subject, room and faculty |
| **Faculty** | Faculty cards with name, department, subject and contact |
| **Notices** | Notice cards with title, date, category and short description |
| **Events** | Upcoming events with date, location and details |
| **Canteen** | Today's menu and canteen timings |
| **Library** | Opening hours, services and rules |
| **Fees** | Step-by-step guidance on paying college fees |
| **Student Services** | Wi-Fi, ID card, hostel, examination, attendance and college contact info |

### 📝 Complaint System
- Simple form with student name, category, priority and description
- Confirmation message with a reference number after submitting
- Complaints are saved in the browser using `localStorage`
- Submitted complaints are listed with their priority and status

### 🎨 Design and Usability
- Modern, clean dashboard with rounded cards and a sidebar
- Fully **responsive**: the sidebar turns into a hamburger menu on mobile, and cards and tables adapt to small screens
- Keyboard-friendly, with visible focus states
- Settings page to clear saved chat and complaints

### 🔓 Simple to Host and Edit
- Pure **HTML, CSS and JavaScript**, so there is nothing to install
- Works by opening `index.html`, and deploys free on **GitHub Pages**
- All campus data is kept in one place in `script.js` and marked `UPDATE WITH ACTUAL COLLEGE DATA`, so it is easy to replace

---

## 💬 Example Questions

- What is today's timetable?
- Who teaches Python?
- What are the library timings?
- How do I pay my fees?
- How can I connect to campus Wi-Fi?
- I lost my ID card
- Is hostel available?
- I want to file a complaint
- What are the exam dates?
- What is the attendance requirement?

---

## 📁 Project Structure

```text
smart-campus-assistant/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── icons/
        └── logo.svg
```
