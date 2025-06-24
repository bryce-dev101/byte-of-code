import { Github, Linkedin } from 'lucide-react';

export function Footer() {
    return (
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
    )
}
