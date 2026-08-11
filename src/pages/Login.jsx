import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black px-4">

      {/* Background */}
      <div className="absolute inset-0">

        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw"
          alt="Netflix Background"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

      </div>


      {/* Login Card */}
      <div className="relative z-10 bg-black/25 backdrop-blur-[2px]
                p-6 sm:p-10 rounded-xl
                w-full max-w-[400px]
                shadow-2xl border border-white/20">
        {/* Netflix Logo */}
        <h1 className="text-red-600 text-4xl sm:text-5xl
                       font-extrabold text-center mb-8 tracking-wider">
          NETFLIX
        </h1>


        {/* Heading */}
        <h2 className="text-white text-3xl font-bold mb-6">
          Login
        </h2>


        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 mb-4 bg-zinc-800 text-white rounded-lg
                     outline-none focus:ring-2 focus:ring-red-600"
        />


        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 mb-5 bg-zinc-800 text-white rounded-lg
                     outline-none focus:ring-2 focus:ring-red-600"
        />


        {/* Login Button */}
        <button
          onClick={() => navigate("/home")}
          className="w-full bg-red-600 hover:bg-red-700
                     transition duration-300
                     text-white font-bold py-4 rounded-lg text-lg"
        >
          Login
        </button>


        {/* Register */}
        <p className="text-gray-400 mt-6 text-center">
          New to Netflix?

          <span
            onClick={() => navigate("/register")}
            className="text-white cursor-pointer ml-2 hover:underline"
          >
            Sign up now
          </span>
        </p>

      </div>

    </div>
  );
}

export default Login;