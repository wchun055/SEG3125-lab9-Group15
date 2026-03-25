import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            BOOK Your Appointment Now
          </h1>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <form class="max-w-md mx-auto" onSubmit="alert('Your appointment has been submitted!')">
            <label>Enter your location:</label>
            <br></br>
            <input required type="text" className="border"/>
            <br></br> {/*used for spacing, can replace */}
            <br></br>
            <label>Enter your technician:</label>
            <br></br>
            <input required type="text" className="border"/>
            <br></br> {/*used for spacing, can replace */}
            <br></br>
            <label>Enter your date:</label>
            <br></br>
            <input required type="date" className="border"/>
            <br></br> {/*used for spacing, can replace */}
            <br></br>
            <label>Additional notes</label>
            <br></br>
            <textarea className="border" placeholder="Allergies, etc."></textarea>
            <br></br>
            <br></br>
            <button type="submit" className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">
              Submit Booking
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
