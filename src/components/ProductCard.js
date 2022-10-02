import React from "react";
import { Link } from "react-router-dom";

export function ProductCard({ data }) {
  return (
    <>
      <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
        <a href>
          <div className="card-flyer">
            <div className="text-box">
              <div className="image-box">
                <img src={data.image} alt="" />
              </div>
              <div className="text-container">
                <h6>{data.title}</h6>
                <p>{data.content}</p>
                <Link
                  to={`/products/${data.id}`}
                  className="btn btn-sm mt-3 btn-primary"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}