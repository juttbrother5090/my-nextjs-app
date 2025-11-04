import { BsStarFill } from 'react-icons/bs';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] space-y-6">
      {/* Animated Stars */}
      <div className="relative w-24 h-24">
        <BsStarFill 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 text-purple-500 text-3xl animate-ping" 
          style={{ animationDuration: '1.5s' }}
        />
        <BsStarFill 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 text-yellow-500 text-3xl animate-pulse" 
        />
      </div>

      {/* Spinner */}
      <div className="relative">
        <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
      </div>

      {/* Text */}
      <p className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
        Loading Blessings...
      </p>
    </div>
  );
}