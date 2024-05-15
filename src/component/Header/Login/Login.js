import React, { useEffect, useRef, useState } from "react";
import { Message } from "primereact/message";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const [visible, setVisible] = useState(false);
  const [isLogin, SetIsLogin] = useState(false);
  const userName = useRef();
  const email = useRef();
  const password = useRef();
  const toast = useRef(null);
  const nav = useNavigate();
  const [checkLogin, SetCheckLogin] = useState(true);
  const HandelLogin = () => {
    console.log(userName.current.value, password.current.value);
    fetch("https://teachingserver.org/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/user/Login", {
      method: "POST",
      headers: { accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({
        Email: userName.current.value,
        Password: password.current.value,
      }),
    }).then(async (res) => {
      console.log(res.status);
      try {
        if (res.status === 200) {
          let data = await res.json();
          toast.current.show([{ severity: "success", summary: "Success", detail: "Message Content", life: 1200 }]);
          localStorage.setItem("cinema", JSON.stringify({ Email: data.Email, Name: data.Name }));
          setVisible(false);
          SetIsLogin(true);
        } else {
          toast.current.show({ severity: "error", summary: "Error", detail: "Đăng Nhập Thất Bại", life: 3000 });
        }
      } catch (error) {
        console.log(error);
      }
    });
  };
  const HandelSignUp = () => {
    console.log(123456);
    fetch("https://teachingserver.org/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/user/user", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: email.current.value,
        Name: userName.current.value,
        Password: password.current.value,
        Role: "",
      }),
    }).then((res) => {
      if (res.status == 200) {
        toast.current.show({ severity: "success", summary: "Success", detail: "Đăng Ký Thành Công", life: 3000 });
        localStorage.setItem("cinema", JSON.stringify({ Email: email.current.value, Name: userName.current.value }));
        setVisible(false);
        SetIsLogin(true);
      } else {
        toast.current.show({ severity: "error", summary: "Error", detail: "Đăng Ký Thất Bại", life: 3000 });
      }
    });
  };
  useEffect(() => {
    SetIsLogin((pre) => !pre);
  }, []);
  return (
    <>
      <Toast ref={toast} />
      {!localStorage.getItem("cinema") ? (
        <>
          <Button style={{ height: "2rem", fontSize: 12 }} label="Login /Sign Up" icon="pi pi-external-link" onClick={() => setVisible(true)} />
          <Dialog
            header="Login"
            visible={visible}
            onHide={() => setVisible(false)}
            style={{ width: "50vw" }}
            breakpoints={{ "960px": "75vw", "641px": "100vw" }}
          >
            <div className="card">
              <div className="flex flex-column md:flex-row">
                <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                  {console.log(checkLogin)}
                  {checkLogin ? (
                    <>
                      <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label className="w-6rem">Email</label>
                        <InputText ref={userName} id="username" type="text" className="w-12rem" />
                      </div>
                      <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label className="w-6rem">Password</label>
                        <InputText ref={password} id="password" type="password" className="w-12rem" />
                      </div>
                      <Button onClick={HandelLogin} label="Login" icon="pi pi-user" className="w-10rem mx-auto"></Button>
                    </>
                  ) : (
                    <Button onClick={() => SetCheckLogin(true)} label="Login" icon="pi pi-user" className="w-10rem mx-auto"></Button>
                  )}
                </div>
                <div className="w-full md:w-2">
                  <Divider layout="vertical" className="hidden md:flex">
                    <b>OR</b>
                  </Divider>
                  <Divider layout="horizontal" className="flex md:hidden" align="center">
                    <b>OR</b>
                  </Divider>
                </div>
                <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                  {!checkLogin ? (
                    <>
                      <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label className="w-6rem">Email</label>
                        <InputText ref={email} id="username" type="text" className="w-12rem" />
                      </div>
                      <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label className="w-6rem">Username</label>
                        <InputText ref={userName} id="username" type="text" className="w-12rem" />
                      </div>
                      <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label className="w-6rem">Password</label>
                        <InputText ref={password} id="password" type="password" className="w-12rem" />
                      </div>
                      <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label className="w-6rem">Confirm Password</label>
                        <InputText
                          onChange={(e) =>
                            e.target.value == password.current.value ? (document.getElementById("buttonSignUp").style.pointerEvents = "auto") : ""
                          }
                          id="password"
                          type="password"
                          className="w-12rem"
                        />
                      </div>

                      <Button
                        style={{ pointerEvents: "none" }}
                        id="buttonSignUp"
                        label="Sign Up"
                        icon="pi pi-user-plus"
                        severity="success"
                        className="w-10rem mx-auto"
                        onClick={HandelSignUp}
                      ></Button>
                    </>
                  ) : (
                    <Button onClick={() => SetCheckLogin(false)} label="Sign Up" icon="pi pi-user-plus" severity="success" className="w-10rem mx-auto"></Button>
                  )}
                </div>
              </div>
            </div>
          </Dialog>
        </>
      ) : (
        <div className="user-logined">
          <h4 onClick={() => nav("profile")}>{JSON.parse(localStorage.getItem("cinema")).Name}</h4>
          <i
            className="pi pi-sign-out"
            onClick={() => {
              localStorage.removeItem("cinema");
              SetIsLogin(false);
            }}
          ></i>
        </div>
      )}
    </>
  );
}
