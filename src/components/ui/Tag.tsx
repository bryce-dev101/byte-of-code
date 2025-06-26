export type TagProps = {
  label: string;
  color?: "green" | "yellow" | "pink" | "cyan" | "purple" | "indigo";
};

export function Tag({ label, color = "green" }: Readonly<TagProps>) {
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
        baseStyles[color] || baseStyles.green
      }`}
    >
      {label}
    </span>
  );
}
