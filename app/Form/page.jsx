"use client";
import "./form.css";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FormVal = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, "name cannot be more than 10 characters")
      .required("name cannot be empty"),
    email: yup.string().email().required("add email"),
    password: yup
      .string()
      .min(8, "password should be 8 words minimum")
      .required("password cannot be empty"),
  });

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      await schema.validate(values);
      alert("Access");
    } catch (error) {
      alert("Access denied. Please check the form for errors.");
    }
  };

  let initialValues = { name: "", email: "", password: "" };
  return (
    <>
      <div className="main-container">
        <div className="cover">
          <header>User Registration Form</header>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="">
                <div>
                  <Field
                    name="name"
                    id="name"
                    type="text"
                    className="text-black field"
                    placeholder="Name"
                  />
                  <div className="">
                    <ErrorMessage name="name">{(msg) => msg}</ErrorMessage>
                  </div>
                </div>
                <div className="">
                  <Field
                    name="email"
                    id="email"
                    type="text"
                    className="text-black field"
                    placeholder="Email"
                  />
                  <div className="error-message">
                    <ErrorMessage name="email">{(msg) => msg}</ErrorMessage>
                  </div>
                </div>
                <div>
                  <Field
                    name="password"
                    id="password"
                    type="password"
                    className="text-black field"
                    placeholder="Password"
                  />
                  <div className="">
                    <ErrorMessage name="password">{(msg) => msg}</ErrorMessage>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn bg-[#967339] text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default FormVal;
