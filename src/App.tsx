import MonthCalendar from "./components/calendar/month_calender/variants/MainMonthCalendar";
import Header from "./components/header/Header";
import SidePanel from "./components/side_panel/SidePanel";

/* Design notes: */
// "4.5rem" is the height of the header, so the full screen height is calculated without it
// CONTROL class to be deleted for production - serves only as guides

function App() {
  return (
    <div className="text-dark-gray flex flex-col h-screen">
      <Header />
      <div className="flex h-[calc(100vh-4.5rem)] z-0">
        <aside className="flex w-[1fr] bg-pink-500">
          <div className="w-full flex mx-auto pl-6 py-6 p-r-0">
            <div className="w-full flex items-start justify-center text-gray-900 text-xl CONTROL">
              <SidePanel />
            </div>
          </div>
        </aside>
        <main className="flex flex-col w-full bg-white overflow-y-auto">
          <div className="flex w-full min-h-[calc(100vh-4.5rem)] mx-auto px-6 py-6">
            <div className="w-full min-h-full items-center justify-center text-gray-900 text-xl">
              <MonthCalendar />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
