import { useState } from "react";
import { motion } from "framer-motion";
import { PlusCircle, Search, Download } from "lucide-react";

export default function App() {
  const [tickets, setTickets] = useState([
    { id: 1, subject: "Login issue", status: "Open", created: "2025-08-21" },
    { id: 2, subject: "Email not syncing", status: "In Progress", created: "2025-08-20" },
    { id: 3, subject: "System crash", status: "Closed", created: "2025-08-19" },
  ]);

  const [search, setSearch] = useState("");

  const filteredTickets = tickets.filter(ticket =>
    ticket.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-gray-800"
        >
          🛠️ JirTech Solutions Helpdesk
        </motion.h1>

        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-3 py-2 rounded-lg flex items-center gap-2">
            <PlusCircle size={18} /> New Ticket
          </button>
          <button className="border px-3 py-2 rounded-lg flex items-center gap-2">
            <Download size={18} /> Export CSV
          </button>
        </div>
      </header>

      {/* Search */}
      <div className="flex items-center gap-2 mb-4">
        <Search className="text-gray-500" size={18} />
        <input
          placeholder="Search tickets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 border rounded-lg max-w-sm"
        />
      </div>

      {/* Ticket List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTickets.map(ticket => (
          <motion.div
            key={ticket.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-white p-4 rounded-xl shadow">
              <h2 className="font-semibold text-lg mb-2">{ticket.subject}</h2>
              <p className="text-sm text-gray-500">Status: {ticket.status}</p>
              <p className="text-xs text-gray-400">Created: {ticket.created}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Back to Top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        ↑
      </motion.button>
    </div>
  );
}
