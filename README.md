# VijayXcart

A modern, single-page React e-commerce template showcasing a clean design, smooth scrolling, and dynamic product listings.

## Preview

![VijayXcart Preview](/Preview.png)

## Features

- **Modern Design:** Sleek glass-morphic navbar, full-screen hero banner, and elevated product cards.
- **Responsive Layout:** Uses CSS Grid and Flexbox to adapt seamlessly from mobile to desktop.
- **Smooth Scrolling:** Anchor links scroll smoothly to their respective sections.
- **Dynamic Products:** Easily define and display products from a single array.
- **No Routing:** Single-page layout reduces complexity and improves performance.

## Demo

Live demo coming soon.

## Getting Started

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/Mahadevaprasad17/VijayXcart.git
cd VijayXcart

# Install dependencies
npm install
npm install react-router-dom

# Start the development server
npm start
```

Open http://localhost:3000 to view in the browser.

## Project Structure

```
src/
├── components/
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Product.jsx
│   └── Products.jsx
├── App.css
├── App.js
├── index.js
└── assets/
    └── hero.jpg (optional local hero image)

public/
└── index.html
```

## Code Files

### 1. `public/index.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../src/App.css">
  <title>React App</title>
</head>

<body>

  <div id="root"></div>

</body>

</html>
```

### 2. `src/index.js`

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './App.css';

createRoot(document.getElementById('root')).render(<App />);
```

### 3. `src/App.js`

```jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <section id="home" className="hero">
          <Hero />
        </section>
        <section id="products" className="section">
          <h2>Our Products</h2>
          <Products />
        </section>
      </main>
      <Footer />
    </div>
  );
}
```

### 4. `src/App.css`

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
}

body {
    font-family: 'Poppins';
    color: #333;
}

.app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.main {
    flex: 1;
    position: relative;
}

.nav {
    top: 0;
    width: 100%;
    height: 60px;
    background: #1a1a1a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 60px;
    z-index: 100;
}

.nav .logo {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: #f4f4f4;
    text-decoration: none;
}

.nav .links a {
    margin-left: 40px;
    font-weight: 500;
    color: #f4f4f4;
    text-decoration: none;
    position: relative;
}

.hero {
    height: 450px;
    background: url('https://zouk.co.in/cdn/shop/files/RK_Hp_banner-01.png?v=1751439924&width=2000') center/cover no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    padding: 0 20px;
}

.hero h1 {
    font-size: 3rem;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    margin-bottom: 10px;
}

.hero p {
    font-size: 1.2rem;
    max-width: 600px;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
}

.section {
    padding: 50px 20px 60px;
}

.section h2 {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-bottom: 40px;
    position: relative;
    display: flex;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 30px;
}

.card {
    border: 2px solid #1a1a1a;
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
}

.card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-bottom: 2px solid #1a1a1a;
}

.card-body {
    padding: 10px;
}

.card-body h3 {
    font-size: 1.1rem;
    margin-bottom: 8px;
    color: #1a1a1a;
}

.card-body .price {
    font-size: 1rem;
    font-weight: 600;
    color: #007BFF;
    margin-bottom: 12px;
}

.card-body button {
    padding: 10px 20px;
    background: #007BFF;
    color: #fff;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 500;
    transition: background .2s;
}

.footer {
    background: #1a1a1a;
    color: #ccc;
    text-align: center;
    padding: 20px;
    font-size: .9rem;
    margin-top: auto;
}

.footer a {
    color: #007BFF;
    text-decoration: none;
}
```

### 5. `src/components/Navbar.jsx`

```jsx
import React from 'react';

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="#home" className="logo">VijayXcart</a>
      <div className="links">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#footer">Contact</a>
      </div>
    </nav>
  );
}
```

### 6. `src/components/Hero.jsx`

```jsx
import React from 'react';

export default function Hero() {
  return (
    <>
    </>
  );
}
```

### 7. `src/components/Product.jsx`

```jsx
import React from 'react';

export default function Product({ name, price, img }) {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <div className="card-body">
        <h3>{name}</h3>
        <div className="price">{price}</div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
```

### 8. `src/components/Products.jsx`

```jsx
import React from 'react';
import Product from './Product';

const items = [
    { id: 1, name: '', price: '₹', img: '' },
    { id: 2, name: '', price: '₹', img: '' },
    { id: 3, name: '', price: '₹', img: '' },
    { id: 4, name: '', price: '₹', img: '' },
    { id: 5, name: '', price: '₹', img: '' },
    { id: 6, name: '', price: '₹', img: '' },
    { id: 7, name: '', price: '₹', img: '' },
    { id: 8, name: '', price: '₹', img: '' },
    { id: 9, name: '', price: '₹', img: '' },
    { id: 10, name: '', price: '₹', img: '' },
    { id: 11, name: '', price: '₹', img: '' },
    { id: 12, name: '', price: '₹', img: '' }
];

export default function Products() {
    return (
        <div className="grid">
            {items.map(p => <Product key={p.id} {...p} />)}
        </div>
    );
}
```

### 9. `src/components/Footer.jsx`

```jsx
import React from 'react';

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      © {new Date().getFullYear()} VijayXcart. All rights reserved.
    </footer>
  );
}
```

## Available Scripts

- `npm start` - Runs the app in development mode.
- `npm run build` - Builds the app for production.

## Dependencies

- React
- React DOM
- React Router DOM

## Customization

- **Fonts:** Configured to use Poppins from Google Fonts. Change via `public/index.html`.
- **Colors & Variables:** Modify CSS variables in `App.css` under `:root`.
- **Hero Image:** Replace the background URL in the `.hero` class or place a local image in `src/assets`.
- **Products:** Update the `items` array in `Products.jsx` with your own products.
