import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  let { userId } = useParams();
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
          `https://61f1b9df072f86001749f34c.mockapi.io/Users/${userId}`,
          {
            method: "PUT",
            body: JSON.stringify(values),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        alert("Data Updated Successfully");
        console.log(values);
        navigate("/tables");
      } catch (error) {
        console.log(error);
      }
    },
  });

  async function getData() {
    try {
      let editDatas = await fetch(
        `https://62a77d1fbedc4ca6d7c9cfdd.mockapi.io/Users/${userId}`
      );
      let userEditData = await editDatas.json();
      // console.log(userData)
      console.log(userId);
      formik.setValues(userEditData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <h2>Edit User</h2>

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
            {/*  col-md-6   */}
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
            {/*  col-md-6   */}
          </div>
          {/* <button  onClick={()=>navigate("/tables")} type={"submit"} className="btn btn-primary">Submit</button> */}
          <input type={"submit"} value="Submit" className="btn btn-primary" />
        </form>
      </div>
    </>
  );
}

export default EditUser;