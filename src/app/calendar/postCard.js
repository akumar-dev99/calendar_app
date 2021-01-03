import React, { Component } from "react";
import StarRatings from "react-star-ratings";

// changeRating(newRating, name) {
//   this.setState({
//     rating: newRating,
//   });
// }

export function PostCard() {
  

    return (
      <div className="postOutline">
        <img
          src="https://images.unsplash.com/photo-1608731294828-d4023daac5ca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80"
          class="rounded-circle"
          alt="Cinque Terre"
          width="100%"
          height="70%"
        />
        <div className="postInfo">
          <div className="tag">
            <text Style="background-color:#E5E8E8; border-width:0.5px;  border-color: #000000; width:100px; height:100px; border-radius:50px; padding: 4px; padding-left: 5px; padding-right:5px; margin-right: 5px; font-size: 12px">
              Cu
            </text>
            <text Style="background-color: #95A5A6; border-width:0.5px; border-color: #000000; width:100px; height:100px; border-radius:50px; padding: 4px; padding-left: 5px; padding-right:5px; margin-right: 5px; font-size: 12px">
              Pr
            </text>
            <text Style="background-color: #AEB6BF; border-width:0.5px;  border-color: #000000; width:100px; height:100px; border-radius:50px; padding: 4px; padding-left: 5px; padding-right:5px; margin-right: 5px; font-size: 12px">
              HC
            </text>
            <text Style="background-color: #808B96; border-width:0.5px; border-color: #000000; width:100px; height:100px; border-radius:50px; padding: 4px; padding-left: 5px; padding-right:5px; margin-right: 5px; font-size: 12px">
              DC
            </text>
            <text Style="background-color: #3498DB; border-width:0.5px; border-color: #000000; width:100px; height:100px; border-radius:50px; padding: 4px; padding-left: 8px; padding-right:8px; font-size: 12px">
              C
            </text>
          </div>
          <div Style="padding-right: 5px">
            <StarRatings
              rating={4}
              starRatedColor="#3498DB"
              // changeRating={this.changeRating}
              numberOfStars={5}
              name="rating"
              starDimension="12px"
              starSpacing="2px"
            />
          </div>
        </div>
        <div Style=" font-weight:bold; color:#2C3236; padding-left: 5px">
          17th Nov, 2021
        </div>
        <div Style=" color:#2C3236;  padding-left: 5px; font-size: 14px">
          It was amazing talking with them regarding my hair.
        </div>
      </div>
    );
}

export default PostCard;
