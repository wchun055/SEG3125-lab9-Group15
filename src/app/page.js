'use client';

import Link from 'next/link';
import Header from './components/Header';
import SideNav from './components/SideNav';
import { useLanguage } from './context/LanguageContext';

export default function Home() {
  const { english } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Header />
      <SideNav />

      <main className="w-full lg:ml-48">
        <div className="w-full mx-auto flex flex-col gap-16 px-6 py-10 md:py-16 transition-all duration-300 max-w-6xl">
        <section className="grid gap-8 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm md:grid-cols-2 md:p-12">
          <div className="flex flex-col justify-center gap-6">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              {english ? 'JZ Styles' : 'JZ Styles'}
            </h1>
            <p className="max-w-xl text-lg text-slate-600">
              {english
                ? 'Premium brow, lash, and waxing services — crafted for you.'
                : 'Services de sourcils, cils et épilation de qualité supérieure — conçus pour vous.'}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/booking" className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                {english ? 'Book your appointment' : 'Prenez rendez-vous'}
              </Link>
              <Link href="/feedback" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                {english ? 'Give us feedback' : 'Donnez-nous votre avis'}
              </Link>
            </div>
            <div className="text-sm text-slate-500">
              {english ? 'Trusted by clients across the community' : 'Fait confiance aux clients dans la communauté'}
            </div>
          </div>
          <div className="h-56 overflow-hidden rounded-2xl shadow-inner md:h-auto">
            <img src="/assets/jz-styles.jpg" alt="JZ Styles" className="h-full w-full object-cover" />
          </div>
        </section>

        <section className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">{english ? 'Explore our locations' : 'Découvrez nos lieux'}</h2>
            <p className="text-lg text-slate-600">
              {english ? 'See our many different locations and the services they offer.' : "Découvrez nos nombreux lieux différents et les services qu'ils proposent."}
            </p>
            <Link href="/locations" className="inline-block rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              {english ? 'View our locations' : 'Voir nos lieux'}
            </Link>
          </div>
          <div className="h-64 overflow-hidden rounded-2xl shadow-sm">
            <img src="/assets/building.jpg" alt="Location" className="h-full w-full object-cover" />
          </div>
        </section>

        <section className="grid items-center gap-8 md:grid-cols-2">
          <div className="h-64 overflow-hidden rounded-2xl shadow-sm">
            <img src="/assets/team.jpg" alt="Technicians" className="h-full w-full object-cover" />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">{english ? 'Meet our technicians' : 'Rencontrez nos techniciens'}</h2>
            <p className="text-lg text-slate-600">
              {english
                ? 'Our team is made up of experienced, passionate beauty professionals dedicated to making you look and feel your best.'
                : "Notre équipe est composée de professionnels de l'esthétique expérimentés et passionnés, dédiés à vous faire regarder et vous sentir mieux."}
            </p>
            <Link href="/technicians" className="inline-block rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              {english ? 'Meet the team' : "Rencontrez l'équipe"}
            </Link>
          </div>
        </section>
        </div>
      </main>
    </div>
  );
}