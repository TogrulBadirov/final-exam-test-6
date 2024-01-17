import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;
const connectionUrl =
  "mongodb+srv://togrul:togrul@firstcluster.udpwqcz.mongodb.net/";

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    image: { type: String, requried: true },
    title: { type: String, requried: true },
    desc: { type: String, requried: true },
    stars: { type: Number, requried: true },
    price: { type: Number, requried: true },
  },
  { timestamps: true }
);

const Products = mongoose.model("Selling", ProductSchema);

app.get("/", async (req, res) => {
  try {
    const allProducts = await Products.find({});
    res.send(allProducts);
  } catch (error) {
    console.log(error);
  }
});

app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findById(id);
    res.send(product);
  } catch (error) {
    console.log(error);
  }
});

app.post("/", async (req, res) => {
  try {
    const newProduct = new Products(req.body);
    await newProduct.save();
    res.send(newProduct);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
  const product = await Products.findByIdAndDelete(id);
  res.send("Product Deleted!");
  } catch (error) {
    console.log(error);
  }
});

mongoose.connect(connectionUrl).then(() => console.log("Connected!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
