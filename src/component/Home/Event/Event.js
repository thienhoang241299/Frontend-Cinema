import React, { useState } from "react";
import CommentFilm from "./CommentFilm/CommentFilm";

function Event() {
  const cmtMovie = [
    {
      title: "[Review] Killers Of The Flower Moon: Ứng Viên Nặng Kí Cho Oscar 2024",
      imgLink:
        "https://www.galaxycine.vn/_next/image/?url=https%3A%2F%2Fcdn.galaxycine.vn%2Fmedia%2F2023%2F10%2F25%2Fkillers-of-the-flower-moon-ung-vien-nang-ki-cho-oscar-2024-3_1698225956013.jpg&w=1080&q=75",
    },
    {
      title: "[Review] Người Vợ Cuối Cùng: Màn Kết Hợp Ấn Tượng Giữa Victor Vũ - Kaity Nguyễn!",
      imgLink:
        "https://www.galaxycine.vn/_next/image/?url=https%3A%2F%2Fcdn.galaxycine.vn%2Fmedia%2F2023%2F11%2F4%2Fnguoi-vo-cuoi-cung-man-ket-hop-an-tuong-giua-victor-vu---kaity-nguyen-5_1699073654334.jpg&w=640&q=75",
    },
    {
      title:"[Review] Đất Rừng Phương Nam: Cần Chỉn Chu Hơn Ở Phần Sau!",
      imgLink:
        "https://www.galaxycine.vn/_next/image/?url=https%3A%2F%2Fcdn.galaxycine.vn%2Fmedia%2F2023%2F10%2F17%2Freview-dat-rung-phuong-nam-can-chin-chu-hon-o-phan-sau_1697556448077.jpeg&w=256&q=75",
    },
    {
      title: "[Preview] The Marvels: Có Cứu Vũ Trụ Điện Ảnh Marvel Khỏi Một Năm Thất Bát?",
      imgLink:
        "https://www.galaxycine.vn/_next/image/?url=https%3A%2F%2Fcdn.galaxycine.vn%2Fmedia%2F2023%2F11%2F2%2Fthe-marvels-co-cuu-vu-tru-dien-anh-marvel-khoi-mot-nam-that-bat-9_1698911070029.jpg&w=256&q=75",
    },
  ];
  const [movie, SetMovie] = useState(cmtMovie);

  return (
    <div className="Event">
      <div className="container">
        <div className="left flex gap-15 align-center">
          <h3>Góc Điện Ảnh</h3>
          <p className="highlight" onClick={() => SetMovie(cmtMovie)}>Bình luận Phim</p>
          <p onClick={() => SetMovie(cmtMovie)}>Tin tức Điện ảnh</p>
        </div>
        <CommentFilm data={movie} />
      </div>
    </div>
  );
}

export default React.memo(Event);
