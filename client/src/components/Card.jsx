const Card = ({name}) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="relative max-w-2xl w-full">
        <div className="absolute inset-0 bg-linear-to-br from-blue-400 via-purple-400 to-blue-300 rounded-3xl blur-sm"></div>

        <div className="relative bg-neutral-900 rounded-3xl p-12 shadow-2xl">

          <div className="mb-8 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80"
              alt="Air Jordan 4 Retro"
              className="w-full max-w-md object-contain"
            />
          </div>

          <h2 className="text-4xl font-bold text-white mb-6">
            {name}
          </h2>

          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024.
            Your best opportunity to get these right now is by entering raffles and waiting for
            the official releases.
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-neutral-800 hover:bg-neutral-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200">
              Buy now
            </button>
            <span className="bg-neutral-800 text-white font-bold py-4 px-6 rounded-xl">
              $100
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
