import React from "react";

const Post = ({id, title, desc}) => {
  return (
    <div className="post">
      <h4 className="id">{id}</h4>
      <h5 className="title">{title}</h5>
      <p className="desc">{desc}</p>
    </div>
  );
};

export default Post;
