import DashboardCard from "../components/DashboardCard";
function Dashboard(){
    return(
        <>
            <h1>Interview Journal Dashboard</h1>
            <DashboardCard title="Applications" count={12} />
            <DashboardCard title="Offers" count={5} />
            <DashboardCard title="Ongoing" count={3} />
            <DashboardCard title="Rejected" count={2} />
            <DashboardCard title="Pending" count={5} />
        </>
    );
}
export default Dashboard;
