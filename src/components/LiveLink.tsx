import floralDecor from "../assets/images/floral-decor.png";

export default function LiveLink() {
  return (
    <section
      id="live"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto flex items-end justify-center gap-12">

        {/* Left Decoration */}
        <img
          src={floralDecor}
          alt=""
          className="lg:block w-44 -scale-x-100 shrink-0"
        />

        {/* Main Content */}
        <div className="max-w-xl text-center">

          <div className="flex items-center justify-center gap-5 mb-10">
            <div className="w-20 h-px bg-[#7B1D2A]" />
            <span className="text-[#7B1D2A] text-lg">✦</span>
            <div className="w-20 h-px bg-[#7B1D2A]" />
          </div>

          <h2
            className="text-5xl text-[#7B1D2A]"
            style={{
              fontFamily: "Cormorant Garamond",
            }}
          >
            Live Link
          </h2>

          <p className="mt-6 text-[#765A4C] leading-8">
            We'll add the live stream link here
            <br />
            a few days before the wedding.
          </p>

          <button
            disabled
            className="
              mt-10
              border
              border-[#7B1D2A]
              text-[#7B1D2A]
              px-10
              py-3
              rounded
              cursor-not-allowed
              opacity-90
            "
          >
            COMING SOON
          </button>

          <div className="flex items-center justify-center gap-5 mt-10">
            <div className="w-20 h-px bg-[#7B1D2A]" />
            <span className="text-[#7B1D2A] text-lg">✦</span>
            <div className="w-20 h-px bg-[#7B1D2A]" />
          </div>

        </div>

        {/* Right Decoration */}
        <img
          src={floralDecor}
          alt=""
          className="lg:block w-44 shrink-0"
        />

      </div>
    </section>
  );
}