import Header from './components/Header'
import MyParticles from './components/MyParticles';
import Navbar from './components/Navbar';
// import MyParticles from './components/MyParticles';

function App() {
  return (

    <div>
      <MyParticles />
      <Navbar />
      {/* <Header /> */}
      <div className="text-center text-white">
        <h1 className="text-3xl font-bold mb-4">SITES THAT DELIVER GOALS FOR YOUR BUSINESS</h1>
        <p className="text-sm">Creation of stylish, concise sites with a clear structure, convenient navigation, and high loading speed</p>
      </div>
    </div>
  );
}

export default App;