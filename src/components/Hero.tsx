import { useEffect, useState } from "react";

import toranam from "../assets/images/toranam.png";
import ganesha from "../assets/images/ganesha.png";
import couplePhoto from "../assets/images/IMG_2228.jpg";
import banana from "../assets/images/banana.png";
import { MapPin } from "lucide-react";

export default function Hero() {
    const [showCalendarMenu, setShowCalendarMenu] = useState(false); 
    const weddingDate = new Date("2026-08-30T11:45:00");
    const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
const event = {
  title: "Varshini & Kushwanth Wedding",
  location: "Sri Venkateswara Temple, Novi, Michigan",
  description:
    "Together with their families, Varshini & Kushwanth invite you to celebrate their wedding.",
  start: new Date("2026-08-30T11:45:00-04:00"),
  end: new Date("2026-08-30T16:00:00-04:00"),
};

const formatGoogleDate = (date: Date) =>
  date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

const googleCalendarUrl =
  `https://calendar.google.com/calendar/render?action=TEMPLATE` +
  `&text=${encodeURIComponent(event.title)}` +
  `&dates=${formatGoogleDate(event.start)}/${formatGoogleDate(event.end)}` +
  `&details=${encodeURIComponent(event.description)}` +
  `&location=${encodeURIComponent(event.location)}`;

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = weddingDate.getTime() - new Date().getTime();

      if (diff <= 0) return;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const countdown = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];
