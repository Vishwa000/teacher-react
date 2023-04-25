import React, { useState, useEffect } from "react";
import Header from "./../header/Header";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "react-bootstrap";
import "./teacher.css";
import { useNavigate } from "react-router-dom";

const Teacher = ({setEditTeacherData}) => {
  const navigate = useNavigate();
  const [teacherData, setTeacherData] = useState([]);
  const [editTeacherData, setEditTeacherData1] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://63209503e3bdd81d8efdb0f9.mockapi.io/teacher"
      );
      //console.log(response);
      setTeacherData(response.data);
    };
    getData();
  }, []);
  
  //console.log(teacherData);
  const handleDelete = async (e, id) => {
    console.log(id);
    const response = await axios.delete(
      `https://63209503e3bdd81d8efdb0f9.mockapi.io/teacher/${id}`
    );
    //console.log(response.data);
    const data = teacherData.filter((row) => row.id !== response.data.id);
    setTeacherData(data);
  };
  const handleEdit = (e, row) => {
    setEditTeacherData1([...editTeacherData, row]);
    setTimeout(() => {
      navigate("/editteacher");
    }, 1000);
  };
  setEditTeacherData(editTeacherData)
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="table">
              <TableContainer className="table" component={Paper}>
                <Table sx={{ maxWidth: "100%" }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell align="right">NAME</TableCell>
                      <TableCell align="right">EMAIL</TableCell>
                      <TableCell align="right">Contact</TableCell>
                      <TableCell align="right">ACTION</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {teacherData.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                        <TableCell align="right">{row.phone}</TableCell>
                        <TableCell align="right">
                          <Button className="btn-2" onClick={(e) => handleEdit(e, row)}>
                            Edit
                          </Button>
                        </TableCell>
                        <TableCell align="right">
                          <Button className="btn-3" onClick={(e) => handleDelete(e, row.id)}>
                            delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
