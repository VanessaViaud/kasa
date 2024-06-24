// CollapseContent.js
import React from "react";
import Collapse from "../components/Collapse";
import data from "../datas/About.json";

function CollapseContent() {
  return (
    <div className="collapse__container">
      {data.map((item) => (
        <Collapse key={item.id} title={item.title}>
          <p className="collapse__content--text">{item.content}</p>
        </Collapse>
      ))}
    </div>
  );
}

export default CollapseContent;
