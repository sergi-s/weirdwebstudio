import './App.css'
import Header from './components/Header'
import MyParticles from './components/MyParticles';

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="main">
          <h2>main</h2>
          {/* Add your portfolio content here */}
        </section>

        <section id="portfolio">
          <h2>Portfolio</h2>
          {/* Add your portfolio content here */}
        </section>

        <section id="about">
          <h2>About Us</h2>
          {/* Add your about us content here */}
        </section>

        <section id="services">
          <h2>Services</h2>
          {/* Add your services content here */}
        </section>

        <section id="contact">
          <h2>Contact</h2>
          {/* Add your contact form or contact information here */}
        </section>

        <MyParticles />
      </main>
    </>
  );
}

export default App;
