import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="jumbotron text-center bg-light py-5">
      <div className="container">
        <h1 className="display-4 fw-bold text-dark">Welcome to E-Shop!</h1>
        <p className="lead text-secondary">
          Your one-stop solution for all your shopping needs.
        </p>
        <hr className="my-4" />
        <p className="text-muted">
          Explore our exclusive collections and shop with confidence.
        </p>
        <div className="d-flex justify-content-center">
          <Link className="btn btn-dark btn-lg px-4" to="/products" role="button">
            Start Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
