export default function LiveLink() {
  return (
    <section
      id="live"
      className="bg-[#FAF4EC] py-24 text-center px-6"
    >
      <div className="max-w-xl mx-auto">

        <div className="flex items-center justify-center gap-5 mb-10">
          <div className="w-20 h-px bg-[#D8C5A5]" />
          <span className="text-[#C89A2A] text-lg">✦</span>
          <div className="w-20 h-px bg-[#D8C5A5]" />
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
            border-[#C89A2A]
            text-[#C89A2A]
            px-8
            py-3
            rounded
            cursor-not-allowed
            opacity-60
          "
        >
          COMING SOON
        </button>

      </div>
    </section>
  );
}