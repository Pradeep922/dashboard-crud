import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Table() {

  const [tableData, setTableData] = useState([]);

  async function getData() {
    try {
      let fetchDatas = await fetch(
        "https://62a77d1fbedc4ca6d7c9cfdd.mockapi.io/Users"
      );
      let userData = await fetchDatas.json();
      // console.log(userData)
      setTableData(userData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  let handleDelete = async (userId) => {
    let ask = window.confirm("Do you want to delete this user?");
    if (ask) {
      await axios.delete(
        `https://61f1b9df072f86001749f34c.mockapi.io/Users/${userId}`
      );
      getData();
    }
  };

  return (
    <>
      <div>
        <h1 className="h3 mb-2 text-gray-800">Tables</h1>
        <p className="mb-4">
          Data Tables is a third party plugin that is used to generate the demo
          table below. For more information about Data Tables, please visit the{" "}
          <Link to="/createusers"><u>Add New User</u></Link> page.
        </p>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Data Tables Example
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing={0}
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.name}</td>
                      <td>{data.position}</td>
                      <td>{data.office}</td>
                      <td>{data.age}</td>
                      <td>{data.startdate}</td>
                      <td>{data.salary}</td>
                      <td>
                        <Link
                          to={`/tables/users/${data.id}`}
                          className="btn btn-sm mr-2 btn-warning"
                        >
                          View
                        </Link>
                        <Link
                          to={`/tables/users/editusers/${data.id}`}
                          className="btn btn-sm mr-2 btn-primary"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(data.id)}
                          className="btn btn-sm mr-2 btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;