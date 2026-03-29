'use client';
import { createFeedback } from "./action";
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { english, changeLanguage } = useLanguage();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            {english ? "FEEDBACK" : "AVIS"}
          </h1>
          <button onClick={changeLanguage} className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">
            {english ? "changer en français" : "Change to English"}
          </button>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <form className="max-w-md mx-auto" action={createFeedback}>
            <label>{english ? "I would rate my experience a..." : "J'aimerais noter mon expérience de..."}</label>
            <br></br>
            <div className="rating">
              <input type="radio" name="rating" value="1" className="mask mask-star" aria-label="1 star" />
              <input type="radio" name="rating" value="2" className="mask mask-star" aria-label="2 star" />
              <input type="radio" name="rating" value="3" className="mask mask-star" aria-label="3 star" />
              <input type="radio" name="rating" value="4" className="mask mask-star" aria-label="4 star" />
              <input type="radio" name="rating" value="5" className="mask mask-star" aria-label="5 star" />
            </div>
            <br></br>
            <br></br>
            <label>{english ? "Which location did you visit?" : "Quel lieu avez-vous visité ?"}</label>
            <br></br>
            <input required type="text" name="location" className="border"/>
            <br></br>
            <br></br>
            <label>{english ? "Who was your technician?" : "Qui était votre technicien ?"}</label>
            <br></br>
            <input required type="text" name="technician" className="border"/>
            <br></br>
            <br></br>
            <label>{english ? "Additional notes" : "Notes supplémentaires"}</label>
            <br></br>
            <textarea className="border" name="feedback" placeholder={english ? "My feedback!!" : "Mon avis!!"}></textarea>
            <br></br>
            <br></br>
            <button type="submit" className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">
              {english ? "Submit Feedback" : "Soumettre un Avis"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
