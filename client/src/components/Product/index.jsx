import "./index.scss";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import DarkButton from "../DarkButton";
import LightButton from "../WhiteButton";
export const Product = () => {
  return (
    <div className="card product col-lg-4 col-md-6 col-12">
      <div className="image">
        <img
          src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg.webp"
          alt=""
        />
      </div>
      <h5>Wild West Hoodie</h5>
      <div className="stars">
      <FaStar className="star-icon" /> <span>5.0</span>
      <button><FaHeart className={`heart active`} /></button> <span>29</span>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      <div className="buttons">
        <DarkButton title={"CART"}/>
        <LightButton title={"VIEW"}/>
      </div>
    </div>
  );
};
