
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Home, Shuffle, Save, Clock, Settings as Gear } from "lucide-react";

import RoutePlanner from "./RoutePlanner";
import CompareModes from "./CompareModes";
import SavedRoutes from "./SavedRoutes";
import TravelHistory from "./TravelHistory";
import Settings from "./Settings";

const tabs = [
  { name: "Route Planner", icon: Home,     Component: RoutePlanner },
  { name: "Compare Modes", icon: Shuffle,   Component: CompareModes },
  { name: "Saved Routes",  icon: Save,      Component: SavedRoutes },
  { name: "Travel History",icon: Clock,     Component: TravelHistory },
  { name: "Settings",      icon: Gear,      Component: Settings },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Route Planner");
  const ActiveComponent = tabs.find((t) => t.name === activeTab).Component;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-100 to-blue-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 hidden md:block">
        <h1 className="text-3xl font-bold text-green-700 mb-8">EcoRoute</h1>
        <nav className="flex flex-col gap-4">
          {tabs.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => setActiveTab(name)}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-green-100 transition ${
                activeTab === name ? "bg-green-200 font-semibold" : "text-gray-800"
              }`}
            >
              <Icon className="w-5 h-5" /> {name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="h-full"
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
