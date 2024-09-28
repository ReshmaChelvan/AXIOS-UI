import React from "react";
import "../Style/Entry.css";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Display = ({ user, update }) => {
  let navi = useNavigate();
  const DeleteUser = async (id) => {
    try {
      await axios.delete(`/api/v1/${id}`);
      navi(0);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 table-responsive">
            <table className="table table-hover overflow-scroll">
              <thead>
                <tr>
                  <th className="col">Name</th>
                  <th className="col">UserName</th>
                  <th className="col">Email</th>
                  <th className="col">City</th>
                  <th className="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {user.map((d, i) => (
                  <tr key={i}>
                    <td>{d.name}</td>
                    <td>{d.username}</td>
                    <td>{d.email}</td>
                    <td>{d.address.city}</td>
                    <td className="d-flex gap-2">
                      <Link
                        to="/update"
                        className="btn btn-info"
                        onClick={() => update(d._id)}
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => DeleteUser(d._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Display;
