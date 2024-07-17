import { clsx } from "clsx/lite";
import Alert from "./Alert";

interface HeaderProps {
  connectionState: string;
}

function Header({ connectionState }: HeaderProps) {
  return (
    <header
      className={clsx(
        "sticky top-0 z-10 flex w-full justify-between gap-2 p-4",
        "border-b-8 bg-primary-common",
        "font-semibold",
      )}
    >
      <h1 className="font-heading text-4xl font-semibold">
        <span>LEDs</span>
        <span className="hidden md:flex"> Monitoring</span>
      </h1>
      <Alert intent="info" text={connectionState} />
    </header>
  );
}

export default Header;
