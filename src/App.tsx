import Header from "./components/Header";
import SidePanel from "./components/side_panel/SidePanel";

function App() {
  return (
    <div className="text-dark-gray flex flex-col h-screen">
      <Header />
      <div className="flex h-[calc(100vh-5rem)] z-0">
        {/* <SidePanel /> */}
        <nav className="flex w-72 bg-pink-500">
          <div className="w-full flex mx-auto px-6 py-8">
            <div className="w-full flex items-center justify-center text-gray-900 text-xl border-4 border-gray-900 border-dashed">
              Sidebar
            </div>
          </div>
        </nav>
        <main className="flex flex-col w-full bg-white overflow-y-auto">
          <div className="flex w-full mx-auto px-6 py-8">
            <div className="flex flex-col w-full text-gray-900 text-xl border-4 border-gray-900 border-dashed">
              <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">
                Post
              </div>
              <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">
                Post
              </div>
              <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">
                Post
              </div>
              <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">
                Post
              </div>
              <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">
                Post
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
