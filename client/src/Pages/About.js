import Axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import CommentDeatails from "../Components/CommentDeatails";
import CommentForm from "../Components/CommentForm";
import ModalPage from "../Components/ModalPage";
import { ContextPort } from "../context/context";
import library from "../pic/library.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const About = () => {
  const { modalOpen, isModal } = useContext(ContextPort);

  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [commentDet, setCommentDet] = useState("");
  const [shopComments, setShopComments] = useState([]);
  toast.configure();

  const addComment = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || commentDet.length === 0) {
      notifyError();
    } else {
      Axios.post("http://localhost:3001/bookapi/setcommentforshop", {
        name: name,
        email: email,
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

  useEffect(() => {
    Axios.get(`http://localhost:3001/bookapi/getcommentsforshop`).then(
      (response) => {
        setShopComments(response.data);
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

  return (
    <div className="about">
      <div className="about-img mb-5">
        <img src={library} alt="" className="img-responsuve center-block" />
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="title mb-5">
            <h6>About Book</h6>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-5">
            <div className="about-content">
              <p className="fw-normal fst-italic lh-lg mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
                et modi ea officiis voluptatem! Quasi dolorem suscipit est
                temporibus eum doloribus impedit cumque, nemo consequuntur!
              </p>

              <button
                className="btn py-3 px-4 btn-dark fw-bold rounded-0 bookbtn"
                onClick={modalOpen}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      <ModalPage />

      <CommentForm
        addComment={addComment}
        name={name}
        email={email}
        commentDet={commentDet}
        setName={setName}
        setEmail={setEmail}
        setCommentDet={setCommentDet}
      />
      {shopComments.map((i) => (
        <CommentDeatails name={i.name} email={i.email} comment={i.comment} />
      ))}
    </div>
  );
};

export default About;
