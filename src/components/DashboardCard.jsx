import "./DashboardCard.css";
function DashboardCard({title,count,color,icon}){
    return(
        <div>
            <div className="dashboard-card" style={{ borderLeft: `6px solid ${color}` }}>
            <div className="card-icon">{icon}</div>

            <h4>{title}</h4>

            <h2>{count}</h2>
        </div>
        </div>
        
    );
}
export default DashboardCard;