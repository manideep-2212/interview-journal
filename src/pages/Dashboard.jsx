import DashboardCard from "../components/DashboardCard";
import "./dashboard.css";
import { IoDocumentText } from "react-icons/io5";
import { FaBriefcase, FaCheckCircle, FaLaptop } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

function Dashboard({companies}){
    const appliedCount = companies.filter((item)=>(item.status==="Applied")).length;
    const rejectedCount = companies.filter((item)=>item.status==="Rejected").length;
    const examAttemptedCount = companies.filter(item => item.status === "Exam Attempted").length;
    const interviewCount = companies.filter(item=>item.status==="Interview").length;
    const offerCount = companies.filter(item=>item.status==="Offer").length;

    return(
        <>
            <h1>Interview Journal Dashboard</h1>
            <div className="card-container">
                <DashboardCard
                    title ="Applied"
                    count= {appliedCount}
                    color = "#f59e0b"
                    icon = {<IoDocumentText />}
                />
                <DashboardCard
                    title="Exam Attempted"
                    count={examAttemptedCount}
                    color="#c2ec1a"
                    icon={<FaLaptop/>}
                />
                <DashboardCard
                    title="Interview"
                    count={interviewCount}
                    color="#09f8f4"
                    icon={<FaBriefcase />}
                />
                <DashboardCard
                    title="Rejected"
                    count={rejectedCount}
                    color="#f71313"
                    icon={<MdCancel />}
                />
                <DashboardCard
                    title="Offers"
                    count={offerCount}
                    color="#50f72a"
                    icon={<FaCheckCircle />}
                />
            </div>
        </>
    );
}
export default Dashboard;
