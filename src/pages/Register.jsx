import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);

    navigate("/login");
  };

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


      {/* Register Card */}
      <div className="relative z-10 bg-black/25 backdrop-blur-[2px]
                p-6 sm:p-10 rounded-xl
                w-full max-w-[420px]
                shadow-2xl border border-white/20">
        {/* Netflix Logo */}
        <h1 className="text-red-600 text-4xl sm:text-5xl font-extrabold
                       text-center mb-8 tracking-wider">
          NETFLIX
        </h1>


        {/* Heading */}
        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6">
          Create Account
        </h2>


        <form onSubmit={handleSubmit}>

          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
            className="w-full p-4 mb-4 bg-zinc-800 text-white rounded-lg
                       outline-none focus:ring-2 focus:ring-red-600"
          />


          {/* Email */}
          <input
            type="email"
            placeholder="Email or Phone Number"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
            className="w-full p-4 mb-4 bg-zinc-800 text-white rounded-lg
                       outline-none focus:ring-2 focus:ring-red-600"
          />


          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
            className="w-full p-4 mb-5 bg-zinc-800 text-white rounded-lg
                       outline-none focus:ring-2 focus:ring-red-600"
          />


          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700
                       transition duration-300
                       text-white font-bold py-4 rounded-lg
                       text-lg"
          >
            Register
          </button>

        </form>


        {/* Login */}
        <p className="text-gray-400 mt-6 text-center">

          Already have account?

          <span
            onClick={() => navigate("/login")}
            className="text-white cursor-pointer ml-2 hover:underline"
          >
            Login
          </span>

        </p>

      </div>

    </div>
  );
}

export default Register;