//react imports
import { useEffect, useState } from "react";

//rrd imports
import { useLoaderData } from "react-router-dom";

//helper functions
import { fetchData } from "../helpers";

//interface imports
import { CategoryItem, Data } from "../interfaces/interface";

//components
import Intro from "../components/Intro";

//lib imports
import { toast } from "react-toastify";

//icon imports
import { PlusIcon } from '@heroicons/react/24/solid'
import CategoryListItem from "../components/CategoryListItem";
import CategoryList from "../components/CategoryList";

//Loader function
export function dashboardLoader() {
    const userName = fetchData("userName");
    return { userName };
}

//action
export async function dashboardAction({ request }: { request: Request }) {

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
    const [categoryItems, setCategoryItems] = useState<CategoryItem[]>([]);

    useEffect(() => {
        const storedCategories = localStorage.getItem("categories");
        if (storedCategories) {
            const parsedCategories = JSON.parse(storedCategories);
            setCategoryItems(parsedCategories);
        }
    }, []);

    return (
        <div className="dashboard p-10">

            <div className="px-6">
                {
                    userName ?
                        <div>
                            <div className="flex justify-between items-center mb-10 w-full bg-pacific_blue shadow-lg p-6 text-white">
                                <h1 className="text-3xl">Dashboard</h1>
                                <p>{userName}</p>
                            </div>
                            <div className="px-10 text-center">

                                {
                                    categoryItems.length > 0 ?
                                        <div>
                                            <CategoryList list={categoryItems} />
                                        </div> : <p>{userName} you currently have no categories</p>
                                }

                            </div>

                        </div>
                        : <Intro />
                }
            </div>


        </div>
    );
}

export default Dashboard;