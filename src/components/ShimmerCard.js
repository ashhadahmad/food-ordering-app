const ShimmerCard = () => {
  return (
    <div className="h-full border-2 border-gray-100 rounded-lg overflow-hidden">
      <div className="lg:h-48 bg-gray-100 md:h-36 w-full object-cover object-center"></div>
      <div className="p-6">
        <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-200"></h1>
        <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-200"></p>
        <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-200"></p>
        <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-200"></p>
      </div>
    </div>
  );
};

export default ShimmerCard;
