import { motion } from "framer-motion";
import { Laptop, Lightbulb, Users } from "lucide-react";

const features = [
  {
    icon: <Lightbulb size={28} />,
    title: "Kreativitas",
    desc: "Mengembangkan ide-ide inovatif yang mampu memberikan solusi nyata bagi masyarakat dan lingkungan sekitar.",
  },
  {
    icon: <Laptop size={28} />,
    title: "Teknologi",
    desc: "Memanfaatkan teknologi modern sebagai sarana untuk berkarya, belajar, dan menciptakan dampak positif.",
  },
  {
    icon: <Users size={28} />,
    title: "Kolaborasi",
    desc: "Membangun jaringan serta bekerja bersama generasi muda dari berbagai latar belakang dan daerah.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
            <span className="text-blue-400">●</span>
            <span className="text-sm text-slate-300">
              Tentang Program
            </span>
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            Membangun Generasi
            <span className="block bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Kreatif dan Inovatif
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 text-lg leading-relaxed">
            Mahreen Indonesia hadir sebagai wadah bagi generasi muda untuk
            mengembangkan kreativitas, meningkatkan kemampuan teknologi, dan
            membangun kolaborasi yang berdampak bagi masa depan Indonesia.
            Melalui berbagai program dan kegiatan, peserta didorong untuk
            berani berkarya serta menciptakan inovasi yang bermanfaat.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                hover:-translate-y-2
                hover:border-blue-500/50
                transition-all
                duration-300
              "
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />
              </div>

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center text-blue-400 mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}