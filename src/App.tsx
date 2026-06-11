import Hero from "./components/Hero";
import About from "./components/About";
import CTA from "./components/CTA";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <CTA />
    </main>
  );
}

export default App;