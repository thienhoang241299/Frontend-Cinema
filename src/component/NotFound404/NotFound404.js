import React from "react";
import "./NotFound404.scss";
import { useNavigate } from "react-router-dom";
export default function NotFound404() {
  const nav = useNavigate();
  return (
    <>
      <div className="NotFound">
        <div className="div">
          <p className="text-wrapper">Hide & Seek Time!</p>
          <p className="p">Sorry, The Page you were Looking for doesn't exit.</p>
          <p className="p2">You may have mistyped the address or page may have moved.</p>
          <div className="button-back-to-home">
            <div className="overlap-group" onClick={() => nav("/")}>
              <div className="rectangle" />
              <div className="rectangle-2" />
              <div className="text-wrapper-2">Back to home</div>
            </div>
          </div>
          <div className="gif">
            <img src="https://video-public.canva.com/VAFFJgOACZc/v/339668557e.gif" alt="Animated Rotating Page Not Found"></img>
          </div>
        </div>
      </div>
    </>
  );
}
