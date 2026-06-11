export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between">
          <h1 className="font-bold text-lg">
            Mahreen<span className="text-blue-400">.</span>
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">
              Tentang
            </a>

            <a href="#cta" className="hover:text-white">
              Daftar
            </a>
          </div>

          <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Join
          </button>
        </nav>
      </div>
    </header>
  );
}