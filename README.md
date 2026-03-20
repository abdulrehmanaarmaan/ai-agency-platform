# Neural AI Agency Dashboard


A high-fidelity, modern dashboard interface built for AI-driven agencies. This project focuses on a "Neural" 
design system, featuring glassmorphism, fluid responsiveness, and robust client-side routing.


## 🚀 Live Demo
**https://ai-agency-platform-wheat.vercel.app**


## 🛠️ Technical Stack
- **Frontend:** React 19 / Next.js (Client-side Rendering)
- **Styling:** Tailwind CSS (Modern Glassmorphism & Bento Layouts)
- **Icons:** Lucide React
- **Routing:** React Router 7 (with nested error boundaries)
- **State Management:** React Hooks (useState, useEffect)


## ✨ Key Features & Technical Implementation


### 1. Hybrid Responsive Architecture
Instead of a standard horizontal scroll for data tables, I implemented a **Hybrid Layout** for the "Neural 
Team" section:
- **Desktop:** A high-density professional table with hover states and action triggers.
- **Mobile:** Automatically switches to a **Card-based UI** to maintain readability and touch-friendly 
targets on small devices.
- **Fix:** Solved complex flex-shrink issues in deep-nested layouts using `min-w-0` and `truncate` logic.


### 2. Intelligent Routing & UX
- **Nested 404 Handling:** Implemented a global catch-all and a nested wildcard route. This ensures that if 
a user navigates to an invalid path within the dashboard, the Sidebar and Header remain visible while the 
"Path Not Found" component renders in the view area.
- **Absolute Redirects:** Configured root-level navigation to ensure the app always initializes at the `/
dashboard/overview` state.


### 3. "Neural" Design System
- Developed a custom dark-mode aesthetic using `slate-950` and `emerald/purple` accent glows.
- Utilized **Glassmorphism** (backdrop-blur) and high-end typography spacing to simulate a premium AI tool 
environment.
- Integrated `animate-in` fade effects for smooth component mounting.


## 📦 Installation & Setup


1. **Clone the repository:**
   ```bash
   git clone https://github.com/abdulrehmanaarmaan/ai-agency-platform