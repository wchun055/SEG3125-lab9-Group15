import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            JZ Styles
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Premium brow, lash, and waxing services - crafted for you
          </p>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <Link href="/booking">
              <button className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">
                Book your appointment
              </button>
            </Link>
            <Link href="/feedback">
              <button className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]">
                Give us feedback
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img src="/assets/jz-styles.jpg" alt="JZ Styles"></img>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Trusted by clients across the community
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <div className=" items-center gap-4">
            <h2 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Explore our locations
            </h2>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              See our many different locations and the services they offer.
            </p>
            <Link href="/locations">
              <button className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">
                View our locations
              </button>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <img src="/assets/building.jpg" alt="Location"></img>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <div className="flex items-center gap-4">
            <img src="/assets/team.jpg" alt="Technicians"></img>
          </div>
          <div className=" items-center gap-4">
            <h2 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Meet our technicians
            </h2>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Our team is made up of experienced, passionate beauty professionals dedicated to making you look and feel your best.
            </p>
            <Link href="/technicians">
              <button className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">
                Meet the team
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}