import {useState} from "react";

function Experience(){
    const [journalEntry,setJournalEntry] = useState({
        company:"",
        role:"",
        round:"",
        date:"",
        result:"",
        experience:""
    });
    return(
        <>
            <h1>Experience page</h1>
            <div>
                <label>Company</label>
                <input value= {journalEntry.company} type="text" id="company" placeholder="Enter company name"/><br></br>
                <label>Role Applied</label>
                <input value= {journalEntry.role} type="text" id="role" placeholder="Enter the role applied"/><br></br>
                <label>Round Type</label>
                <select value= {journalEntry.round}>
                    <option>Online Assessment</option>
                    <option>Technical Round-1</option>
                    <option>Technical Round-2</option>
                    <option>GD</option>
                    <option>HR Round</option>
                </select><br></br>
                <label>Date</label>
                <input value = {journalEntry.date} type="date" id="date" /><br></br>
                <label>Result</label>
                <select value={journalEntry.result}>
                    <option>Quailified</option>
                    <option>Disqualified</option>
                </select><br></br>
                <label>Experience and Learnings</label>
                <textarea value={journalEntry.experience}></textarea><br></br>
                <button>Save</button>
                <button>Edit</button>
                <button>Delete</button>
            </div> 
        </>
        

    );
}
export default Experience;