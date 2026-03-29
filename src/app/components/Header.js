'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { useNav } from '../context/NavContext';

export default function Header() {
  const { english, changeLanguage } = useLanguage();
  const { isNavOpen, setIsNavOpen } = useNav();

  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="hidden lg:block p-2 hover:bg-gray-100 rounded transition text-slate-700"
            title={isNavOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <img src="/assets/Spa--Streamline-Sharp.svg" alt="Spa Streamline" className="h-8 w-8" />
            <span className="text-xl font-bold tracking-tight">JZ Styles</span>
          </Link>
        </div>
        <button onClick={changeLanguage} className="rounded-full bg-black px-5 py-2 text-white shadow-sm transition hover:bg-slate-900">
          {english ? 'Changer en Français' : 'Change to English'}
        </button>
      </div>
    </header>
  );
}
