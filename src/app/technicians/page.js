'use client';

import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { english, changeLanguage } = useLanguage();
  return (
    
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            {english ? "Our Team" : "Notre Équipe"}
          </h1>
          <button onClick={changeLanguage} className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">
            {english ? "changer en français" : "Change to English"}
          </button>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {english ? "The hands behind the craft." : "Les mains derrière l'art."}
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            {/* image here */}
            <h2 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              {english ? "Wanda the wand-er" : "Wanda la portée de balai"}
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {english ? "Lash Specialist" : "Spécialiste des cils"}
            </p>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              {english ? "With over 8 years of experience in lash lifts and tints, Wanda waves her magic wand (of mascara) and brings precision and artistry to every appointment. She is passionate about enhancing your natural beauty." : "Avec plus de 8 ans d'expérience dans les levées et teintures de cils, Wanda agite sa baguette magique (de maquillage) et apporte précision et art dans chaque rendez-vous. Elle est passionnée par l'amélioration de votre beauté naturelle."}
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            {/* image here */}
            <h2 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              {english ? "Blanda the Brow-Hander" : "Blanda la Gérante des Sourcils"}
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {english ? "Brow Artist" : "Artiste des Sourcils"}
            </p>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              {english ? "Blanda is a certified brow architect with a sharp eye for symmetry and shape. Specializing in threading and waxing, she tailors every treatment to complement your unique features." : "Blanda est une architecte de sourcils certifiée avec un œil aiguisé pour la symétrie et la forme. Spécialisée dans le duvet et le cire, elle personnalise chaque traitement pour compléter vos caractéristiques uniques."}
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            {/* image here */}
            <h2 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              {english ? "Sandra the Skin-Sander" : "Sandra la Démaquante"}
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {english ? "Waxing & Brow Expert" : "Spécialiste du cire et des sourcils"}
            </p>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              {english ? "Sandra has 6 years of experience in full-body waxing and brow shaping. Known for her gentle touch and meticulous attention to detail, she ensures every client leaves feeling silky smooth and fabulous." : "Sandra a 6 ans d'expérience dans le cire corporel et la forme des sourcils. Connue pour son toucher doux et son attention méticuleuse aux détails, elle s'assure que chaque cliente parte avec une peau lisse et fabuleuse."}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
