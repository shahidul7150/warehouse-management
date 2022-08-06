import React from 'react';

const Carousel = () => {
    return (
        <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img c src="https://i.ibb.co/W5TFk60/4.webp" class="w-full" />

          <div class="absolute top-1/3 md:right-20  left-2/4 text-[#333333]">
            <div>
            <p className='md:text-xl text-xs'>SUPPER QUALITY</p>
                <h1 className=' lg:text-5xl md:text-3xl font-bold'><p>All Organic Product</p> One Backet</h1>
                <p className='hidden md:flex md:py-2 md:text-lg '>Now you can collect your favourite ogranic product in one backet</p>
            </div>
                </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="md:btn md:bg-[#BF383B] outline-none border-none md:btn-circle">❮</a> 
            <a href="#slide2" class="md:btn md:bg-[#BF383B] outline-none border-none md:btn-circle">❯</a>
          </div>
        </div> 

        <div id="slide2" class="carousel-item relative w-full">
          <img src="https://i.ibb.co/P5Pm825/3.webp" class="w-full" />
          <div class="absolute top-1/3 md:left-28  left-12 text-[#333333]">
            <div>
            <p className='md:text-xl text-xs'>FRESH FRUITS &amp; VEGETABLES</p>
                <h1 className='lg:text-5xl md:text-3xl font-bold'><p>Dait Organic</p><p>Product</p>  </h1>
                <p className='hidden md:flex md:py-2 md:text-lg'>Now you can collect your favourite ogranic product in this offer time</p>
            </div>
                </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="md:btn md:bg-[#1CA400] outline-none border-none md:btn-circle">❮</a> 
            <a href="#slide3" class="md:btn md:bg-[#1CA400] outline-none border-none md:btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" class="carousel-item relative w-full">
          <img src="https://i.ibb.co/Z893C4S/2-2.webp" class="w-full" />

          <div class="absolute top-1/3 md:left-28  left-12 text-[#333333]">
            <div>
            <p className='md:text-xl text-xs'>BEST OFFER</p>
                <h1 className='lg:text-5xl md:text-3xl font-bold'><p>Fresh Organic</p> Product</h1>
                <p className='hidden md:flex md:py-2 md:text-lg '>Now you can collect your favourite ogranic product in this offer time</p>
            </div>
                </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="md:btn md:bg-[#3A3544] outline-none border-none md:btn-circle">❮</a> 
            <a href="#slide4" class="md:btn md:bg-[#3A3544] outline-none border-none md:btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" class="carousel-item relative w-full">
          <img src="https://i.ibb.co/JkRxNzX/1.jpg" class="w-full" />
          <div class="absolute top-1/3 md:left-28  left-12 text-[#333333]">
            <div>
            <p className='md:text-xl text-xs'>HEALTHY FOOD</p>
                <h1 className='lg:text-5xl md:text-3xl font-bold'>Natural Organic <p>Product</p></h1>
                <p className='hidden md:flex md:py-2 md:text-lg'>Speacial organic food for guarenteed our health</p>
            </div>
                </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
           
            <a href="#slide3" class="md:btn md:bg-[#A9B550] outline-none border-none md:btn-circle">❮</a> 
            <a href="#slide1" class="md:btn md:bg-[#A9B550] outline-none border-none md:btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Carousel;