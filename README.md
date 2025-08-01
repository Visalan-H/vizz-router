# vizz-router

A simple, lightweight React router implementation for single-page applications.

[![npm version](https://img.shields.io/npm/v/vizz-router.svg?style=flat&color=black&labelColor=white)](https://www.npmjs.com/package/vizz-router)

## Installation

```bash
npm install vizz-router
```

## Features

- 🚀 Lightweight and simple
- 📱 Browser history support
- 🔄 Programmatic navigation
- 🎯 Route matching
- 🔗 Link components
- ⚡ Built with React hooks

## Basic Usage

```jsx
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from 'vizz-router';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}
```

## Components

### `<BrowserRouter>`
Provides routing context using browser history API.

### `<Routes>`
Container for route definitions.

### `<Route>`
Defines a route with a path and element to render.

```jsx
<Route path="/users/:id" element={<UserProfile />} />
```

### `<Link>`
Navigation component that updates the URL without page refresh.

```jsx
<Link to="/about">Go to About</Link>
```

### `<Navigate>`
Programmatically navigate to a different route.

```jsx
<Navigate to="/login" replace />
```

## Hooks

### `useRouter()`
Access the current router context.

### `useNavigate()`
Get the navigate function for programmatic navigation.

```jsx
import { useNavigate } from 'vizz-router';

function MyComponent() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/dashboard');
  };
  
  return <button onClick={handleClick}>Go to Dashboard</button>;
}
```

## Peer Dependencies

- React >= 16.8.0

## License

MIT © Visalan H

---

*Made with ❤️ and probably too much coffee ☕*

