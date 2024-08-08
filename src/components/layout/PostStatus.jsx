import React from "react";
import profile from "../../assets/image/profile.png";
import { Col, Row } from "react-bootstrap";
import article from "../../assets/image/article.png";

const PostStatus = () => {
  return (
    <div className="status-container ">
      <div className="d-flex align-items-center gap-3">
        <div className="profile">
          <img src={profile} className="profile-image" alt="profile-img" />
        </div>
        <div className="status-placeholder w-100 p-2">
          What's on Your mind, Samikshya?
        </div>
      </div>
      <hr />
      <div className="media gap-3">
       

        {/* <div className="post">
          
          <div className="d-flex">
          <div className="menu-image menu-image-profile">
              <img src={article}  alt="profile-img" />
            </div>

        <div className="menu-title">Post</div>
          </div>
        </div>
        <div className="photo">h</div>
        <div className="ads">h</div> */}
      </div>
      <div></div>
    </div>
  );
};

export default PostStatus;
