import { useEffect, useMemo, useState } from "react";
import { supabase } from "../lib/supabase";
import * as XLSX from "xlsx";

type RSVP = {
  id: number;
  created_at: string;
  name: string;
  attending: boolean;
  party_size: number;
  message: string;
};

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

export default function Admin() {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");

  const [guests, setGuests] = useState<RSVP[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (authorized) {
      fetchGuests();
    }
  }, [authorized]);

  async function fetchGuests() {
    setLoading(true);

    const { data, error } = await supabase
      .from("rsvps")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setGuests(data);
    }

    setLoading(false);
  }
function exportToExcel() {
  const data = guests.map((guest) => ({
    Name: guest.name,
    Attending: guest.attending ? "Yes" : "No",
    "Party Size": guest.party_size,
    Message: guest.message || "",
    Submitted: new Date(guest.created_at).toLocaleString(),
  }));

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Wedding RSVPs"
  );

  XLSX.writeFile(workbook, "Wedding_RSVPs.xlsx");
}

  const filteredGuests = useMemo(() => {
    return guests.filter((guest) =>
      guest.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [guests, search]);

  const totalGuests = guests.reduce(
    (sum, guest) => sum + guest.party_size,
    0
  );

  const attendingCount = guests.filter((g) => g.attending).length;

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF4EC]">
        <div className="bg-white p-8 rounded-xl shadow-md w-96">
          <h1
            className="text-4xl text-[#7B1D2A] text-center mb-6"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Wedding Dashboard
          </h1>

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={() => {
              if (password === ADMIN_PASSWORD) {
                setAuthorized(true);
              } else {
                alert("Incorrect password");
              }
            }}
            className="w-full bg-[#7B1D2A] text-white py-3 rounded"
          >
            Enter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF4EC] p-10">

      <div className="flex justify-between items-center mb-8">

        <h1
          className="text-5xl text-[#7B1D2A]"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Wedding Dashboard
        </h1>

       <div className="flex gap-3">
  <button
    onClick={fetchGuests}
    className="border border-[#7B1D2A] text-[#7B1D2A] px-4 py-2 rounded hover:bg-[#7B1D2A] hover:text-white transition"
  >
    Refresh
  </button>

  <button
    onClick={exportToExcel}
    className="bg-[#7B1D2A] text-white px-4 py-2 rounded hover:opacity-90 transition"
  >
    Export Excel
  </button>
</div>

      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Summary Cards */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

            <div className="bg-white rounded-xl p-6 shadow">
              <p className="text-gray-500">Total RSVPs</p>
              <h2 className="text-4xl font-bold">
                {guests.length}
              </h2>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <p className="text-gray-500">Attending</p>
              <h2 className="text-4xl font-bold">
                {attendingCount}
              </h2>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <p className="text-gray-500">Total Guests</p>
              <h2 className="text-4xl font-bold">
                {totalGuests}
              </h2>
            </div>

          </div>

          <input
            placeholder="Search guest..."
            className="w-full border rounded-lg p-3 mb-6"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="overflow-x-auto rounded-xl shadow">

            <table className="w-full bg-white">

              <thead className="bg-[#7B1D2A] text-white">

                <tr>

                  <th className="p-4 text-left">Name</th>
                  <th>Status</th>
                  <th>Guests</th>
                  <th>Message</th>
                  <th>Submitted</th>

                </tr>

              </thead>

              <tbody>

                {filteredGuests.map((guest) => (

                  <tr
                    key={guest.id}
                    className="border-b hover:bg-[#FFF8F2]"
                  >
                    <td className="p-4">
                      {guest.name}
                    </td>

                    <td className="text-center">
                      {guest.attending ? "✅" : "❌"}
                    </td>

                    <td className="text-center">
                      {guest.party_size}
                    </td>

                    <td className="p-4">
                      {guest.message || "-"}
                    </td>

                    <td className="text-center">
                      {new Date(
                        guest.created_at
                      ).toLocaleDateString()}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </>
      )}

    </div>
  );
}
