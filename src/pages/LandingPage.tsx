import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import CTA from "../components/CTA";

import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Aurora Background */}
      <div className="fixed inset-0 -z-50 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-175 h-175 bg-red-500/25 blur-[180px] rounded-full" />

        <div className="absolute top-[15%] -right-40 w-175 h-175 bg-blue-500/20 blur-[180px] rounded-full" />

        <div className="absolute -bottom-52 left-1/2 -translate-x-1/2 w-225 h-225 bg-violet-500/15 blur-[220px] rounded-full" />

        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-125 h-125 bg-white/10 blur-[150px] rounded-full" />
      </div>

      {/* Spotlight */}
      <div
        className="
          fixed
          inset-0
          -z-40
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)]
        "
      />

      {/* Grid */}
      <div
        className="
          fixed
          inset-0
          -z-30
          opacity-70
          bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-size-[50px_50px]
        "
      />

      {/* Decorative Rings */}
      <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 border border-white/5 rounded-full" />

        <div className="absolute top-32 right-20 w-96 h-96 border border-red-500/10 rounded-full" />

        <div className="absolute bottom-10 left-1/4 w-125 h-125 border border-blue-500/10 rounded-full" />
      </div>

      {/* Noise Overlay */}
      <div
        className="
          fixed
          inset-0
          -z-10
          opacity-[0.03]
          bg-[url('https://www.transparenttextures.com/patterns/noise.png')]
        "
      />

      {/* Content */}
      <Navbar />
      <Hero />
      <About />
      <CTA />

      <footer className="relative border-t border-white/10 backdrop-blur-xl">
  <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
    <div>
      <h3 className="font-bold text-lg">
        Mahreen Indonesia
      </h3>

      <p className="text-slate-400 text-sm mt-1">
        Berkarya untuk Indonesia melalui kreativitas dan teknologi.
      </p>
    </div>

    {/* Social Media */}
    <div className="flex items-center gap-4">
  <a
    href="#"
    className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition"
  >
    <FaInstagram size={18} />
  </a>

  <a
    href="#"
    className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition"
  >
    <FaTiktok size={18} />
  </a>

  <a
    href="#"
    className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition"
  >
    <FaLinkedinIn size={18} />
  </a>

  <a
    href="#"
    className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition"
  >
    <FaYoutube size={18} />
  </a>

  <a
    href="#"
    className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition"
  >
    <FaFacebookF size={18} />
  </a>
</div>

    <p className="text-sm text-slate-500 text-center md:text-right">
      © {new Date().getFullYear()} Mahreen Indonesia.
      <br />
      Empowering Indonesia's Future Creators.
    </p>
  </div>
</footer>
    </main>
  );
}