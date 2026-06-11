import Hero from "./components/Hero";
import About from "./components/About";
import CTA from "./components/CTA";

function App() {
  return (
    <main className="bg-slate-950 text-white overflow-hidden">
      <Hero />
      <About />
      <CTA />
    </main>
  );
}

export default App;