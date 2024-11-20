const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-16 h-16">
        {/* Outer Circle */}
        <div className="absolute w-full h-full rounded-full border-4 border-sky-400 border-opacity-50 animate-ping"></div>
        {/* Inner Circle */}
        <div className="absolute w-full h-full rounded-full border-4 border-sky-600 animate-spin"></div>
      </div>
    </div>
  );
};

export default Spinner;
