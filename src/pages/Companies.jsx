import {useState} from "react";
import "./companies.css"
function Companies(){
    const [company,setCompany] = useState("");
    const [role,setRole] = useState("");
    const [status,setStatus] = useState("Applied");
    const [companies,setCompanies] = useState([]);
function addCompany(){
     if (company.trim() === "" || role.trim() === "") {
        alert("Please fill all fields.");
        return;
    }
    setCompanies(
        [...companies,{
            company,
            role,
            status
        }
    ]);
    setCompany("");
    setRole("");
    setStatus("Applied");
}
    return(
        <>
            <h1>Companies page</h1>
        <div className="box1">
            <div className="CompanyForm">
                <label>Company:</label>
                <input type="text"
                value ={company}
                onChange={(e)=>setCompany(e.target.value)}/>
                <label>Role:</label>
                <input type="text"
                value ={role}
                onChange={(e)=>setRole(e.target.value)}/>
                <label>Status:</label>
                <select value={status}
                onChange={(e)=>setStatus(e.target.value)}>
                    <option>Applied</option>
                    <option>Interview</option>
                    <option>Rejected</option>
                    <option>Offer</option>
                </select>
                <button onClick={addCompany}>Add Company</button>
            </div>
            <div className="companyList">
                 <h2>Companies</h2>
                    {companies.map((item,index)=>(
                        <div key={index} className="companyCard">
                            <h3>{item.company}</h3>
                            <p>{item.role}</p>
                            <p>{item.status}</p>
                        </div>
                    ))}
            </div>   
        </div>
        </>
    );
}
export default Companies;