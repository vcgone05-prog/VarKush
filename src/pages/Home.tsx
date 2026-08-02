import Hero from "../components/Hero";
import LiveLink from "../components/LiveLink";
import RSVP from "../components/RSVP";

export default function Home() {
  return (
   <>
  <Hero />
  <LiveLink />
  <RSVP />

  <footer className="py-20 text-center">
    <div className="w-24 h-px bg-[#C89A2A] mx-auto mb-8"></div>

    <p
      className="text-4xl text-[#7B1D2A]"
      style={{ fontFamily: "Cormorant Garamond" }}
    >
      #VarshGotHerKush
    </p>

    <p className="mt-4 uppercase tracking-[0.35em] text-lg text-[#A97555]">
      08.30.2026
    </p>
  </footer>
</>
  );
}
