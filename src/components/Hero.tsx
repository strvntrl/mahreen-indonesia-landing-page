import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Background Blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-violet-500/20 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5"
        >
          🚀 Mahreen Indonesia
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-5xl md:text-7xl font-bold leading-tight"
        >
          Berkarya Dengan
          <span className="block bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Kreativitas & Teknologi
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-2xl mx-auto text-slate-400 text-lg"
        >
          Jadilah bagian dari generasi muda Indonesia yang menciptakan inovasi,
          membangun solusi, dan memberikan dampak positif melalui teknologi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition">
            Gabung Sekarang
            <ArrowRight size={18} />
          </button>

          <button className="border border-white/10 hover:bg-white/5 px-8 py-4 rounded-xl transition">
            Pelajari Program
          </button>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-20 max-w-3xl mx-auto">
          <div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-slate-400">Peserta Aktif</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-slate-400">Program Kreatif</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">20+</h3>
            <p className="text-slate-400">Kota</p>
          </div>
        </div>
      </div>
    </section>
  );
}