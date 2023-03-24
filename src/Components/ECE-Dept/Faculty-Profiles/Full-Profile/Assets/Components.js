import React from "react";
import "./Components.scss"

export const About = (name, designation, doj, dept, id) => {
  return (
    <div className="container-lower">
      <div className="lower-left">
      <table>
          <tr>
            <th>About</th>
          </tr>
          <tr>
            <td className="td-th">Faculty Id</td>
            <td className="td-tb">19751A045</td>
          </tr>
          <tr>
            <td className="td-th">Name</td>
            <td className="td-tb">Dr.E.NThompson Necluie</td>
          </tr>
          <tr>
            <td className="td-th">Designation</td>{" "}
            <td className="td-tb">Professor</td>
          </tr>
          <tr>
            <td className="td-th">Department</td> <td className="td-tb">ECE</td>
          </tr>
          <tr>
            <td className="td-th">DOJ</td> <td className="td-tb">13-06-2022</td>
          </tr>
        </table>
      </div>
      <div
        className="lower-right"
      >
        <table>
        <tr>
            <td className="td-th">Phone No</td>
            <td className="td-tb">19751A045</td>
          </tr>
          <tr>
            <td className="td-th">Email</td>
            <td className="td-tb">thompsonnecluie@gmail.com</td>
          </tr>
        <tr>
            <td className="td-th">Specialization</td>{" "}
            <td className="td-tb">Electronic and communication engineering engineering engineering</td>
          </tr>
          <tr>
            <td className="td-th">Experiences in Teaching</td> <td className="td-tb">5 Years</td>
          </tr>
          <tr>
            <td className="td-th">Experiences in Industry</td> <td className="td-tb">5 Years</td>
          </tr>
         
        
       
        </table>
      </div>
    </div>
  );
};


export const UG_PG = () => {
  return (
    <div className="container-lower">
    <div className="lower-left">
    <table>
<tr>
  <th>Under Graduation</th>
</tr>
<tr>
  <td className="td-th">Degree</td>
  <td className="td-tb">B Tech</td>
</tr>
<tr>
  <td className="td-th">Specialization</td>
  <td className="td-tb">ECE</td>
</tr>
<tr>
  <td className="td-th">Year Of Complition</td>{" "}
  <td className="td-tb">2022</td>
</tr>
<tr>
  <td className="td-th">College/University</td> <td className="td-tb">ECE</td>
</tr>

</table>
       
      </div>
    <div className="lower-right">
    <table>
<tr>
  <th>Post Graduation</th>
</tr>
<tr>
  <td className="td-th">Degree</td>
  <td className="td-tb">M Tech</td>
</tr>
<tr>
  <td className="td-th">Specialization</td>
  <td className="td-tb">ECE</td>
</tr>
<tr>
  <td className="td-th">Year Of Complition</td>{" "}
  <td className="td-tb">2022</td>
</tr>
<tr>
  <td className="td-th">College/University</td> <td className="td-tb">ECE</td>
</tr>

</table>
       
      </div>
    </div>
  )
}



export const PhD = () => {
  return (
    <div className="container-lower">
    <div className="lower-left">
    <table>
<tr>
  <th>PhD</th>
</tr>
<tr>
  <td className="td-th">Degree</td>
  <td className="td-tb">B Tech</td>
</tr>
<tr>
  <td className="td-th">Specialization</td>
  <td className="td-tb">ECE</td>
</tr>
<tr>
  <td className="td-th">Year Of Complition</td>{" "}
  <td className="td-tb">2022</td>
</tr>
<tr>
  <td className="td-th">College/University</td> <td className="td-tb">ECE</td>
</tr>

</table>
       
      </div>
    <div className="lower-right">
    <table>
<tr>
  <th>Any Other</th>
</tr>
<tr>
  <td className="td-th">Degree</td>
  <td className="td-tb">M Tech</td>
</tr>
<tr>
  <td className="td-th">Specialization</td>
  <td className="td-tb">ECE</td>
</tr>
<tr>
  <td className="td-th">Year Of Complition</td>{" "}
  <td className="td-tb">2022</td>
</tr>
<tr>
  <td className="td-th">College/University</td> <td className="td-tb">ECE</td>
</tr>

</table>
       
      </div>
    </div>
  )
}

export const Other_Details = () => {
  return (
    <div className="container-lower">
    <div className="lower-left">
    <table>
<tr>
  <th>Papers Published in Journals</th>
</tr>
<tr>
  <td className="td-th">National</td>
  <td className="td-tb">2</td>
</tr>
<tr>
  <td className="td-th">International</td>
  <td className="td-tb">2</td>
</tr>
<tr>
  <th>Papers Presented in Conferences</th>
</tr>
<tr>
  <td className="td-th">National</td>
  <td className="td-tb">2</td>
</tr>
<tr>
  <td className="td-th">International</td>
  <td className="td-tb">2</td>
</tr>


</table>
       
      </div>
    <div className="lower-right">
    <table>
<tr>
  <th>Any Other</th>
</tr>
<tr>
  <td className="td-th">Professional Membership</td>
  <td className="td-tb">M Tech</td>
</tr>
<tr>
  <td className="td-th">Awards / Achievements </td>
  <td className="td-tb">ECE</td>
</tr>
<tr>
  <td className="td-th">Projects </td>{" "}
  <td className="td-tb">2022</td>
</tr>
<tr>
  <td className="td-th"> Patents </td> <td className="td-tb">ECE</td>
</tr>

</table>
       
      </div>
    </div>
  )
}






