# 🌴 CeylonEscape | Premium Sri Lankan Travel & Adventures

[![Live Demo](https://img.shields.io/badge/Live-Demo-0e5f76?style=for-the-badge&logo=netlify)](https://ceylonescape-travels.netlify.app/)

A highly aesthetic, premium, and fully responsive travel website designed to showcase the pristine beauty of Sri Lanka. This is a 100% custom-built, modern web project featuring high-resolution AI-generated destination assets, smooth animations, glassmorphism, and native JavaScript interactions.

---

## ✨ Features

- **Premium Aesthetics**: Cohesive tropical ocean-sand color palette, elegant typography, and luxurious glassmorphic elements.
- **100% Responsive Layout**: Built with a mobile-first approach using **CSS Grid** and **Flexbox** for a seamless experience on smartphones, tablets, laptops, and 4K screens.
- **AI-Generated Visual Assets**: Rich high-resolution scenic images of popular destinations (Sigiriya, Ella, Mirissa, Yala) generated specifically for this brand.
- **Scroll Spy & Sticky Header**: Navigation dynamically adapts glassmorphic backgrounds on scroll and highlights the active section in the menu.
- **Interactive Booking Widget & Modal**: Dynamic date calculation, guest selectors, and simulated booking itineraries linked directly to a responsive inquiry modal.
- **Scroll Reveal Animations**: Fluid entry animations triggered as elements scroll into view using the native **Intersection Observer API**.
- **No-Dependency Local Server**: Built-in lightweight Node.js static server for instant local previews.

---

## 🛠️ Technology Stack

- **Markup:** Semantic HTML5
- **Styling:** Vanilla CSS3 (Custom properties, Grid, Flexbox, Keyframes)
- **Scripting:** Vanilla JavaScript (ES6+, DOM API, Intersection Observer)
- **Local Server:** Node.js (Built-in `http` & `fs` modules, zero npm dependencies)
- **Icons:** FontAwesome v6.4.0

---

## 📁 Project Structure

```text
├── images/                  # High-resolution visual assets
│   ├── hero_ella.png        # Ella Nine Arch Bridge (Hero Background)
│   ├── sigiriya.png         # Sigiriya Lion Rock Fortress
│   ├── mirissa.png          # Mirissa Tropical Surf Beach
│   └── yala.png             # Yala National Park Leopard
├── app.js                   # Client-side dynamic interaction logic
├── index.html               # Semantic markup and site skeleton
├── style.css                # Premium styling system, layouts, and animations
├── server.js                # Custom Node.js local file server
├── start.bat                # Windows launcher script for local hosting
├── github-setup.bat         # Automated Git repository publishing script
└── README.md                # Project documentation (You are here!)
```

---

## 💻 How to Run Locally

You can run this project in two ways:

### Method 1: Double-Click Launcher (Windows - Recommended)
1. Open the project folder.
2. Double-click **`start.bat`**.
3. It will automatically start the local web server and open the website in your default browser at **`http://localhost:3000`**.

### Method 2: Manual Node.js Execution
1. Open your terminal/command prompt in the project directory.
2. Run the following command:
   ```bash
   node server.js
   ```
3. Open your browser and navigate to **`http://localhost:3000`**.

---

## 🚀 Live Hosting & Deployment

This website is proudly hosted live at: **[https://ceylonescape-travels.netlify.app/](https://ceylonescape-travels.netlify.app/)**

### 1. Netlify Deployment Details
- **Hosting Platform:** Netlify (Free Static Hosting)
- **Live URL:** [https://ceylonescape-travels.netlify.app/](https://ceylonescape-travels.netlify.app/)
- **How to Update:** To deploy updates, simply drag-and-drop the updated files into the Netlify project console.

### 2. GitHub Pages Deployment (Optional Alternative)
1. Double-click **`github-setup.bat`** and paste your GitHub repository URL to push the code to GitHub.
2. On your GitHub repository, go to **Settings** -> **Pages**.
3. Under Build and Deployment -> Branch, select **`main`** and click **Save**.
4. Your site will be live on GitHub Pages under your repository URL.

---

## 📄 License & Ownership
This project is completely custom-made and exclusive. You have full ownership to customize, distribute, and host it as your own personal or commercial showcase.

---
*Created with 💚 for unforgettable journeys.*
