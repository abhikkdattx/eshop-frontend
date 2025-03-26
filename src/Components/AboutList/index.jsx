const AboutList = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="wrapper">
            <h1>ABOUT US</h1>
            <h5>SUSTAINABILITY.</h5>
            <h2>Caring For our Planet.</h2>
            <p>
              At <strong>Eshop</strong>, we are deeply committed to
              sustainability and the well-being of our planet. We believe that
              businesses have a crucial role to play in protecting the
              environment, and we take this responsibility seriously. Our
              approach to sustainability is rooted in reducing our carbon
              footprint, promoting ethical sourcing, and developing eco-friendly
              solutions that create a positive impact. From utilizing renewable
              energy and minimizing waste to supporting reforestation and
              conservation initiatives, we strive to integrate green practices
              into every aspect of our operations. We carefully select
              sustainable materials, optimize our supply chain to reduce
              emissions, and continuously innovate to develop products that are
              both high-quality and environmentally responsible. Beyond our
              business operations, we are dedicated to raising awareness and
              inspiring change. Through community engagement, educational
              programs, and partnerships with environmental organizations, we
              actively work to promote sustainable living and responsible
              consumption. We understand that sustainability is a continuous
              journey, and we are always looking for new ways to improve and
              push the boundaries of what’s possible. By choosing{" "}
              <strong>Eshop</strong>, you’re not just supporting a
              business—you’re joining a movement toward a greener, more
              sustainable future. Together, we can make a lasting difference for
              our planet and future generations.
            </p>
            <div className="d-flex justify-content-center mt-3">
              <button className="btn btn-dark">Learn More</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="wrapper">
            <img src="/ecomlogo2.jpg" alt="" className="card-top-img" />
          </div>
        </div>
      </div>
      <br/>
    </div>
  );
};

export default AboutList;
