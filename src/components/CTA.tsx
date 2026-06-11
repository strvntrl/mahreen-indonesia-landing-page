import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative
            overflow-hidden
            rounded-4xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-10
            md:p-16
            text-center
          "
        >
          {/* Glow Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />

            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-violet-500/20 blur-[120px] rounded-full" />
          </div>

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-slate-300">
                Pendaftaran Dibuka
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Saatnya Berkarya
              <span className="block bg-linear-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Untuk Indonesia
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-3xl mx-auto text-slate-300 text-lg leading-relaxed">
              Bergabunglah bersama Mahreen Indonesia dan jadilah bagian dari
              generasi muda yang menciptakan perubahan melalui kreativitas,
              teknologi, dan kolaborasi.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition">
                Daftar Sekarang

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </button>

              <button className="border border-white/10 hover:bg-white/5 px-8 py-4 rounded-xl font-medium transition">
                Pelajari Lebih Lanjut
              </button>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14 pt-10 border-t border-white/10">
              <div>
                <h3 className="text-3xl font-bold text-blue-400">
                  500+
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  Peserta Aktif
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-violet-400">
                  50+
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  Program Kreatif
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-cyan-400">
                  20+
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  Kota Indonesia
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-400">
                  95%
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  Kepuasan Peserta
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}