import "./styles.css";
import React from "react";
import back from "../public/pictures/background-top.png";
export default function Site() {
  return (
    <div className="Page">
      <Top />
    </div>
  );
}

function Top() {
  return (
    <div className="top">
      <img className="background-top" src={back} alt="back" />
      <Logo />
      <Menu />
      <Mid />
      <Bottom />
      <Footer />
    </div>
  );
}

function Logo() {
  return <span className="logo">MoGo</span>;
}
function Menu() {
  return (
    <div className="menu">
      <span className="menu__elem">ABOUT</span>
      <span className="menu__elem">SERVIS</span>
      <span className="menu__elem">WORK</span>
      <span className="menu__elem">BLOG</span>
      <span className="menu__elem">CONTACT</span>
    </div>
  );
}

function Mid() {
  return (
    <div className="mid">
      <span className="title">Creative Template</span>
      <h1 className="under-title">WELCOME TO MOGO</h1>
    </div>
  );
}

function Bottom() {
  return (
    (<span className="stripe"></span>),
    (
      <a className="button" href="https://www.google.ru/">
        LEARN MORE
      </a>
    )
  );
}

function Footer() {
  return (
    <div className="footer">
      <FooterElem digit="01 " name="INTRO" />
      <FooterElem digit="02 " name="WORK" />
      <FooterElem digit="03 " name="ABOUT" />
      <FooterElem digit="04 " name="CONTACTS" />
    </div>
  );
}

function FooterElem(props) {
  let digit = props.digit;
  let name = props.name;
  return (
    <div className="navigation">
      <span className="footer-stripe"></span>
      <span className="digit">{digit}</span>
      <span className="name">{name}</span>
    </div>
  );
}
