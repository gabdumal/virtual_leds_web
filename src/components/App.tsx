import { clsx } from "clsx/lite";
import { useState } from "react";
import Monitor from "./Monitor";
import Connect from "./Connect";
import Header from "./Header";

// /// Constants
// const serverPort = "8100";
// const serverAddress = "192.168.15.144";
// const serverUrl = `ws://${serverAddress}:${serverPort}`;

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
