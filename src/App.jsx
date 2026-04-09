import React from 'react';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Button from './components/common/Button/Button';
import StatusCard from './components/status/StatusCard/StatusCard';
import NavLink from './components/navigation/NavLink/NavLink';

/**
 * Main Application Component
 * Demonstrates the implementation of all 4 Exercises.
 */
function App() {
  return (
    <div className="app-container">
      {/* Exercise 3: Implementation of Header with Brand Primary Color */}
      <Header />

      <main className="main-content">
        
        {/* Exercise 4: Implementation of Responsive Navigation Link */}
        <section>
          <h2>Exercise 4: Responsive Navigation</h2>
          <p>This link will hide on mobile screens (width &lt; 600px) and turn red on hover.</p>
          <nav style={{ padding: '10px 0' }}>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
        </section>

        {/* Exercise 1: Implementation of Button via Global CSS */}
        <section>
          <h2>Exercise 1: Global CSS Button</h2>
          <p>Style: Blue background, white text, 10px padding, 4px border-radius.</p>
          <Button onClick={() => alert('Button Clicked!')}>
            Click Me (Global CSS)
          </Button>
        </section>

        {/* Exercise 2: Implementation of StatusCard with Styled Components */}
        <section>
          <h2>Exercise 2: Dynamic StatusCard</h2>
          <p>Background color changes dynamically based on the 'type' prop.</p>
          <StatusCard type="success" message="Operation completed successfully!" />
          <StatusCard type="error" message="Something went wrong. Please try again." />
          <StatusCard type="warning" message="This is a default warning status." />
        </section>

      </main>

      {/* Exercise 3: Implementation of Footer with Brand Primary Color */}
      <Footer />
    </div>
  );
}

export default App;
