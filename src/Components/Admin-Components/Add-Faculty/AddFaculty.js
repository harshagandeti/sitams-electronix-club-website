import React, { useState } from "react";
import "./AddFacutly.scss";
import SectionHeading from "../../Section-Heading/SectionHeading";

// importing primereact components
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { InputText } from "primereact/inputtext";

const AddFaculty = () => {


//About Details

const [about,setAbout]=useState({
    faculty_id:"",
    name:"",
    designation:"",
    dept:"ECE",
    DOJ:"",
    phone:"",
    email:"",
    specialization:"",
    Exp_teach:"",
    Exp_ind:""

})


// Education Details
    const[UG,setUG]=useState({
      courseType:"Under Graduation",
        course:"",
        special:"",
        Yoc:"",
        clg:""
    })
    const[PG,setPG]=useState({
      courseType:"Post Graduation",
        course:"",
        special:"",
        Yoc:"",
        clg:""
    })
    const[PhD,setPhD]=useState({
      courseType:"PhD",
        course:"",
        special:"",
        Yoc:"",
        clg:""
    })
    const[otherEdu,setOtherEdu]=useState({
      courseType:"other Course",

        course:"",
        special:"",
        Yoc:"",
        clg:""
    })


    const[otherDetails,setOtherDetails]=useState({
        journals_national:"",
        journals_international:"",
        papers_national:"",
        papers_international:"",
        memberships:"",
        projects:"",
        pantents:"",
        awards:"",

    })


const {faculty_id,
name,
designation,
DOJ,
phone,
email,
specialization,
Exp_teach,
Exp_ind}=about
const{course,special,Yoc,clg}=otherEdu
const {journals_national,journals_international,papers_national,papers_international,memberships,projects,pantents,awards}=otherDetails





const changeHandler=(e)=>{
     setAbout({ ...about, [e.target.name]: e.target.value });
     setOtherEdu({ ...otherEdu, [e.target.name]: e.target.value });
     setOtherDetails({ ...otherDetails, [e.target.name]: e.target.value });
}
const UG_changeHandler=(e)=>{

     setUG({ ...UG, [e.target.name]: e.target.value });
}
const PG_changeHandler=(e)=>{

     setPG({ ...PG, [e.target.name]: e.target.value });

}
const PhD_changeHandler=(e)=>{

  setPhD({ ...PhD, [e.target.name]: e.target.value });

}


const otherEDU_changeHandler=(e)=>{
  setOtherEdu({...otherEdu, [e.target.name]: e.target.value });
}





const submitHandler=(e)=>{
e.preventDefault()
console.log("submit handler.........")
console.log(about)
console.log(UG)
console.log(PG)
console.log(PhD)
console.log(otherEdu)
console.log(otherDetails)



// cancel handler used clear the form after submit
cancelHandler()
}

const cancelHandler=()=>{

  console.log("cancel handler..........")
  setAbout( { faculty_id:"",
name:"",
designation:"",
DOJ:"",
phone:"",
email:"",
specialization:"",
Exp_teach:"",
Exp_ind:""} )
setOtherDetails({
  journals_national:"",
  journals_international:"",
  papers_national:"",
  papers_international:"",
  memberships:"",
  projects:"",
  pantents:"",
  awards:"",

})
setOtherEdu({
  courseType:"other Course",

    course:"",
    special:"",
    Yoc:"",
    clg:""
})
setPhD({
  courseType:"PhD",
    course:"",
    special:"",
    Yoc:"",
    clg:""
})
setPG({
  courseType:"PhD",
    course:"",
    special:"",
    Yoc:"",
    clg:""
})
setUG({
  courseType:"PhD",
    course:"",
    special:"",
    Yoc:"",
    clg:""
})

}







  return (
    <div className="Add-Faculty">
 
      <div className="heading "><SectionHeading heading="Add Faculty Profile"></SectionHeading></div>
      <div className="Container">
      <div className="Form">
        <form onSubmit={submitHandler}>
      
        <h2>Personal Details</h2>
        <section className="about">
        <section>
         <label className="label">Choose profile pic</label>
         <input type="file" ></input>
         <label className="label">Faculty-id</label>
         <input className="input" name="faculty_id" value={faculty_id} onChange={changeHandler } type='text' placeholder="1975ECC450"></input>
         <label className="label">Faculty-Name</label>
         <input  className="input" name="name" value={name} onChange={changeHandler } type='text' placeholder="Dr.E.N.Thompson"></input>
         <label className="label">Designation</label>
         <input  className="input" name="designation" value={designation} onChange={changeHandler } type='text' placeholder="Professor & HOD"></input>
         <label className="label">Date of Joining</label>
         <input  className="input" name="DOJ" value={DOJ} onChange={changeHandler } type='date' ></input>
</section><section>
         <label className="label">Phone No</label>
         <input  className="input" name="phone" value={phone} onChange={changeHandler } type='text' placeholder="9010901090"></input>
         <label className="label">Email</label>
         <input  className="input" name="email" value={email} onChange={changeHandler } type='email' placeholder="example@gmail.com"></input>
         <label className="label">Specialization</label>
         <input  className="input" type='text' value={specialization} onChange={changeHandler } name="specialization" placeholder="Electronics and Communication Engineering"></input>
         <label className="label">Experiences in teaching</label>
         <input  className="input" type='text' value={Exp_teach} onChange={changeHandler }  name="Exp_teach" placeholder="5"></input>
         <label className="label">Experiences in industry</label>
         <input  className="input" type='text' value={Exp_ind} name="Exp_ind" onChange={changeHandler } accept="years" placeholder="5"></input>
</section>
         </section>
         <section>
         <h2>Education Details</h2>
         <section className="education">
           
<section>
                    <h4>Under Graduation</h4>
                    <label className="label">Course </label>
                    <input  className="input" name="course" value={UG.course} onChange={UG_changeHandler }  type='text' placeholder="B.Tech"></input>
                    <label className="label">Specialization</label>
                    <input  className="input" name="special" value={UG.special} onChange={UG_changeHandler }  type='text' placeholder="ECE"></input>
                    <label className="label">Year of completion</label>
                    <input  className="input" name="Yoc" value={UG.Yoc} onChange={UG_changeHandler }  type='date' accept="years" placeholder=""></input>
                    <label className="label">College / University</label>
                    <input  className="input" name="clg" value={UG.clg} onChange={UG_changeHandler }  type='text' accept="years" placeholder="university"></input>
                    </section><section>
                    <h4>Post Graduation</h4>
                    <label className="label">Course </label>
                    <input  className="input" name="course" value={PG.course} onChange={PG_changeHandler }  type='text' placeholder="M.Tech"></input>
                    <label className="label">Specialization</label>
                    <input  className="input" name="special" value={PG.special} onChange={PG_changeHandler }  type='text' placeholder="VLSI"></input>
                    <label className="label">Year of completion</label>
                    <input  className="input"  name="Yoc" value={PG.Yoc} onChange={PG_changeHandler }  type='date' accept="years" placeholder=""></input>
                    <label className="label">College / University</label>
                    <input  className="input" name="clg" value={PG.clg} onChange={PG_changeHandler }  type='text' accept="years" placeholder="university"></input>
                    </section> <section>
                    <h4>Doctor of Philosophy (PhD)</h4>
                    <label className="label">Course </label>
                    <input  className="input" name="course" value={PhD.course} onChange={PhD_changeHandler } type='text' placeholder="PhD"></input>
                    <label className="label">Specialization</label>
                    <input  className="input" name="special" value={PhD.special} onChange={PhD_changeHandler }  type='text' placeholder="ECE"></input>
                    <label className="label">Year of completion</label>
                    <input  className="input" name="Yoc" value={PhD.Yoc} onChange={PhD_changeHandler }  type='date' accept="years" placeholder=""></input>
                    <label className="label">College / University</label>
                    <input  className="input" name="clg" value={PhD.clg} onChange={PhD_changeHandler }   type='text' accept="years" placeholder="university"></input>
                    </section> <section>
                    <h4>Any Other</h4>
                    <label className="label">Course </label>
                    <input  className="input" name="course" value={course} onChange={otherEDU_changeHandler } type='text' placeholder="Degree"></input>
                    <label className="label">Specialization</label>
                    <input  className="input" name="special" value={special} onChange={otherEDU_changeHandler } type='text' placeholder="ECE"></input>
                    <label className="label">Year of completion</label>
                    <input  className="input"  name="Yoc" value={Yoc} onChange={otherEDU_changeHandler } type='date' accept="years" placeholder=""></input>
                    <label className="label">College / University</label>
                    <input  className="input"  name="clg" value={clg} onChange={otherEDU_changeHandler }  type='text' accept="years" placeholder="university"></input>
                    </section>
                    </section>
                    </section>
                   <section className="other-section">
                    <h2>Other Details </h2>
                  
                  
                    <section className="other">
                    <section >
         <label className="label">Papers Published in Journals </label>
      <label>National</label>   
      <input  className="input" name="journals_national" value={journals_national} onChange={changeHandler } type='text' placeholder="5"></input> 
      <label>International  </label> 
      <input  className="input" name="journals_international" value={journals_international} onChange={changeHandler } type='text' placeholder="5"></input> 
         <label className="label">Papers Presented in Conferences </label>
         <label>National</label>   
      <input  className="input" name="papers_national" value={papers_national} onChange={changeHandler } type='text' placeholder="5"></input> 
      <label>International  </label> 
      <input  className="input" name="papers_international" value={papers_international} onChange={changeHandler } type='text' placeholder="5"></input> 
      </section>
<section>


  
        
         <label className="label">Professional Membership </label>
         <input  className="input" name="memberships" value={memberships} onChange={changeHandler } type='text' placeholder="MITEE"></input>
         <label className="label">Awards / Achievements</label>
         <input  className="input" name="awards" value={awards} onChange={changeHandler } type='text' placeholder="Awards"></input>
         <label className="label">Projects</label>
         <input  className="input" name="projects" value={projects} onChange={changeHandler } type='text'  placeholder="5"></input>
         <label className="label">Patents</label>
         <input  className="input" name="pantents" value={pantents} onChange={changeHandler } type='text'  placeholder="5"></input>
         </section></section></section>
     
        </form>
        <section className="Btn-section">
         <button  onClick={submitHandler}>Submit</button>
         <button onClick={cancelHandler}>Cancel</button>
         </section>
      </div>
      </div>
    </div>
  );
};

export default AddFaculty;
