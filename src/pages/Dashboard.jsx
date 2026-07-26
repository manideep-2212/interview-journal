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
    function generateInsight(){
        const insights = [];
        if(appliedCount==0){
            insights.push("You have not applied to any companies. Keep applying. ");
        }
        if(interviewCount!==0){
            insights.push(`You have ${interviewCount} interview(s) scheduled. Prepare well.`)
        }
        return insights;
    }
    return(
        <>
            <div  className="dashboard-header">
                <h1>Welcome to the DashBoard Sai!</h1>
                <p>Track your placement journey, here!</p>
            </div>
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
            {/* Smart Insights */}   
            <div className="insights-container">
                <h2>Smart Insights</h2>
                <p>Smart Insights will appear here</p>
            </div>
            {/* Quick Actions */}
            <div className="quick-actions">
                <h2>Quick Actions</h2>
                <div className="button-container">
                    <button>+ Add Company</button>
                    <button>Experience</button>
                    <button>Notes</button>
                </div>
            </div>
            {/* Charts */}
            <div className="chart-container">
                <h2>Chart Distribution</h2>
                <p>Charts coming soon....</p>
            </div>
        </>
    );
}
export default Dashboard;
