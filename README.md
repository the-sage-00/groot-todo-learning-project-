# 🌱 Groot Todo - Modern Task Manager

A beautifully designed, modern To-Do List App built entirely using ReactJS and custom CSS. Unlike basic task apps, Groot Todo focuses on a clean, responsive UI and smooth UX with useful features like filtering, tagging, animations, and theme switching — all without any backend or localStorage.

![Groot Todo Preview](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.16.4-purple?logo=framer)

## ✨ Live Demo

🔗 **[View Live Demo](https://groot-todo.netlify.app/)**

## 📌 Core Features

| Feature | Description |
|---------|-------------|
| ✍️ **Add Tasks** | Add new tasks via a sleek input bar |
| ✅ **Mark as Complete** | Click checkboxes to strike-through tasks |
| 🗑️ **Delete Tasks** | Remove tasks with a smooth animation |
| 🏷️ **Tags/Categories** | Add task categories like "Work", "Study", etc. |
| 🔍 **Filter & Search** | Filter by tags or search by keywords |
| ☀️🌙 **Theme Switcher** | Light & Dark Mode toggle |
| 📊 **Task Stats** | See completed, pending, and total tasks |
| 🎨 **Smooth UI** | Stylish buttons, cards, and hover effects |
| 🎬 **Animations** | Entry/exit animations for tasks (using Framer Motion) |

## 💡 Why It's Better Than a Basic To-Do App

- **Modern Aesthetic**: Designed with a neumorphic/glassmorphic look and minimalist card UI
- **Component-Based Structure**: Each part of the app is modular and reusable
- **Live Filtering**: Real-time search and tag-based filters
- **No LocalStorage**: Keeps things simple and clean (ideal for beginners and demo apps)
- **Perfect Portfolio Project**: Looks and feels professional

## 🛠️ Tech Stack

- **ReactJS** (Hooks, JSX)
- **CSS** (Custom styling with glassmorphism effects)
- **React Icons** (for intuitive UI)
- **Framer Motion** (for smooth animations)
- **uuid** (for unique task IDs)

## 📁 Project Structure

```
groot-todo/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── TaskInput.jsx       # Input box for new tasks
│   │   ├── TaskItem.jsx        # Each task's display
│   │   ├── FilterBar.jsx       # Filter/search bar
│   │   ├── ThemeToggle.jsx     # Light/Dark mode switch
│   │   └── Stats.jsx           # Task stats component
│   ├── App.js                  # Main app layout & state
│   ├── index.js                # Renders App
│   └── App.css                 # Global styles
├── .gitignore
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rishikataria/groot-todo.git
   cd groot-todo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

## 🎯 How to Use

1. **Add Tasks**: Type your task in the input field and press Enter or click the + button
2. **Add Tags**: Click the tag icon to add categories to your tasks
3. **Complete Tasks**: Click the checkbox to mark tasks as complete
4. **Delete Tasks**: Click the trash icon to remove tasks
5. **Filter Tasks**: Use the search bar or filter dropdown to find specific tasks
6. **Switch Themes**: Click the sun/moon icon to toggle between light and dark modes
7. **View Stats**: Check the statistics cards to see your progress

## 🌟 Key Features Explained

### 🎨 Modern Design
- Glassmorphism effects with backdrop blur
- Smooth gradients and shadows
- Responsive design for all devices
- Beautiful color scheme with theme switching

### ⚡ Smooth Animations
- Framer Motion for fluid transitions
- Staggered animations for task lists
- Hover effects and micro-interactions
- Loading animations and state changes

### 🔍 Smart Filtering
- Real-time search functionality
- Tag-based filtering
- Quick filter buttons for common tags
- Combined search and filter capabilities

### 📊 Live Statistics
- Real-time task counting
- Progress bar with completion percentage
- Visual statistics cards
- Animated counters

## 🚀 Deployment

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `build` folder to Netlify
   - Or connect your GitHub repository for automatic deployments

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Deploy to GitHub Pages

1. **Add homepage to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/groot-todo"
   }
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy scripts to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## 👨‍💻 Built By

**Rishi Kataria**

- LinkedIn: [Rishi Kataria](https://www.linkedin.com/in/rishi-kataria-14998331b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)
- Instagram: [@_the_sage_00](https://www.instagram.com/_the_sage_00?igsh=MXFibnl4M2JkbTFwYQ==)

## 🙏 Acknowledgments

- React team for the amazing framework
- Framer Motion for smooth animations
- React Icons for beautiful icons
- The open-source community for inspiration

---

⭐ **Star this repository if you found it helpful!**

🔗 **Share this project on LinkedIn and other platforms!**
