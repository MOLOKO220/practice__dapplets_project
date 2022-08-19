import React, { useRef } from "react";
import "./SideManu.scss";

// imgs
import imgLogo1 from "./img/Logo1.svg";
import imgLogo2 from "./img/Logo2.svg";
import imgArrow from "./img/arrow.svg";
import imgNavFirst from "./img/navFirst.svg";
import imgNavSecond from "./img/navSecond.svg";
import imgNavThird from "./img/navThird.svg";
import imgNavFour from "./img/navFour.svg";
import imgNavFive from "./img/navFive.svg";

export default function SideManu() {
  // hooks
  const manuWrapp = useRef(null);

  // открыть/закрыть меню
  function openMenu(e) {
    manuWrapp.current.classList.add("SideManu__active");
  }
  function closeMenu() {
    manuWrapp.current.classList.remove("SideManu__active");
  }

  return (
    <div className="SideManu" ref={manuWrapp}>
      <div className="SideManu__logo">
        <img src={imgLogo1} alt="Logo" />
        <img className="menu-active" src={imgLogo2} alt="brend" />
        <img
          onClick={closeMenu}
          className="menu-active"
          src={imgArrow}
          alt="close button"
        />
      </div>
      <nav>
        <div onClick={openMenu} className="this-page">
          <img src={imgNavFirst} />
          <p>All Dapplets</p>
        </div>
        <div>
          <img src={imgNavSecond} />
          <p>Editor’s Choice</p>
        </div>
        <div>
          <img src={imgNavThird} />
          <p>Essential Dapplets</p>
        </div>
        <div>
          <img src={imgNavFour} />
          <p>Social Networks</p>
        </div>
        <div>
          <img src={imgNavFive} />
          <p>Financial Dapplets</p>
        </div>
      </nav>
      <div className="SideManu__lists">
        <h5>My lists</h5>
        <div>
          TOP-10 Twitter Dapplets (<a>Me</a>)
        </div>
        <div>
          Best Financial dapplets by Jack (<a>Jack</a>)
        </div>
        <div>
          TOP-10 Twitter Dapplets (<a>Me</a>)
        </div>
      </div>
      <div className="SideManu__tegs">
        <h5>My tags</h5>
        <div>
          <div>Twitter x</div>
          <div>Social Media x</div>
          <div>Top 10 x</div>
          <div>Finances x</div>
          <div>Media x</div>
          <div>Test x</div>
          <div>ToDo x</div>
        </div>
      </div>
    </div>
  );
}
