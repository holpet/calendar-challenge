import Header from "./components/Header";
import SidePanel from "./components/side_panel/SidePanel";

function App() {
  return (
    <div className="text-dark-gray">
      <Header />
      <main className="">
        <SidePanel />
      </main>
    </div>
  );
}

export default App;
