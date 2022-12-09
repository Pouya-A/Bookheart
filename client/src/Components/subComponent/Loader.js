import React from "react";

const Loader = () => {
  return (
    <div className="loading">
      <div className="container">
        <div className="loader">
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          {/* <div class="loader--text w-100 text-center"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Loader;
