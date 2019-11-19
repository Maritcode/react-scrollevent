import React from "react";
import * as style from "../style";

export const Sect4 = ({ fref, onscroll, status }) => {
  return (
    <style.styledDiv>
      <div ref={fref} onScroll={onscroll} status={status}>
        <h2>This is Section 4!</h2>
        <p>Hello</p>
      </div>
    </style.styledDiv>
  );
};
