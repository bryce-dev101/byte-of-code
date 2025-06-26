export type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({
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
