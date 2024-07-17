import { clsx } from "clsx/lite";

interface LedProps {
  id: number;
  isLit: boolean;
}

function Led({ id, isLit }: LedProps) {
  const litStyle = isLit ? "bg-warning-dark" : "bg-accent-lighter";
  const status = isLit ? "Lit" : "Off";
  const paddingZeros = id < 100 ? `${id < 10 ? "0" : ""}0` : "";

  return (
    <section
      className={clsx(
        "mb-1 mr-1 flex size-[6.5rem] border-spacing-2 flex-col items-center justify-center bg-light",
        "rounded-30 border-4 border-dark p-2 shadow-outer-4",
      )}
      aria-label="LED"
    >
      <p className="font-mono text-3xl font-semibold text-dark">
        <span className={"text-inactive-light"} aria-hidden>
          {paddingZeros}
        </span>
        <span>{id}</span>
      </p>
      <hr className="mb-2 mt-1 w-8 border border-inactive-light" aria-hidden />
      <span
        className={clsx(
          litStyle,
          "flex size-10 items-center justify-center",
          "font-medium",
          "rounded-full border-2 border-dark shadow-outer-2",
        )}
        title={status}
        aria-label={status}
        role={"presentation"}
      />
    </section>
  );
}

export default Led;
