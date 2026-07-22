import {useState,useEffect,useRef} from "react";
import "./companies.css"
function Companies({companies,setCompanies}){
    const [company,setCompany] = useState("");
    const [role,setRole] = useState("");
    const [status,setStatus] = useState("Applied");
    const [editIndex,setEditIndex] = useState(null);
    const [isEditing,setIsEditing] = useState(false);

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

    function updateCompany(){
        const updatedCompanies = companies.map((item,index)=>{
            if(index===editIndex){
                return{
                    company:company,
                    role:role,
                    status:status
                }
            };
            return item;
        });
        setCompanies(updatedCompanies);
        setCompany("");
        setRole("");
        setStatus("Applied");
        setEditIndex(null);
        setIsEditing(false);
    }
    function deleteCompany(indexToDel){
        const updatedCompanies = companies.filter((item,index)=>
            index!==indexToDel
        );
        setCompanies(updatedCompanies);
    }
    function editForm(item,index){
        setEditIndex(index);
        setIsEditing(true);
        setCompany(item.company);
        setRole(item.role);
        setStatus(item.status);
    }
    console.log("Current companies state:", companies);
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
                    <option>Exam Attempted</option>
                    <option>Offer</option>
                </select>
                {
                    !isEditing? (<button onClick={addCompany}>Add Company</button>)
                    :
                    <button onClick={updateCompany}>Update Details</button>
                }
                
            </div>
            <h2>Companies</h2>
            <div className="companyList">
                    {companies.map((item,index)=>(
                        <div key={index} className="companyCard">
                            <h3>{item.company}</h3>
                            <p>{item.role}</p>
                            <p>{item.status}</p>
                            <div className = "button-container">
                                <button onClick={()=>editForm(item,index)}>Edit</button>
                                <button onClick={()=> deleteCompany(index)}>Delete</button>
                            </div>
                        </div>
                    ))}
            </div>   
        </div>
        </>
    );
}
export default Companies;