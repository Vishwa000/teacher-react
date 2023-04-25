import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";
import Header from "../header/Header";
import "./AddTeacher.css";
import { useNavigate } from "react-router-dom";

const AddTeacher = () => {
  const navigate = useNavigate();
  let formData = {
    name: "",
    email: "",
    phone: "",
  };
  const [form, setForm] = useState(formData);
  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `https://63209503e3bdd81d8efdb0f9.mockapi.io/teacher`,
      { name: form.name, email: form.email, phone: form.phone }
    );
    //console.log(response.data);
    setForm({...formData},response.data);
    navigate("/teacher")
  };

  return (
    <div>
      <Header />
      <div className="addteacher">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          autoComplete="off"
          onSubmit={(e) => handleSubmit(e)}
        >
          NAME :
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            type="text"
            name="name"
            value={form.name}
            onChange={(e) => handlechange(e)}
            required
          />
          <br />
          EMAIL :
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            type="text"
            name="email"
            value={form.email}
            onChange={(e) => handlechange(e)}
            required
          />
          <br />
          PH.NO. :
          <TextField
            id="standard-basic"
            label="PhoneNO."
            variant="standard"
            type="number"
            name="phone"
            value={form.phone}
            onChange={(e) => handlechange(e)}
            required
          />
          <br />
          <Button type="submit">Submit</Button>
        </Box>
      </div>
    </div>
  );
};

export default AddTeacher;
