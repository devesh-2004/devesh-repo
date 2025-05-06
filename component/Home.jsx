import React from 'react'

const Home = () => {
  return (
    <div
      className="w-screen h-[86.7vh] bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: "url('/BG.png')" }}>
      {/* Content Overlay */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">AI Powered Cooking!!</h1>
        <h2 className="text-3xl md:text-5xl mb-4">Cook smarter, not harder</h2>
        <p className="text-lg md:text-xl mb-8">
          AI-powered recipe website that suggests dishes based on the ingredients you have.
          Simply enter what’s in your kitchen, and our intelligent assistant will generate
          delicious, personalized recipes instantly—making cooking easier and smarter.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="bg-yellow-300 text-black px-6 py-3 rounded-2xl font-semibold hover:bg-yellow-400 transition">
            Generate Recipe
          </button>
          <button className="bg-yellow-300 text-black px-6 py-3 rounded-2xl font-semibold hover:bg-yellow-400 transition">
            Ask AI
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home