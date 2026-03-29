'use client';

import Link from 'next/link';
import { useLanguage } from './context/LanguageContext';

export default function Home() {
  const { english, changeLanguage } = useLanguage();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            JZ Styles
          </h1>
          <button onClick={changeLanguage} className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">
            {english ? "changer en français" : "Change to English"}
          </button>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {english ? "Premium brow, lash, and waxing services - crafted for you" : "Services de sourcils, cils et épilation de qualité supérieure - conçus pour vous"}
          </p>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <Link href="/booking">
              <button className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">
                {english ? "Book your appointment" : "Prenez rendez-vous"}
              </button>
            </Link>
            <Link href="/feedback">
              <button className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]">
                {english ? "Give us feedback" : "Donnez-nous votre avis"}
              </button>
            </Link>
          </div>
        </div>
        <div>
          {/* image here */}
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {english ? "Trusted by clients across the community" : "Fait confiance aux clients dans la communauté"}
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <div className=" items-center gap-4">
            <h2 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              {english ? "Explore our locations" : "Découvrez nos lieux"}
            </h2>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              {english ? "See our many different locations and the services they offer." : "Découvrez nos nombreux lieux différents et les services qu'ils proposent."}
            </p>
            <Link href="/locations">
              <button className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">
                {english ? "View our locations" : "Voir nos lieux"}
              </button>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {/* image here */}
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <div className="flex items-center gap-4">
            {/* image here */}
          </div>
          <div className=" items-center gap-4">
            <h2 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              {english ? "Meet our technicians" : "Rencontrez nos techniciens"}
            </h2>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              {english ? "Our team is made up of experienced, passionate beauty professionals dedicated to making you look and feel your best." : "Notre équipe est composée de professionnels de l'esthétique expérimentés et passionnés, dédiés à vous faire regarder et vous sentir mieux."}
            </p>
            <Link href="/technicians">
              <button className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">
                {english ? "Meet the team" : "Rencontrez l'équipe"}
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}