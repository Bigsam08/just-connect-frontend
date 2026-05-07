/**
 * @description This is the loader for our page.
 */

const AppLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-500 text-white">
      <div className="text-center space-y-6">
        {/* Logo */}
        <div className="h-14 w-14 mx-auto rounded-full bg-white text-orange-500 flex items-center justify-center font-bold text-lg animate-pulse">
          J
        </div>

        {/* Animated Brand Text */}
        <h1 className="text-2xl font-bold tracking-wide relative overflow-hidden">
          {/* Base text */}
          <span className="text-white/90">JustConnect</span>

          {/* Shine overlay */}
          <span
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/80 to-transparent 
                         bg-clip-text text-transparent animate-shine"
          >
            JustConnect
          </span>
        </h1>

        {/* Loader bar */}
        <div className="w-44 h-1 bg-white/30 rounded-full overflow-hidden mx-auto">
          <div className="h-full w-1/3 bg-white animate-loaderMove" />
        </div>
      </div>
    </div>
  );
};

export default AppLoader;