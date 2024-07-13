import { clsx } from "clsx/lite";

interface LedProps {
  id: number;
  isLit: boolean;
}

function Led({ id, isLit }: LedProps) {
  const litStyle = isLit ? "bg-amber-300" : "bg-blue-100";
  const status = isLit ? "Lit" : "Off";
  const paddingZeros = id < 100 ? `${id < 10 ? "0" : ""}0` : "";

  return (
    <section
      className={clsx(
        "mb-1 mr-1 flex size-[6.5rem] border-spacing-2 flex-col items-center justify-center bg-neutral-50",
        "rounded-lg border-4 border-amber-950 p-2 drop-shadow-[0.25rem_0.25rem_0rem_#451a03]",
      )}
      aria-label="LED"
    >
      <p className="font-mono text-3xl font-semibold">
        <span className={"text-neutral-300"} aria-hidden>
          {paddingZeros}
        </span>
        <span>{id}</span>
      </p>
      <hr className="mb-2 w-8 border border-neutral-300" aria-hidden />
      <span
        className={clsx(
          litStyle,
          "flex size-10 items-center justify-center",
          "font-medium",
          "rounded-full border-2 border-amber-950 drop-shadow-[0.125rem_0.125rem_0rem_#451a03]",
        )}
        title={status}
        aria-label={status}
        role={"presentation"}
      />
    </section>
  );
}

export default Led;
