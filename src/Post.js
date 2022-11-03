import React from "react";
import "./App.css";
import "./data";
import data from "./data";
import { nanoid } from "nanoid";

const Post = (props) => {
  const [active, setActive] = React.useState(false);
  const [like, setLike] = React.useState(props.likes);
  const handleLike = () => {
    setActive(!active);
  };

  // React.useEffect(() => {
  //   const likedLike = () => {
  //     setLike((prevState) => {
  //       return prevState + 1;
  //     });
  //   };
  // });

  return (
    <div>
      <div className="about">
        <img className="post-avatar" src={props.avatar} />
        <p className="name--location">
          <span className="post-name">{props.name} </span>
          <span className="post-location">{props.location}</span>
        </p>
      </div>
      <img className="post-post" src={props.post} />
      <div className="bottom-container">
        <div className="icon-holder">
          <img
            onClick={handleLike}
            src={
              active ? "./images/icon-heart-red.png" : "./images/icon-heart.png"
            }
          />
          <img src="./images/icon-comment.png" />
          <img src="./images/icon-dm.png" />
        </div>
        <p className="like-counter">
          {active
            ? () => {
                setLike(like + 1);
              }
            : like}{" "}
          likes
        </p>
        <p className="username">
          <span>{props.username}</span> {props.comment}
        </p>
      </div>
    </div>
  );
};

export default Post;
