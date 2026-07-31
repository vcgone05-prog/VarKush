import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function RSVP() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState(true);
  const [partySize, setPartySize] = useState(1);
  const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submittedAttending, setSubmittedAttending] = useState(true);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("rsvps").insert([
  {
    name,
    attending,
    party_size: attending ? partySize : 0,
    message,
  },
]);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

   setSubmittedAttending(attending);
    setSubmitted(true);

    setName("");
    setPartySize(1);
    setMessage("");
    setAttending(true);
  }

  return (
   <section
  id="rsvp"
  className="py-24 px-6 flex justify-center"
>
      <div className="w-full max-w-xl mx-auto text-center">

        

        <h2
          className="text-5xl text-[#7B1D2A] mt-4"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          RSVP
        </h2>
<h3
className="text-2xl text-[#B88752] mt-2"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          by August 10, 2026
        </h3>

        {submitted ? (
          <div className="mt-10 border border-[#C89A2A] rounded-lg p-8 bg-white">
            <h3
              className="text-3xl text-[#7B1D2A]"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              Thank You!
            </h3>

          {submittedAttending ? (
            <p className="mt-4 text-[#6B4B3E] leading-8">
              Your RSVP has been received.
              <br />
              We're so excited to celebrate this special day with you!
              <br />
              We can't wait to welcome you to our wedding.
              <br />
              <span className="text-xl font-semibold underline decoration-[#C89A2A] underline-offset-4">
  Dress Code: Indian Ethnic Wear
</span>
            </p>
          ) : (
            <p className="mt-6 text-[#6B4B3E] leading-10">
              Thank you for letting us know.
              <br />
              While we're sad that you won't be able to join us, we completely understand.
              <br />
              We'll miss celebrating with you!
            </p>
          )}
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-12 space-y-8 text-left"
          >
            <div>
              <label className="block uppercase tracking-[0.25em] text-xs mb-2">
                Full Name
              </label>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-b border-[#C89A2A] bg-transparent py-3 outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block uppercase tracking-[0.25em] text-xs mb-3">
                Will you be attending?
              </label>

              <div className="flex gap-8">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={attending}
                    onChange={() => setAttending(true)}
                  />
                  Yes
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={!attending}
                    onChange={() => setAttending(false)}
                  />
                  No
                </label>
              </div>
            </div>

            {attending && (
  <div>
    <label className="block uppercase tracking-[0.25em] text-xs mb-2">
      Number of Attendees (including yourself)
    </label>

    <select
      value={partySize}
      onChange={(e) => setPartySize(Number(e.target.value))}
      className="w-full border-b border-[#C89A2A] bg-transparent py-3 outline-none appearance-none"
    >
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <option key={num} value={num}>
          {num}
        </option>
      ))}
    </select>
  </div>
)}

            <div>
              <label className="block uppercase tracking-[0.25em] text-xs mb-2">
                Message (Optional)
              </label>

              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-[#DCC6A4] rounded-md bg-white/40 p-4 outline-none resize-none"
                placeholder="Leave us a note..."
              />
            </div>

            <button
              disabled={loading}
              className="w-full bg-[#7B1D2A] text-white py-4 rounded hover:opacity-90 transition"
            >
              {loading ? "Sending..." : "SEND RSVP"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}