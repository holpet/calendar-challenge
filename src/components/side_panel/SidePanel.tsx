import SmallCalendar from "./components/SmallCalendar";

const SidePanel = () => {
  return (
    <aside className="border-r p-5 ">
      {/* <CreateEventButton /> */}
      <SmallCalendar />
      {/* <Labels /> */}
    </aside>
  );
};

export default SidePanel;
