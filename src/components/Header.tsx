import { clsx } from "clsx/lite";

function Header() {
  return (
    <header
      className={clsx(
        "sticky top-0 z-10 w-full p-4",
        "border-b-8 bg-primary-common",
        "font-semibold",
      )}
    >
      <h1 className="font-heading text-4xl font-semibold">
        <span>LEDs Monitoring</span>
      </h1>
    </header>
  );
}

export default Header;
