import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import "../App.css";

function Create() {
  const navigate = useNavigate();

  let formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      age: "",
      office: "",
      startdate: "",
      salary: "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.name) {
        errors.name = "please enter name";
      }
      if (!values.position) {
        errors.position = "please enter position";
      }
      if (!values.office) {
        errors.office = "please enter office";
      }
      if (!values.startdate) {
        errors.startdate = "please enter date";
      }
      if (!values.age) {
        errors.age = "please enter age";
      }
      if (!values.salary) {
        errors.salary = "please enter salary";
      }

      return errors;
    },

    onSubmit: async (values) => {
      //  console.log(values);
      try {
        let data = await fetch(
          "https://62a77d1fbedc4ca6d7c9cfdd.mockapi.io/Users",
          {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        alert("Data Stored");
        navigate("/tables");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <div className="container">
        <h2>Add New User</h2>

        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  type="text"
                  className={`form-control ${
                    formik.errors.name ? "error-border" : " "
                  }`}
                  placeholder=""
                  id="name"
                />
                {formik.errors.name ? (
                  <span style={{ color: "red" }}>{formik.errors.name}</span>
                ) : null}
              </div>
            </div>
            {/*  col-md-6   */}
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="position">Position</label>
                <input
                  name="position"
                  onChange={formik.handleChange}
                  value={formik.values.position}
                  type="text"
                  className={`form-control ${
                    formik.errors.position ? "error-border" : ""
                  }`}
                  placeholder=""
                  id="position"
                />
                {formik.errors.position ? (
                  <span style={{ color: "red" }}>{formik.errors.position}</span>
                ) : null}
              </div>
            </div>
            {/*  col-md-6   */}
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="office">Office</label>
                <input
                  name="office"
                  onChange={formik.handleChange}
                  value={formik.values.office}
                  type="text"
                  className={`form-control ${
                    formik.errors.office ? "error-border" : ""
                  }`}
                  placeholde=""
                  id="office"
                />
                {formik.errors.office ? (
                  <span style={{ color: "red" }}>{formik.errors.office}</span>
                ) : null}
              </div>
            </div>
            {/*  col-md-6   */}
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  name="age"
                  onChange={formik.handleChange}
                  value={formik.values.age}
                  type="tel"
                  className={`form-control ${
                    formik.errors.age ? "error-border" : " "
                  }`}
                  id="phone"
                  placeholder=""
                />
                {formik.errors.age ? (
                  <span style={{ color: "red" }}>{formik.errors.age}</span>
                ) : null}
              </div>
            </div>
            {/*  col-md-6   */}
          </div>
          {/*  row   */}
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email">Start Date</label>
                <input
                  name="startdate"
                  onChange={formik.handleChange}
                  value={formik.values.startdate}
                  type="date"
                  className={`form-control ${
                    formik.errors.startdate ? "error-border" : " "
                  }`}
                  id="date"
                  placeholder=""
                />
                {formik.errors.startdate ? (
                  <span style={{ color: "red" }}>
                    {formik.errors.startdate}
                  </span>
                ) : null}
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="salary">Salary</label>
                <input
                  name="salary"
                  onChange={formik.handleChange}
                  value={formik.values.salary}
                  type="tel"
                  className={`form-control ${
                    formik.errors.salary ? "error-border" : " "
                  }`}
                  id="salary"
                  placeholder=""
                />
                {formik.errors.salary ? (
                  <span style={{ color: "red" }}>{formik.errors.salary}</span>
                ) : null}
              </div>
            </div>
            
          </div>
          
          <input type={"submit"} value="Submit" className="btn btn-primary" />
        </form>
      </div>
    </>
  );
}

export default Create;