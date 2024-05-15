import React, { useState } from "react";
import './Information.scss'
import { Dialog } from "primereact/dialog";
import { useNavigate } from "react-router-dom";

export default function Information() {
  const storage = JSON.parse(localStorage.getItem("cinema"));
  const nav = useNavigate()

  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const HandelClick = () => {
    setVisible1(true);
  };
  const HandelDelete = () => {
    setVisible2(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'password':
        setPassword(value);
        break;
      case 'newPassword':
        setNewPassword(value);
        break;
      case 'confirmNewPassword':
        setConfirmNewPassword(value);
        break;
      default:
        break;
    }
  };


  const handleSubmit = () => {
    if (newPassword !== confirmNewPassword) {
      alert('Mật khẩu mới và xác nhận mật khẩu mới không khớp.');
      return;
    }

    fetch('https://teachingserver.org/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/user/ChangePassword', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Email: storage.Email,
        Password: password,
        PasswordNew: newPassword,
      }),
    })
      .then(response => {
        if (response.ok) {
          alert('Đổi mật khẩu thành công!');
        } else {
          alert('Đổi mật khẩu không thành công. Vui lòng kiểm tra lại thông tin.');
        }
      })
      .catch(error => {
        console.error('Đã xảy ra lỗi:', error);
      });
  };

  const Delete = () => {

    if (newPassword !== confirmNewPassword) {
      alert('Mật khẩu mới và xác nhận mật khẩu mới không khớp.');
      return;
    }
    fetch('https://teachingserver.org/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/user/Login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Email: storage.Email,
        Password: password,
      }),
    })
      .then(res => {
        if (res.ok) {
          fetch('https://teachingserver.org/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/user/user', {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              Email: storage.Email,
            }),
          })
            .then(res => {
              if (res.ok) {
                // alert('Xoá tài khoản thành công');
                localStorage.removeItem('cinema')
                nav('/');
              } else {
                alert('Xoá tài khoản không thành công  ....');

              }
            })
            .catch(error => {
              console.error('Đã xảy ra lỗi:', error);
            });
        } else {
          alert('Xoá tài khoản không thành công!');

        }
      })
      .catch(error => {
        console.error('Đã xảy ra lỗi:', error);
      });
  };


  return (
    <div className="ttcn">
      <div className="left">
        <p>Họ và tên</p>
        <input disabled type="text" value={storage.Name} />
        <br />
        <p>Email</p>
        <div className="thaydoi">
          <input type="text" value={storage.Email} />
          {/* <span>Thay đổi</span> */}
        </div>

        <div className="gioitinh">
          <div>
            <input disabled checked type="radio" name="gt" value="Male" />
            <label for="Female">Nam</label>
          </div>
          <div>
            <input disabled type="radio" name="gt" value="Female" />
            <label for="Female">Nữ</label>
          </div>
        </div>
      </div>

      <div className="right">
        <p>Ngày sinh</p>
        <input disabled type="text" value={"11-11-2003"} />
        <p>Số điện thoại</p>
        <input disabled type="text" value={"0848562246"} />
        <p>Mật khẩu</p>
        <div className="thaydoi">
          <input type="password" value={"Hông có đâu ní"} />
          <span onClick={() => HandelClick()}>Thay đổi</span>
        </div>

        <div className="btn">
          <button onClick={() => HandelDelete()} className="Delete">Delete</button>
          <button>Cập nhật</button>
        </div>
      </div>

      <Dialog header="Thay đổi Mật khẩu" visible={visible1} style={{ width: "28vw" }} onHide={() => setVisible1(false)}>
        <div className="ChangePass">
          <p>Nhập mật khẩu hiện tại</p>
          <input type="password" name="password" value={password} onChange={handleChange} placeholder="Nhập mật khẩu hiện tại" />
          <p>Mật khẩu mới</p>
          <input type="password" name="newPassword" value={newPassword} onChange={handleChange} placeholder="Nhập mật khẩu mới" />
          <p>Xác nhận mật khẩu mới</p>
          <input type="password" name="confirmNewPassword" value={confirmNewPassword} onChange={handleChange} placeholder="Xác nhận mật khẩu mới" />
          <button onClick={handleSubmit}>Cập nhật mật khẩu mới.</button>
        </div>
      </Dialog>

      <Dialog header="Xoá Tài Khoản" visible={visible2} style={{ width: "28vw" }} onHide={() => setVisible2(false)}>
        <div className="xoa">
          <p>Email</p>
          <input disabled type="text" name="email" value={storage.Email} onChange={handleChange} />
          <p>Mật khẩu hiện tại</p>
          <input type="password" name="password" value={password} onChange={handleChange} placeholder="Nhập mật khẩu hiện tại" />
          <div className="btn">
            <button onClick={Delete} >Xác nhận xoá tài khoản.</button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
