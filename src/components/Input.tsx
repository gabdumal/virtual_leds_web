interface InputProps {
  name: string;
  label: string;
  value: string;
  setValue: (value: string) => void;
}

export default function Input({ name, label, value, setValue }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-xl font-semibold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border-neutral-950 rounded-full border-2 px-2 py-1"
      />
    </div>
  );
}
