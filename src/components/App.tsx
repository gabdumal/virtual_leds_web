import { clsx } from "clsx/lite";
import Header from "./Header";
import Led from "./Led";

function App() {
  const ledsStatus = [...Array(256).keys()];

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
          <Led id={id} isLit={status !== 0} key={id} />
        ))}
      </main>
    </article>
  );
}

export default App;
