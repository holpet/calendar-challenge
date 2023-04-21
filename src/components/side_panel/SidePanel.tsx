import SmallCalendar from "./components/SmallCalendar";

const SidePanel = () => {
  return (
    <aside className="border-r p-5 flex w-72 h-full">
      {/* <CreateEventButton /> */}
      <SmallCalendar />
      {/* <Labels /> */}
    </aside>
  );
};

export default SidePanel;
