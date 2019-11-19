import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import * as style from "./style";
import { NavMenu } from "./Homepage/NavMenu";
import { Sect1 } from "./Homepage/Sect1";
import { Sect2 } from "./Homepage/Sect2";
import { Sect3 } from "./Homepage/Sect3";
import { Sect4 } from "./Homepage/Sect4";
import { Sect5 } from "./Homepage/Sect5";

function debounce(func, wait, immediate) {
  var timeout;

  return function executedFunction() {
    var context = this;
    var args = arguments;

    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

const Index = () => {
  // Ref Links
  const frefLinks = {
    1: useRef(1),
    2: useRef(2),
    3: useRef(3),
    4: useRef(4),
    5: useRef(5)
  };

  const scrollLink = debounce(function(i) {
    let frefLink = frefLinks[i];
    return frefLink.current.scrollIntoView({
      block: "center",
      behavior: "smooth"
    });
  }, 100);

  const pageScroll = e => {
    let topSpace = document.documentElement.scrollTop;
    let viewSpace = document.documentElement.clientHeight;
    let current = parseInt(topSpace / viewSpace + 1, 10);
    if (e.deltaY <= 0) {
      console.log("up");
      e.preventDefault();
      return scrollLink(current - 1);
    } else if (e.deltaY >= 0) {
      console.log("down");
      e.preventDefault();
      return scrollLink(current + 1);
    }
  };

  useEffect(() => {
    document.addEventListener("wheel", pageScroll, { passive: false });
    return () =>
      document.removeEventListener("wheel", pageScroll, { passive: false });
  }, []);

  return (
    <React.Fragment>
      <style.globalStyle />
      <NavMenu
        scrollToLinkA={() => {
          scrollLink(1);
        }}
        scrollToLinkB={() => {
          scrollLink(2);
        }}
        scrollToLinkC={() => {
          scrollLink(3);
        }}
        scrollToLinkD={() => {
          scrollLink(4);
        }}
        scrollToLinkE={() => {
          scrollLink(5);
        }}
      />
      <Sect1 fref={frefLinks[1]} status="current" />
      <Sect2 fref={frefLinks[2]} status="down" />
      <Sect3 fref={frefLinks[3]} status="down" />
      <Sect4 fref={frefLinks[4]} status="down" />
      <Sect5 fref={frefLinks[5]} status="down" />
    </React.Fragment>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
