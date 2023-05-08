//rrd imports
import { useLoaderData } from "react-router-dom";

//helper functions
import { fetchData } from "../helpers";

//interface imports
import { Data } from "../interfaces/interface";

//components
import Intro from "../components/Intro";

//lib imports
import { toast } from "react-toastify";

//Loader function
export function dashboardLoader()
{
    const userName = fetchData("userName");
    return { userName };
}

//action
export async function dashboardAction( { request }: { request:Request } ) {
    const data = await request.formData();
    const formData = Object.fromEntries(data);
    try {
        localStorage.setItem("userName", JSON.stringify(formData.userName));
        return toast.success(`Welcome, ${formData.userName}`);
    }
    catch (err) {
        throw new Error("Something went wrong creating your account!");
    }
    
}

const Dashboard = () => {  

    //get loader function data above
    const { userName } = useLoaderData() as Data;

    return ( 
        <div className="dashboard p-10">

            { 
                userName ? <p>Username {userName}</p> : <Intro/>
            }

        </div>
     );
}
 
export default Dashboard;