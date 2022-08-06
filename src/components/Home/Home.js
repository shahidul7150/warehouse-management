import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Products from "../Products/Products";
import Carousel from "./Carousel";

import Offer from "./Offer";
import OptimizeInv from "./OptimizeInventory/OptimizeInv";

const Home = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  return (
    <div>
      

      <Carousel/>
<Offer/>
<div>
  
</div>
          <Products></Products>
          <OptimizeInv></OptimizeInv>
          {/* <OptimizeInv></OptimizeInv>
     
          <Review></Review>
          <OurOutlay></OurOutlay>
          <Contact></Contact> */}
    </div>
  );
};

export default Home;
