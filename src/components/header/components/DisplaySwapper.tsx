const DisplaySwapper = () => {
  return (
    <div className="flex items-center justify-items-center text-sm text-center">
      <button onClick={() => {}} className="py-2 px-4 mr-5">
        Today
      </button>
      <div className="bg-lightest-gray rounded-lg">
        <button onClick={() => {}} className="py-2 px-6 w-24">
          Day
        </button>
        <button
          onClick={() => {}}
          className="py-2 px-6 w-24 m-1 rounded-lg bg-purple text-white"
        >
          Week
        </button>
        <button onClick={() => {}} className="py-2 px-6 w-24">
          Month
        </button>
      </div>
    </div>
  );
};

export default DisplaySwapper;
