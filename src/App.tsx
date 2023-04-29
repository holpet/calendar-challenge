import { CalendarFullView } from "./components/calendar/full_calendar/CalendarFullView";
import Tentacles from "./components/gfx_elems/Tentacles";
import SidePanel from "./components/side_panel/SidePanel";

function App() {
  const style = {
    gradient: "bg-gradient-to-br from-purple via-pink to-blue",
    bg: "bg-white border border-light-gray",
  };

  return (
    <>
      <div className={`h-screen ${style.gradient}`}>
        <div className="flex h-full">
          {/* SIDE PANEL */}
          <aside className="flex py-6 pl-6 text-xl">
            <div className={`${style.bg}`}>
              <SidePanel />
            </div>
          </aside>
          {/* MAIN PANEL */}
          <main className="w-full p-6 lg:text-[9px]/[13px] xl:text-xs xxl:text-sm xxxl:text-xl">
            <CalendarFullView />
          </main>
        </div>
      </div>
      <Tentacles type={"other"} />
    </>
  );
}

export default App;
