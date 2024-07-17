import { clsx } from "clsx/lite";
import Header from "./Header";
import { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";
import Led from "./Led";
import { type Status } from "./App";

interface MonitorProps {
  lastJsonMessage: Array<Status>;
}

export default function Monitor({ lastJsonMessage }: MonitorProps) {
  const [ledsStatus, setLedsStatus] = useState<Array<Status>>([]);

  useEffect(() => {
    if (lastJsonMessage !== null) {
      setLedsStatus(lastJsonMessage);
    }
  }, [lastJsonMessage]);

  return (
    <section
      className={clsx(
        "grid w-max py-6",
        "grid-cols-2 min-[400px]:grid-cols-3 min-[544px]:grid-cols-4 min-[912px]:grid-cols-5",
        "gap-8",
        "sm:gap-12",
        "md:gap-16",
      )}
    >
      {ledsStatus.map((status, id) => (
        <Led id={id} isLit={Boolean(status)} key={id} />
      ))}
    </section>
  );
}
