import React from "react";
import "./Footer.scss";
import logo from '../../logo.svg'
export default function Footer() {
  return <div className="footer">
      <div className="footer-container">
        <div className="footer-detail">
          <div>
            <h3>Giới thiệu</h3>
            <p>Về Chúng tôi</p>
            <p>Thỏa Thuận Sử Dụng</p>
            <p>Quy Chế Hoạt Động</p>
            <p>Chính Sách Bảo Mật</p>
          </div>
          <div>
            <h3>Góc Điện Ảnh</h3>
            <p>Thể Loại Phim</p>
            <p>Bình Luận Phim</p>
            <p>Blog Điện Ảnh</p>
            <p>Phim Hay Tháng</p>
          </div>
          <div>
            <h3>Hỗ Trợ</h3>
            <p>Góp Ý</p>
            <p>Sale & Services</p>
            <p>Rạp/ Giá Vé</p>
            <p>Tuyển dụng </p>
            <p>FAQ</p>
          </div>
          <div>
            <img alt="" width={100} src={logo}></img>
            <div className="footer-icon">
                <i className="pi pi-facebook" style={{ fontSize: '1.5rem' }}></i>
                <i className="pi pi-youtube" style={{ fontSize: '1.5rem' }}></i>
                <i className="pi pi-instagram" style={{ fontSize: '1.5rem' }}></i>
            </div>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-company">
          <div>
            <img alt="" width={100} src={logo}></img>
          </div>
          <div>
            <h3>CÔNG TY CỔ PHẦN PHIM THIÊN TÂN</h3>
            <p>Toà nhà Bitexco Nam Long, 63A Võ Văn Tần, Phường 6, Quận 3, Tp. Thủ Đức, Việt Nam <br></br> 028.39.xxx.xxx - 19002xxxx (9:00 - 22:00) - hotro@fpttudio.vn</p>
          </div>
        </div>
      </div>    
  </div>;
}
