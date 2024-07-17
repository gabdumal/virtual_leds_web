import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

interface ConnectProps {
  setServerUrl: (serverUrl: string) => void;
}

export default function Connect({ setServerUrl }: ConnectProps) {
  const [alertIsVisible, setAlertIsVisible] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("192.168.0.15");
  const [port, setPort] = useState<string>("8100");

  const setUpConnection = () => {
    const serverUrl = `ws://${address}:${port}`;
    console.log("The URL", serverUrl, "is");
    const pattern =
      /^(wss?:\/\/)([0-9]{1,3}(?:\.[0-9]{1,3}){3}|[a-zA-Z]+):([0-9]{1,5})$/;
    const isValid = pattern.test(serverUrl);
    if (isValid) {
      console.log("Valid!");
      tryConnection(serverUrl);
    } else {
      console.log("Invalid!");
    }
    setAlertIsVisible(!isValid);
  };

  function tryConnection(serverUrl: string) {
    console.log("Connecting...");
  }

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-neutral-950 text-center text-3xl font-bold">
        Connect to Microcontroller
      </h2>
      <Input
        name="address"
        label="IP Address"
        value={address}
        setValue={setAddress}
      />
      <Input name="port" label="Port" value={port} setValue={setPort} />
      <Button text="Connect" handlePressed={setUpConnection} />
      {alertIsVisible && (
        <div className="rounded-full border-2 bg-danger-light px-2 font-semibold shadow-inner-2">
          <p className="text-center text-lg text-light">This URL is invalid!</p>
        </div>
      )}
    </section>
  );
}