const downloadICS = () => {
  const formatICSDate = (date: Date) =>
    date
      .toISOString()
      .replace(/[-:]/g, "")
      .split(".")[0] + "Z";

  const ics = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
DTSTART:${formatICSDate(event.start)}
DTEND:${formatICSDate(event.end)}
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([ics], {
    type: "text/calendar;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "Varshini-Kushwanth-Wedding.ics";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};
  return (
    <section className="bg-[#FAF4EC] min-h-screen overflow-hidden">

      <div className="flex justify-center pt-0">
        <img
          src={toranam}
          alt=""
          className="w-[900px] max-w-[98%]"
        />
      </div>

     <div className="relative mt-8">
  {/* Left banana */}
  <img
    src={banana}
    alt=""
    className="
      absolute
      left-0
      top-1/2
      -translate-y-1/2
      w-22
      sm:w-36
      md:w-44
      -scale-x-100
      pointer-events-none
      select-none
    "
  />

  {/* Ganesha */}
  <div className="flex justify-center">
    <img
      src={ganesha}
      alt=""
      className="w-16 relative z-10 scale-130 sm:scale-150 md:scale-150"
    />
  </div>

  {/* Right banana */}
  <img
    src={banana}
    alt=""
    className="
      absolute
      right-0
      top-1/2
      -translate-y-1/2
      w-22
      sm:w-36
      md:w-44
      pointer-events-none
      select-none
    "
  />
</div>
     
      <nav className="mt-8 flex justify-center gap-10 uppercase tracking-[0.35em] text-[11px]">
        <a href="#">Home</a>
        <a href="#live">Live Link</a>
        <a href="#rsvp">RSVP</a>
      </nav>

      <div className="border-b border-[#E7D8C3] mt-8" />

      <div className="max-w-3xl mx-auto text-center px-6 pt-16">
        <p className="uppercase tracking-[0.4em] text-xs text-[#B88752]">
          Together with their families
        </p>

        <h1
  className="mt-8 text-6xl md:text-8xl leading-none text-[#7B1D2A]"
  style={{ fontFamily: "Cormorant Garamond" }}
>
  Varshini
  <br />
  <span className="text-[#C89A2A] text-5xl md:text-6xl">&</span>
  <br />
  Kushwanth
</h1>     
<div className="flex justify-center mt-12">
  <div
    className="
      w-[400px]
      h-[480px]
      rounded-[32px]
      overflow-hidden
      border
      border-[#C89A2A]
      shadow-xl
    "
  >
    <img
      src={couplePhoto}
      alt="Varshini and Kushwanth"
      className="w-full h-full object-cover object-top scale-105 translate-y-1"
    />
  </div>
</div>

<div className="max-w-xl mx-auto text-center mt-12">

  <div className="w-24 h-px bg-[#C89A2A] mx-auto mb-8"></div>

  <p className="italic text-[#9B6A5A] text-lg">
    Invite you to celebrate their wedding
  </p>

  <h2
    className="mt-5 text-5xl text-[#7B1D2A]"
    style={{ fontFamily: "Cormorant Garamond" }}
  >
    Sunday, August 30, 2026
  </h2>

  <p className="mt-4 uppercase tracking-[0.35em] text-sm text-[#B88752]">
    Muhurtham · 11:45 AM
  </p>

  <div className="mt-6">
  <p className="text-lg leading-8 text-[#5A4633]">
    Sri Venkateswara Temple
    <br />
    Novi, Michigan
  </p>

  <a
  href="https://maps.google.com/?q=Sri+Venkateswara+Temple+Novi+Michigan"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex
    items-center
    gap-2
    mt-3
    text-[#B88752]
    hover:text-[#7B1D2A]
    hover:underline
    underline-offset-4
    decoration-[#C89A2A]
    transition-all
    duration-200
  "
>
  <MapPin size={16} color="#B88752" />
  <span className="uppercase tracking-[0.2em] text-sm">
    Get Directions
  </span>
</a>
</div>
</div>


        <div className="
              mt-10
              grid
              grid-cols-4
              gap-2
              sm:gap-4
              max-w-sm
              sm:max-w-md
              mx-auto
              px-2
              ">
          {countdown.map((item) => (

            <div
              key={item.label}
              className="
              w-full
              aspect-square
              sm:w-28
              sm:h-28
              rounded-xl
              border
              border-[#E4D3B8]
              bg-white/40
              flex
              flex-col
              items-center
              justify-center"
            >

              <div
                className="text-3xl sm:text-5xl leading-none text-[#7B1D2A]"
                style={{ fontFamily: "Cormorant Garamond" }}
              >
                {String(item.value).padStart(2, "0")}
              </div>

              <div className="uppercase text-[9px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.25em] mt-2 text-[#9B6A5A]">
                {item.label}
              </div>

            </div>

          ))}

        </div>

        <div className="mt-10 flex justify-center gap-5 flex-wrap pb-24">

          <button
  onClick={() =>
    document
      .getElementById("rsvp")
      ?.scrollIntoView({
        behavior: "smooth",
      })
  }
className="
bg-[#7B1D2A]
text-white
px-20
py-[18px]
rounded-full
uppercase
tracking-[0.25em]
hover:opacity-90
transition
"
>
  RSVP NOW
</button>


 <div className="relative inline-block">

  <button
    onClick={() => setShowCalendarMenu(!showCalendarMenu)}
    className="
        border
        border-[#7B1D2A]
        px-10
        py-4
        rounded-full
        tracking-widest
        uppercase
        hover:bg-[#7B1D2A]
        hover:text-white
        transition
        "
  >
    ADD TO CALENDAR
  </button>

  {showCalendarMenu && (
  <div className="absolute right-0 bottom-full mb-2 w-56 bg-white rounded-xl shadow-xl border border-[#E4D3B8] bg-white z-50">
<a
  href={googleCalendarUrl}
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setShowCalendarMenu(false)}
  className="
    block
    w-full
    text-left
    px-5
    py-3
    hover:bg-[#FAF4EC]
    transition
  "
>
  Google Calendar
</a>

<button
  className="w-full text-left px-5 py-3 hover:bg-[#FAF4EC] transition"
  onClick={() => {
  downloadICS();
  setShowCalendarMenu(false);
}}
>
  Apple Calendar
</button>

<button
  className="w-full text-left px-5 py-3 hover:bg-[#FAF4EC] transition"
  onClick={() => {
  downloadICS();
  setShowCalendarMenu(false);
}}
>
  Outlook
</button>

    </div>
  )}
</div>
</div>
</div>
       
</section>
  );
}
