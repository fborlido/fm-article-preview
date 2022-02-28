import React, { useState, useEffect } from "react";

import drawers from "./images/drawers.jpg";
import avatar from "./images/avatar.jpg";
import { ReactComponent as Share } from "./images/icon-share.svg";

import fb from "./images/icon-facebook.svg";
import tw from "./images/icon-twitter.svg";
import pn from "./images/icon-pinterest.svg";

import { useWindowWidth } from "./useWindowSize";

const App = () => {
  const { width } = useWindowWidth();

  const [mobileShare, setMobileShare] = useState(false);
  const [desktopShare, setDesktopShare] = useState(false);

  useEffect(() => {
    if (mobileShare && width > 1024) {
      setMobileShare(false)
      setDesktopShare(true)
    } else if (desktopShare && width < 1024) {
      setMobileShare(true)
      setDesktopShare(false)
    }
  }, [width])
  

  const handleClick = () => {
    if (width < 1024) {
      setDesktopShare(false);
      setMobileShare(!mobileShare);
    } else {
      setMobileShare(false);
      setDesktopShare(!desktopShare);
    }
  };

  return (
    <>
      <main>
        <div className="card">
          <div className="picture">
            <img src={drawers} alt="" />
          </div>
          <div className="content">
            <div className="text">
              <h1 className="lead">
                Shift the overall look and feel by adding these wonderful
                touches to furniture in your home
              </h1>
              <p className="body">
                Ever been in a room and felt like something was missing? Perhaps
                it felt slightly bare and uninviting. I’ve got some simple tips
                to help you make any room feel complete.
              </p>
            </div>
            {mobileShare ? (
              <>
                <div className="mobileShare">
                  <div className="mobileShare__content">
                    <p>Share</p>
                    <img src={fb} alt="" />
                    <img src={tw} alt="" />
                    <img src={pn} alt="" />
                  </div>
                  <button className="share share--active" onClick={handleClick}>
                    <Share />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="action">
                  <div className="person">
                    <div className="avatar">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="person__text">
                      <h1 className="name">Michelle Appleton</h1>
                      <p className="date">28 Jun 2020</p>
                    </div>
                  </div>
                  <button
                    className={"share " + (desktopShare && "share--active")}
                    onClick={handleClick}
                  >
                    <div
                      className={
                        "desktopShare " +
                        (desktopShare && "desktopShare--active")
                      }
                    >
                      <p>Share</p>
                      <img src={fb} alt="" />
                      <img src={tw} alt="" />
                      <img src={pn} alt="" />
                    </div>
                    <Share />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by
        <a href="https://github.com/fborlido" target="_blank">
          Frederico Borlido
        </a>
        .
      </div>
    </>
  );
};

export default App;
