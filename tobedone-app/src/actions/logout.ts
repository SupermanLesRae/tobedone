//rrd imports
import { redirect } from "react-router-dom";

//helpers
import { deleteItem } from "../helpers";

//lib imports
import { toast } from "react-toastify";

export async function logoutAction() {

    //delete the user
    deleteItem(
        { key: "userName" }
    );

    //wait response then show toast
    toast.success("you've deleted your account!");

    //redirect
    return redirect('/')
}