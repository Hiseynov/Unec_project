import React from "react";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <>
      <div className="Header">
        <div className="header-top">
          <div className="header-top-logo">
            <Link to={"/"}>Logo</Link>
          </div>
          <div className="header-top-word">
            <ul>
              <li className="Acount">
                My Account <i className="fa-solid fa-right-from-bracket"></i>
              </li>
              <li className="SifarisEt">SİFARİŞ ET</li>
            </ul>
          </div>
        </div>
        <div className="header-button">
          <div className="header-button-category">
            <ul>
              <li><Link to={"Haqqımızda"}>Haqqımızda</Link></li>
              <li><Link to={"Məhsullar"}>Məhsullar</Link></li>
              <li><Link to={"Şablon"}>Şablon</Link></li>
              <li><Link to={"Blog"}>Blog</Link></li>
              <li><Link to={"Əlaqə"}>Əlaqə</Link></li>
            </ul>
          </div>
          <div className="header-button-change">
            <ul>
              <li><i className="fa-solid fa-magnifying-glass"></i></li>
              <li>Az <i className="fa-solid fa-angle-down"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
