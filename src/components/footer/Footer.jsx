function Footer  ()  {
  return (
    <footer className="bg-cover bg-center h-[378px] text-white py-16 bg-[url('./assets/footer.png')]">
      <div className="flex flex-col items-center justify-center px-4 ">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2">Stay in Touch</h2>
        <div className="flex w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 p-3 rounded-l-md border border-gray-300 text-black bg-white"
          />
          <button className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-3 rounded-r-md">
            Submit
          </button>
        </div>
      </div>

      <div className=" mt-30 h-[89px] text-center  border-white/20 pt-6 flex justify-around bg-black  opacity-25">
        <p className="text-xl font-semibold mb-4">Escape.</p>
        <nav className="flex justify-center space-x-6 text-sm text-gray-300">
          <a href="#">HOME</a>
          <a href="#">CATEGORIES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
