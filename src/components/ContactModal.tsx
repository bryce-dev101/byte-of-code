import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ContactModal({ open, onClose }: Readonly<ContactModalProps>) {
  const backdrop = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    // Close on Esc
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // Trap focus (optional for accessibility)
  useEffect(() => {
    if (!open) return;
    const firstInput = backdrop.current?.querySelector("input, textarea, button");
    (firstInput as HTMLElement | null)?.focus();
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <dialog
          ref={backdrop}
          open={open}
          className="fixed inset-0 z-50 p-0 border-0"
          aria-modal="true"
          style={{ background: "transparent" }}
        >
          {/* Backdrop button for accessibility */}
          <button
            type="button"
            aria-label="Close modal"
            tabIndex={0}
            className="fixed inset-0 w-full h-full bg-black/50 cursor-default"
            onClick={onClose}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClose();
              }
            }}
            style={{
              position: "fixed",
              inset: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.5)",
              zIndex: 0,
            }}
          />
          <motion.div
            initial={{ scale: 0.92, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="relative bg-white dark:bg-[#222124] dark:text-white shadow-xl rounded-2xl p-8 w-full max-w-md"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-pink-500 text-xl font-bold"
              aria-label="Close modal"
              tabIndex={0}
            >
              &times;
            </button>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="text-pink-500" />
              <h2 className="text-xl font-semibold">Contact Me</h2>
            </div>
            <form
              className="flex flex-col gap-4"
              onSubmit={e => {
                e.preventDefault();
                // Handle form submission here (email service, etc.)
                alert("Thanks! I'll get back to you soon.");
                onClose();
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="rounded-md border px-4 py-2 text-sm bg-white dark:bg-[#18171A] focus:ring-pink-400 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="rounded-md border px-4 py-2 text-sm bg-white dark:bg-[#18171A] focus:ring-pink-400 focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                className="rounded-md border px-4 py-2 text-sm bg-white dark:bg-[#18171A] focus:ring-pink-400 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </dialog>
      )}
    </AnimatePresence>
  );
}