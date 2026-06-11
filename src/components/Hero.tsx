import { ArrowRight, Lightbulb, Laptop, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-8 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <span>🚀</span>
              <span className="text-sm text-slate-300">
                Mahreen Indonesia
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-5xl md:text-6xl xl:text-7xl font-bold leading-tight"
            >
              Wujudkan Ide
              <span className="block bg-linear-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Menjadi Inovasi
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-lg text-slate-400 max-w-xl"
            >
              Mahreen Indonesia mengajak generasi muda untuk mengembangkan
              kreativitas, memanfaatkan teknologi, dan berkolaborasi dalam
              menciptakan solusi yang berdampak bagi masa depan Indonesia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <button className="group bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition">
                Gabung Sekarang

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </button>

              <a
                href="#about"
                className="border border-white/10 hover:bg-white/5 px-8 py-4 rounded-xl transition text-center"
              >
                Pelajari Program
              </a>
            </motion.div>
          </div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-xl">
                  Future Creator Program
                </h3>

                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm">
                  Active
                </span>
              </div>

              <div className="mt-8 space-y-4">
                <div className="bg-slate-900/60 rounded-2xl p-4 flex items-center gap-4">
                  <Lightbulb className="text-yellow-400" />
                  <div>
                    <h4 className="font-medium">Creative Thinking</h4>
                    <p className="text-slate-400 text-sm">
                      Mengembangkan ide dan solusi inovatif.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900/60 rounded-2xl p-4 flex items-center gap-4">
                  <Laptop className="text-cyan-400" />
                  <div>
                    <h4 className="font-medium">Technology Skills</h4>
                    <p className="text-slate-400 text-sm">
                      Memanfaatkan teknologi untuk berkarya.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900/60 rounded-2xl p-4 flex items-center gap-4">
                  <Users className="text-violet-400" />
                  <div>
                    <h4 className="font-medium">Collaboration</h4>
                    <p className="text-slate-400 text-sm">
                      Membangun jaringan dan komunitas kreatif.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card 1 */}
            <div className="hidden md:block absolute -top-6 -right-6 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4">
              <p className="text-sm text-slate-300">
                🎯 95% Participant Satisfaction
              </p>
            </div>

            {/* Floating Card 2 */}
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4">
              <p className="text-sm text-slate-300">
                🚀 Empowering Future Innovators
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}