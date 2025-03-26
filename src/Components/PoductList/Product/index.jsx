import { Link } from "react-router-dom";

const Product = (props) => {
  const { id, title, price, category, images } = props.data;

  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      {" "}
      <div className="card">
        <img src={images} alt={title} className="card-img-top" />{" "}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <span className="badge badge-secondary">{category?.name}</span>
          </p>
          <h2>
            <span>&#8377;</span>
            {price}
          </h2>
          <Link to={'/products/detail/' + id} className="btn btn-dark btn-block">
            Get Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
