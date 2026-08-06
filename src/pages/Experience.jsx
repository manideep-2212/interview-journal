import {useState} from "react";
import "./experience.css"
function Experience(){
    const [journalEntry,setJournalEntry] = useState({
        company:"",
        role:"",
        round:"",
        date:"",
        result:"",
        experience:""
    });
    const [journalEntries,setJournalEntries] = useState([]);
    function save(){
        setJournalEntries([
            ...journalEntries,
            journalEntry
        ]);
        setJournalEntry({
            company:"",
            role:"",
            round:"",
            date:"",
            result:"",
            experience:""
        })
        
    }
    function handleChange(e){
        const variable = e.target.id;   
        setJournalEntry({
            ...journalEntry,
            [variable] : e.target.value
        });
    }
    function handleEdit(id){
        setJournalEntry({
            ...journalEntries[id]
        })
    }
    return(
        <>
            <h1>Experience page</h1>
            <div>
                <label>Company</label>
                <input value= {journalEntry.company} 
                onChange = {handleChange}
                type="text" id="company" 
                placeholder="Enter company name"/><br></br>
                <label>Role Applied</label>
                <input value= {journalEntry.role} 
                onChange = {handleChange}
                type="text" id="role" 
                placeholder="Enter the role applied"/><br></br>
                <label>Round Type</label>
                <select value= {journalEntry.round} id="round"
                onChange = {handleChange}>
                    <option>Online Assessment</option>
                    <option>Technical Round-1</option>
                    <option>Technical Round-2</option>
                    <option>GD</option>
                    <option>HR Round</option>
                </select>
                <br></br>
                <label>Date</label>
                <input value = {journalEntry.date}
                onChange = {handleChange}
                type="date" 
                id="date" /><br></br>
                <label>Result</label>
                <select value={journalEntry.result}
                onChange = {handleChange} id="result">
                    <option>Quailified</option>
                    <option>Disqualified</option>
                </select><br></br>
                <label>Experience and Learnings</label>
                <textarea id ="experience" value={journalEntry.experience}
                onChange = {handleChange}></textarea><br></br>
                <button onClick = {save}>Save</button>
            </div>
            <div>
                {
                journalEntries.map((entry,id) => (
                    <div key={id} className="box1">
                        <h4>{entry.company}</h4>
                        <h4>{entry.round}</h4>
                        <h6>{entry.result}</h6>
                        <p>{entry.experience}</p>
                        <button onClick={()=>handleEdit(id)}>Edit</button>
                        <button>Delete</button>
                    </div>
                ))
            }
            </div>
        </>
    

    );
}
export default Experience;