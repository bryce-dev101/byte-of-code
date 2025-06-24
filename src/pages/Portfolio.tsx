import { useState, useRef, useEffect } from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { Button } from "../components/ui/Button";
import { Header } from "../components/Header";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { Footer } from "../components/Footer";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = Cookies.get("theme") ?? localStorage.getItem("theme");
      if (stored) return stored === "dark";
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      Cookies.set("theme", systemPrefersDark ? "dark" : "light", {
        expires: 365,
      });
      return systemPrefersDark;
    }
    return false;
  });

  const toggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", darkMode);
    root.style.transition = "background-color 0.5s ease, color 0.5s ease";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    Cookies.set("theme", darkMode ? "dark" : "light", { expires: 365 });
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode((prev) => !prev);
  };

  const emailUser = "ferguson_bryce";
  const emailDomain = "yahoo.com";
  const subject = encodeURIComponent("Enquiry from ByteOfCode.dev");
  const mailtoLink = `mailto:${emailUser}@${emailDomain}?subject=${subject}`;

  return (
    <div
      className={`min-h-screen w-full scroll-smooth transition-colors duration-700 font-mono
      ${
        darkMode
          ? "dark bg-gradient-to-b from-[#2D2A2E] via-[#1E1C1F] to-[#2D2A2E] text-[#FCFCFA]"
          : "bg-[#FAFAFA] text-[#2D2A2E]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.section
          className="mb-10 group"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <Header
            darkMode={darkMode}
            onToggleTheme={handleToggle}
            toggleRef={toggleRef}
          />

          <div className="flex gap-4 flex-wrap ">
            <Button variant="solid" href="/Bryce_Ferguson_Resume_Styled.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            <Button
              variant="outline"
              onClick={() => (window.location.href = mailtoLink)}
              aria-label="Email Bryce"
            >
              Contact Me
            </Button>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
            A byte of code goes a long way.
          </p>
        </motion.section>

        <div className="border-t border-gray-300 dark:border-gray-700 my-10" />

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <AboutSection />
        </motion.section>

        <div className="border-t border-gray-300 dark:border-gray-700 my-10" />

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <SkillsSection />
        </motion.section>

        <div className="border-t border-gray-300 dark:border-gray-700 my-10" />

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <ExperienceSection />
        </motion.section>

        <div className="border-t border-gray-300 dark:border-gray-700 my-10" />

        <Footer />
      </div>
    </div>
  );
}
