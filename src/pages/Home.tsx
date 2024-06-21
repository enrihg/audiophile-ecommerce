function Home() {
  return (
    <>
      <header className="bg-dark-800 text-center">
        <h3 className="text-sm text-light-100 tracking-[10px]">NEW PRODUCT</h3>
        <h1 className="font-bold text-4xl text-light-100">XX99 MARK II HEADPHONES</h1>
        <p className="font-medium leading-[25px] text-light-100">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast</p>
        <div className="flex justify-center items-center mx-auto w-40 h-12 bg-primary-200 font-bold text-[13px] tracking-[1px] text-light-100"><a href="#" >SEE PRODUCT</a></div>
      </header>
      <section className="mx-6">
        <div className="h-[165px] my-2 rounded-lg text-center bg-light-300">
          <img src="" alt="" />
          <h3 className="text-[15px] font-bold tracking-[1.07px]">HEADPHONES</h3>
          <a href="#" className="text-[13px] tracking-[1px]">SHOP</a>
        </div>
        <div className="h-[165px] my-2 rounded-lg text-center bg-light-300">
          <img src="" alt="" />
          <h3 className="text-[15px] font-bold tracking-[1.07px]">SPEAKERS</h3>
          <a href="#" className="text-[13px] tracking-[1px]">SHOP</a>
        </div>
        <div className="h-[165px] my-2 rounded-lg text-center bg-light-300">
          <img src="" alt="" />
          <h3 className="text-[15px] font-bold tracking-[1.07px]">EARPHONES</h3>
          <a href="#" className="text-[13px] tracking-[1px]">SHOP</a>
        </div>
      </section>
      <section className="mx-6 mt-[120px]">
        <div className="my-2 py-[55px] bg-primary-200 rounded-lg text-center text-light-100">
          <img src="" alt="" />
          <h2 className="mx-12 font-bold text-4xl">ZX9 SPEAKER</h2>
          <p className="m-6 font-medium text-[15px] ">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <div className="flex justify-center items-center w-40 h-12 mx-auto bg-dark-900 font-bold text-[13px] tracking-[1px]"><a href="#">SEE PRODUCT</a></div>
        </div>
        <div className="pl-6 bg-light-300 rounded-lg my-2">
          <img src="" alt="" />
          <h2 className="font-bold text-[28px] tracking-[2px]">ZX7 SPEAKER</h2>
          <div className="flex justify-center items-center w-40 h-12 border-solid border-[1px] border-dark-900 font-bold text-[13px] tracking-[1px]"><a href="#">SEE PRODUCT</a></div>
        </div>
        <div>
          <div className="bg-dark-800 rounded-lg my-2"><img src="" alt="" />aaaaaaaa</div>
          <div className="bg-light-200 rounded-lg my-2 pl-6">
            <h2 className="font-bold text-[28px] tracking-[2px]">YX1 EARPHONES</h2>
            <div className="flex justify-center items-center w-40 h-12 border-solid border-[1px] border-dark-900 font-bold text-[13px] tracking-[1px]"><a href="#">SEE PRODUCT</a></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home