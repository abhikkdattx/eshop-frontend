import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import styles from "./styles.module.css";

const ContactList = () => {
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: "",
      phone: "",
      country: "",
      productInterest: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      jobTitle: Yup.string().required("Job title is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string()
        .matches(/^\d+$/, "Phone number must be numeric")
        .min(10, "Must be at least 10 digits")
        .required("Phone number is required"),
      country: Yup.string().required("Please select a country"),
      productInterest: Yup.string().required("Please select a product"),
    }),
    onSubmit: () => {
      setSubmitted(true);
    },
  });

  return (
    <div className={styles.container}>
      <div className="row">
        <div className="col-md-6">
          <div className={styles.wrapper}>
            <h4>Request a call.</h4>
            <p>Give us some info so the right person can get back to you.</p>

            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    {...formik.getFieldProps("firstName")}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className={styles.error}>
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    {...formik.getFieldProps("lastName")}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className={styles.error}>{formik.errors.lastName}</div>
                  ) : null}
                </div>
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Job Title"
                  {...formik.getFieldProps("jobTitle")}
                />
                {formik.touched.jobTitle && formik.errors.jobTitle ? (
                  <div className={styles.error}>{formik.errors.jobTitle}</div>
                ) : null}
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className={styles.error}>{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  {...formik.getFieldProps("phone")}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className={styles.error}>{formik.errors.phone}</div>
                ) : null}
              </div>

              <div className="mb-3">
                <select
                  className="form-control"
                  {...formik.getFieldProps("country")}
                >
                  <option value="">Country/Region:</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="IN">India</option>
                </select>
                {formik.touched.country && formik.errors.country ? (
                  <div className={styles.error}>{formik.errors.country}</div>
                ) : null}
              </div>

              <div className="mb-3">
                <select
                  className="form-control"
                  {...formik.getFieldProps("productInterest")}
                >
                  <option value="">Product Interest:</option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion & Apparel</option>
                  <option value="beauty">Beauty & Personal Care</option>
                </select>
                {formik.touched.productInterest &&
                formik.errors.productInterest ? (
                  <div className={styles.error}>
                    {formik.errors.productInterest}
                  </div>
                ) : null}
              </div>

              <p className="text-muted">
                By registering, you agree to the processing of your personal
                data by Eshop as described in the privacy policy.
              </p>

              <div className="d-flex justify-content-center mt-3">
                <button type="submit" className={styles.btn}>
                  Register
                </button>
              </div>
            </form>
            {submitted && (
              <p className={styles.successMsg}>Form submitted successfully!</p>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className={styles.wrapper}>
            <div className="d-flex flex-column">
              <div className={styles.card}>
                <div className="card-body">
                  <h5 className="card-title">Give us a call</h5>
                  <p className="card-text">
                    Need help? Contact our support team for assistance.
                  </p>
                  <a href="#" className={styles.btn}>
                    Contact Support
                  </a>
                </div>
              </div>

              <div className={styles.card}>
                <div className="card-body">
                  <h5 className="card-title">Live Chat</h5>
                  <p className="card-text">
                    Chat with us live for quick answers to your queries.
                  </p>
                  <a href="#" className={styles.btn}>
                    Start Chat
                  </a>
                </div>
              </div>

              <div className={styles.card}>
                <div className="card-body">
                  <h5 className="card-title">Leave us some feedback.</h5>
                  <p className="card-text">
                    Good or bad, we love to hear it all.
                  </p>
                  <a href="#" className={styles.btn}>
                    Send Feedback
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
