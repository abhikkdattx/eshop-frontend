const ContactList = () => {
  return (
    <>
      <div className="contact-page">
        <h2 className="text-center">How would you like to contact Eshop?</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="wrapper">
              <form action="submit form">
                <div>
                  <h4>Request a call.</h4>
                  <p>
                    Give us some info so the right person can get back to you.
                  </p>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Job Title"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>

                  <div className="mb-3">
                    <select className="form-control">
                      <option value="">Country/Region:</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="IN">India</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <select className="form-control">
                      <option value="">Product Interest:</option>
                      <option value="electronics">Electronics</option>
                      <option value="fashion">Fashion & Apparel</option>
                      <option value="beauty">Beauty & Personal Care</option>
                    </select>
                  </div>

                  <p className="text-muted">
                    By registering, you agree to the processing of your personal
                    data by Eshop as described in the privacy policy.
                  </p>

                  <div className="d-flex justify-content-center mt-3">
                    <button className="btn btn-dark">Register</button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-6">
            <div className="wrapper">
              <div className="d-flex flex-column">
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Give us a call</h5>
                    <p className="card-text">
                      Need help? Contact our support team for assistance.
                    </p>
                    <a href="#" className="btn btn-dark">
                      Contact Support
                    </a>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Live Chat</h5>
                    <p className="card-text">
                      Chat with us live for quick answers to your queries.
                    </p>
                    <a href="#" className="btn btn-dark">
                      Start Chat
                    </a>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Leave us some feedback.</h5>
                    <p className="card-text">
                      Good or bad, we love to hear it all
                    </p>
                    <a href="#" className="btn btn-dark">
                      Send Feedback
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactList;
