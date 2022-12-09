const CommentForm = ({
  name,
  email,
  commentDet,
  setName,
  setEmail,
  setCommentDet,
  addComment,
}) => {
  return (
    <form action="submit">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
        <h3>Comments</h3>
      </div>
      <div className="comments">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="text-area col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <textarea
                type="text"
                placeholder="Comment"
                rows="6"
                cols="51"
                value={commentDet}
                onChange={(e) => {
                  setCommentDet(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 co-12 d-flex justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-sm-center justify-content-center mt-5">
              <button
                className="btn py-2 px-4 btn-dark fw-bold rounded-0 "
                onClick={addComment}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default CommentForm;
