//react imports

//rrd imports
import { useLoaderData } from "react-router-dom";

//helper functions
import { createCategory, createUser, fetchData, waaait } from "../helpers";

//interface imports

//components
import Intro from "../components/Intro";

//lib imports
import { toast } from "react-toastify";

//icon imports
import Category from "../components/Category";
import { User } from "../interfaces/interface";

//Loader function
export function dashboardLoader() {
    const user:User = fetchData("user");
    return { user };
}

//action
export async function dashboardAction({ request }: { request: Request }) {

    await waaait();

    const data = await request.formData();
    const {_action, ...values} = Object.fromEntries(data);

    //new user submition
    if(_action === "newUser") {

        try {           
            createUser({username:values.user.toString()});
            return toast.success(`Welcome, ${values.user}`);
        }
        catch (err) {
            throw new Error("Something went wrong creating your account!");
        }
    }

    //new category submit
    if(_action === "createNewCategory") {
        try {            
            createCategory({
                name:values.categoryName,  
                listItems:[],
                completed:false
            });
            return toast.success("Category Created!");            
        }
        catch(err) {
            throw new Error("There was a problem creating your category");
        }
    }
}

const Dashboard = () => {

    //get loader function data above
    const { user } = useLoaderData() as any;

    //console.log(user);

    return (
        <div className="dashboard p-10">

{
    user ? <div className="px-6 py-10">
                <h1 className="text-4xl">Welcome {user.name}!</h1>
            </div> : null
}
            
            

            <div className="px-6">
                {
                    user ?
                        <div>
                            <div className="flex justify-between items-center mb-10 w-full bg-pacific_blue shadow-lg p-6 text-white">
                                <h1 className="text-3xl">Dashboard</h1>                               
                            </div>
                            <div className="px-10 text-center">                                
                                  <Category name={user.name} id={user.id} listItems={user.categories} createdAt={0} />  
                            </div>

                        </div>
                        : <Intro />
                }
            </div>


        </div>
    );
}

export default Dashboard;