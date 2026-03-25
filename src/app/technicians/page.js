export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Our Team
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            The hands behind the craft.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            {/* image here */}
            <h2 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Wanda the wand-er
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Lash Specialist
            </p>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              With over 8 years of experience in lash lifts and tints, Wanda waves her magic wand (of mascara) and brings precision and artistry to every appointment. She is passionate about enhancing your natural beauty.
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            {/* image here */}
            <h2 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Blanda the Brow-Hander
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Brow Artist
            </p>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Blanda is a certified brow architect with a sharp eye for symmetry and shape. Specializing in threading and waxing, she tailors every treatment to complement your unique features. 
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            {/* image here */}
            <h2 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Sandra the Skin-Sander
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Waxing & Brow Expert
            </p>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Sandra has 6 years of experience in full-body waxing and brow shaping. Known for her gentle touch and meticulous attention to detail, she ensures every client leaves feeling silky smooth and fabulous.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
