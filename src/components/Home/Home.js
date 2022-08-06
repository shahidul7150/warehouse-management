import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Carousel from "./Carousel";

import Offer from "./Offer";

const Home = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  return (
    <div>
      

      <Carousel/>
<Offer/>
<div>
  
</div>


      
      <h2 className="">Products</h2>
          {/* <Products></Products>
          <OptimizeInv></OptimizeInv>
     
          <Review></Review>
          <OurOutlay></OurOutlay>
          <Contact></Contact> */}
    </div>
  );
};

export default Home;
