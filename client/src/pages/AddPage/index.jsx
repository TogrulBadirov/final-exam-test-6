import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./index.scss";

const AddPage = () => {
  const [products, setProducts] = useState(null);
  const postProduct = async (values) => {
    const resp = await axios.post("http://localhost:3000/", values);
  };
  const getAllProducts = async () => {
    const resp = await axios("http://localhost:3000/");
    setProducts(resp.data);
  };
  const deleteProducts = async (id) => {
     await axios.delete(`http://localhost:3000/${id}`);
    getAllProducts()
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Add Page</title>
      </Helmet>
      <section id="formik">
        <Formik
          initialValues={{
            image: "",
            title: "",
            desc: "",
            stars: "",
            price: "",
          }}
          validationSchema={Yup.object({
            image: Yup.string()
              .matches(
                /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/,
                "Enter correct url!"
              )
              .required("Required"),
            title: Yup.string()
              .matches(/^[A-Za-z]+$/, "Enter Text Only!")
              .max(50, "Must be 50 characters or less")
              .required("Required"),
            desc: Yup.string()
              .max(150, "Must be 150 characters or less")
              .matches(/^[A-Za-z]+$/, "Enter Text Only!")
              .required("Required"),
            stars: Yup.number()
              .min(1, "Must be minimum 1")
              .max(5, "Must be maximum 5")
              .required("Required"),
            price: Yup.number()
              .min(1, "Must be minimum 1$")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              postProduct(values);
              getAllProducts();
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <h2>Add Form</h2>
            <div>
              <label htmlFor="image">Image</label>
              <Field class="form-control" name="image" type="text" />
              <div className="error">
                <ErrorMessage name="image" />
              </div>
            </div>

            <div>
              <label htmlFor="title">Title</label>
              <Field class="form-control" name="title" type="text" />
              <div className="error">
                <ErrorMessage name="title" />
              </div>
            </div>

            <div>
              <label htmlFor="desc">Desc</label>
              <Field class="form-control" name="desc" type="text" />
              <div className="error">
                <ErrorMessage name="desc" />
              </div>
            </div>

            <div>
              <label htmlFor="stars">Stars</label>
              <Field
                class="form-control"
                name="stars"
                type="number"
                min={1}
                max={5}
              />
              <div className="error">
                <ErrorMessage name="stars" />
              </div>
            </div>

            <div>
              <label htmlFor="price">Price</label>
              <Field class="form-control" name="price" type="number" min={1} />
              <div className="error">
                <ErrorMessage name="price" />
              </div>
            </div>

            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </section>
      <section id="table">
        <div className="container">
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Desc</th>
                <th>Stars</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((item) => (
                  <tr key={item._id}>
                    <td><img src={item.image} alt="" /></td>
                    <td>{item.title}</td>
                    <td>{item.desc}</td>
                    <td>{item.stars}</td>
                    <td>{item.price}</td>
                    <td><button className="btn btn-danger" onClick={()=>{
                      deleteProducts(item._id)
                    }}>Delete</button></td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AddPage;
