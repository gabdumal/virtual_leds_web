import useWebSocket from "react-use-websocket";
import { clsx } from "clsx/lite";
import Header from "./Header";
import Led from "./Led";
import { useEffect, useState } from "react";

type Status = 0 | 1;

/// Constants
const serverPort = "8100";
const serverAddress = "192.168.15.144";
const serverUrl = `ws://${serverAddress}:${serverPort}`;

function App() {
  const [ledsStatus, setLedsStatus] = useState<Array<Status>>([]);

  const { lastJsonMessage }: { lastJsonMessage: Array<Status> } = useWebSocket(
    serverUrl,
    {
      onOpen: () => {
        console.log("Connection established.");
      },
      shouldReconnect: () => true,
    },
  );

  useEffect(() => {
    if (lastJsonMessage !== null) {
      setLedsStatus(lastJsonMessage);
    }
  }, [lastJsonMessage]);

  return (
    <article className="flex h-full flex-col items-center bg-amber-50">
      <Header />
      <main
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
      </main>
    </article>
  );
}

export default App;
