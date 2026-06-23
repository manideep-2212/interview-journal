import {Routes,Route} from "react-router-dom"

import Dashboard from "./pages/Dashboard";
import Companies from "./pages/Companies";
import Experience from  "./pages/Experience";
import Notes from "./pages/Notes";
import Navbar from "./components/Navbar"

function App(){
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/notes" element={<Notes />} />
    </Routes>
    </>
  );
}
export default App;