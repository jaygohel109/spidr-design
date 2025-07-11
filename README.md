# 🌀 Spidr Design - Air Fryer Interest Form

A sleek, React-based form built for Spidr Design’s fictional air fryer landing page. This embedded widget captures user interest with intuitive input formatting, strong validation, and a design inspired by Spidr’s unique brand aesthetic.

> ⚠️ *Note: This form is part of a coding assessment and is not a real product.*

---

## 🚀 Live Demo

Check out the live version here:  
🔗 [https://spidr-design.netlify.app/](https://spidr-design.netlify.app/)

---

## ✨ Features

- **Responsive Design** – Mobile-first layout with clean grid structure  
- **Form Validation** – Real-time validation with descriptive error feedback  
- **Auto-Formatted PIN Field** – Formats `16-digit PIN` as `####-####-####-####` as you type  
- **Spidr-Inspired UI** – Dark, modern styling aligned with [spidr.design](https://spidr.design)  
- **Accessible** – Proper semantic labels, focus states, and keyboard support  
- **Submit Handling** – On submit, form data is logged to the console and a success message is shown

---

## 📝 Form Fields

1. **First Name** – required  
2. **Last Name** – required  
3. **Phone Number** – required, basic international validation  
4. **Email Address** – required, validated format  
5. **Guess the Air Fryer's Cost** – required, numeric only  
6. **Very, Very Secret Spidr PIN** – required, formatted with dashes (e.g. `1234-5678-9012-3456`)

---

## 🔧 Tech Stack

- **React 18** with TypeScript  
- **Tailwind CSS** for styling  
- **React Hook Form** for validation  
- **Lucide React** for iconography  
- **Vite** for fast dev + builds  

---

## 📁 Repository

GitHub:  
🔗 [https://github.com/jaygohel109/spidr-design](https://github.com/jaygohel109/spidr-design)

---

## 🛠️ Getting Started (Development)

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
git clone https://github.com/jaygohel109/spidr-design.git
cd spidr-design
npm install
npm run dev
```

Visit http://localhost:5173 to view the app in your browser.

---

### Build for Production

```bash
npm run build
```

---

## 🧪 Form Behavior
- All inputs are validated and styled with visual feedback
- Spidr PIN auto-formats as the user types
- On submission:
    - All input values are logged to the browser console
    - A browser alert thanks the user for their interest

---

## 🎨 Styling Notes

Color palette based on Spidr Design’s theme:

- **Primary**: `#1a1a1a` (deep charcoal)  
- **Secondary**: `#f5f5f5` (light gray)  
- **Accent**: `#3b82f6` (blue)  

Custom UI elements like the sidebar and form container mimic Spidr’s futuristic, tech-forward aesthetic.

---

## 📄 License

This project is developed solely for the **Spidr Design Coding Challenge** and is not intended for commercial use.