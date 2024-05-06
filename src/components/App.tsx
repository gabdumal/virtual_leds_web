import { useState } from "react";
import Led from "./Led";

function App() {
	const ledsStatus = [...Array(255).keys()];
	// const ledsStatus = [1, 0, 1, 0];

	return (
		<article className={`h-full bg-amber-50`}>
			<header
				className={`sticky top-0 w-full z-10 p-4 font-semibold text-neutral-50 bg-blue-400 border-b-8 border-amber-950 drop-shadow-[0rem_0.25rem_0.125rem_rgba(10,10,10,0.75)]`}
			>
				<h1 className={`text-3xl text-neutral-50`}>
					<span
						className={`text-amber-950`}
						style={{
							textShadow: `hsl(21, 92%, 8%) 2px 2px`,
						}}
					>
						ESP32
					</span>{" "}
					<span
						style={{
							textShadow: `#0a0a0a 2px 2px`,
						}}
					>
						LEDs Monitoring
					</span>
				</h1>
			</header>
			<main className={`flex flex-wrap justify-start mx-4 py-4 gap-4`}>
				{ledsStatus.map((status, id) => (
					<Led id={id} isLit={status !== 0} key={id} />
				))}
			</main>
		</article>
	);
}

export default App;
