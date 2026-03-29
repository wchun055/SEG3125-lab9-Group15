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
        <div className="w-full mx-auto flex flex-col items-center py-32 px-6 bg-white transition-all duration-300 max-w-6xl">
        <div className="flex flex-col items-center gap-6 text-center mb-16">
          <h1 className="text-5xl font-semibold leading-14 tracking-tight text-slate-900">
            {english ? "Our Services" : "Nos Services"}
          </h1>
          <p className="max-w-2xl text-xl leading-8 text-slate-700">
            {english ? "Beauty, refined." : "Beauté, raffinée."}
          </p>
        </div>

        <div className="w-full space-y-16">
          {/* LASHES */}
          <div className="flex flex-col items-center gap-8">
            <p className="text-xs uppercase tracking-wider text-slate-400">{english ? "Lashes" : "Cils"}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-full h-56 rounded-xl overflow-hidden bg-gray-200 shadow-sm">
                  <img src="/assets/lash-lift.jpg" alt="Lash Lift" className="w-full h-full object-cover"/>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{english ? "Lash Lift" : "Levée de Cils"}</h3>
                  <p className="text-xs text-slate-500 mt-1">{english ? "60 min" : "60 min"}</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-full h-56 rounded-xl overflow-hidden bg-gray-200 shadow-sm">
                  <img src="/assets/lash-tint.jpg" alt="Lash Tint" className="w-full h-full object-cover"/>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{english ? "Lash Tint" : "Teinture de Cils"}</h3>
                  <p className="text-xs text-slate-500 mt-1">{english ? "30 min" : "30 min"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* BROWS */}
          <div className="flex flex-col items-center gap-8">
            <p className="text-xs uppercase tracking-wider text-slate-400">{english ? "Brows" : "Sourcils"}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-full h-56 rounded-xl overflow-hidden bg-gray-200 shadow-sm">
                  <img src="/assets/eyebrow-threading.jpg" alt="Eyebrow Threading" className="w-full h-full object-cover"/>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{english ? "Eyebrow Threading" : "Duvet de Sourcils"}</h3>
                  <p className="text-xs text-slate-500 mt-1">{english ? "20 min" : "20 min"}</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-full h-56 rounded-xl overflow-hidden bg-gray-200 shadow-sm">
                  <img src="/assets/eyebrow-waxing.jpg" alt="Eyebrow Waxing" className="w-full h-full object-cover"/>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{english ? "Eyebrow Waxing" : "Cire de Sourcils"}</h3>
                  <p className="text-xs text-slate-500 mt-1">{english ? "20 min" : "20 min"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* WAXING */}
          <div className="flex flex-col items-center gap-8">
            <p className="text-xs uppercase tracking-wider text-slate-400">{english ? "Waxing" : "Épilation"}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-full h-56 rounded-xl overflow-hidden bg-gray-200 shadow-sm">
                  <img src="/assets/half-arm-wax.jpg" alt="Half Arm Wax" className="w-full h-full object-cover"/>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{english ? "Half Arm Wax" : "Cire de Demi-Bras"}</h3>
                  <p className="text-xs text-slate-500 mt-1">{english ? "30 min" : "30 min"}</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-full h-56 rounded-xl overflow-hidden bg-gray-200 shadow-sm">
                  <img src="/assets/half-leg-wax.jpg" alt="Half Leg Wax" className="w-full h-full object-cover"/>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{english ? "Half Leg Wax" : "Cire de Demi-Jambe"}</h3>
                  <p className="text-xs text-slate-500 mt-1">{english ? "40 min" : "40 min"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}
