import { CalendarFullView } from "./components/calendar/full_calendar/CalendarFullView";
import SidePanel from "./components/side_panel/SidePanel";

/* Design notes: */
// "4.5rem" is the height of the header, so the full screen height is calculated without it
// CONTROL class to be deleted for production - serves only as guides

function App() {
  return (
    <div className="text-dark-gray flex flex-col h-screen bg-white-gray">
      {/* <Header /> */}
      <div className="flex h-full z-0">
        <aside className="flex w-[1fr] bg-pink-500">
          <div className="w-full flex mx-auto pl-6 pr-0 py-6">
            <div className="w-full flex items-start justify-center text-gray-900 text-xl bg-white border border-light-gray">
              <SidePanel />
            </div>
          </div>
        </aside>
        <main className="flex flex-col w-full overflow-y-auto">
          <div className="flex w-full min-h-full mx-auto p-6">
            <div className="w-full min-h-full items-center justify-center text-gray-900 text-sm">
              <CalendarFullView />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
