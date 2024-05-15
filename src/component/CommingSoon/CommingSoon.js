import React from "react";
import "./CommingSoon.scss";
import { useNavigate } from "react-router-dom";
export default function CommingSoon() {
  const nav = useNavigate();

  return (
    <div className="coming-soon">
      <div className="div">
        <p className="text-wrapper">Trang này đang được phát triển</p>
        <p className="p">Các bạn sẽ sớm được truy cập vào trang web này với các chức năng hoàn chỉnh sớm thôi, vui lòng chờ. Chân thành cảm ơn</p>
        <div className="button-back-to-home" onClick={() => nav("/")}>
          <div className="overlap-group">
            <div className="rectangle" />
            <div className="rectangle-2" />
            <div className="text-wrapper-2">Back to home</div>
          </div>
        </div>
      </div>
    </div>
  );
}
