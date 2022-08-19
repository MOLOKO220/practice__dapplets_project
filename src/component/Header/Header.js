import React from "react";
import "./Header.scss";
// imgs
import imgCloud from "./img/Cloud.svg";
import imgSetting from "./img/setting.svg";

export default function Header() {
  return (
    <header className="Header">
      <div className="Header__Extension">
        <img src={imgCloud} alt="cloud" />
        Extension state: <span>Active</span>
      </div>
      <div className="Header__setting">
        <img src={imgSetting} />
        Settings
      </div>
    </header>
  );
}
