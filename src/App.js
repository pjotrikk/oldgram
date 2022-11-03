import "./App.css";
import Navbar from "./Navbar";
import Post from "./Post";
import "./data";
import data from "./data";
import { nanoid } from "nanoid";
import React from "react";

function App() {
  const postElements = data.map((data) => {
    return (
      <Post
        avatar={data.avatar}
        name={data.name}
        location={data.location}
        post={data.post}
        likes={data.likes}
        username={data.username}
        comment={data.comment}
      />
    );
  });
  return (
    <>
      <Navbar />
      {postElements}
    </>
  );
}

export default App;
