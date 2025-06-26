import type { RefObject } from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { Sun, Moon } from "lucide-react";
import Logo from "../../assets/logo.svg";

export type HeaderProps = {
  darkMode: boolean;
  onToggleTheme: () => void;
  toggleRef: RefObject<HTMLButtonElement | null>;
};

export function Header({
  darkMode,
  onToggleTheme,
  toggleRef,
}: Readonly<HeaderProps>) {
    return (
        <header className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center py-10 relative z-10">
            <div className="flex items-center gap-4">
            <img
                src={Logo}
                alt="Logo"
                className="w-12 h-12 transition-transform duration-500 ease-in-out group-hover:rotate-90"
            />
            <div>
                <h1 className="text-4xl font-bold tracking-wide">Bryce Ferguson</h1>
                <div className="text-green-400 text-lg mt-1">Senior Developer</div>
            </div>
            </div>

            <Button
            variant="ghost"
            onClick={onToggleTheme}
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
    );
}
