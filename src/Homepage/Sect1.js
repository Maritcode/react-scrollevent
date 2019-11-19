import React from "react";
import * as style from "../style";

export const Sect1 = ({ fref, onscroll, status }) => {
  return (
    <style.styledDiv>
      <div ref={fref} onScroll={onscroll} status={status}>
        <h2>This is Section 1!</h2>
        <p>Hello</p>
      </div>
    </style.styledDiv>
  );
};
