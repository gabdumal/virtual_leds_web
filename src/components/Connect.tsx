import { useState } from "react";

interface ConnectProps {
  setServerUrl: (serverUrl: string) => void;
}

export default function Connect({ setServerUrl }: ConnectProps) {
  const [serverAddress, setServerAddress] = useState<string>();
  const [port, setPort] = useState<string>();

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-neutral-950 text-3xl font-bold">
        Connect to Microcontroller
      </h2>
    </section>
  );
}
