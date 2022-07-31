import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React from "react";
import "./CustomersReview.css";

const animation = { duration: 110000, easing: (t) => t }

const CustomerReviews = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        drag: false,
        created(s) {
          s.moveToIdx(5, true, animation)
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
      })
      return (
        <div ref={sliderRef} className="keen-slider mt-8">


          <div className="keen-slider__slide  .number-slide1">
            <div className="d-flex  align-items-center justify-content-between w-50 p-3 background">
            <div className="ps">
            <h1 className="text-dark ">Samantha Misrah</h1>
            <p><small>I am really surprized to buy bit.This grocary product is really fresh</small></p>
            </div>
            <img width="200px" src="https://images.hiverhq.com/images/blog/customer-service-cta.png" alt="" />
            </div>

          </div>
          <div className="keen-slider__slide  .number-slide1">
            <div className="d-flex  align-items-center justify-content-between w-50 p-3 background">
            <div className="ps">
            <h1 className="text-dark ">Rajesh Pandey</h1>
            <p><small>I am happy to buy this grocary!</small></p>
            </div>
            <img width="250px" src="https://content.kaspersky-labs.com/se/coin/content/en-in/images/baseline/masthead-lrc/masthead-lrc-b2c-desktop/masthead-lrc-b2c-desktop.png" alt="" />
            </div>

          </div>
          <div className="keen-slider__slide  .number-slide1">
            <div className="d-flex  align-items-center justify-content-between w-50 p-3 background">
            <div className="ps">
            <h1 className="text-dark ">Samantha Misrah</h1>
            <p><small>I am really surprized to buy bit.This grocary product is really fresh</small></p>
            </div>
            <img width="250px" src="https://content.kaspersky-labs.com/se/com/content/en-global/images/masthead/kav/kav-desktop/kav-desktop.png" alt="" />
            </div>

          </div>




{/* 
          <div className="keen-slider__slide number-slide2">2</div>
          <div className="keen-slider__slide number-slide3">3</div>
          <div className="keen-slider__slide number-slide4">4</div>
          <div className="keen-slider__slide number-slide5">5</div>
          <div className="keen-slider__slide number-slide6">6</div> */}
        </div>
      )
};

export default CustomerReviews;