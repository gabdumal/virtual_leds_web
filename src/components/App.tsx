import { clsx } from "clsx/lite";
import { useCallback, useEffect, useState } from "react";
import Monitor from "./Monitor";
import Connect from "./Connect";
import Header from "./Header";
import useWebSocket, { ReadyState } from "react-use-websocket";

export type Status = 0 | 1;

function App() {
  const [serverUrl, setServerUrl] = useState<string | null>(null);

  const {
    lastJsonMessage,
    readyState,
  }: { lastJsonMessage: Array<Status>; readyState: ReadyState } = useWebSocket(
    serverUrl,
    {
      onOpen: () => {
        console.log("Connection established.");
      },
      shouldReconnect: () => true,
    },
  );

  const connectionState = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  return (
    <article className="bg-amber-50 flex w-full flex-col items-center">
      <Header connectionState={connectionState} />
      <main className="flex flex-grow p-4">
        {readyState !== ReadyState.OPEN ?
          <Connect setServerUrl={setServerUrl} />
        : <Monitor lastJsonMessage={lastJsonMessage} />}
      </main>
    </article>
  );
}

export default App;
