import React from "react";

const CommentDeatails = (props) => {
  return (
    <div className="comment mt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="comment-user col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
            <h5>{props.name}</h5>
            <label htmlFor="">{props.email}</label>
          </div>
          <div className="comment-det">
            <p className="lead">
              {props.comment}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentDeatails;
