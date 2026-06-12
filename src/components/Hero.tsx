import { ArrowRight, Lightbulb, Laptop, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
              "
            >
              <span className="text-sm text-slate-300">Mahreen Indonesia</span>
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-sm text-slate-300">
                Generasi Muda Berkarya
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
                mt-8
                text-3xl
                md:text-4xl
                xl:text-5xl
                font-bold
                leading-tight
              "
            >
              Empowering <span className="text-blue-400">Youth</span>
              ,
              <br />
              Creating <span className="text-violet-400">Innovation</span>
              ,
              <br />
              Shaping{" "}
              <span
                className="
                  bg-linear-to-r
                  from-red-500
                  via-white
                  to-red-500
                  bg-clip-text
                  text-transparent
                "
              >
                Indonesia
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="
                mt-6
                text-lg
                text-slate-400
                max-w-xl
                leading-relaxed
              "
            >
              Mahreen Indonesia mengajak generasi muda untuk mengembangkan
              kreativitas, memanfaatkan teknologi, dan berkolaborasi menciptakan
              inovasi yang memberikan dampak nyata bagi masyarakat serta masa
              depan Indonesia.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/register"
                className="
                  group
                  bg-linear-to-r
                  from-red-500
                  to-red-600
                  hover:from-red-600
                  hover:to-red-700
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  transition
                "
              >
                Daftar Sekarang
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </Link>

              <Link
                to="/program"
                className="
                  border
                  border-white/10
                  hover:bg-white/5
                  px-8
                  py-4
                  rounded-xl
                  transition
                  text-center
                "
              >
                Pelajari Program
              </Link>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-8
            mt-20
            text-center
          "
            >
              <div>
                <h4 className="text-4xl font-bold text-red-400">500+</h4>

                <p className="mt-2 text-slate-400">Peserta Aktif</p>
              </div>

              <div>
                <h4 className="text-4xl font-bold text-blue-400">50+</h4>

                <p className="mt-2 text-slate-400">Program Kreatif</p>
              </div>

              <div>
                <h4 className="text-4xl font-bold text-violet-400">34</h4>

                <p className="mt-2 text-slate-400">Provinsi</p>
              </div>

              <div>
                <h4 className="text-4xl font-bold text-green-400">95%</h4>

                <p className="mt-2 text-slate-400">Kepuasan Peserta</p>
              </div>
            </motion.div>
          </div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div
              className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-8
              "
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-xl">Pilar Program</h3>

                <span
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-green-500/20
                    text-green-300
                    text-sm
                  "
                >
                  Aktif
                </span>
              </div>

              <div className="mt-8 space-y-4">
                <div className="bg-slate-900/60 rounded-2xl p-4 flex items-center gap-4">
                  <Lightbulb className="text-yellow-400" />

                  <div>
                    <h4 className="font-medium">Kreativitas</h4>

                    <p className="text-slate-400 text-sm">
                      Mengubah ide menjadi karya yang bermanfaat.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900/60 rounded-2xl p-4 flex items-center gap-4">
                  <Laptop className="text-cyan-400" />

                  <div>
                    <h4 className="font-medium">Teknologi</h4>

                    <p className="text-slate-400 text-sm">
                      Memanfaatkan teknologi untuk menciptakan inovasi.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900/60 rounded-2xl p-4 flex items-center gap-4">
                  <Users className="text-violet-400" />

                  <div>
                    <h4 className="font-medium">Kolaborasi</h4>

                    <p className="text-slate-400 text-sm">
                      Bersama membangun masa depan Indonesia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div
              className="
                hidden
                md:block
                absolute
                -top-5
                -right-5
                bg-white/10
                backdrop-blur-xl
                border
                border-white/10
                rounded-2xl
                px-5
                py-4
              "
            >
              <p className="text-sm text-slate-300">
                Terhubung di 34 Provinsi
              </p>
            </div>

            <div
              className="
                hidden
                md:block
                absolute
                -bottom-5
                -left-5
                bg-white/10
                backdrop-blur-xl
                border
                border-white/10
                rounded-2xl
                px-5
                py-4
              "
            >
              <p className="text-sm text-slate-300">
                Kreativitas • Teknologi • Kolaborasi
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
