import OurProducts from "../../components/OurProducts";
import Header from "../../layout/Header";
import "./index.scss"
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Header/>
      <OurProducts/>
    </>
  );
};

export default Home;
