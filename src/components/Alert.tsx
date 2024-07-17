import { clsx } from "clsx/lite";

interface AlertProps {
  text: string;
  intent: "danger" | "info";
}

export default function Alert({ text, intent }: AlertProps) {
  return (
    <div
      className={clsx(
        "flex items-center rounded-full border-2 px-2 font-semibold shadow-inner-2",
        intent === "danger" && "bg-danger-light *:text-light",
        intent === "info" && "bg-primary-light *:text-dark",
      )}
    >
      <p className="text-center text-lg">{text}</p>
    </div>
  );
}
