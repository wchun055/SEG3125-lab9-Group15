'use client';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import { createFeedback } from "./action";
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
          <h1 className="text-5xl font-semibold leading-14 tracking-tight text-slate-900">
            {english ? "Feedback" : "Avis"}
          </h1>
          <p className="text-xl text-slate-700">
            {english ? "I would rate my experience a..." : "J'aimerais noter mon expérience de..."}
          </p>
        </div>
        <form className="w-full max-w-2xl" action={createFeedback}>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="rating gap-2">
                <input type="radio" name="rating" value="1" className="mask mask-star bg-yellow-400" aria-label="1 star" />
                <input type="radio" name="rating" value="2" className="mask mask-star bg-yellow-400" aria-label="2 star" />
                <input type="radio" name="rating" value="3" className="mask mask-star bg-yellow-400" aria-label="3 star" />
                <input type="radio" name="rating" value="4" className="mask mask-star bg-yellow-400" aria-label="4 star" />
                <input type="radio" name="rating" value="5" className="mask mask-star bg-yellow-400" aria-label="5 star" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base font-medium text-slate-900">{english ? "Which location did you visit?" : "Quel lieu avez-vous visité ?"}</label>
              <input required type="text" name="location" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"/>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base font-medium text-slate-900">{english ? "Who was your technician?" : "Qui était votre technicien ?"}</label>
              <input required type="text" name="technician" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"/>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base font-medium text-slate-900">{english ? "Additional feedback" : "Avis supplémentaire"}</label>
              <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 h-32" name="feedback" placeholder={english ? "Tell us about your experience..." : "Parlez-nous de votre expérience..."}></textarea>
            </div>

            <button type="submit" className="w-full py-3 rounded-full bg-black text-white font-medium transition hover:bg-slate-900">
              {english ? "Submit Feedback" : "Soumettre un Avis"}
            </button>
          </div>
        </form>
        </div>
      </main>
    </div>
  );
}
