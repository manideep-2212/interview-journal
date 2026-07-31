    import {Chart as ChartJS,
        ArcElement,
        Tooltip,
        Legend,
    } from "chart.js";
    import { Doughnut } from "react-chartjs-2";
    ChartJS.register(ArcElement,Tooltip,Legend);
    function DashBoardChart({appliedCount,examAttemptedCount,rejectedCount,interviewCount,offerCount}){
        const data ={
            labels : [
            "Applied",
            "Exam Attempted",
            "Rejected",
            "Interview",
            "Offer"
        ],
            datasets: [
                {
                    data: [appliedCount,examAttemptedCount,
                    rejectedCount,interviewCount,offerCount],
                    backgroundColor : ["yellow","blue","red","green","orange"],
                }
            ], 
        };
        const options ={
            responsive : true,
            maintainAspectRatio :false,
            plugins: {
                legend:{
                    position:"bottom",
                },
            },
        };
        return(
            <>
            <div style={{width:"400px",height:"400px"}}>
                <Doughnut data={data} options={options}/>
            </div>
                
            </>
        );
    }
    export default DashBoardChart;