import { useState } from "react";

  function Home() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">

      <nav className="fixed top-0 left-0 w-full z-50
                bg-gradient-to-b from-black via-black/80 to-transparent">

  <div className="max-w-7xl mx-auto flex items-center
                  justify-between px-6 md:px-10 py-5">

    {/* Netflix Logo */}

    <h1 className="text-red-600 text-3xl md:text-4xl
                   font-black tracking-wider cursor-pointer">
      NETFLIX
    </h1>


    {/* Navigation Links */}

    <div className="hidden md:flex items-center gap-7 ml-8 mr-auto">

      <a
        href="#home"
        className="text-white font-semibold hover:text-gray-300 transition"
      >
        Home
      </a>

      <a
        href="#movies"
        className="text-gray-300 hover:text-white transition"
      >
        Movies
      </a>

      <a
        href="#tvshows"
        className="text-gray-300 hover:text-white transition"
      >
        TV Shows
      </a>

      <a
        href="#mylist"
        className="text-gray-300 hover:text-white transition"
      >
        My List
      </a>

    </div>


    {/* Right Side */}

    <div className="flex items-center gap-3">

      {/* Language */}

      <button
        className="hidden lg:block border border-gray-500
                   px-3 py-2 rounded-md text-sm
                   hover:bg-white hover:text-black
                   transition"
      >
        🌐 English
      </button>


      {/* Sign In */}

      <button
        className="bg-red-600 hover:bg-red-700
                   px-4 md:px-5 py-2 rounded-md
                   font-semibold transition"
      >
        Sign In
      </button>


      {/* Profile */}

      <div
        className="w-9 h-9 md:w-10 md:h-10
                   rounded-md bg-red-700
                   flex items-center justify-center
                   font-bold cursor-pointer
                   hover:bg-red-600 transition"
      >
        V
      </div>

    </div>

  </div>

</nav>


      <section className="relative h-screen">

        <img
          src="https://wallpapercave.com/wp/wp14818830.webp"
          alt="Netflix Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>


        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5">

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl
               font-black max-w-5xl leading-tight">
            Unlimited movies, TV shows and more
          </h1>

          <p className="text-lg sm:text-xl md:text-3xl font-medium mt-5 md:mt-6">
            Watch anywhere. Cancel anytime.
          </p>

          <p className="text-sm sm:text-base md:text-xl mt-4 md:mt-5 px-4">
            Ready to watch? Enter your email to create or restart your membership.
          </p>


          <div className="flex flex-col md:flex-row gap-3 mt-6 w-full max-w-xl">

            <input
              type="email"
              placeholder="Email address"
              className="px-5 py-4 rounded-md bg-black/70 border border-gray-500 text-white flex-1"
            />

            <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-md font-bold text-lg">
              Get Started →
            </button>

          </div>

        </div>

      </section>



      {/* Trending Now */}

<section className="px-6 md:px-10 py-10 bg-black">

  <h2 className="text-3xl md:text-4xl font-bold mb-6">
    Trending Now
  </h2>

  <div className="flex gap-5 overflow-x-auto pb-5 scrollbar-hide">

    {[
  {
    title: "The Conjuring",
    image:
      "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg"
  },
  {
    title: "Annabelle",
    image:
      "https://image.tmdb.org/t/p/w500/yLsuU2P2SpDYFwtZQ7dtfVAf6TE.jpg"
  },
  {
    title: "Insidious: The Last Key",
    image:
      "https://image.tmdb.org/t/p/w500/nb9fc9INMg8kQ8L7sE7XTNsZnUX.jpg"
  },
  {
    title: "Smile",
    image:
      "https://image.tmdb.org/t/p/w500/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg"
  },
  {
    title: "Evil Dead Rise",
    image:
      "https://image.tmdb.org/t/p/w500/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg"
  },
  {
    title: "It",
    image:
      "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg"
  },
  {
    title: "The Nun II",
    image:
      "https://image.tmdb.org/t/p/w500/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg"
  }
].map((movie, index) => (

  <div
    key={index}
    className="min-w-[160px] md:min-w-[210px] group cursor-pointer"
  >

    <div className="relative overflow-hidden rounded-lg">

      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-60 md:h-72 object-cover rounded-lg
                   group-hover:scale-105
                   transition-transform duration-300"
      />

      <div className="absolute bottom-0 left-0 right-0
                      bg-gradient-to-t from-black
                      via-black/70 to-transparent
                      p-4 pt-12">

        <h3 className="text-white font-bold text-sm md:text-base">
          {movie.title}
        </h3>

        <p className="text-red-500 text-xs mt-1">
          HORROR • THRILLER
        </p>

      </div>

    </div>

  </div>

))}

  </div>

