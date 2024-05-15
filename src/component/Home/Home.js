import React from "react";
import "./Home.scss";
import Movie from "./Movie/Movie";
import ShouldWatch from "./ShouldWatch/ShouldWatch";
import Event from "./Event/Event";
import { useSelector } from "react-redux";
import Banner from "./Banner/Banner";
export default function Home() {
  const lsMovieShowing = useSelector((state) => state.movieManage.lsMovie.movieShowing);
  const lsMovieSoon = useSelector((state) => state.movieManage.lsMovie.movieCommingSoon);
  return (
    <div className="Home">
      <Banner data={lsMovieShowing} />
      <div className="container">
        <div className="search">
          <select name="movie" id="movie">
            <option value="">Chọn Phim</option>
          </select>
          <select name="cinema" id="cinema">
            <option value="">Chọn Rạp</option>
          </select>
          <select name="date" id="date">
            <option value="">Chọn Ngày</option>
          </select>
          <select name="session" id="session">
            <option value="">Chọn Suất</option>
          </select>
          <button id="btn-expressbook">Mua vé nhanh</button>
        </div>
      </div>
      <div className="container">
        <div className="top">
          <div className="left">
            <h3>PHIM ĐANG CHIẾU</h3>
          </div>
          <div className="right">
            {/* <p>Hãy cùng bạn bè, người thân, nửa kia của đời bạn đến xem</p>
            <p>Những bộ phim tuyệt vời đang trình chiếu</p> */}
          </div>
        </div>
      </div>
      <Movie data={lsMovieShowing} />
      <ShouldWatch />
      <div className="container">
        <div className="top">
          <div className="left">
            <h3>PHIM SẮP CHIẾU</h3>
          </div>
          <div className="right">
            {/* <p>Hãy cùng bạn bè, người thân, nửa kia của đời bạn đến xem</p>
            <p>Những bộ phim tuyệt vời đang trình chiếu</p> */}
          </div>
        </div>
      </div>
      <Movie data={lsMovieSoon} />
      
      <Event />
      <div className="About">
        <div className="container">
        <>
        <h3>Thien Tan Cinema</h3>
        <div className="wysiwyg text-sm">
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "10.0pt",
              marginLeft: "0in",
              textAlign: "justify"
            }}
          >
            <span style={{ fontSize: 14 }}>
              <span style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                <a href="https://www.galaxycine.vn/">
                  <b>Thiên Tân Cinema</b>
                </a>
                &nbsp;là một trong những công ty tư nhân đầu tiên về điện ảnh được
                thành lập từ năm 2003, đã khẳng định thương hiệu là 1 trong 10 địa
                điểm vui chơi giải trí được yêu thích nhất. Ngoài hệ thống rạp chiếu
                phim hiện đại, thu hút hàng triệu lượt người đến xem,{" "}
                <a href="https://www.galaxycine.vn/">
                  <b>Thiên Tân Cinema</b>
                </a>{" "}
                còn hấp dẫn khán giả bởi không khí thân thiện cũng như chất lượng dịch
                vụ hàng đầu.
              </span>
            </span>
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "10.0pt",
              marginLeft: "0in",
              textAlign: "justify"
            }}
          >
            <span style={{ fontSize: 14 }}>
              <span style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                Đến website{" "}
                <a href="https://www.galaxycine.vn/">
                  <i>thientan.vn</i>
                </a>
                , khách hàng&nbsp;sẽ dễ dàng tham khảo các{" "}
                <a href="https://www.galaxycine.vn/phim-dang-chieu">
                  <i>phim hay nhất</i>
                </a>
                ,&nbsp;
                <a href="https://www.galaxycine.vn/phim-dang-chieu">
                  <i>phim mới nhất</i>
                </a>{" "}
                đang chiếu hoặc sắp chiếu luôn được cập nhật thường xuyên.{" "}
                <a href="https://www.galaxycine.vn/lich-chieu">
                  <i>Lịch chiếu</i>
                </a>{" "}
                tại tất cả hệ thống{" "}
                <a href="https://www.galaxycine.vn/">
                  <i>rạp chiếu phim</i>{" "}
                </a>
                của{" "}
                <a href="https://www.galaxycine.vn/">
                  <b>Thiên Tân Cinema</b>
                </a>{" "}
                cũng được cập nhật đầy đủ hàng ngày hàng giờ trên<i> trang chủ</i>.{" "}
              </span>
            </span>
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "10.0pt",
              marginLeft: "0in",
              textAlign: "justify"
            }}
          >
            <span style={{ fontSize: 14 }}>
              <span style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                Giờ đây đặt vé tại{" "}
                <b>
                  <a href="https://www.galaxycine.vn/">Thiên Tân Cinema</a>&nbsp;
                </b>
                càng thêm dễ dàng chỉ với&nbsp;vài thao tác vô cùng đơn giản. Để mua
                vé, hãy vào tab Mua vé. Quý khách có thể chọn Mua vé theo phim, theo
                rạp, hoặc theo ngày. Sau đó, tiến hành mua vé theo các bước hướng dẫn.
                Chỉ trong vài phút, quý khách sẽ nhận được tin nhắn và email phản hồi{" "}
                <i>Đặt vé thành công</i> của{" "}
                <a href="https://www.galaxycine.vn/">
                  <b>Thiên Tân Cinema</b>
                </a>
                . Quý khách có thể dùng tin nhắn lấy vé tại quầy vé của
                <a href="https://www.galaxycine.vn/">
                  {" "}
                  <b>Thiên Tân Cinema</b>
                </a>{" "}
                hoặc quét mã QR để một bước vào rạp mà không cần tốn thêm bất kỳ công
                đoạn nào nữa.
              </span>
            </span>
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "10.0pt",
              marginLeft: "0in",
              textAlign: "justify"
            }}
          >
            <span style={{ fontSize: 14 }}>
              <span style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                Nếu bạn đã chọn được{" "}
                <a href="https://www.galaxycine.vn/phim-dang-chieu">
                  <i>phim hay</i>
                </a>{" "}
                để xem, hãy đặt vé cực nhanh bằng box <i>Mua Vé Nhanh</i> ngay từ{" "}
                <a href="https://www.galaxycine.vn/">
                  <i>Trang Chủ</i>
                </a>
                . Chỉ cần một phút, tin nhắn và email phản hồi của{" "}
                <b>
                  <a href="https://www.galaxycine.vn/">Galaxy Cinema</a>{" "}
                </b>
                sẽ gửi ngay vào điện thoại và hộp mail của bạn.{" "}
              </span>
            </span>
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "10.0pt",
              marginLeft: "0in",
              textAlign: "justify"
            }}
          >
            <span style={{ fontSize: 14 }}>
              <span style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                Nếu chưa quyết định sẽ xem <i>phim mới</i> nào, hãy tham khảo các bộ
                <a href="https://www.galaxycine.vn/phim-dang-chieu">
                  {" "}
                  <i>phim hay</i>
                </a>{" "}
                trong mục
                <a href="https://www.galaxycine.vn/phim-dang-chieu">
                  {" "}
                  <i>Phim Đang Chiếu</i>
                </a>{" "}
                cũng như{" "}
                <a href="https://www.galaxycine.vn/phim-sap-chieu">
                  <i>Phim Sắp Chiếu</i>{" "}
                </a>
                tại{" "}
                <a href="https://www.galaxycine.vn/">
                  <i>rạp chiếu phim</i>
                </a>{" "}
                bằng cách vào mục{" "}
                <a href="https://www.galaxycine.vn/binh-luan-phim">
                  <i>Bình Luận Phim</i>
                </a>{" "}
                ở{" "}
                <i>
                  <a href="http://beta.galaxycine.vn/dien-anh">Góc Điện Ảnh</a>{" "}
                </i>
                để đọc những bài bình luận chân thật nhất, tham khảo và cân nhắc. Sau
                đó, chỉ việc&nbsp;đặt vé bằng box <i>Mua Vé Nhanh</i> ngay ở đầu trang
                để chọn được suất chiếu và chỗ ngồi vừa ý nhất. &nbsp;
              </span>
            </span>
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "10.0pt",
              marginLeft: "0in",
              textAlign: "justify"
            }}
          >
            <span style={{ fontSize: 14 }}>
              <span style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                <a href="https://www.galaxycine.vn/">
                  <b>Thiên Tân Cinema</b>
                </a>{" "}
                luôn có những chương trình
                <a href="https://www.galaxycine.vn/khuyen-mai">
                  {" "}
                  <i>khuyến mãi</i>, <i>ưu đãi</i>
                </a>
                , quà tặng vô cùng hấp dẫn như <i>giảm giá</i> vé, tặng vé xem phim
                miễn phí, tặng Combo, tặng quà phim… &nbsp;dành cho các khách hàng.
              </span>
            </span>
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "10.0pt",
              marginLeft: "0in",
              textAlign: "justify"
            }}
          >
            <span style={{ fontSize: 14 }}>
              <span style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                Trang web <i>thientan.vn</i> còn có mục <i>Góc Điện Ảnh</i> - nơi
                lưu trữ dữ liệu về phim, diễn viên và đạo diễn, những bài viết chuyên
                sâu về điện ảnh, hỗ trợ người yêu phim&nbsp;dễ dàng hơn trong việc lựa
                chọn phim và bổ sung thêm kiến thức về điện ảnh cho bản thân. Ngoài
                ra, vào mỗi tháng,{" "}
                <a href="https://www.galaxycine.vn/">
                  <strong>Thiên Tân Cinema</strong>{" "}
                </a>
                cũng giới thiệu các{" "}
                <a href="https://www.galaxycine.vn/phim-sap-chieu">
                  <i>phim sắp chiếu</i>
                </a>{" "}
                hot nhất trong mục{" "}
                <a href="https://www.galaxycine.vn/phim-hay">
                  <i>Phim Hay Tháng</i>&nbsp;
                </a>
                .
              </span>
            </span>
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "10.0pt",
              marginLeft: "0in",
              textAlign: "justify"
            }}
          >
            <span style={{ fontSize: 14 }}>
              <span style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                Hiện nay,{" "}
                <a href="https://www.galaxycine.vn/">
                  <strong>Thiên Tân Cinema</strong>
                </a>{" "}
                đang ngày càng phát triển hơn nữa với các chương trình đặc sắc, các
                khuyến mãi hấp dẫn, đem đến cho khán giả những bộ phim bom tấn của thế
                giới và Việt Nam nhanh chóng và sớm nhất.
              </span>
            </span>
          </p>
        </div>
      </>
        </div>
      </div>
    </div>
  );
}
