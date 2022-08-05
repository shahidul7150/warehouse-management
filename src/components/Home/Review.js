import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import './CustomersReview.css';
// ...
const Review = () => {
  SwiperCore.use([Autoplay]);
return (
    <>
<h2 >Customers Review</h2>

    {/* <Swiper
          className="home_slider "
          modules={[Pagination,Autoplay]}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true }}
          autoplay
        >
         
          <SwiperSlide>
          <div className="keen-slider__slide  .number-slide1">
            <div className="d-flex  align-items-center justify-content-between w-50 p-3 background">
            <div className="ps">
            <h1 className="text-dark ">Samantha Misrah</h1>
            <p><small>I am really surprized to buy bit.This grocary product is really fresh</small></p>
            </div>
            <img width="250px" src="https://content.kaspersky-labs.com/se/com/content/en-global/images/masthead/kav/kav-desktop/kav-desktop.png" alt="" />
            </div>

          </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className="keen-slider__slide  .number-slide1">
            <div className="d-flex  align-items-center justify-content-between w-50 p-3 background">
            <div className="ps">
            <h1 className="text-dark ">Rajesh Pandey</h1>
            <p><small>I am happy to buy this grocary!</small></p>
            </div>
            <img width="250px" src="https://content.kaspersky-labs.com/se/coin/content/en-in/images/baseline/masthead-lrc/masthead-lrc-b2c-desktop/masthead-lrc-b2c-desktop.png" alt="" />
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide> <div className="keen-slider__slide  .number-slide1">
            <div className="d-flex  align-items-center justify-content-between w-50 p-3 background">
            <div className="ps">
            <h1 className="text-dark ">Samantha Misrah</h1>
            <p><small>I am really surprized to buy bit.This grocary product is really fresh</small></p>
            </div>
            <img width="200px" src="https://images.hiverhq.com/images/blog/customer-service-cta.png" alt="" />
            </div>

          </div></SwiperSlide>
        <SwiperSlide>
        <div className="keen-slider__slide  .number-slide1">
            <div className="d-flex  align-items-center justify-content-between w-50 p-3 background">
            <div className="ps">
            <h1 className="text-dark ">Rajesh Pandey</h1>
            <p><small>I am happy to buy this grocary!</small></p>
            </div>
            <img width="250px" src="https://content.kaspersky-labs.com/se/coin/content/en-in/images/baseline/masthead-lrc/masthead-lrc-b2c-desktop/masthead-lrc-b2c-desktop.png" alt="" />
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="keen-slider__slide  .number-slide1">
            <div className="d-flex  align-items-center justify-content-between w-50 p-3 background">
            <div className="ps">
            <h1 className="text-dark ">Samantha Misrah</h1>
            <p><small>I am really surprized to buy bit.This grocary product is really fresh</small></p>
            </div>
            <img width="200px" src="https://images.hiverhq.com/images/blog/customer-service-cta.png" alt="" />
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="keen-slider__slide  .number-slide1">
            <div className="d-flex  align-items-center justify-content-between w-50 p-3 background">
            <div className="ps">
            <h1 className="text-dark ">Rajesh Pandey</h1>
            <p><small>I am happy to buy this grocary!</small></p>
            </div>
            <img width="250px" src="https://content.kaspersky-labs.com/se/coin/content/en-in/images/baseline/masthead-lrc/masthead-lrc-b2c-desktop/masthead-lrc-b2c-desktop.png" alt="" />
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="keen-slider__slide  .number-slide1">
            <div className="d-flex  align-items-center justify-content-between w-50 p-3 background">
            <div className="ps">
            <h1 className="text-dark ">Samantha Misrah</h1>
            <p><small>I am really surprized to buy bit.This grocary product is really fresh</small></p>
            </div>
            <img width="250px" src="https://content.kaspersky-labs.com/se/com/content/en-global/images/masthead/kav/kav-desktop/kav-desktop.png" alt="" />
            </div>

          </div>
        </SwiperSlide>
      
          
</Swiper> */}
</>
)
}
export default Review;