</section>


      {/* Popular */}

<section className="px-6 md:px-10 py-10 bg-black">

  <h2 className="text-3xl md:text-4xl font-bold mb-6">
    Popular on Netflix
  </h2>

  <div className="flex gap-5 overflow-x-auto scrollbar-hide">

    <img
      src="https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg"
      className="w-40 md:w-52 rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer flex-shrink-0"
    />

    <img
      src="https://image.tmdb.org/t/p/w500/2mxS4wUimwlLmI1xp6QW6NSU361.jpg"
      className="w-40 md:w-52 rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer flex-shrink-0"
    />

    <img
      src="https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
      className="w-40 md:w-52 rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer flex-shrink-0"
    />

    <img
      src="https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg"
      className="w-40 md:w-52 rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer flex-shrink-0"
    />

    <img
      src="https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
      className="w-40 md:w-52 rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer flex-shrink-0"
    />

    <img
      src="https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
      className="w-40 md:w-52 rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer flex-shrink-0"
    />

    <img
      src="https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg"
      className="w-40 md:w-52 rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer flex-shrink-0"
    />

  </div>

</section>



{/* FAQ */}

<section className="px-6 md:px-10 py-10 bg-black">


<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
 Frequently Asked Questions
</h2>


<div className="max-w-4xl mx-auto space-y-4">


<div className="bg-zinc-800 p-6 flex justify-between items-center cursor-pointer hover:bg-zinc-700">
<p className="text-xl">What is Netflix?</p>
<span className="text-3xl">+</span>
</div>


<div className="bg-zinc-800 p-6 flex justify-between items-center cursor-pointer hover:bg-zinc-700">
<p className="text-xl">How much does Netflix cost?</p>
<span className="text-3xl">+</span>
</div>


<div className="bg-zinc-800 p-6 flex justify-between items-center cursor-pointer hover:bg-zinc-700">
<p className="text-xl">Where can I watch Netflix?</p>
<span className="text-3xl">+</span>
</div>


<div className="bg-zinc-800 p-6 flex justify-between items-center cursor-pointer hover:bg-zinc-700">
<p className="text-xl">How do I cancel my membership?</p>
<span className="text-3xl">+</span>
</div>


<div className="bg-zinc-800 p-6 flex justify-between items-center cursor-pointer hover:bg-zinc-700">
<p className="text-xl">What can I watch on Netflix?</p>
<span className="text-3xl">+</span>
</div>


</div>


</section>

<footer className="bg-black text-gray-400 border-t border-gray-800 mt-16">
  <div className="max-w-7xl mx-auto px-6 py-12">

    <p className="mb-8">
      Questions? Call{" "}
      <span className="hover:underline cursor-pointer">
        000-800-919-1694
      </span>
    </p>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">

      <div className="flex flex-col space-y-3">
        <a href="/" className="hover:underline">FAQ</a>
        <a href="/" className="hover:underline">Investor Relations</a>
        <a href="/" className="hover:underline">Privacy</a>
        <a href="/" className="hover:underline">Speed Test</a>
      </div>

      <div className="flex flex-col space-y-3">
        <a href="/" className="hover:underline">Help Centre</a>
        <a href="/" className="hover:underline">Jobs</a>
        <a href="/" className="hover:underline">Cookie Preferences</a>
        <a href="/" className="hover:underline">Legal Notices</a>
      </div>

      <div className="flex flex-col space-y-3">
        <a href="/" className="hover:underline">Account</a>
        <a href="/" className="hover:underline">Ways to Watch</a>
        <a href="/" className="hover:underline">Corporate Information</a>
        <a href="/" className="hover:underline">Only on Netflix</a>
      </div>

      <div className="flex flex-col space-y-3">
        <a href="/" className="hover:underline">Media Centre</a>
        <a href="/" className="hover:underline">Terms of Use</a>
        <a href="/" className="hover:underline">Contact Us</a>
      </div>

    </div>

    <button className="mt-8 border border-gray-500 px-5 py-2 rounded hover:bg-gray-800 transition">
      🌐 English
    </button>

    <p className="mt-8 text-sm text-gray-500">
      Netflix India
    </p>

  </div>
</footer>

    </div>
  );
}

export default Home;