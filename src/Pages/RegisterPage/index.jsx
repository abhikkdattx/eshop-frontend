import React, { useState } from "react";
import styles from "./styles.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegisterPage = () => {
  const [requestResponse, setRequestResponse] = useState({
    message: "",
    alertClassName: "",
  });

  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    password: "",
  };

  const onSubmit = (values) => {
    values = {
      ...values,
      username: values.email,
      role: "USER",
    };
    axios
      .post("http://localhost:8080/api/auth/register", values)
      .then(
        (response) => {
          setRequestResponse({
            message: "User Registered successfully",
            alertClassName: "alert alert-success",
          });
        },
        (error) => {
          console.log(error);
          setRequestResponse({
            message: error.response.data.message,
            alertClassName: "alert alert-danger",
          });
        }
      )
      .catch((error) => console.log(error));
  };

  //   const validate = (values) => {
  //     let errors = {};
  //     if (!values.name) {
  //       errors.name = "Name is required";
  //     }
  //     if (!values.email) {
  //       errors.email = "Email is required";
  //     } else if (!/^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //       errors.email = "Invalid email format";
  //     }

  //     if (!values.mobile) {
  //       errors.mobile = "Mobile is required";
  //     }

  //     if (!values.password) {
  //       errors.password = "Password is required";
  //     }

  //     return errors;
  //   };

  const validationSchema = Yup.object({
    name: Yup.string().required("name is required"),
    email: Yup.string()
      .email("Enter a valid email format")
      .required("Email is required"),
    mobile: Yup.string().required("Mobile is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be atleast 6 characters"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className={styles.wrapper}>
            <div class={requestResponse.alertClassName} role="alert">
              {requestResponse.message}
            </div>
            <h2>Register</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className={
                    formik.errors.name && formik.touched.name
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && formik.touched.name ? (
                  <small className="text-danger">{formik.errors.name}</small>
                ) : null}
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={formik.values.email}
                  className={
                    formik.errors.email && formik.touched.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email ? (
                  <small className="text-danger">{formik.errors.email}</small>
                ) : null}
              </div>

              <div className="form-group">
                <label>Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.errors.mobile && formik.touched.mobile
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />
                {formik.errors.mobile && formik.touched.mobile ? (
                  <small className="text-danger">{formik.errors.mobile}</small>
                ) : null}
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.errors.password && formik.touched.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />
                {formik.errors.password && formik.touched.password ? (
                  <small className="text-danger">
                    {formik.errors.password}
                  </small>
                ) : null}
              </div>

              <input
                type="submit"
                value="Register"
                className="btn btn-dark btn-block"
                disabled={!formik.isValid}
              />
            </form>
            <br />
            <p className="text-center">
              Already Registered? <a href="/">Click Here</a>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default RegisterPage;
