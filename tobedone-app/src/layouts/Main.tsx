//rrd imports
import { Outlet, useLoaderData } from "react-router-dom";

//assets
import wave from "../assets/wave.svg";

//helper functions
import { fetchData } from "../helpers";

//Components
import Nav from "../components/Nav";
import { Data } from "../interfaces/interface";

//Loader function
export function mainLoader()
{
    const userName = fetchData("userName");
    return { userName };
}

const Main = () => {  

    //get loader function data above
    const { userName } = useLoaderData() as Data;

    return ( 
        <div className="absolute w-full h-full flex flex-col justify-between">

            <Nav userName={userName} />

            {/* content */}
            <main>                
                <Outlet />                
            </main> {/* content END */}

            <img src={wave} alt="" />
        
        </div>
     );
}
 
export default Main;