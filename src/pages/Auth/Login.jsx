import Logo from "../../assets/vite.svg"; // your logo
import HeroImage from "../../assets/hero.png"; // left side background image

const Login = () => {
  return (
    <section className="min-h-screen flex">
      {/* Left Branding Section */}
      <div className="hidden md:flex w-1/2 relative text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HeroImage})` }}
        />

        {/* Overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-10">
          <h1 className="text-4xl font-bold mb-4">
            Welcome back to <span className="font-extrabold">JustConnect</span>
          </h1>
          <p className="text-lg text-orange-100">
            Connect with skilled artisans and bring your ideas to life.
          </p>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="flex flex-1 items-center justify-center bg-gray-50 px-6">
        <div className="w-full max-w-md p-8">
          {/* Logo + Back Button */}
          <div className="flex items-center gap-4 mb-6">
            <button className="text-gray-500 hover:text-gray-700">
              &#8592; {/* Back arrow */}
            </button>
            <img src={Logo} alt="JustConnect Logo" className="h-8" />
          </div>

          <h2 className="text-2xl font-bold mb-6 text-center">
            Login to your account
          </h2>

          <form className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="text-orange-500 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-center mt-6 text-gray-600">
            Don’t have an account?{" "}
            <span className="text-orange-500 cursor-pointer hover:underline">
              Sign up
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
