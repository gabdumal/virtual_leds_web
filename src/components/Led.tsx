interface LedProps {
  id: number;
  isLit: boolean;
}

function Led({ id, isLit }: LedProps) {
  const litStyle = isLit ? `bg-amber-300` : `bg-blue-100`;
  const status = isLit ? `Lit` : `Off`;
  return (
    <section
      className={`size-[6.5rem] p-2 rounded-lg border-4 border-spacing-2 border-amber-950 bg-neutral-50 drop-shadow-[0.25rem_0.25rem_0rem_#451a03] flex flex-col justify-center items-center`}
      aria-label={`LED`}
    >
      <p className={`font-mono text-3xl font-semibold`}>
        <span className={`text-neutral-300`} aria-hidden>
          {id < 100 ? `${id < 10 ? `0` : ``}0` : ``}
        </span>
        <span>{id}</span>
      </p>
      <hr className={`w-8 mb-2 border border-neutral-300`} aria-hidden />
      <span
        className={`size-10 font-medium rounded-full border-2 border-amber-950 drop-shadow-[0.125rem_0.125rem_0rem_#451a03] ${litStyle} flex justify-center items-center`}
        title={status}
        aria-label={status}
        role={`presentation`}
      />
    </section>
  );
}

export default Led;
