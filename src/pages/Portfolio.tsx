import { useState, useRef, forwardRef, useEffect } from "react";
import { Sun, Moon, Download, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import Logo from "../assets/logo.svg";

function Tag({
  label,
  color = "green",
}: Readonly<{ label: string; color?: string }>) {
  const baseStyles = {
    green: "bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200",
    yellow:
      "bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-200",
    pink: "bg-pink-100 dark:bg-pink-800 text-pink-700 dark:text-pink-200",
    cyan: "bg-cyan-100 dark:bg-cyan-800 text-cyan-700 dark:text-cyan-200",
    purple:
      "bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-200",
    indigo:
      "bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200",
  };

  return (
    <span
      className={`inline-block text-xs px-2 py-0.5 rounded mr-2 mb-1 ${
        baseStyles[color as keyof typeof baseStyles] || baseStyles.green
      }`}
    >
      {label}
    </span>
  );
}

function Card({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={`rounded-xl p-4 ring-1 ring-inset ring-gray-200 dark:ring-gray-700 hover:scale-[1.02] transition-all duration-700 bg-white/5 dark:bg-white/5 border text-green-600 dark:text-green-400 will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "solid" | "ghost" | "outline";
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      onClick,
      href,
      variant = "solid",
      disabled = false,
      className = "",
      ariaLabel,
    },
    ref
  ) => {
    const base =
      "inline-flex items-center px-6 py-3 rounded-xl text-sm font-bold transition duration-200 group active:scale-95 focus:outline-none";
    const styles = {
      solid: "bg-yellow-400 text-black hover:brightness-110",
      ghost: "bg-transparent text-inherit hover:text-[#FF6188]",
      outline:
        "border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white",
    };
    const finalClassName = `${base} ${styles[variant] ?? styles.solid} ${
      disabled ? "opacity-50 pointer-events-none" : ""
    } ${className}`;

    return href ? (
      <a
        href={href}
        className={finalClassName}
        download
        ref={ref as React.Ref<HTMLAnchorElement>}
        aria-label={ariaLabel ?? undefined}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ) : (
      <button
        onClick={onClick}
        className={finalClassName}
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled}
        aria-label={ariaLabel ?? undefined}
      >
        {children}
      </button>
    );
  }
);

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

  const [showMore, setShowMore] = useState(false);

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
          <header className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center py-10 relative z-10">
            <div className="flex items-center gap-4">
              <img
                src={Logo}
                alt="Logo"
                className="w-12 h-12 transition-transform duration-500 ease-in-out group-hover:rotate-90"
              />
              <div>
                <h1 className="text-4xl font-bold tracking-wide">
                  Bryce Ferguson
                </h1>
                <div className="text-green-400 text-lg mt-1">
                  Senior Developer
                </div>
              </div>
            </div>

            <Button
              variant="ghost"
              onClick={handleToggle}
              ref={toggleRef}
              className="absolute top-4 right-4"
              aria-label="Toggle theme"
            >
              <motion.div
                key={darkMode ? "sun" : "moon"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {darkMode ? <Sun /> : <Moon />}
              </motion.div>
            </Button>
          </header>

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
          <h2 className="text-xl font-bold mb-2">About Me</h2>
          <div className="flex gap-6 items-center">
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Engineering professional with 15+ years of experience delivering
              scalable, secure back-end systems using PHP, Laravel, and modern
              DevOps practices. Proven success leading Laravel integrations,
              CI/CD pipelines, and infrastructure improvements in high-stakes
              environments (banking, e-commerce, education). Strong communicator
              and mentor with a deep understanding of agile workflows, technical
              debt reduction, and legacy system refactoring. Looking to
              contribute in a Lead Engineer capacity within a collaborative,
              fast-moving hybrid team.
            </p>
          </div>
        </motion.section>

        <div className="border-t border-gray-300 dark:border-gray-700 my-10" />

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-xl font-semibold mb-4">Core Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border border-yellow-400">
              <h3 className="text-lg font-semibold">Back-end</h3>
              <div className="flex flex-wrap">
                <Tag label="PHP" color="yellow" />
                <Tag label="Laravel" color="yellow" />
                <Tag label="CakePHP" color="yellow" />
                <Tag label="CodeIgniter" color="yellow" />
                <Tag label="October CMS" color="yellow" />
                <Tag label="WordPress" color="yellow" />
                <Tag label="REST APIs" color="yellow" />
                <Tag label="MySQL" color="yellow" />
                <Tag label="Git" color="yellow" />
                <Tag label="Docker" color="yellow" />
                <Tag label="NGINX" color="yellow" />
                <Tag label="Jenkins" color="yellow" />
                <Tag label="CI/CD" color="yellow" />
                <Tag label="AWS" color="yellow" />
                <Tag label="Kubernetes" color="yellow" />
                <Tag label="Moodle" color="yellow" />
                <Tag label="MiniKube" color="yellow" />
              </div>
            </Card>
            <Card className="border border-pink-500">
              <h3 className="text-lg font-semibold">Front-end</h3>
              <div className="flex flex-wrap">
                <Tag label="HTML5" color="pink" />
                <Tag label="CSS3" color="pink" />
                <Tag label="Bootstrap" color="pink" />
                <Tag label="JavaScript" color="pink" />
                <Tag label="jQuery" color="pink" />
                <Tag label="Ajax" color="pink" />
                <Tag label="Responsive Design" color="pink" />
              </div>
            </Card>
            <Card className="border border-cyan-500">
              <h3 className="text-lg font-semibold">Other Tools</h3>
              <div className="flex flex-wrap">
                <Tag label="Grafana" color="cyan" />
                <Tag label="Buildkite" color="cyan" />
                <Tag label="Code Climate" color="cyan" />
                <Tag label="Asana" color="cyan" />
                <Tag label="Agile/Scrum" color="cyan" />
                <Tag label="Jira" color="cyan" />
              </div>
            </Card>
          </div>
        </motion.section>

        <div className="border-t border-gray-300 dark:border-gray-700 my-10" />

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-xl font-semibold mb-4">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border border-green-400">
              <h3 className="text-lg font-semibold">
                PayFast – Senior Developer{" "}
                <span className="block text-sm text-gray-500 dark:text-gray-300">
                  June 2024 – June 2025
                </span>
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                Modernised legacy architecture and integrated Laravel in a
                fast-paced agile environment.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-300 mt-2 space-y-1">
                <li>
                  Streamlined dev workflows by integrating Laravel into legacy
                  systems.
                </li>
                <li>
                  Improved developer experience with enhanced local environments
                  and UI layers.
                </li>
              </ul>
            </Card>
            <Card className="border border-purple-500">
              <h3 className="text-lg font-semibold">
                JD Sports – Platform Engineer{" "}
                <span className="block text-sm text-gray-500 dark:text-gray-300">
                  Nov 2022 – June 2024
                </span>
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                Engineered scalable e-commerce tracking systems and DevOps
                pipelines.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-300 mt-2 space-y-1">
                <li>
                  Built data pipelines for platforms like GA4, Facebook, Klarna.
                </li>
                <li>Worked across AWS, Kubernetes, Jenkins, and Grafana.</li>
              </ul>
            </Card>
            <Card className="border border-indigo-500">
              <h3 className="text-lg font-semibold">
                2U – Senior Developer{" "}
                <span className="block text-sm text-gray-500 dark:text-gray-300">
                  Sept 2021 – Nov 2022
                </span>
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                Delivered backend improvements for education platforms.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-300 mt-2 space-y-1">
                <li>Led deployments using Buildkite in agile sprint cycles.</li>
                <li>Wrote internal documentation and mentored junior devs.</li>
              </ul>
            </Card>
            <Card className="border border-emerald-500">
              <h3 className="text-lg font-semibold">
                Spinning Your Web – Senior Developer{" "}
                <span className="block text-sm text-gray-500 dark:text-gray-300">
                  Aug 2020 – Aug 2021
                </span>
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                Refactored banking software and managed technical debt.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-300 mt-2 space-y-1">
                <li>Improved system performance and stability.</li>
                <li>Mentored junior engineers and streamlined QA workflows.</li>
              </ul>
            </Card>
            <Card className="border border-yellow-500">
              <h3 className="text-lg font-semibold">
                Digitas Liquorice – Senior Developer{" "}
                <span className="block text-sm text-gray-500 dark:text-gray-300">
                  Oct 2018 – Aug 2019
                </span>
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                Built performant CMS and API-driven systems for high-profile
                agency clients.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-300 mt-2 space-y-1">
                <li>Created headless CMS solutions and RESTful APIs.</li>
                <li>
                  Delivered client work under high pressure and strict security
                  protocols.
                </li>
                <li>Contributed to award-winning web projects.</li>
              </ul>
            </Card>
            <Card className="border border-pink-500">
              <h3 className="text-lg font-semibold">
                Creative Spark – Senior Developer / 2IC{" "}
                <span className="block text-sm text-gray-500 dark:text-gray-300">
                  June 2018 – Oct 2018
                </span>
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                Consulted on internal process improvements and team upskilling.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-300 mt-2 space-y-1">
                <li>
                  Designed internal KPIs, risk assessments, and training
                  material.
                </li>
                <li>
                  Helped stabilise the release cycle and enforce better planning
                  practices.
                </li>
              </ul>
            </Card>
            {/* Previous cards */}
            {showMore && (
              <>
                <Card className="border border-cyan-500">
                  <h3 className="text-lg font-semibold">
                    Virtual Designs – Senior PHP Developer{" "}
                    <span className="block text-sm text-gray-500 dark:text-gray-300">
                      Aug 2017 – June 2018
                    </span>
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                    Improved legacy projects and led internal development
                    operations.
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-300 mt-2 space-y-1">
                    <li>
                      Built white-label products using Laravel and OctoberCMS.
                    </li>
                    <li>
                      Introduced time/task tracking and project management
                      processes.
                    </li>
                    <li>Improved team structure and led junior developers.</li>
                  </ul>
                </Card>
                <Card className="border border-green-500">
                  <h3 className="text-lg font-semibold">
                    Elemental – PHP Developer{" "}
                    <span className="block text-sm text-gray-500 dark:text-gray-300">
                      Nov 2016 – Aug 2017
                    </span>
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                    Returned to development with a focus on rapid delivery and
                    clean code.
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-300 mt-2 space-y-1">
                    <li>Delivered projects rapidly with high code quality.</li>
                    <li>
                      Gained experience in CodeIgniter and legacy PHP practices.
                    </li>
                    <li>Pushed best practices and process improvements.</li>
                  </ul>
                </Card>
                <Card className="border border-purple-500">
                  <h3 className="text-lg font-semibold">
                    ChatFind – DevOps Manager{" "}
                    <span className="block text-sm text-gray-500 dark:text-gray-300">
                      Nov 2015 – Feb 2016
                    </span>
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                    Managed app releases and introduced structured testing.
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-300 mt-2 space-y-1">
                    <li>Streamlined app testing and bug tracking workflows.</li>
                    <li>Led a distributed team through fast release cycles.</li>
                  </ul>
                </Card>
                <Card className="border border-indigo-500">
                  <h3 className="text-lg font-semibold">
                    Liquid Edge Solutions – Full-stack Developer{" "}
                    <span className="block text-sm text-gray-500 dark:text-gray-300">
                      2012 – 2015
                    </span>
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                    Grew from a front-end developer to a full-stack role in a
                    fast-paced agency.
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-300 mt-2 space-y-1">
                    <li>
                      Introduced WordPress development standards and tools.
                    </li>
                    <li>Worked across QA, front-end, and back-end teams.</li>
                    <li>
                      Strengthened PHP OOP skills through custom frameworks.
                    </li>
                  </ul>
                </Card>
                <Card className="border border-emerald-500">
                  <h3 className="text-lg font-semibold">
                    Sozo Web Design – Head Developer{" "}
                    <span className="block text-sm text-gray-500 dark:text-gray-300">
                      2009 – 2012
                    </span>
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                    Started as a junior and grew into lead developer through
                    hard work and self-study.
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-300 mt-2 space-y-1">
                    <li>Built custom WordPress themes and plugins.</li>
                    <li>
                      Learned MVC/OOP, CakePHP, and full project lifecycles.
                    </li>
                    <li>Handled both design and development independently.</li>
                  </ul>
                </Card>
              </>
            )}
          </div>
          <div className="mt-6 text-center">
            <button
              className="text-sm text-pink-500 hover:underline"
              onClick={() => setShowMore((prev) => !prev)}
            >
              {showMore ? "Show less" : "Show more history"}
            </button>
          </div>
        </motion.section>

        <div className="border-t border-gray-300 dark:border-gray-700 my-10" />

        <footer className="flex justify-center gap-6 py-10 text-gray-400">
          <a
            href="https://github.com/bryce-dev101"
            className="hover:text-pink-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/bryce-ferguson-36566156/"
            className="hover:text-pink-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </footer>
      </div>
    </div>
  );
}
