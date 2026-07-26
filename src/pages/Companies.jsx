import {useState,useEffect,useRef} from "react";
import "./companies.css"
function Companies({companies,setCompanies}){
    const [company,setCompany] = useState("");
    const [role,setRole] = useState("");
    const [status,setStatus] = useState("Applied");
    const [editId,setEditId] = useState(null);
    const [isEditing,setIsEditing] = useState(false);
    const [serachItem,setSearchItem] = useState("");

    function addCompany(){
        if (company.trim() === "" || role.trim() === "") {
            alert("Please fill all fields.");
            return;
        }
        let maxId = 0;
        companies.forEach(item => {
            maxId = Math.max(maxId,item.id);
        });
        const nextId = maxId+1;
        setCompanies(
            [...companies,{
                id:nextId,
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
        const updatedCompanies = companies.map((item)=>{
            if(item.id===editId){
                return{
                    ...item,
                    company,
                    role,
                    status
                }
            };
            return item;
        });
        setCompanies(updatedCompanies);
        setCompany("");
        setRole("");
        setStatus("Applied");
        setEditId(null);
        setIsEditing(false);
    }
    function deleteCompany(idToDel){
        const updatedCompanies = companies.filter((item)=>
            item.id!==idToDel
        );
        setCompanies(updatedCompanies);
    }
    function editForm(item,id){
        setEditId(id);
        setIsEditing(true);
        setCompany(item.company);
        setRole(item.role);
        setStatus(item.status);
    }

    const serachedArray = companies.filter(
        (item)=>item.company.toLowerCase().includes(serachItem.toLowerCase())
    );

    console.log("Current companies state:", companies);
    return(
        <>
        <div>
            <div>
                <input type="text" 
                    value ={serachItem}
                    onChange={(e)=>setSearchItem(e.target.value)}
                    placeholder="Enter the company to search" />
            </div>
        </div>
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
                    {serachedArray.map((item)=>(
                        <div key={item.id} className="companyCard">
                            <h3>{item.company}</h3>
                            <p>{item.role}</p>
                            <p>{item.status}</p>
                            <div className = "button-container">
                                <button onClick={()=>editForm(item,item.id)}>Edit</button>
                                <button onClick={()=> deleteCompany(item.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
            </div>   
        </div>
        </>
    );
}

export default Companies;