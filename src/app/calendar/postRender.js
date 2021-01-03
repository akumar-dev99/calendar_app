import React, { Component } from "react";
import PostCard from "./postCard";

export class postRender extends Component {
  render() {
    return (
      <div className="postDisplay">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    );
  }
}

export default postRender;
