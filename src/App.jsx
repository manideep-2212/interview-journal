import {Routes,Route} from "react-router-dom"
import {useState,useEffect,useRef} from "react";
import Dashboard from "./pages/Dashboard";
import Companies from "./pages/Companies";
import Experience from  "./pages/Experience";
import Notes from "./pages/Notes";
import Navbar from "./components/Navbar"

function App(){
  const [companies,setCompanies] = useState([]);
  const firstRender = useRef(true);
    useEffect(()=>{
            const savedCompanies = localStorage.getItem("companies");
            if(savedCompanies){
                setCompanies(JSON.parse(savedCompanies));
            }
    },[]);
    useEffect(()=>{
        if(firstRender.current){
            firstRender.current=false;
            return;
        }
        const res = JSON.stringify(companies);
        localStorage.setItem("companies",res);
    },[companies]);
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard companies={companies}/>} />
        <Route path="/companies" element={<Companies companies={companies} setCompanies={setCompanies}/>} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/notes" element={<Notes />} />
    </Routes>
    </>   
  );
}
export default App;