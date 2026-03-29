export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Our Services
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Beauty, refined.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            LASHES
          </p>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-zinc-200 rounded-full">
              <img src="/assets/lash-lift.jpg" alt="Lash Lift"></img>
              <h2>Lash Lift</h2>
              <p>60 min</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-zinc-200 rounded-full">
              <img src="/assets/lash-tint.jpg" alt="Lash Tint"></img>
              <h2>Lash Tint</h2>
              <p>30 min</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            BROWS
          </p>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-zinc-200 rounded-full">
              <img src="/assets/eyebrow-threading.jpg" alt="Eyebrow Threading"></img>
              <h2>Eyebrow Threading</h2>
              <p>20 min</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-zinc-200 rounded-full">
              <img src="/assets/eyebrow-waxing.jpg" alt="Eyebrow Waxing"></img>
              <h2>Eyebrow Waxing</h2>
              <p>20 min</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            WAXING
          </p>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-zinc-200 rounded-full">
              <img src="/assets/half-arm-wax.jpg" alt="Half Arm Wax"></img>
              <h2>Half Arm Wax</h2>
              <p>30 min</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-zinc-200 rounded-full">
              <img src="/assets/half-leg-wax.jpg" alt="Half Leg Wax"></img>
              <h2>Half Leg Wax</h2>
              <p>40 min</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
