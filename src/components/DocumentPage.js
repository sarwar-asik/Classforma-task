import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Document.css";

const DocumentPage = () => {
  const { state } = useLocation();
  const { id, name, data } = state;

  return (
    <div>
      <button>
        <Link to="/">Home Page</Link>
      </button>
      <h1>{state.name}</h1>
      <div className="detail-container">
        {/* Left side */}
        <div className="">
          <h3> Label </h3>
          <hr /> 
          <p>
            <button className="btn-1">Tittle</button>
            <button className="btn-2"> Author</button>
          </p>
          <p>
            <h3> Boxes </h3>
            <hr />
            <h3> This section is updating soon .</h3>
          </p>
        </div>
        {/* Right Side  */}
        <div className="">
          <iframe src={data}   height="600px"  width="100%"   name="iframe_a"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DocumentPage;
