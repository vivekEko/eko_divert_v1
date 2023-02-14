function App() {
  return (
    <div className="h-screen  overflow-hidden">
      <header className="p-5 h-[10vh]">
        <a href="https://ekoinfomatics.com" target="_blank" rel="noreferer">
          <img src="../eko_logo.svg" alt="" />
        </a>
      </header>

      <section className=" h-[90vh] flex flex-col justify-between items-center">
        <div className=" flex-1 flex justify-center items-center flex-col">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center md:leading-[70px] font-bold">
            This domain belongs to <br /> Eko Infomatics
          </h1>

          <a href="https://ekoinfomatics.com" target="_blank" rel="noreferer">
            <button className="bg-[#ffc400] hover:bg-[#ff7c22] transition-all active:scale-95 rounded-lg px-3 sm:px-4 py-2 sm:py-3   text-sm sm:text-base  md:text-lg font-semibold mx-auto block my-10 ">
              Visit Eko
            </button>
          </a>
        </div>

        <div className="flex justify-center  flex-1 items-end ">
          <img
            src="../pc.png"
            alt="pc"
            className="hover:translate-y-0 translate-y-5 transition-all duration-500 ease-in-out "
          />
        </div>
      </section>
    </div>
  );
}

export default App;
