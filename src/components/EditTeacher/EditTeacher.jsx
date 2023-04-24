import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";
import Header from "../header/Header";
import "./EditTeacher.css";
import { useNavigate } from "react-router-dom";

const EditTeacher = ({ editTeacherData }) => {
  // console.log(editTeacherData);
  const navigate = useNavigate()
  const [editedTeacher, setEditedTeacher] = useState({
    name: editTeacherData[0].name,
    email: editTeacherData[0].email,
    phone: editTeacherData[0].phone,
  });

  const handleSubmit = async (e, row) => {
    e.preventDefault();
    const response = await axios.put(
      `https://63209503e3bdd81d8efdb0f9.mockapi.io/teacher/${row.id}`,
      {
        name: editedTeacher.name,
        email: editedTeacher.email,
        phone: editedTeacher.phone,
      }
    );
    //console.log(response.data);
    navigate("/teacher")
  };
  return (
    <div>
      <Header />
      <div>
        {editTeacherData.map((row) => {
          return (
            <div key={row.id}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                autoComplete="off"
                onSubmit={(e) => handleSubmit(e, row)}
              >
                NAME :
                <TextField
                  id="standard-basic"
                  label="Name"
                  variant="standard"
                  type="text"
                  name="name"
                  value={editedTeacher.name}
                  onChange={(e) =>
                    setEditedTeacher({
                      ...editedTeacher,
                      ["name"]: e.target.value,
                    })
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
                  value={editedTeacher.email}
                  onChange={(e) =>
                    setEditedTeacher({
                      ...editedTeacher,
                      ["email"]: e.target.value,
                    })
                  }
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
                  value={editedTeacher.phone}
                  onChange={(e) =>
                    setEditedTeacher({
                      ...editedTeacher,
                      ["phone"]: e.target.value,
                    })
                  }
                  required
                />
                <br />
                <Button type="submit">Submit For Add Teacher</Button>
              </Box>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EditTeacher;
