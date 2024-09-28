import React, { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const navigation = useNavigate();
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");

  let Final = {
    name: "",
    username: "",
    email: "",
    address: "",
  };
  const create = (e) => {
    e.preventDefault();
    if (!name || !username) {
      console.log("Please Enter The Name And Username");
      setaddress("");
      setemail("");
    } else if (!email || !address) {
      console.log("Please Enter The email And address");
      setname("");
      setusername("");
    } else {
      Final = {
        name: name,
        username: username,
        email: email,
        address,
      };
      callApi();
      setaddress("");
      setemail("");
      setname("");
      setusername("");
    }
  };
  const callApi = () => {
    axios({
      method: "post",
      url: "/api/v1",
      data: {
        name: Final.name,
        username: Final.username,
        email: Final.email,
        address: Final.address,
      },
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        navigation("/");
        navigation(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <div className="container ">
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={create}>
              <label htmlFor="name" className="form-label h6 fw-bold mt-1">
                NAME:
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                className="form-control"
              />
              <label htmlFor="username" className="form-label h6 fw-bold mt-1">
                USERNAME:
              </label>
              <input
                type="text"
                name="username"
                className="form-control"
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
              <label htmlFor="email" className="form-label h6 fw-bold mt-1">
                EMAIL:
              </label>
              <input
                type="text"
                name="email"
                className="form-control"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <label htmlFor="address" className="form-label h6 fw-bold mt-1">
                ADDRESS:
              </label>
              <input
                type="text"
                name="address"
                className="form-control"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
              />
              <button type="submit" className="btn btn-primary mt-1">
                ADD
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
