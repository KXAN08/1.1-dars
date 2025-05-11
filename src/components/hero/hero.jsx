function Hero() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex justify-center border-b border-gray-200 bg-white py-4">
        <div className="container flex justify-center space-x-8 px-4  text-sm text-gray-500 md:space-x-12">
          <a href="#" className="hover:text-gray-800">Nature</a>
          <a href="#" className="hover:text-gray-800">Photography</a>
          <a href="#" className="hover:text-gray-800">Relaxation</a>
          <a href="#" className="hover:text-gray-800">Vacation</a>
          <a href="#" className="hover:text-gray-800">Travel</a>
          <a href="#" className="hover:text-gray-800">Adventure</a>
        </div>
      </nav>
      <section className="py-12">
        <div className="container mx-auto px-4 ">
          <h2 className="mb-8 text-center text-2xl font-normal text-gray-800">Featured Posts</h2>
          <div className="grid grid-cols-1 gap-6  md:grid-cols-2 max-w-[940px] mx-auto " >
            <div className="relative w-[460px] h-[280px ] overflow-hidden rounded-md shadow-md bg-[url('./assets/hero1.png')]">
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end ">
                <h3 className="text-2xl font-medium text-white">The Road Ahead</h3>
                <p className="mb-4 text-sm text-gray-200">The road ahead might be paved - it might not be.</p>
                <div className="flex items-center   border-white">
                <img src="/assets/hero01.png" alt="Author" className="h-6 w-6 rounded-full"/>
                  <span className="ml-2 text-xs text-white">Max Vogels</span>
                  <span className="ml-auto text-xs text-gray-300">September 25, 2015</span>
                </div>
              </div>
            </div>
            <div className="  w-[460px] h-[280px ] bg-[url('./assets/hero2.png')] relative h-64 overflow-hidden rounded-md shadow-md">
     
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                <div className="absolute top-4 right-4 bg-orange-500 px-2 py-1 text-xs font-medium text-white">
                  ADVENTURE
                </div>
                <h3 className="text-2xl font-medium text-white">From Top Down</h3>
                <p className="mb-4 text-sm text-gray-200">Once a year, go someplace you've never been before.</p>
                <div className="flex items-center">
               <img src="/assets/hero02.png" alt="Author" className="h-6 w-6 rounded-full"/>
                  <span className="ml-2 text-xs text-white">William Wong</span>
                  <span className="ml-auto text-xs text-gray-300">September 25, 2015</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-normal text-gray-800">Most Recent</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3  ">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="overflow-hidden rounded-md bg-white shadow ">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/assets/hero3.png"
                    alt="Post"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-1 text-lg font-medium">Still Standing Tall</h3>
                  <p className="mb-4 text-sm text-gray-600">Life begins at the end of your comfort zone.</p>
                  <div className="flex items-center border-t border-gray-100 pt-3">
                    <img
                      src="/assets/hero01.png"
                      alt="Author"
                      className="h-6 w-6 rounded-full"
                    />
                    <span className="ml-2 text-xs text-gray-600">Mat Vogels</span>
                    <span className="ml-auto text-xs text-gray-400">9/25/2015</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
