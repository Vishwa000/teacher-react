import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./../student/Student";
import Teacher from "./../teacher/Teacher";
import About from "../About/About";
import AddStudent from "./../AddStudent/AddStudent";
import AddTeacher from "./../AddTeacher/AddTeacher";
import EditStudent from "./../EditStudent/EditStudent";
import EditTeacher from "./../EditTeacher/EditTeacher";

const Router = () => {
  const [data, setData] = useState([]);
  const [editTeacherData, setEditTeacherData] = useState([]);
  //console.log(editTeacherData);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student setData={setData} />} />
          <Route path="/teacher" element={<Teacher setEditTeacherData={setEditTeacherData} />} />
          <Route path="/about" element={<About />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/addteacher" element={<AddTeacher />} />
          <Route path="/editstudent" element={<EditStudent data={data} />} />
          <Route path="/editteacher" element={<EditTeacher editTeacherData={editTeacherData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
