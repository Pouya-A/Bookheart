import React from "react";

const ErrorPage = () => {
  return (
    <div className="error position-absolute left-50 top-50 w-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="156.917"
        height="272"
        viewBox="0 0 156.917 272"
      >
        <g id="bookfavicon" transform="translate(0.03 0.02)">
          <path
            className="k_error"
            id="Path_1"
            data-name="Path 1"
            d="M352.2,367.73c-25.22,0-51.83-10.28-71.19-27.49l-6.87-6.11v9.2c0,13.45-9.89,24.4-22,24.4H231.9V104.19c23.64,2.3,42.24,24.16,42.24,50.7v88l6.87-6.12c19.36-17.21,46-27.48,71.19-27.48h.53c10.92.06,20.58,5.79,25.19,14.94a23.79,23.79,0,0,1-2.2,25.17l-19.83,27.05a20.63,20.63,0,0,0,0,24.08l19.84,27.21a23.73,23.73,0,0,1,2.14,25.07c-4.6,9.11-14.22,14.81-25.11,14.88Z"
            transform="translate(-227.77 -99.86)"
            fill="#ed2024"
          />
        </g>
      </svg>

      <h2 className="fw-bolder mt-3">Not Found :|</h2>
    </div>
  );
};

export default ErrorPage;
