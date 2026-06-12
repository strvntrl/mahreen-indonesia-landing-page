import { ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen bg-transparent text-white px-6 py-24">
      {/* Background Base */}
      <div className="fixed inset-0 -z-50 bg-slate-950" />

      {/* Aurora */}
      <div className="fixed inset-0 -z-40 overflow-hidden pointer-events-none">
        <div
          className="
        absolute
        -top-50
        -left-50
        w-175
        h-175
        rounded-full
        bg-violet-600/30
        blur-3xl
      "
        />

        <div
          className="
        absolute
        top-25
        -right-50
        w-175
        h-175
        rounded-full
        bg-blue-500/25
        blur-3xl
      "
        />

        <div
          className="
        absolute
        -bottom-62.5
        left-1/2
        -translate-x-1/2
        w-225
        h-225
        rounded-full
        bg-red-500/15
        blur-3xl
      "
        />
      </div>

      {/* Grid */}
      <div
        className="
      fixed
      inset-0
      -z-30
      opacity-20
      bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
      bg-size-[50px_50px]
    "
      />

      {/* Large Circles */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        <div
          className="
        absolute
        top-20
        right-32
        w-72
        h-72
        rounded-full
        border
        border-violet-400/20
      "
        />

        <div
          className="
        absolute
        bottom-20
        left-20
        w-96
        h-96
        rounded-full
        border
        border-blue-400/10
      "
        />
      </div>

      {/* Floating Shapes */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="
        absolute
        top-32
        left-10
        w-20
        h-20
        rounded-3xl
        rotate-12
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
      "
        />

        <div
          className="
        absolute
        top-72
        right-16
        w-16
        h-16
        rounded-2xl
        -rotate-12
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
      "
        />

        <div
          className="
        absolute
        bottom-32
        right-12
        w-24
        h-24
        rounded-full
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
      "
        />
      </div>
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
            <span className="text-xl text-slate-300">
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
            Isi formulir berikut untuk menjadi bagian dari program Mahreen
            Indonesia.
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
              <label className="block mb-2 text-sm text-slate-300">Email</label>

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
