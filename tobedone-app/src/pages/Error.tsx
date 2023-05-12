//rrd imports 
import { Link, useNavigate } from "react-router-dom";
import { useRouteError } from "react-router-dom";

//icons
import { HomeIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/solid'
import Btn from "../components/Btn";

const Error = () => {

    //consts
    const error: any = useRouteError();
    const navigate: any = useNavigate();

    //Functions
    function goBack():void {
        navigate(-1);
    }

    return (
        <div className="text-center m-10">
            <h1 className="font-bold text-5xl">UH oh! We've got a problem.</h1>

            <div className="my-10">
                <div className="bg-red-600 text-white relative inline-block px-10 py-4 m-6 rounded-full shadow-md">
                    <p>{error.message || error.statusText || error.status}</p>
                </div>
            </div>
            
            <div className="flex gap-4 justify-center">
                <div>
                    <Btn click={goBack} className={"font-sans text-sm"} type={"primary"} title={"Go Home"}>
                        <ArrowUturnLeftIcon className="w-6 h-6"></ArrowUturnLeftIcon>
                    </Btn>
                </div>
                <Link to={"/"}>
                    <Btn className={"font-sans text-sm"} type={"primary"} title={"Go Home"}>
                        <HomeIcon className="w-6 h-6"></HomeIcon>
                    </Btn>
                </Link>
            </div>

        </div>
    );
}

export default Error;