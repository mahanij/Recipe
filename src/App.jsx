import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviwes";


function App() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <Reviews />
    </div>
  );
}

export default App;
