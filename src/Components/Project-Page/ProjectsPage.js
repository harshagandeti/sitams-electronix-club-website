import React, { useState } from "react";
// import { useTable } from "react-table";
import { FaSearch } from "react-icons/fa";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { RiDeleteBin6Line } from "react-icons/ri";
import SectionHeading from "../Section-Heading/SectionHeading";
import "./ProjectsPage.scss";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

// import "bootstrap/dist/css/bootstrap.min.css";

const ProjectsPage = (props) => {
  const [isAuth, setIsAuth] = useState(false);


  const data = [
    {
      id: 1,
      title: "machine learning model for real time driver drowsiness detection",
      passedOutYear: 2023,
      typeOfProject: "Mini Project",
    },
    {
      id: 2,
      title: "machine learning model for real time driver drowsiness detection",
      passedOutYear: 2023,
      typeOfProject: "final Year Project",
    },
    {
      id: 3,
      title: "machine learning model for real time driver drowsiness detection",
      passedOutYear: 2023,
      typeOfProject: "Mini Project",
    },
    {
      id: 4,
      title: "machine learning model for real time driver drowsiness detection",
      passedOutYear: 2023,
      typeOfProject: "final Year Project",
    },
    {
      id: 5,
      title: "machine learning model for real time driver drowsiness detection",
      passedOutYear: 2023,
      typeOfProject: "personal Project",
    },
    {
      id: 6,
      title: " driver drowsiness detection",
      passedOutYear: 2023,
      typeOfProject: "final Year Project",
    },
    {
      id: 7,
      title: "machine learning model for real time driver drowsiness detection",
      passedOutYear: 2023,
      typeOfProject: "Mini Project",
    },
    {
      id: 8,
      title: "machine learning model for real time driver drowsiness detection",
      passedOutYear: 2023,
      typeOfProject: "final Year Project",
    },
    {
      id: 9,
      title: "machine learning model for real time driver drowsiness detection",
      passedOutYear: 2023,
      typeOfProject: "final Year Project",
    },
    {
      id: 10,
      title: "machine learning model for real time driver drowsiness detection",
      passedOutYear: 2023,
      typeOfProject: "Personal Project",
    },
    {
      id: 11,
      title: "machine learning model for real time driver drowsiness detection",
      passedOutYear: 2023,
      typeOfProject: "final Year Project",
    },
  ];

  // table boady icons

  const downloadIcon = (
    <div
      className="download-div"
      onClick={() => {
        console.log("download");
      }}
    >
      <i className="pi pi-download"></i>
      <span>Download</span>
    </div>
  );
  const deleteIcon = (
    <div
      className="delete-div"
      onClick={() => {
        console.log("Delete");
      }}
    >
      <RiDeleteBin6Line className="delete" />
      <span>Delete</span>
    </div>
  );

  return (
    <div className="PPMainDiv">
      <SectionHeading heading="Projects" />
      <div className="searchMainContainer">
        <div className="searchContainer">
          <input type="search" placeholder="Search Titles ......"></input>
          <div className="FaSearch">
            <FaSearch id="icon" size={30} />
          </div>
        </div>
        <div className="sortContainer">
          <button className="all-btn">All</button>
          <button className="nth-1">Mini Project</button>
          <button className="nth-2">Final Year Project</button>
          <button className="nth-3">Personal Project</button>
        </div>
      </div>

      <div className="Table">
        <div className="card">
          
            <DataTable
              value={data}
              showGridlines
              stripedRows
              paginator
              rows={10}
              rowsPerPageOptions={[5, 10, 25, 50]}
              tableStyle={{ minWidth: "50rem" }}
            >
              <Column field="title" header="Title of the project"></Column>
              <Column field="passedOutYear" header="Passed out year"></Column>
              <Column field="typeOfProject" header="Type of project"></Column>
              <Column
                field="Document"
                body={downloadIcon}
                header="Document"
              ></Column>
              <Column
                hidden={isAuth}
                body={deleteIcon}
                header="Delete"
              ></Column>
            </DataTable>
        
        </div>
      </div>
      <div className="mobile">
        <span>This page not support in mobile phone</span>
        <br />
        <span>Otherwise Your mobile keep in Desktop Mode</span>
      </div>
    </div>
  );
};

export default ProjectsPage;
