
const Simmer = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-8 p-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="w-64 h-72 bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Image placeholder */}
          <div className="h-40 w-full bg-gray-300 animate-pulse"></div>

          {/* Text placeholders */}
          <div className="p-4 space-y-3">
            <div className="h-4 w-3/4 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-4 w-1/2 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-3 w-2/3 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Simmer;
