//rrd imports
import { useLoaderData } from "react-router-dom";

//helper functions
import { fetchData } from "../helpers";
//interface imports
import { Data } from "../interfaces/interface";

//Loader function
export function dashboardLoader()
{
    const userName = fetchData("userName");
    return { userName };
}

const Dashboard = () => {  

    //get loader function data above
    const { userName } = useLoaderData() as Data;

    return ( 
        <div className="text-red-500">

            { userName }

        </div>
     );
}
 
export default Dashboard;