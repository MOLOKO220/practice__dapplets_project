import React, { useEffect, useState } from "react";
import "./Main.scss";
import ProgItem from "../ProgItem/ProgItem";
// imgs
import imgSearch from "./img/Search.svg";

export default function Main() {
  // hooks
  const [data, setData] = useState(null);
  const [tags, setTags] = useState(null);

  // получаем tegs
  useEffect(() => {
    fetch("https://dapplets-hiring-api.herokuapp.com/api/v1/tags")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTags(data.data);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?limit=11&start=0&filter=[{"property":"title","value":"privacy"}]&sort=[{"property":"title","direction":"ASC"}]`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let newArray = [];
        data.data.forEach((e) => {
          if (e.description != "" && e.tags.length > 1) {
            newArray.push(e);
          }
        });
        setData(newArray);
      });
  }, []);

  return (
    <div className="Main">
      <header
        onClick={(e) => {
          console.log(data);
        }}
      >
        <label className="input-search">
          <img src={imgSearch} />
          <input type="text" placeholder="Search"></input>
        </label>
        <select>
          <option defaultValue>Release Date</option>
        </select>
        <select>
          <option defaultValue>Descending</option>
        </select>
      </header>
      <main>
        {data != null
          ? data.map((item) => (
              <ProgItem
                key={item.id}
                id={item.id}
                icon={item.icon}
                title={item.title}
                address={item.address}
                description={item.description}
                tags={[tags, item.tags]}
                text1={item.text_1}
                text2={item.text_2}
                text3={item.text_3}
                text4={item.text_4}
                text5={item.text_5}
                text6={item.text_6}
                text7={item.text_7}
                text8={item.text_8}
                text9={item.text_9}
              />
            ))
          : "null"}
      </main>
    </div>
  );
}
