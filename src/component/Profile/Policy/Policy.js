import React from 'react'
import "./Policy.scss";

export default function Policy() {
  return (
    <div className='Policy'>
      <h3>Thể lệ</h3>
      <p>Chương trình khách hàng thân thiết Galaxy là chương trình ưu đãi dựa trên điểm tích lũy của các thành viên gồm Star, G-star, X-star. Với mỗi giao dịch tại hệ thống rạp Galaxy, bạn sẽ nhận được điểm thưởng tương ứng. Hình thức tích lũy như sau:</p>

      <div className='img'>
        <img src="https://www.galaxycine.vn/media/2023/1/17/quyenloitv-lcd-headline_1673941902410.png" alt="" />
      </div>

      <p><b>Star:</b> Tích lũy ở mức 3% trên tổng giá trị/số tiền giao dịch <br />
        <b>G-Star:</b> Tích lũy ở mức 5% trên tổng giá trị/số tiền giao dịch <br />
        <b>X-Star:</b> Tích lũy ở mức 10% trên tổng giá trị/số tiền giao dịch <br />
        Điểm tích lũy được gọi là Stars Ví dụ: Khách hàng là thành viên hạng Star, khi phát sinh giao dịch 200.000 đồng, được tích điểm ở mức 3% tương đương 6 Stars (6 Điểm) <br />
        Cách làm tròn điểm thưởng như sau: <br />
        -    Từ 0.1 đến 0.4: làm tròn xuống (Ví dụ: 3.2 điểm sẽ được tích vào tài khoản 3 điểm) <br />
        -    Từ 0.5 đến 0.9: làm tròn lên (Ví dụ: 3.5 điểm sẽ được tích vào tài khoản 4 điểm) <br />
        1 điểm tích lũy sẽ được quy đổi thành 1.000 đồng và được sử dụng cho việc thanh toán vé/bắp nước tại hệ thống Galaxy Cinema. Điểm tích lũy không có giá trị quy đổi thành tiền mặt hoặc hoàn lại khi giao dịch đã được ghi nhận thành công. <br />
        <b>Cấp độ thành viên:</b> </p>

      <div className='img'>
        <img src="https://www.galaxycine.vn/media/2019/12/18/thanh-tinh-diem_1576655615185.jpg" alt="" />
      </div>

      <p> <b>Star</b> là thành viên thân thiết có tổng chi tiêu trong năm dưới 2,000,000 đồng tính từ ngày 1/1-31/12.<br />
        <b>G-star</b>  là thành viên thân thiết có tổng chi tiêu trong năm từ 2,000,000 đồng đến 3,999,999 đồng tính từ ngày 1/1-31/12. <br />
        <b>X-star</b>  là thành viên thân thiết có tổng chi tiêu từ 4,000,000 đồng trở lên tính từ ngày 1/1-31/12. <br />
        <b>Lưu ý:</b>
      </p>
      <ul>
        <li>Thông tin định danh thành viên gồm có email và số điện thoại bắt buộc phải hợp lệ.</li>
        <li>Email không hợp lệ là email không có thực tại thời điểm Galaxy Cinema rà soát dữ liệu thành viên.</li>
        <li>Số điện thoại không hợp lệ là số điện thoại không liên lạc được hoặc số điện thoại không thuộc sở hữu của chủ tài khoản thành viên ở thời điểm Galaxy Cinema rà soát dữ liệu thành viên.</li>
        <li>Với các trường hợp không hợp lệ, Galaxy Cinema có quyền xóa tài khoản thành viên mà không cần thông báo trước.</li>
        <li>Tài khoản thành viên không có đủ thông tin định danh gồm email và số điện thoại hợp lệ, Galaxy Cinema có quyền xóa tài khoản thành viên mà không cần thông báo trước.</li>
        <li>Điểm tích lũy có giá trị áp dụng tại tất cả các rạp Galaxy Cinema trên toàn quốc.</li>
        <li>Điểm tích lũy có thời hạn sử dụng là 01 năm.</li>
        <li>Bạn có thể dễ dàng kiểm tra điểm tích lũy của mình trên Website Galaxy Cinema hoặc Ứng dụng GLX trên điện thoại (Mobile App).</li>
      </ul>
    </div>
  )
}
