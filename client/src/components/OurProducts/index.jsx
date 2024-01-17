import { Product } from "../Product";
import "./index.scss";

const OurProducts = () => {
  return (
    <section id="OurProducts">
      <div className="container">
        <div className="header">
          <p>POPULAR PRODUCTS</p>
          <h2>Our Products</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
            consequatur laboriosam ipsam.
          </p>
        </div>
        <div className="products">
            <div className="row">
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
