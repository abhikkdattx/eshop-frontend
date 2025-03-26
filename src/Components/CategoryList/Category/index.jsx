import { Link } from "react-router-dom";

const Category = (props) => {
  const { id, name, image } = props.data;
  return (
    <div className="col-sm-3">
      <div className="card">
        <img src={image} alt={name} className="card-top-img" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h5>{id}</h5>
          <Link className="btn btn-dark btn-block" to="/products">
            Select
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
