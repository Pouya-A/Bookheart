import Axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import CommentDeatails from "../Components/CommentDeatails";
import CommentForm from "../Components/CommentForm";
import ErrorPage from "../Components/subComponent/ErrorPage";
import Loader from "../Components/subComponent/Loader";
import { ContextPort } from "../context/context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SinglePortfolio = (props) => {
  const { error, setError } = useContext(ContextPort);
  const [getSingle, setGetSingle] = useState();
  const [comments, setComments] = useState([]);
  toast.configure();

  const { id } = props.match.params;

  const newId = parseInt(id);

  useEffect(() => {
    Axios.get(`http://localhost:3001/bookapi/getsinglebook/${id}`).then(
      (response) => {
        if (response.data) {
          setError(false);
          setGetSingle(...response.data);
        } else {
          setError(true);
          return null;
        }
      }
    );

    Axios.get(`http://localhost:3001/bookapi/getcomments/${id}`).then(
      (response) => {
        setComments(response.data);
      }
    );
  }, []);

  const notifyError = () => {
    // Calling toast method by passing string
    toast.error("Fill Fields");
  };
  const notifySuccess = () => {
    // Calling toast method by passing string
    toast.success("Submited");
  };

  ////////addcomment
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [commentDet, setCommentDet] = useState("");
  const [bookID, setBookID] = useState(newId);
  const addComment = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || commentDet.length === 0) {
      notifyError();
    } else {
      Axios.post("http://localhost:3001/bookapi/setcomment", {
        name: name,
        email: email,
        bookID: bookID,
        comment: commentDet,
      }).then(() => {
        console.log("success");
      });

      notifySuccess();
      setTimeout(() => {
        window.location.reload(false);
      }, 3000);
    }
  };

  if (error) {
    return <ErrorPage />;
  } else if (!getSingle) {
    return (
      <div className="position-absolute" style={{ top: "30%", left: "30%" }}>
        <Loader />
      </div>
    );
  } else {
    return (
      <div className="single">
        <div className="single-content-img">
          <img src={getSingle.img} alt="" />
        </div>
        <div className="single-content mb-5">
          <div className="single-content-info">
            <div className="single-content-info-det">
              <label htmlFor="">Name:</label>
              <h6>{getSingle.name}</h6>
            </div>
            <div className="single-content-info-det">
              <label htmlFor="">Title:</label>
              <h6>{getSingle.title}</h6>
            </div>
            <div className="single-content-info-det">
              <label htmlFor="">Author:</label>
              <h6>{getSingle.author}</h6>
            </div>
            <div className="single-content-info-det">
              <label htmlFor="">Year Of Publication:</label>
              <h6>{getSingle.yearofpublishment}</h6>
            </div>
          </div>
          <div className="desc-container">
            <label htmlFor="">Description:</label>
            <h6>{getSingle.desc}</h6>
          </div>
        </div>

        <CommentForm
          addComment={addComment}
          name={name}
          email={email}
          commentDet={commentDet}
          setName={setName}
          setEmail={setEmail}
          setCommentDet={setCommentDet}
        />

        <div className="comments-container">
          {comments.map((i) => (
            <CommentDeatails
              name={i.name}
              email={i.email}
              comment={i.comment}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default SinglePortfolio;
