import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function ViewUser() {
  let { userId } = useParams();
  const [searchParams, setSearchparams] = useSearchParams();

  const tableData = [
    {
      id: 1,
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: "61",
      date: "2011/04/25",
      salary: "$320",
    },
    {
      id: 2,
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "$170",
    },
    {
      id: 3,
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      age: "66",
      date: "2009/01/12",
      salary: "$86",
    },
    {
      id: 4,
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      age: "22",
      date: "2012/03/29",
      salary: "$433",
    },
    {
      id: 5,
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      age: "33",
      date: "2008/11/28",
      salary: "$162",
    },
  ];

  return (
    <div>
      <h3>Name : {tableData[userId - 1].name}</h3>
      <h3>Position : {tableData[userId - 1].position}</h3>
      <h3>Office: {tableData[userId - 1].office}</h3>
      <h3>Age : {tableData[userId - 1].age}</h3>
      <h3>Date : {tableData[userId - 1].date}</h3>
      <h3>Salary : {tableData[userId - 1].salary}</h3>
    </div>
  );
}

export default ViewUser;