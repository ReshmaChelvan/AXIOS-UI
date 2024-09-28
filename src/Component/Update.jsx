import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Update = ({ saveId }) => {
  const newNav = useNavigate();
  const [updateName, setupdateName] = useState("");
  const [updateUsername, setupdateUsername] = useState("");
  const [updatEmail, setupdatEmail] = useState("");
  const [updateaddress, setupdateaddress] = useState("");

  const UpdatedData = (e) => {
    e.preventDefault();
    if (!updateName || !updateUsername) {
      alert("Please Enter The Address And Email");
      setupdatEmail("");
      setupdateaddress("");
    } else if (!updatEmail || !updateaddress) {
      alert("Please Enter The Name And Username");
      setupdateName("");
      setupdateUsername("");
    } else {
      let ObjUser = {
        name: updateName,
        username: updateUsername,
        email: updatEmail,
        address: updateaddress,
      };
      PatchApiCall(ObjUser);
    }
  };

  const PatchApiCall = async (ObjUser) => {
    try {
      let Data = await axios({
        method: "patch",
        url: `/api/v1/${saveId}`,
        data: {
          ObjUser,
        },
      });
      newNav("/");
      newNav(0);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="ro">
          <div className="col-sm-12">
            <form onSubmit={UpdatedData}>
              <label htmlFor="name" className="form-label h6 fw-bold mt-1">
                NAME:
              </label>
              <input
                type="text"
                name="name"
                value={updateName}
                onChange={(e) => setupdateName(e.target.value)}
                className="form-control"
              />
              <label htmlFor="username" className="form-label h6 fw-bold mt-1">
                USERNAME:
              </label>
              <input
                type="text"
                name="username"
                className="form-control"
                value={updateUsername}
                onChange={(e) => setupdateUsername(e.target.value)}
              />
              <label htmlFor="email" className="form-label h6 fw-bold mt-1">
                EMAIL:
              </label>
              <input
                type="text"
                name="email"
                className="form-control"
                value={updatEmail}
                onChange={(e) => setupdatEmail(e.target.value)}
              />
              <label htmlFor="address" className="form-label h6 fw-bold mt-1">
                ADDRESS:
              </label>
              <input
                type="text"
                name="address"
                className="form-control"
                value={updateaddress}
                onChange={(e) => setupdateaddress(e.target.value)}
              />
              <button type="submit" className="btn btn-primary mt-1">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
