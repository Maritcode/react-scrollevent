import React from "react";
import * as style from "../style";

export const NavMenu = ({
  scrollToLinkA,
  scrollToLinkB,
  scrollToLinkC,
  scrollToLinkD,
  scrollToLinkE,
  active1,
  active2,
  active3,
  active4,
  active5
}) => {
  return (
    <style.styledNav>
      <nav>
        <ul>
          <li>
            <div onClick={scrollToLinkA}>
              <h3>|</h3>
              <style.styledNavP active={null}>Part1</style.styledNavP>
            </div>
          </li>
          <li>
            <div onClick={scrollToLinkB}>
              <h3>|</h3>
              <style.styledNavP active={active2}>Part2</style.styledNavP>
            </div>
          </li>
          <li>
            <div onClick={scrollToLinkC}>
              <h3>|</h3>
              <style.styledNavP active={active3}>Part3</style.styledNavP>
            </div>
          </li>
          <li>
            <div onClick={scrollToLinkD}>
              <h3>|</h3>
              <style.styledNavP active={active4}>Part4</style.styledNavP>
            </div>
          </li>
          <li>
            <div onClick={scrollToLinkE}>
              <h3>|</h3>
              <style.styledNavP active={active5}>Part5</style.styledNavP>
            </div>
          </li>
        </ul>
      </nav>
    </style.styledNav>
  );
};
