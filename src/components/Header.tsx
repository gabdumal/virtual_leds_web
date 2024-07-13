import { clsx } from "clsx/lite";

function Header() {
  return (
    <header
      className={clsx(
        "sticky top-0 z-10 w-full p-4",
        "border-b-8 border-amber-950 bg-blue-400 drop-shadow-[0rem_0.25rem_0.125rem_rgba(10,10,10,0.75)]",
        "font-semibold text-neutral-50",
      )}
    >
      <h1 className="text-4xl text-neutral-50">
        <span
          style={{
            textShadow: "#0a0a0a 2px 2px",
          }}
        >
          LEDs Monitoring
        </span>
      </h1>
    </header>
  );
}

export default Header;
