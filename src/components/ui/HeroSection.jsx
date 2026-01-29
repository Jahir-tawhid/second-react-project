const HeroSection = () => {
  return (
    <div
      className="flex flex-col items-center justify-center text-white bg-amber-800 min-h-screen px-4"
      style={{
        backgroundImage: "url('/src/assets/bg-img.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-2xl md:text-4xl font-bold mb-4">
        Welcome to my Webside
      </h1>
      <p className="text-lg md:text-xl mb-4 ">Your Journey Start Here</p>
      <button className="text-sm md:text-xl font-semibold bg-green-500 px-4 py-2 rounded-2xl hover:bg-gray-500">
        Purchase Products
      </button>
    </div>
  );
};

export default HeroSection;
