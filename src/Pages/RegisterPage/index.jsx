import React, { useState } from "react";
import styles from "./styles.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

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
      .then((response) => {
        setRequestResponse({
          message: "User Registered successfully",
          alertClassName: styles.successAlert,
        });
      })
      .catch((error) => {
        setRequestResponse({
          message: "Registration failed. Try again.",
          alertClassName: styles.errorAlert,
        });
      });
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Enter a valid email format")
      .required("Email is required"),
    mobile: Yup.string().required("Mobile is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {requestResponse.message && (
          <div className={requestResponse.alertClassName}>
            {requestResponse.message}
          </div>
        )}
        <h2 className={styles.title}>Register</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.name && formik.touched.name
                  ? `${styles.inputField} ${styles.inputError}`
                  : styles.inputField
              }
            />
            {formik.errors.name && formik.touched.name && (
              <small className={styles.error}>{formik.errors.name}</small>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.email && formik.touched.email
                  ? `${styles.inputField} ${styles.inputError}`
                  : styles.inputField
              }
            />
            {formik.errors.email && formik.touched.email && (
              <small className={styles.error}>{formik.errors.email}</small>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>Mobile</label>
            <input
              type="text"
              name="mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.mobile && formik.touched.mobile
                  ? `${styles.inputField} ${styles.inputError}`
                  : styles.inputField
              }
            />
            {formik.errors.mobile && formik.touched.mobile && (
              <small className={styles.error}>{formik.errors.mobile}</small>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.password && formik.touched.password
                  ? `${styles.inputField} ${styles.inputError}`
                  : styles.inputField
              }
            />
            {formik.errors.password && formik.touched.password && (
              <small className={styles.error}>{formik.errors.password}</small>
            )}
          </div>

          <button
            type="submit"
            className={styles.registerButton}
            disabled={!formik.isValid}
          >
            Register
          </button>
        </form>

        <p className={styles.footerText}>
          Already registered?{" "}
          <Link to="/login" className={styles.link}>
            Click here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
