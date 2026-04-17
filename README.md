# 💎 LuxeStore - Premium E-Commerce Platform

LabelByPooja is a modern, high-end e-commerce application built with **React** and **Vite**. It features a sophisticated "Midnight Sapphire" design system with glassmorphism effects, smooth animations, and a seamless user experience.

![Premium UI Showcase](https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200)

## ✨ Features

- **Premium Design System**: Sophisticated Midnight Sapphire palette with glassmorphism (frosted glass) effects.
- **Dynamic Theming**: Seamless switching between Light and Dark modes with persistent state.
- **Advanced Product Catalog**:
  - Filter by Category (Fashion, Electronics, Accessories).
  - Price Range filtering (Rupees ₹).
  - Search functionality with real-time feedback.
  - Smooth Pagination.
- **Wishlist & Cart Management**:
  - Integrated with React Context API for global state.
  - Animated badges for real-time item tracking.
  - Premium checkout summary and empty-state handling.
- **Fluid Animations**: High-end page transitions and hover effects powered by **Framer Motion**.
- **Iconography**: Clean and modern icons provided by **Lucide React**.
- **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile viewing.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd ecommerce-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS (Custom Variable-based Design System)
- **Routing**: [React Router Dom 7](https://reactrouter.com/)

## 📂 Project Structure

```text
src/
├── components/     # Reusable UI components (Navbar, Cards, Filters)
├── context/        # Global state management (StoreContext)
├── pages/          # Full page views (Home, Cart, Wishlist)
├── App.jsx         # Global routing and page transition handling
├── index.css       # Global design tokens and CSS variables
└── App.css         # Component-specific premium styling
```

## 📜 Localization

The application is localized for the **Indian region**:
- Currency: Indian Rupee (₹)
- Number Formatting: `en-IN` (e.g., ₹1,50,000)

---

Developed with ❤️ by Pooja Tiwari
