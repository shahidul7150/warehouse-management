import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Products from "../Products/Products";
import Carousel from "./Carousel";
import Offer from "./Offer";
import OptimizeInv from "./OptimizeInventory/OptimizeInv";
import Review from "./Review";
import OurOutlay from "./SeeOurOutlay/OurOutlay";

const Home = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  return (
    <div>
      

      <Carousel/>
<Offer/>
<div>
  
</div>


      
      <h2 className="text-center my-5 mx-5">Products</h2>
          <Products></Products>
          <OptimizeInv></OptimizeInv>
     
          <Review></Review>
          <OurOutlay></OurOutlay>
    </div>
  );
};

export default Home;
