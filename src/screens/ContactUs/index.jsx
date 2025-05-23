import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ContactUs.css";
import db from "../../db/db";

const ContactUs = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    surname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string()
      .matches(
        /^[0-9]{10,15}$/,
        "Phone number should be 10-15 digits without spaces"
      )
      .required("Required"),
    address: Yup.string().min(5, "Too Short!").required("Required"),
  });
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await db.contacts.add({
        ...values,
        timestamp: new Date().toISOString(),
      });
      alert("Contact saved locally!");
      resetForm();
    } catch (error) {
      alert("Failed to save contact: " + error.message);
    }
  };

  return (
    <div className="contact-page">
      <div className="left-side"></div>
      <div className="right-side">
        <h2>Contact Us</h2>
        <Formik
          initialValues={{
            name: "",
            surname: "",
            email: "",
            phone: "",
            address: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="contact-form">
              <div className="floating-input-group">
                <Field
                  id="name"
                  name="name"
                  placeholder=" "
                  className={
                    errors.name && touched.name
                      ? "floating-input input-error"
                      : "floating-input"
                  }
                />
                <label htmlFor="name">Name</label>
                <ErrorMessage
                  component="div"
                  name="name"
                  className="error-msg"
                />
              </div>

              <div className="floating-input-group">
                <Field
                  id="surname"
                  name="surname"
                  placeholder=" "
                  className={
                    errors.surname && touched.surname
                      ? "floating-input input-error"
                      : "floating-input"
                  }
                />
                <label htmlFor="surname">Surname</label>
                <ErrorMessage
                  component="div"
                  name="surname"
                  className="error-msg"
                />
              </div>

              <div className="floating-input-group">
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder=" "
                  className={
                    errors.email && touched.email
                      ? "floating-input input-error"
                      : "floating-input"
                  }
                />
                <label htmlFor="email">Email</label>
                <ErrorMessage
                  component="div"
                  name="email"
                  className="error-msg"
                />
              </div>

              <div className="floating-input-group">
                <Field
                  id="phone"
                  name="phone"
                  placeholder=" "
                  className={
                    errors.phone && touched.phone
                      ? "floating-input input-error"
                      : "floating-input"
                  }
                />
                <label htmlFor="phone">Phone No</label>
                <ErrorMessage
                  component="div"
                  name="phone"
                  className="error-msg"
                />
              </div>

              <div className="floating-input-group">
                <Field
                  as="textarea"
                  id="address"
                  name="address"
                  placeholder=" "
                  className={
                    errors.address && touched.address
                      ? "floating-input input-error"
                      : "floating-input"
                  }
                />
                <label htmlFor="address">Address</label>
                <ErrorMessage
                  component="div"
                  name="address"
                  className="error-msg"
                />
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactUs;
