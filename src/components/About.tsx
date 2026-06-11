import { Laptop, Lightbulb, Users } from "lucide-react";

const features = [
  {
    icon: <Lightbulb size={32} />,
    title: "Kreativitas",
    desc: "Mengembangkan ide-ide baru yang mampu memberikan solusi nyata bagi masyarakat.",
  },
  {
    icon: <Laptop size={32} />,
    title: "Teknologi",
    desc: "Belajar dan memanfaatkan teknologi modern untuk menciptakan inovasi.",
  },
  {
    icon: <Users size={32} />,
    title: "Kolaborasi",
    desc: "Membangun relasi dan bekerja bersama generasi muda dari berbagai daerah.",
  },
];

export default function About() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Tentang Program
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Mahreen Indonesia hadir sebagai wadah pengembangan kreativitas dan
            teknologi bagi generasi muda untuk menciptakan masa depan yang lebih
            baik melalui inovasi dan kolaborasi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition duration-300"
            >
              <div className="text-blue-400 mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-slate-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}