import { clsx } from "clsx/lite";
import { useEffect, useState } from "react";
import Monitor from "./Monitor";
import Connect from "./Connect";
import Header from "./Header";
import useWebSocket from "react-use-websocket";

export type Status = 0 | 1;

function App() {
  const [serverUrl, setServerUrl] = useState<string | null>(null);

  return (
    <article className="bg-amber-50 flex w-full flex-col items-center">
      <Header />
      <main className="flex flex-grow p-4">
        {serverUrl === null ?
          <Connect setServerUrl={setServerUrl} />
        : <Monitor serverUrl={serverUrl} />}
      </main>
    </article>
  );
}

export default App;
