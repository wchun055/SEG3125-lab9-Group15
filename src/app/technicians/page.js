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
        <div className="w-full mx-auto flex flex-col items-center justify-between py-16 px-6 bg-white transition-all duration-300 max-w-6xl">
        <div className="flex flex-col items-center gap-6 text-center mb-12">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900">
            {english ? "Our Team" : "Notre Équipe"}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 italic">
            {english ? "The hands behind the craft." : "Les mains derrière l'art."}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 w-full">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="w-full h-64 rounded-xl overflow-hidden bg-gray-200 shadow-md">
              <img src="/assets/wanda.jpg" alt="Wanda" className="w-full h-full object-cover"></img>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                {english ? "Wanda the wand-er" : "Wanda la portée de balai"}
              </h2>
              <p className="text-sm text-slate-500 font-medium mt-1">
                {english ? "Lash Specialist" : "Spécialiste des cils"}
              </p>
              <p className="text-slate-700 text-sm mt-3">
                {english ? "With over 8 years of experience in lash lifts and tints, Wanda waves her magic wand (of mascara) and brings precision and artistry to every appointment. She is passionate about enhancing your natural beauty." : "Avec plus de 8 ans d'expérience dans les levées et teintures de cils, Wanda agite sa baguette magique (de maquillage) et apporte précision et art dans chaque rendez-vous. Elle est passionnée par l'amélioration de votre beauté naturelle."}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="w-full h-64 rounded-xl overflow-hidden bg-gray-200 shadow-md">
              <img src="/assets/blanda.jpg" alt="Blanda" className="w-full h-full object-cover"></img>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                {english ? "Blanda the Brow-Hander" : "Blanda la Gérante des Sourcils"}
              </h2>
              <p className="text-sm text-slate-500 font-medium mt-1">
                {english ? "Brow Artist" : "Artiste des Sourcils"}
              </p>
              <p className="text-slate-700 text-sm mt-3">
                {english ? "Blanda is a certified brow architect with a sharp eye for symmetry and shape. Specializing in threading and waxing, she tailors every treatment to complement your unique features." : "Blanda est une architecte de sourcils certifiée avec un œil aiguisé pour la symétrie et la forme. Spécialisée dans le duvet et le cire, elle personnalise chaque traitement pour compléter vos caractéristiques uniques."}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="w-full h-64 rounded-xl overflow-hidden bg-gray-200 shadow-md">
              <img src="/assets/sandra.jpg" alt="Sandra" className="w-full h-full object-cover"></img>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                {english ? "Sandra the Skin-Sander" : "Sandra la Démaquante"}
              </h2>
              <p className="text-sm text-slate-500 font-medium mt-1">
                {english ? "Waxing & Brow Expert" : "Spécialiste du cire et des sourcils"}
              </p>
              <p className="text-slate-700 text-sm mt-3">
                {english ? "Sandra has 6 years of experience in full-body waxing and brow shaping. Known for her gentle touch and meticulous attention to detail, she ensures every client leaves feeling silky smooth and fabulous." : "Sandra a 6 ans d'expérience dans le cire corporel et la forme des sourcils. Connue pour son toucher doux et son attention méticuleuse aux détails, elle s'assure que chaque cliente parte avec une peau lisse et fabuleuse."}
              </p>
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}
