import { ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-24">
      <div className="max-w-3xl mx-auto">
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

        {/* Header */}
        <div className="mt-10 text-center">
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
              Pendaftaran Mahreen Indonesia
            </span>
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold">
            Bergabung Menjadi
            <span className="block bg-linear-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
              Generasi Berkarya
            </span>
          </h1>

          <p className="mt-4 text-slate-400">
            Isi formulir berikut untuk menjadi bagian dari program
            Mahreen Indonesia.
          </p>
        </div>

        {/* Form */}
        <div
          className="
            mt-12
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
          "
        >
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm text-slate-300">
                Nama Lengkap
              </label>

              <input
                type="text"
                placeholder="Masukkan nama lengkap"
                className="
                  w-full
                  bg-slate-900/50
                  border
                  border-white/10
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-red-500
                "
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-slate-300">
                Email
              </label>

              <input
                type="email"
                placeholder="contoh@email.com"
                className="
                  w-full
                  bg-slate-900/50
                  border
                  border-white/10
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-red-500
                "
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-slate-300">
                Kota Asal
              </label>

              <input
                type="text"
                placeholder="Surabaya"
                className="
                  w-full
                  bg-slate-900/50
                  border
                  border-white/10
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-red-500
                "
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-slate-300">
                Bidang Minat
              </label>

              <select
                className="
                  w-full
                  bg-slate-900/50
                  border
                  border-white/10
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-red-500
                "
              >
                <option>Teknologi</option>
                <option>UI/UX Design</option>
                <option>Content Creator</option>
                <option>Digital Marketing</option>
                <option>Entrepreneurship</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm text-slate-300">
                Motivasi Bergabung
              </label>

              <textarea
                rows={5}
                placeholder="Ceritakan alasan kamu ingin bergabung..."
                className="
                  w-full
                  bg-slate-900/50
                  border
                  border-white/10
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  resize-none
                  focus:border-red-500
                "
              />
            </div>

            <button
              type="submit"
              className="
                w-full
                bg-linear-to-r
                from-red-500
                to-red-600
                py-4
                rounded-xl
                font-semibold
                flex
                items-center
                justify-center
                gap-2
                hover:scale-[1.02]
                transition
              "
            >
              Daftar Sekarang
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}