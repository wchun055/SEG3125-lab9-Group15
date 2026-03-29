'use client';
import Link from "next/link";
import { createMessage } from "./action";
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { english, changeLanguage } = useLanguage();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            {english ? "BOOK Your Appointment Now" : "RESERVE Votre Rendez-vous Maintenant"}
          </h1>
          <button onClick={changeLanguage} className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">
            {english ? "changer en français" : "Change to English"}
          </button>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <form className="max-w-md mx-auto" action={createMessage}>
            <label>{english ? "Enter your location:" : "Entrez votre emplacement:"}</label>
            <br></br>
            <input required type="text" className="border" name="location"/>
            <br></br> {/*used for spacing, can replace */}
            <br></br>
            <label>{english ? "Enter your technician:" : "Entrez votre technicien:"}</label>
            <br></br>
            <input required type="text" className="border" name="technician"/>
            <br></br> {/*used for spacing, can replace */}
            <br></br>
            <label>{english ? "Enter your date:" : "Entrez votre date:"}</label>
            <br></br>
            <input required type="date" className="border" name="date"/>
            <br></br> {/*used for spacing, can replace */}
            <br></br>
            <label>{english ? "Additional notes" : "Notes supplémentaires"}</label>
            <br></br>
            <textarea className="border" name="notes" placeholder={english ? "Allergies, etc." : "Allergies, etc."}></textarea>
            <br></br>
            <br></br>
            <button type="submit" className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">
              {english ? "Submit Booking" : "Soumettre la Réservation"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
