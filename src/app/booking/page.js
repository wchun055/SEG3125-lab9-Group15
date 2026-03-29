'use client';
import Link from "next/link";
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import { createBooking } from "./action";
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
            {english ? "Book Your Appointment Now" : "Réservez Votre Rendez-vous Maintenant"}
          </h1>
          <p className="text-xl text-slate-700">
            {english ? "Schedule your visit with our expert technicians" : "Planifiez votre visite avec nos techniciens experts"}
          </p>
        </div>
        <form className="w-full max-w-2xl" action={createBooking}>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-base font-medium text-slate-900">{english ? "Location" : "Emplacement"}</label>
              <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900" name="location" placeholder={english ? "Enter your location" : "Entrez votre emplacement"}/>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base font-medium text-slate-900">{english ? "Technician" : "Technicien"}</label>
              <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900" name="technician" placeholder={english ? "Enter your technician" : "Entrez votre technicien"}/>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base font-medium text-slate-900">{english ? "Date" : "Date"}</label>
              <input required type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900" name="date"/>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base font-medium text-slate-900">{english ? "Additional notes" : "Notes supplémentaires"}</label>
              <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 h-32" name="notes" placeholder={english ? "Allergies, preferences, etc." : "Allergies, préférences, etc."}></textarea>
            </div>

            <button type="submit" className="w-full py-3 rounded-full bg-black text-white font-medium transition hover:bg-slate-900">
              {english ? "Submit Booking" : "Soumettre la Réservation"}
            </button>
          </div>
        </form>
        </div>
      </main>
    </div>
  );
}
