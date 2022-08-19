import React, { useState, useRef, useEffect } from "react";
import "./ProgItem.scss";
// imgs
import imgDrag from "./img/Drag.svg";

function ProgItem(props) {
  // hooks
  const wrapp = useRef(null);
  const [render, setRender] = useState(1);

  // создаём URL для иконки
  const icon = `https://dapplets-hiring-api.herokuapp.com/api/v1/files/${props.icon}`;

  // теги
  let a = [];
  const allTags = props.tags[0];
  const tagsKay = props.tags[1];
  tagsKay.forEach((e) => {
    // проверка корректности тегов
    if (e <= allTags.length - 1) {
      a.push(allTags[e]);
    }
  });

  let localDate = JSON.parse(localStorage.getItem("localDate"));
  // LocalStore
  function addLocalStore(e) {
    // добволяем в локал
    e.stopPropagation();
    let localDate = JSON.parse(localStorage.getItem("localDate"));
    if (localDate === null) {
      localStorage.setItem("localDate", JSON.stringify([props.id]));
    } else {
      localStorage.setItem(
        "localDate",
        JSON.stringify([...localDate, props.id])
      );
    }
    setRender(render + 1);
  }

  function delLocalStore(e) {
    // удоляем из локал
    e.stopPropagation();
    let localDate = JSON.parse(localStorage.getItem("localDate"));

    localStorage.setItem(
      "localDate",
      JSON.stringify(localDate.filter((el) => el != props.id))
    );
    setRender(render + 1);
  }

  return (
    <div
      className="ProgItem"
      data-id={props.id}
      ref={wrapp}
      onClick={(e) => {
        wrapp.current.classList.toggle("ProgItem__active");
      }}
    >
      <header onDragOver={(e) => e.stopPropagation()}>
        <img src={imgDrag} />
        <img src={icon} className="ProgItem__icon" />
        <div className="ProgItem__title-address">
          <h3>{props.title}</h3>
          <h6>{props.address}</h6>
        </div>
        <p className="ProgItem__description">{props.description}</p>
        <div className="ProgItem__tags">
          {/* выводим теги */}
          {a.map((e) => {
            return <div key={e.name}>{e.name}</div>;
          })}
        </div>
        {localDate != null ? (
          localDate.includes(props.id) ? (
            <button onClick={delLocalStore} className="btn-deactivate">
              Installed
            </button>
          ) : (
            <button onClick={addLocalStore}>Install</button>
          )
        ) : (
          <button onClick={addLocalStore}>Install</button>
        )}
      </header>
      <main>
        <div>
          {props.text1.length > 15 ? (
            <div className="colum-1">
              <h6>Aliquam sit</h6>
              <p>{props.text1}</p>
            </div>
          ) : (
            ""
          )}
          <div className="colum-2">
            {props.text2.length > 15 ? (
              <div>
                <h6>Semper neque</h6>
                <p>{props.text2}</p>
              </div>
            ) : (
              ""
            )}

            {props.text3.length > 15 ? (
              <div>
                <h6>Leo ipsum.</h6>
                <p>{props.text3}</p>
              </div>
            ) : (
              ""
            )}

            {props.text4.length > 15 ? (
              <div>
                <h6>Elit sagittis et.</h6>
                <p>{props.text4}</p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="colum-3">
            {props.text5.length > 15 ? (
              <div>
                <h6>Aliquam.</h6>
                <p>{props.text5}</p>
              </div>
            ) : (
              ""
            )}

            {props.text6.length > 15 ? (
              <div>
                <h6>In euismod.</h6>
                <p>{props.text6}</p>
              </div>
            ) : (
              ""
            )}

            {props.text7.length > 15 ? (
              <div>
                <h6>Justo amet.</h6>
                <p>{props.text7}</p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="colum-4">
            {props.text8.length > 15 ? (
              <div>
                <h6>Urna.</h6>
                <p>{props.text8}</p>
              </div>
            ) : (
              ""
            )}

            {props.text9.length > 15 ? (
              <div>
                <h6>Nam diam.</h6>
                <p>{props.text9}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProgItem;
