import React, { useState, useEffect, useContext } from "react";
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
import { FilterMatchMode, FilterOperator } from "primereact/api";

// firebase config &libraries
import { db } from "../../Config";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import { AdminCheckContext } from "../Context/AdminCheckContext";

const ProjectsPage = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [project, setProject] = useState();
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const {AdminCheck}=useContext(AdminCheckContext)
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  useEffect(() => {
getData()
  }, []);

const getData=()=>{
  const eventSnapshots = onSnapshot(
    collection(db, "New-Projects"),
    (Snapshots) => {
      const filterData = Snapshots.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProject(filterData);
      console.log("projects", project);
    },
    (error) => console.log(error)
  );

  return () => eventSnapshots();
}
  // Searching & Sorting

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters["global"].value = value;
    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const filterHandler = async (Click) => {
    const Type=Click.click
    const q = query(
      collection(db, "New-Projects"),
      where("project.type", "==", Type)
    );
    const querySnapshot = await getDocs(q);
    const filterData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProject(filterData);
    console.log("projects", project);
    console.log("working");
  };


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
        return <input type="dow"></input>;
      }}
    >
      <RiDeleteBin6Line className="delete" />
      <span>Delete</span>
    </div>
  );

const deletHandler=(id)=>{

}

  return (
    <div className="PPMainDiv">
      <SectionHeading heading="Projects" />
      <div className="searchMainContainer">
        <div className="searchContainer">
          <form>
            <input
              type="search"
              value={globalFilterValue}
              onChange={onGlobalFilterChange}
              placeholder="Search keys "
            ></input>
          </form>
        </div>
        <div className="sortContainer">
          <button  className="all-btn" onClick={()=>{getData()}}>All</button>
          <button
            className="nth-1"
            onClick={() => {
              filterHandler({click:"Mini project"})
            }}
          >
            Mini Project
          </button>
          <button className="nth-2" onClick={() => {
              filterHandler({click:"Final year project"})
            }}>
            Final Year Project
          </button>
          <button className="nth-3" onClick={() => {
              filterHandler({click:"Personal project"})
            }}>
            Personal Project
          </button>
        </div>
      </div>

      <div className="Table">
        <div className="card">
          <DataTable
            value={project}
            dataKey="id"
            globalFilterFields={[
              "project.title",
              "project.year",
              "project.type",
            ]}
            showGridlines
            filters={filters}
            stripedRows
            // filterDisplay="row"
            emptyMessage="No projects found."
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25, 50]}
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column
              field="project.title"
              header="Title of the project"
            ></Column>
            <Column field="project.year" header="Passed out year"></Column>
            <Column field="project.type" header="Type of project"></Column>
            <Column
              field="Document"
              body={downloadIcon}
              onClick="id"
              header="Document"
            ></Column>
            <Column hidden={AdminCheck} body={deleteIcon}  header="Delete"></Column>
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
