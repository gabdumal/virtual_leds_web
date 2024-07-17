import { clsx } from "clsx/lite";
import Alert from "./Alert";

interface HeaderProps {
  connectionState: string;
}

function Header({ connectionState }: HeaderProps) {
  return (
    <header
      className={clsx(
        "sticky top-0 z-10 flex w-full justify-between p-4",
        "border-b-8 bg-primary-common",
        "font-semibold",
      )}
    >
      <h1 className="font-heading text-4xl font-semibold">
        <span>LEDs Monitoring</span>
      </h1>
      <Alert intent="info" text={`WS is ${connectionState}`} />
    </header>
  );
}

export default Header;
