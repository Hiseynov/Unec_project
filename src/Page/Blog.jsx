import React, { useState } from "react";
import { Link } from "react-router-dom";
import DateComponent from "../components/DateComponent";
import { dates } from "../data/data";
// import NewsBlock from "./NewsBlock";

function DateGroup() {

  return (
    <>
      <div id="Blog">
        <div className="Blog-container">
          <div className="Blog-container-top">
            <p>
              <Link to={"/"}>Home</Link>{" "}
              <i className="fa-solid fa-chevron-right"></i> <span>Blog</span>
            </p>
            <h2>BLOG FOR PACKAGING KNOWLEDGE & ADVICE</h2>
            <div className="Blog-container-button">
              <div className="Blog-container-left">
                <img src="src\img\News.png" alt="" />
              </div>
              <div className="Blog-container-right">
                <p>
                  Welcome to Kuyo Verpackungen, your competent partner
                  forcontract filling, packaging, contract packaging and
                  packaging. We offer a wide range of services including
                  bottling of powders, creams, liquids, creams, granules and
                  other free-flowing raw materials such as dietary supplements
                  and spices. 
                </p>
              </div>
            </div>
          </div>

          <DateComponent dates={dates}></DateComponent>
        </div>
      </div>
    </>
  );
}

export default DateGroup;
