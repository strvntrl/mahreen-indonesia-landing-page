import { motion } from "framer-motion";
import {
  Laptop,
  Lightbulb,
  Users,
  Target,
  HeartHandshake,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: <Lightbulb size={28} />,
    title: "Kreativitas",
    desc: "Mendorong generasi muda untuk menghasilkan ide, karya, dan inovasi yang mampu memberikan manfaat bagi masyarakat Indonesia.",
  },
  {
    icon: <Laptop size={28} />,
    title: "Teknologi",
    desc: "Memanfaatkan teknologi sebagai sarana untuk belajar, berkarya, dan menciptakan solusi atas berbagai tantangan di era digital.",
  },
  {
    icon: <Users size={28} />,
    title: "Kolaborasi",
    desc: "Membangun semangat gotong royong melalui kolaborasi lintas daerah dan lintas bidang untuk menciptakan dampak yang lebih luas.",
  },
];

const values = [
  {
    icon: <Target size={24} />,
    title: "Visi Jelas",
    desc: "Menciptakan generasi muda yang mampu menjadi penggerak perubahan melalui kreativitas dan inovasi.",
  },
  {
    icon: <Rocket size={24} />,
    title: "Berorientasi Masa Depan",
    desc: "Mempersiapkan talenta muda agar siap menghadapi tantangan dunia yang terus berkembang.",
  },
  {
    icon: <HeartHandshake size={24} />,
    title: "Dampak Nyata",
    desc: "Menghasilkan karya yang tidak hanya inovatif, tetapi juga bermanfaat bagi masyarakat Indonesia.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div
            className="
              inline-flex
              items-center
              gap-1
              px-4
              py-2
              rounded-full
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
            "
          >
            <span className="text-xl text-slate-300">Tentang Program</span>
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            Bersama Menciptakan
            <span className="block bg-linear-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
              Masa Depan Indonesia
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 text-lg leading-relaxed">
            Mahreen Indonesia hadir sebagai wadah bagi generasi muda untuk
            mengembangkan potensi diri melalui kreativitas, teknologi, dan
            kolaborasi. Kami percaya bahwa setiap ide memiliki kekuatan untuk
            menjadi solusi dan setiap karya dapat memberikan dampak positif bagi
            Indonesia.
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
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
                hover:border-red-500/40
                transition-all
                duration-300
              "
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-500/10 blur-3xl rounded-full" />
              </div>

              <div className="relative">
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-linear-to-br
                    from-red-500/20
                    to-white/10
                    flex
                    items-center
                    justify-center
                    text-red-400
                    mb-6
                  "
                >
                  {item.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>

                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision & Impact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mt-24
            rounded-4xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            md:p-12
          "
        >
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold">
              Mengapa Mahreen Indonesia?
            </h3>

            <p className="mt-4 text-slate-400 max-w-3xl mx-auto">
              Kami percaya bahwa generasi muda memiliki peran penting dalam
              membangun Indonesia melalui ide, inovasi, dan kolaborasi yang
              berkelanjutan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {values.map((item) => (
              <div
                key={item.title}
                className="
                  p-6
                  rounded-2xl
                  border
                  border-white/10
                  bg-slate-900/40
                "
              >
                <div className="text-red-400 mb-4">{item.icon}</div>

                <h4 className="text-xl font-semibold mb-3">{item.title}</h4>

                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
