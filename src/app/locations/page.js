'use client';

import Header from '../components/Header';
import SideNav from '../components/SideNav';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { english } = useLanguage();
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Header />
      <SideNav />
      <main className="w-full lg:ml-48">
        <div className="w-full mx-auto flex flex-col items-center justify-between py-32 px-6 bg-white transition-all duration-300 max-w-6xl">
        <div className="flex flex-col items-center gap-6 text-center mb-12">
          <h1 className="max-w-2xl text-5xl font-semibold leading-14 tracking-tight text-slate-900">
            {english ? "Our Locations" : "Nos Lieux"}
          </h1>
          <p className="max-w-2xl text-xl leading-8 tracking-tight text-slate-700">
            {english ? "Explore our different locations to see which spa offers your interested services." : "Découvrez nos différents lieux pour voir quels spas offrent les services qui vous intéressent."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="flex flex-col items-center gap-6 text-center">
            <img src="/assets/apple-road.jpg" alt="Apple Road" className="w-full h-72 object-cover rounded-2xl shadow-sm"></img>
            <h2 className="text-2xl font-semibold text-slate-900">123 Apple Road</h2>
            <p className="text-base text-slate-700">
              {english ? "Visit our Apple Road location for premium spa services." : "Visitez notre lieu d'Apple Road pour des services de spa haut de gamme."}
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 text-center">
            <img src="/assets/pear-drive.jpg" alt="Pear Avenue" className="w-full h-72 object-cover rounded-2xl shadow-sm"></img>
            <h2 className="text-2xl font-semibold text-slate-900">456 Pear Avenue</h2>
            <p className="text-base text-slate-700">
              {english ? "Discover our Pear Avenue location with full spa amenities." : "Découvrez notre lieu d'Pear Avenue avec toutes les commodités du spa."}
            </p>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}
