import { useCallback, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Alert from "./Alert";

interface ConnectProps {
  setServerUrl: (serverUrl: string) => void;
}

export default function Connect({ setServerUrl }: ConnectProps) {
  const [alertIsVisible, setAlertIsVisible] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("192.168.15.144");
  const [port, setPort] = useState<string>("8100");

  const setUpConnection = () => {
    const serverUrl = `ws://${address}:${port}`;
    console.log("The URL", serverUrl, "is");
    const pattern =
      /^(wss?:\/\/)([0-9]{1,3}(?:\.[0-9]{1,3}){3}|[a-zA-Z]+):([0-9]{1,5})$/;
    const isValid = pattern.test(serverUrl);
    if (isValid) {
      console.log("Valid!");
      handleConnect(serverUrl);
    } else {
      console.log("Invalid!");
    }
    setAlertIsVisible(!isValid);
  };

  const handleConnect = useCallback(
    (serverUrl: string) => setServerUrl(serverUrl),
    [],
  );

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
      {alertIsVisible && <Alert intent="danger" text="This URL is invalid!" />}
    </section>
  );
}
