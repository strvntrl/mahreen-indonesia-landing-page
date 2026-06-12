import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#cta" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <nav
          className="
            backdrop-blur-xl
            bg-slate-950/70
            border
            border-white/10
            rounded-2xl
            px-6
            py-4
            flex
            items-center
            justify-between
            shadow-lg
            shadow-black/20
          "
        >
          {/* Logo */}
          <motion.a
            href="#hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3"
          >
            <div>
              <h1 className="font-bold text-xl text-white leading-none">Mahreen Indonesia</h1>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div
            className="
              hidden
              md:flex
              items-center
              gap-2
              p-1
              rounded-full
              bg-white/5
              border
              border-white/10
            "
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  px-5
                  py-2
                  rounded-full
                  text-sm
                  text-slate-300
                  hover:text-white
                  hover:bg-white/10
                  transition-all
                  duration-300
                "
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#cta"
            className="
              hidden
              md:flex
              items-center
              gap-2
              px-5
              py-2.5
              rounded-xl
              bg-linear-to-r
              from-red-500
              to-red-600
              font-medium
              hover:scale-105
              transition
              shadow-lg
              shadow-red-500/20
            "
          >
            Daftar
            <ArrowRight size={16} className="transition" />
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              md:hidden
              p-2
              rounded-lg
              bg-white/5
              border
              border-white/10
            "
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              className="
                md:hidden
                mt-3
                rounded-2xl
                border
                border-white/10
                bg-slate-900/90
                backdrop-blur-xl
                overflow-hidden
              "
            >
              <div className="flex flex-col p-4">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="
                      py-3
                      px-3
                      rounded-lg
                      text-slate-300
                      hover:text-white
                      hover:bg-white/5
                      transition
                    "
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="#cta"
                  onClick={() => setIsOpen(false)}
                  className="
                    mt-3
                    flex
                    items-center
                    justify-center
                    gap-2
                    bg-linear-to-r
                    from-red-500
                    to-red-600
                    py-3
                    rounded-xl
                    font-medium
                  "
                >
                  Daftar Sekarang
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
