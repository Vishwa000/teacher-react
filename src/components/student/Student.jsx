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
import "./student.css";
import { useNavigate } from "react-router-dom";
import "../../App.css"


const Student = ({ setData }) => {
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState([]);
  const [editStudent, setEditStudent] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://63209503e3bdd81d8efdb0f9.mockapi.io/student"
      );
      //console.log(response);
      setStudentData(response.data);
    };
    getData();
  }, []);
  //console.log(studentData);
  const handleDelete = async (e, id) => {
    //console.log(id);
    const response = await axios.delete(
      `https://63209503e3bdd81d8efdb0f9.mockapi.io/student/${id}`
    );
    //console.log(response.data);
    const data = studentData.filter((row) => row.id !== response.data.id);
    setStudentData(data);
  };
  const handleEdit = (e, row) => {
    //console.log(data);
    setEditStudent([...editStudent, row]);
    setTimeout(() => {
      navigate("/editstudent");
    }, 1000);
    //navigate("/editstudent")
  };

  setData(editStudent);
  //console.log(editStudent);
  return (
    <div className="student">
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
                      <TableCell align="right">ACTION</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {studentData.map((row) => (
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
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">
                          <Button className="btn-4" onClick={(e) => handleEdit(e, row)}>
                            Edit
                          </Button>
                        </TableCell>
                        <TableCell align="right">
                          <Button className="btn-5" onClick={(e) => handleDelete(e, row.id)}>
                            Delete
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
    <div className="container">
      <div className="row">
        <div className="col-md-4"></div>
      </div>
    </div>

    </div>
  );
};

export default Student;
