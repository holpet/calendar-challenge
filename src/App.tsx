import { CalendarFullView } from "./components/calendar/full_calendar/CalendarFullView";
import Tentacles from "./components/gfx_elems/Tentacles";
import SidePanel from "./components/side_panel/SidePanel";

function App() {
  const style = {
    gradient: "bg-gradient-to-br from-purple via-pink to-blue",
    bg: "bg-white border border-light-gray",
    Aside: {
      padding: "py-edgeBase pl-edgeBase",
      text: "xs:text-xs lg:text-md xl:text-xl xxl:text-2xl",
    },
    Main: {
      padding: "p-edgeBase",
      text: "lg:text-xxs xl:text-xs xxl:text-sm xxxl:text-xl",
    },
  };

  return (
    <>
      <div className={`h-screen ${style.gradient}`}>
        <div className="flex h-full">
          {/* SIDE PANEL */}
          <aside className={`flex ${style.Aside.padding} ${style.Aside.text}`}>
            <div className={`${style.bg}`}>
              <SidePanel />
            </div>
          </aside>
          {/* MAIN PANEL */}
          <main className={`w-full ${style.Main.padding} ${style.Main.text}`}>
            <CalendarFullView />
          </main>
        </div>
      </div>
      <Tentacles type={"other"} />
    </>
  );
}

export default App;
