import { clsx } from "clsx/lite";
import Header from "./Header";
import Led from "./Led";

function App() {
  const ledsStatus = [...Array(256).keys()];

  return (
    <article className="h-full bg-amber-50">
      <Header />
      <main
        className={clsx(
          "mx-2 flex flex-wrap justify-evenly py-4",
          "gap-4",
          "sm:gap-6",
          "md:gap-8",
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
