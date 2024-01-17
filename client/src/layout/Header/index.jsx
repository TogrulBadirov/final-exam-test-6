import DarkButton from "../../components/DarkButton";
import LightButton from "../../components/WhiteButton";
import "./index.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="content">
          <h1>Shop With Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia</p>
          <DarkButton title={"SHOP NOW"} className="dark" />
          <LightButton title={"CLUB MEMBERSHIP"} className="light" />
        </div>
      </div>
    </header>
  );
};

export default Header;
