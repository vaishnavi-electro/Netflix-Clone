import stranger from "../assets/stranger.jpg";
function MovieDetails() {

  return (

    <div className="min-h-screen bg-black text-white">

      {/* Background Banner */}

      <div className="relative h-[600px]">

        <img
       src={stranger}
       className="w-full h-full object-cover opacity-40"
/> 


        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>


        <div className="absolute bottom-20 left-10 max-w-xl">

          <h1 className="text-6xl font-bold mb-5">
            Stranger Things
          </h1>


          <div className="flex gap-4 mb-5">

            <button className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-300">
              ▶ Play
            </button>


            <button className="bg-gray-700 px-8 py-3 rounded-lg">
              + My List
            </button>

          </div>


          <p className="text-gray-300 text-lg">
            When a young boy disappears, a small town uncovers
            a mystery involving secret experiments and strange events.
          </p>


        </div>

      </div>



      {/* Information Section */}

      <div className="p-10">

        <h2 className="text-3xl font-bold mb-5">
          About This Movie
        </h2>


        <div className="grid md:grid-cols-3 gap-5">


          <div className="bg-zinc-900 p-5 rounded-xl">
            ⭐ Rating: 8.7/10
          </div>


          <div className="bg-zinc-900 p-5 rounded-xl">
            🎬 Genre: Sci-Fi, Thriller
          </div>


          <div className="bg-zinc-900 p-5 rounded-xl">
            📅 Year: 2026
          </div>


        </div>


      </div>


    </div>

  );

}


export default MovieDetails;