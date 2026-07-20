import DashboardCard from "../components/DashboardCard";

import { IoDocumentText } from "react-icons/io5";
import { FaBriefcase, FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

function Dashboard(){
    const appliedCount = 12;
    return(
        <>
            <h1>Interview Journal Dashboard</h1>
            <div>
                <DashboardCard
                    title ="Applied"
                    count= {appliedCount}
                    color = "#f59e0b"
                    icon = {<IoDocumentText />}
                />
                <DashboardCard
                    title="Interview"
                    count={5}
                    color="#09f8f4"
                    icon={<FaBriefcase />}
                />
                <DashboardCard
                    title="Rejected"
                    count={5}
                    color="#f71313"
                    icon={<MdCancel />}
                />
                <DashboardCard
                    title="Offers"
                    count={5}
                    color="#50f72a"
                    icon={<FaCheckCircle />}
                />
            </div>
        </>
    );
}
export default Dashboard;
