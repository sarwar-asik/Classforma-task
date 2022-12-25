import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Document.css";

const DocumentPage = () => {
  const { state } = useLocation();
  const { id, name, data } = state;
  const defaultSize = localStorage.getItem("size1");

  const [size1, setSize1] = useState(
    defaultSize ? defaultSize : { height: "600", width: "100%" }
  );

  const titleAnnotate = () => {
    const size11 = { height: "30", width: "20" };
    setSize1({ size11 });
    localStorage.setItem("size1", JSON.stringify(size11));
  };

  return (
    <div>
      <button>
        <Link to="/" className="Link">
          Home Page
        </Link>
      </button>
      <h1>{state.name}</h1>
      <div className="detail-container">
        {/* Left side */}
        <div className="">
          <h3> Label </h3>
          <hr />
          <p>
            <button onClick={titleAnnotate} className="btn-1">
              Tittle
            </button>
            <button className="btn-2"> Author</button>
          </p>
          <p>
            <h3> Boxes </h3>
            <hr />
            {/* size-1 */}
            <p className="size">
              <span> x:119 ,</span>
              <span> y:15 ,</span>
              <span> height:20 ,</span>
              <span> width:20 ,</span>
              <button onClick={titleAnnotate} className="btn-1">
                Title
              </button>
            </p>
            {/* size-2 */}
            <p className="size">
              <span> x:119 ,</span>
              <span> y:15 ,</span>
              <span> height:20 ,</span>
              <span> width:20 ,</span>
              <button className="btn-2">Author</button>
            </p>
            {/* size-3 */}
            <p className="size">
              <span> x:119 ,</span>
              <span> y:15 ,</span>
              <span> height:20 ,</span>
              <span> width:20 ,</span>
              <button className="btn-2">Author</button>
            </p>
            {/* size-4 */}
            <p className="size">
              <span> x:119 ,</span>
              <span> y:15 ,</span>
              <span> height:20 ,</span>
              <span> width:20 ,</span>
              <button className="btn-2">Author</button>
            </p>
            {/* size-4 */}
            <p className="size">
              <span> x:119 ,</span>
              <span> y:15 ,</span>
              <span> height:20 ,</span>
              <span> width:20 ,</span>
              <button className="btn-2">Author</button>
            </p>
            <h5>
              {" "}
              This section is updating soon . I am trying not for task . For my
              knowledge.
            </h5>
          </p>
        </div>
        {/* Right Side  */}
        <div className="">
          <iframe
            src={data}
            height={size1?.height}
            width="100%"
            name="iframe_a"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DocumentPage;
