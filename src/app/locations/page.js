'use client';

import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { english, changeLanguage } = useLanguage();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            {english ? "Our Locations" : "Nos Lieux"}
          </h1>
          <button onClick={changeLanguage} className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">
            {english ? "changer en français" : "Change to English"}
          </button>
          <p className="max-w-xs text-2xl leading-10 tracking-tight text-black dark:text-zinc-50">
            {english ? "Explore our different locations to see which spa offers your interested services." : "Découvrez nos différents lieux pour voir quels spas offrent les services qui vous intéressent."}
          </p>
        </div>
        
        <form class="max-w-md mx-auto">   
            <label for="search" class="block mb-2.5 text-sm font-medium text-heading sr-only ">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
                </div>
                <input type="search" id="search" class="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search" required />
                {/* <button type="button" class="absolute end-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none">Search</button> */}
            </div>
        </form>
        
        <div className="gap-4 text-base font-medium">
          <div className="items-center gap-4">
            {/* image here */}
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              123 Apple Road
            </p>
          </div>
          <div className="items-center gap-4">
            {/* image here */}
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              456 Pear Avenue
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
