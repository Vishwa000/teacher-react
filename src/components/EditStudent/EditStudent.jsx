import React, { useState } from "react";
import "./EditStudent.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Header from "../header/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditStudent = ({ data }) => {
  //console.log(data);
  const navigate = useNavigate();
 // const [finalEditedData, setFinalEditedData] = useState([data]);
  const [editedData, setEditedData] = useState({
    name: data[0].name,
    email: data[0].email,
  });
  const handleSubmit = async (e, data) => {
    e.preventDefault();
    //console.log(editedData.name);
    //console.log(editedData.email);
    const response = await axios.put(
      `https://63209503e3bdd81d8efdb0f9.mockapi.io/student/${data.id}`,
      {
        name: editedData.name,
        email: editedData.email,
      }
    );
    navigate("/");
    //console.log(response.data);
  };
  /* const handleChange = (e,data)=>{
  //console.log(data.name);
//setEditedData({data.name:[...editedData.name,name]})  
  } */
  //console.log(finalEditedData);
  /* const handleClick = (e) => {
    navigate("/");
  }; */
  return (
    <div>
      <Header />
      <div>
        {data.map((data) => {
          return (
            <div key={data.id}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                autoComplete="off"
                onSubmit={(e) => handleSubmit(e, data)}
              >
                <br />
                NAME :
                <TextField
                  id="standard-basic"
                  label="Name"
                  variant="standard"
                  type="text"
                  name="name"
                  value={editedData.name}
                  onChange={(e) =>
                    setEditedData({ ...editedData, ["name"]: e.target.value })
                  }
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
                  value={editedData.email}
                  onChange={(e) =>
                    setEditedData({ ...editedData, ["email"]: e.target.value })
                  }
                  required
                />
                <br />
                <Button type="submit">Submit For Add Student</Button>
              </Box>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EditStudent;
