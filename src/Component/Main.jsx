import React, { useEffect, useState } from "react";
import Display from "../Component/Display";
import Create from "../Component/Create";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Update from "./Update";

const Main = () => {
  const [saveId, setsaveId] = useState("");
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("/api/v1")
      .then((result) => {
        setUser(result.data.Data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const update = (data) => {
    setsaveId(data);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Display user={user} update={update} />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/update" element={<Update saveId={saveId} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
