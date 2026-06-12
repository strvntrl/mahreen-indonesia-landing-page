import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative px-6 py-32"
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
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 left-1/4 w-80 h-80 bg-red-500/20 blur-[140px] rounded-full" />

            <div className="absolute -bottom-20 right-1/4 w-80 h-80 bg-blue-500/15 blur-[140px] rounded-full" />
          </div>

          <div className="relative z-10">
            {/* Badge */}
            <div
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
              <span>🇮🇩</span>

              <span className="text-sm text-slate-300">
                Pendaftaran Mahreen Indonesia Dibuka
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-8 text-4xl md:text-6xl font-bold leading-tight">
              Indonesia Membutuhkan
              <span className="block bg-linear-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
                Karya dan Inovasimu
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-3xl mx-auto text-slate-300 text-lg leading-relaxed">
              Jangan hanya menyaksikan perubahan terjadi. Jadilah bagian dari
              generasi muda yang berani mengambil langkah, mengembangkan
              kreativitas, memanfaatkan teknologi, dan menciptakan solusi yang
              berdampak bagi masa depan Indonesia.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="
                  group
                  bg-linear-to-r
                  from-red-500
                  to-red-600
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:scale-105
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
                  font-medium
                  transition
                "
              >
                Pelajari Program
              </Link>
            </div>

            {/* Quote */}
            <div className="mt-14 pt-10 border-t border-white/10">
              <p className="text-slate-400 italic max-w-2xl mx-auto leading-relaxed">
                "Perubahan besar dimulai dari satu langkah kecil. Mari
                berkarya, berinovasi, dan bersama membangun Indonesia yang
                lebih baik."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}