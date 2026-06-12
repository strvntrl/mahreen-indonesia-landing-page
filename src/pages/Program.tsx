import {
  ArrowLeft,
  Lightbulb,
  Laptop,
  Users,
  Rocket,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const programs = [
  {
    icon: <Lightbulb size={28} />,
    title: "Creative Innovation",
    description:
      "Mengembangkan kemampuan berpikir kreatif untuk menghasilkan ide dan solusi yang bermanfaat bagi masyarakat.",
  },
  {
    icon: <Laptop size={28} />,
    title: "Technology Development",
    description:
      "Belajar memanfaatkan teknologi digital untuk menciptakan inovasi yang relevan dengan kebutuhan masa kini.",
  },
  {
    icon: <Users size={28} />,
    title: "Community Collaboration",
    description:
      "Membangun jaringan dan kolaborasi dengan generasi muda dari berbagai daerah di Indonesia.",
  },
];

export default function Program() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 blur-[150px] rounded-full" />

        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Back */}
        <Link
          to="/"
          className="
            inline-flex
            items-center
            gap-2
            text-slate-400
            hover:text-white
            transition
          "
        >
          <ArrowLeft size={18} />
          Kembali ke Beranda
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-16"
        >
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
            "
          >
            🇮🇩
            <span className="text-sm text-slate-300">
              Mahreen Indonesia
            </span>
          </div>

          <h1 className="mt-8 text-5xl md:text-6xl font-bold">
            Program
            <span className="block bg-linear-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
              Berkarya Untuk Indonesia
            </span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 text-lg">
            Program yang dirancang untuk membantu generasi muda Indonesia
            mengembangkan kreativitas, teknologi, dan kolaborasi guna
            menciptakan dampak positif bagi masyarakat.
          </p>
        </motion.div>

        {/* Main Program */}
        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {programs.map((program) => (
            <div
              key={program.title}
              className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-8
                backdrop-blur-xl
              "
            >
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400 mb-6">
                {program.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {program.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>

        {/* Program Journey */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center">
            Alur Program
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mx-auto">
                <Rocket className="text-red-400" size={32} />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Belajar
              </h3>

              <p className="mt-3 text-slate-400">
                Mendapatkan wawasan dan keterampilan baru melalui berbagai
                aktivitas pembelajaran.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto">
                <Lightbulb className="text-blue-400" size={32} />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Berkarya
              </h3>

              <p className="mt-3 text-slate-400">
                Mengembangkan ide menjadi karya atau solusi yang memiliki
                manfaat nyata.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto">
                <Award className="text-green-400" size={32} />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Berdampak
              </h3>

              <p className="mt-3 text-slate-400">
                Memberikan kontribusi positif bagi lingkungan, masyarakat,
                dan masa depan Indonesia.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="
            mt-24
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-10
            text-center
          "
        >
          <h2 className="text-4xl font-bold">
            Siap Menjadi Bagian dari Perubahan?
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Bergabunglah bersama ribuan generasi muda Indonesia yang telah
            memulai langkah untuk berkarya dan berkontribusi.
          </p>

          <Link
            to="/register"
            className="
              inline-flex
              items-center
              gap-2
              mt-8
              bg-linear-to-r
              from-red-500
              to-red-600
              px-8
              py-4
              rounded-xl
              font-semibold
            "
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}