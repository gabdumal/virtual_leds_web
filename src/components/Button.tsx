interface ButtonProps {
  text: string;
  handlePressed: Function;
}

export default function Button({ text, handlePressed }: ButtonProps) {
  return (
    <button
      className="rounded-full border-2 bg-primary-common shadow-outer-4 hover:bg-primary-dark active:shadow-inner-2"
      onClick={() => handlePressed()}
    >
      <p className="py-0.5 text-xl font-semibold">{text}</p>
    </button>
  );
}
