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
    <main className="relative min-h-screen overflow-hidden bg-transparent text-white">
      {/* Background Base */}
      <div className="fixed inset-0 -z-50 bg-slate-950" />

      {/* Aurora */}
      <div className="fixed inset-0 -z-40 overflow-hidden pointer-events-none">
        <div className="absolute -top-50 -left-50 w-175 h-175 rounded-full bg-violet-600/30 blur-3xl" />

        <div
          className="
        absolute
        top-25
        -right-50
        w-175
        h-175
        rounded-full
        bg-blue-500/25
        blur-3xl
      "
        />

        <div
          className="
        absolute
        -bottom-62.5
        left-1/2
        -translate-x-1/2
        w-225
        h-225
        rounded-full
        bg-red-500/15
        blur-3xl
      "
        />
      </div>

      {/* Grid */}
      <div
        className="
      fixed
      inset-0
      -z-30
      opacity-20
      bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
      bg-size-[50px_50px]
    "
      />

      {/* Large Circles */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        <div
          className="
        absolute
        top-20
        right-32
        w-72
        h-72
        rounded-full
        border
        border-violet-400/20
      "
        />

        <div
          className="
        absolute
        bottom-20
        left-20
        w-96
        h-96
        rounded-full
        border
        border-blue-400/10
      "
        />
      </div>

      {/* Floating Shapes */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="
        absolute
        top-32
        left-10
        w-20
        h-20
        rounded-3xl
        rotate-12
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
      "
        />

        <div
          className="
        absolute
        top-72
        right-16
        w-16
        h-16
        rounded-2xl
        -rotate-12
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
      "
        />

        <div
          className="
        absolute
        bottom-32
        right-12
        w-24
        h-24
        rounded-full
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
      "
        />
      </div>

      {/* Content */}
      <Navbar />
      <Hero />
      <About />
      <CTA />

      <footer className="relative border-t border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-bold text-lg">Mahreen Indonesia</h3>

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
